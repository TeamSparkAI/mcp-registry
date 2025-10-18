import Ajv, { ErrorObject } from 'ajv';
import addFormats from 'ajv-formats';
import { ValidationIssue, ValidationResult } from './linter/types';
import { lintServerData } from './linter/runner';
import { hasTemplateVariables, extractVariableNames } from './linter/utils/templates';
// Import bundled schemas
import * as allSchemas from './schema/all-schemas.json';

// Cache for compiled validators
const schemaCache: Map<string, { schema: any; validate: any }> = new Map();

// Get current schema version
const CURRENT_VERSION = allSchemas.current;
const SCHEMAS = allSchemas.schemas;

// Extract version from schema URL
function extractSchemaVersion(schemaUrl: string): string | null {
  // https://static.modelcontextprotocol.io/schemas/2025-10-17/server.schema.json
  const match = schemaUrl.match(/\/schemas\/([^/]+)\//);
  return match ? match[1] : null;
}

// Load schema by version
async function loadSchemaByVersion(version: string) {
  // Check cache first
  if (schemaCache.has(version)) {
    return schemaCache.get(version)!;
  }

  // Look up schema in bundled schemas
  const schema = SCHEMAS[version as keyof typeof SCHEMAS];
  if (!schema) {
    // Schema version not found
    return null;
  }

  // Initialize Ajv with formats and allow additional keywords
  const ajv = new Ajv({
    allErrors: true,
    verbose: true,
    strict: false, // Allow additional keywords like "example"
    allowUnionTypes: true
  });
  addFormats(ajv);

  const validate = ajv.compile(schema);
  const result = { schema, validate };

  // Cache it
  schemaCache.set(version, result);

  return result;
}

export async function validateServerJson(serverJson: string): Promise<ValidationResult> {
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
  
  // Step 2: Schema Version Check and Loading
  let schemaValidate: any;
  let isCurrentVersion = true;
  
  try {
    const serverSchemaUrl = data.$schema;
    
    if (!serverSchemaUrl) {
      return {
        valid: false,
        issues: [{
          source: 'schema',
          severity: 'error',
          path: '/',
          message: 'Missing required $schema field',
          rule: 'schema-missing'
        }]
      };
    }
    
    const serverVersion = extractSchemaVersion(serverSchemaUrl);
    if (!serverVersion) {
      return {
        valid: false,
        issues: [{
          source: 'schema',
          severity: 'error',
          path: '/$schema',
          message: `Invalid $schema URL format: ${serverSchemaUrl}`,
          rule: 'schema-invalid-url'
        }]
      };
    }
    
    // Try to load schema for this version
    const schemaInfo = await loadSchemaByVersion(serverVersion);
    
    if (!schemaInfo) {
      // Schema version not supported
      return {
        valid: false,
        issues: [{
          source: 'schema',
          severity: 'error',
          path: '/$schema',
          message: `Unsupported schema version: ${serverVersion}. This version is not available for validation. Current version: ${CURRENT_VERSION}`,
          rule: 'schema-version-unsupported'
        }]
      };
    }
    
    schemaValidate = schemaInfo.validate;
    isCurrentVersion = (serverVersion === CURRENT_VERSION);
    
    // Add warning if using non-current schema
    if (!isCurrentVersion) {
      issues.push({
        source: 'schema',
        severity: 'warning',
        path: '/$schema',
        message: `Using non-current schema version: ${serverVersion}. Current version is: ${CURRENT_VERSION}. Consider upgrading to the latest schema version.`,
        rule: 'schema-version-outdated'
      });
    }
    
  } catch (error) {
    return {
      valid: false,
      issues: [{
        source: 'schema',
        severity: 'error',
        path: '/',
        message: `Schema validation setup failed: ${error instanceof Error ? error.message : 'Unknown error'}`,
        rule: 'validation-error'
      }]
    };
  }
  
  // Step 3: Schema Validation
  try {
    const valid = schemaValidate(data);
    if (!valid) {
      const schemaErrors = schemaValidate.errors || [];
      
      // Filter out redundant if/then/else errors
      // When a schema uses if/then/else and the validation fails, AJV reports both:
      // 1. The actual validation error from the then/else branch
      // 2. A "must match then/else schema" error from the if/then/else itself
      // We filter out #2 as it's redundant
      const filteredErrors = schemaErrors.filter((error: ErrorObject) => {
        // Filter out errors that are just reporting if/then/else failures
        // These have keyword 'if' and message like 'must match "then" schema' or 'must match "else" schema'
        if (error.keyword === 'if' && error.message?.includes('must match')) {
          return false;
        }
        return true;
      });
      
      filteredErrors.forEach((error: ErrorObject) => {
        let message = error.message || 'Schema validation error';
        
        // Enhance error messages with actual values and constraints
        if (error.keyword === 'enum' && error.params?.allowedValues) {
          const actualValue = error.data !== undefined ? JSON.stringify(error.data) : 'undefined';
          const allowedValues = error.params.allowedValues.map((v: any) => JSON.stringify(v)).join(', ');
          message = `${message}. Got: ${actualValue}, expected one of: ${allowedValues}`;
        } else if (error.keyword === 'type' && error.params?.type) {
          const actualValue = error.data !== undefined ? JSON.stringify(error.data) : 'undefined';
          message = `${message}. Got: ${actualValue}, expected type: ${error.params.type}`;
        } else if (error.keyword === 'required' && error.params?.missingProperty) {
          message = `Must have required property '${error.params.missingProperty}'`;
        } else if (error.keyword === 'pattern' && error.params?.pattern) {
          const actualValue = error.data !== undefined ? JSON.stringify(error.data) : 'undefined';
          message = `${message}. Got: ${actualValue}, must match pattern: ${error.params.pattern}`;
        }
        
        // Capitalize first letter if not already capitalized
        if (message && message[0] === message[0].toLowerCase()) {
          message = message[0].toUpperCase() + message.slice(1);
        }
        
        issues.push({
          source: 'schema',
          severity: 'error',
          path: error.instancePath || '/',
          message: message,
          rule: error.schemaPath
        });
      });
    }
    
    // Step 4: Linter Rules
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

