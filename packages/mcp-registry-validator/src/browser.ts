// Browser-compatible version of the validator
import Ajv, { ErrorObject } from 'ajv';
import addFormats from 'ajv-formats';
import { ValidationIssue, ValidationResult } from './linter/types';
import { lintServerData } from './linter/runner';
import { hasTemplateVariables, extractVariableNames } from './linter/utils/templates';

// Load schema once and cache it
let schema: any = null;
let validate: any = null;

async function loadSchema(schemaUrl: string) {
  if (!schema) {
    const response = await fetch(schemaUrl);
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

export async function validateServerJson(serverJson: string, schemaUrl?: string): Promise<ValidationResult> {
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
    const schemaPath = schemaUrl || '/server.schema.json';
    const { validate: schemaValidate } = await loadSchema(schemaPath);
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

// Transport URL variable substitution for packages
export function substituteTransportUrl(url: string, packageConfig: any): string {
  if (!hasTemplateVariables(url)) {
    return url;
  }
  
  const variables = extractVariableNames(url);
  let substitutedUrl = url;
  
  variables.forEach(variable => {
    // Look for matching runtime arguments
    const runtimeArg = packageConfig.runtimeArguments?.find((arg: any) => 
      arg.valueHint === variable || 
      arg.name === variable ||
      (arg.name && arg.name.replace(/^-+/, '') === variable)
    );
    
    // Look for matching package arguments  
    const packageArg = packageConfig.packageArguments?.find((arg: any) =>
      arg.valueHint === variable || 
      arg.name === variable ||
      (arg.name && arg.name.replace(/^-+/, '') === variable)
    );
    
    // Look for matching environment variables
    const envVar = packageConfig.environmentVariables?.find((env: any) =>
      env.name === variable
    );
    
    // Use the first match found
    const match = runtimeArg || packageArg || envVar;
    if (match) {
      // For now, keep the variable reference - actual substitution happens in MCP client generation
      // This function is mainly for validation purposes
      substitutedUrl = substitutedUrl.replace(`{${variable}}`, `{${variable}}`);
    }
  });
  
  return substitutedUrl;
}

// Re-export everything else from the main index
export { lintServerData, linterRules } from './linter';
export type { ValidationIssue, ValidationResult, LinterRule } from './linter/types';
export { getJsonPath } from './linter/utils/jsonPath';
export { hasTemplateVariables, extractVariableNames } from './linter/utils/templates';

