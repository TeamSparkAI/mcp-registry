import Ajv, { ErrorObject } from 'ajv';
import addFormats from 'ajv-formats';
import { ValidationIssue, ValidationResult } from './linter/types';
import { lintServerData } from './linter/runner';

// Load schema once and cache it
let schema: any = null;
let validate: any = null;

async function loadSchema(getResourcePath?: (path: string) => string) {
  if (!schema) {
    const schemaPath = getResourcePath ? getResourcePath('/server.schema.json') : '/server.schema.json';
    const response = await fetch(schemaPath);
    schema = await response.json();
    
    // Initialize Ajv with formats and allow additional keywords
    const ajv = new Ajv({ 
      allErrors: true, 
      verbose: true,
      strict: false, // Allow additional keywords like "example"
      allowUnionTypes: true
    });
    addFormats(ajv);
    
    validate = ajv.compile(schema);
  }
  return { schema, validate };
}

export async function validateServerJson(serverJson: string, getResourcePath?: (path: string) => string): Promise<ValidationResult> {
  const issues: ValidationIssue[] = [];
  
  // Step 1: JSON Parse Validation
  let data: any;
  try {
    data = JSON.parse(serverJson);
  } catch (error) {
    return {
      valid: false,
      issues: [{
        source: 'parse',
        severity: 'error',
        path: '/',
        message: `Invalid JSON: ${error instanceof Error ? error.message : 'Unknown parse error'}`,
        rule: 'json-parse'
      }]
    };
  }
  
  // Step 2: Schema Validation
  try {
    const { validate: schemaValidate } = await loadSchema(getResourcePath);
    const valid = schemaValidate(data);
    if (!valid) {
      const schemaErrors = schemaValidate.errors || [];
      schemaErrors.forEach((error: ErrorObject) => {
        issues.push({
          source: 'schema',
          severity: 'error',
          path: error.instancePath || '/',
          message: error.message || 'Schema validation error',
          rule: error.schemaPath
        });
      });
    }
    
    // Step 3: Linter Rules
    const linterIssues = await lintServerData(data);
    issues.push(...linterIssues);
    
    return {
      valid: valid && linterIssues.filter(issue => issue.severity === 'error').length === 0,
      issues
    };
    
  } catch (error) {
    return {
      valid: false,
      issues: [{
        source: 'schema',
        severity: 'error',
        path: '/',
        message: `Validation failed: ${error instanceof Error ? error.message : 'Unknown error'}`,
        rule: 'validation-error'
      }]
    };
  }
}

// Re-export types and functions from the new linter structure
export type { ValidationIssue, ValidationResult } from './linter/types';
export { lintServerData } from './linter/runner';