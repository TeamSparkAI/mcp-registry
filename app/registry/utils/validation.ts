import Ajv, { ErrorObject } from 'ajv';
import addFormats from 'ajv-formats';

export interface ValidationIssue {
  source: 'parse' | 'schema' | 'linter';
  severity: 'error' | 'warning' | 'info';
  path: string; // JSON path like "/packages/0/transport/url"
  message: string;
  rule?: string; // For linter rules like "no-leading-dashes"
}

export interface ValidationResult {
  valid: boolean;
  issues: ValidationIssue[];
}

export interface LinterRule {
  name: string;
  description: string;
  check: (data: any, path: string) => ValidationIssue[];
}

// Load schema once and cache it
let schema: any = null;
let validate: any = null;

async function loadSchema() {
  if (!schema) {
    const response = await fetch('/server.schema.json');
    schema = await response.json();
    
    const ajv = new Ajv({ 
      allErrors: true, 
      verbose: true,
      strict: false,
      allowUnionTypes: true
    });
    addFormats(ajv);
    validate = ajv.compile(schema);
  }
  return { schema, validate };
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
  
  // Step 2: Schema Validation
  try {
    const { validate: schemaValidate } = await loadSchema();
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
    const linterIssues = await runLinterRules(data);
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

// Helper function to get JSON path for nested objects
function getJsonPath(basePath: string, key: string | number, index?: number): string {
  if (basePath === '/') {
    return `/${key}`;
  }
  if (typeof index === 'number') {
    return `${basePath}/${index}`;
  }
  return `${basePath}/${key}`;
}

// Helper function to check if a string looks like a template with variables
function hasTemplateVariables(value: string): boolean {
  return /\{[^}]+\}/.test(value);
}

// Helper function to extract variable names from template
function extractVariableNames(template: string): string[] {
  const matches = template.match(/\{([^}]+)\}/g);
  return matches ? matches.map(match => match.slice(1, -1)) : [];
}

export const linterRules: LinterRule[] = [
  {
    name: 'no-config-for-package',
    description: 'Package has no configuration options',
    check: (data: any, basePath: string) => {
      const issues: ValidationIssue[] = [];
      if (data.packages) {
        data.packages.forEach((pkg: any, index: number) => {
          const hasConfig = pkg.runtimeArguments?.length || 
                           pkg.packageArguments?.length || 
                           pkg.environmentVariables?.length ||
                           pkg.runtimeHint;
          if (!hasConfig) {
            issues.push({
              source: 'linter',
              severity: 'warning',
              path: getJsonPath(basePath, 'packages', index),
              message: 'Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables',
              rule: 'no-config-for-package'
            });
          }
        });
      }
      return issues;
    }
  },
  {
    name: 'no-config-for-remote',
    description: 'Remote has no configuration options',
    check: (data: any, basePath: string) => {
      const issues: ValidationIssue[] = [];
      if (data.remotes) {
        data.remotes.forEach((remote: any, index: number) => {
          const hasConfig = remote.headers?.length;
          if (!hasConfig) {
            issues.push({
              source: 'linter',
              severity: 'info',
              path: getJsonPath(basePath, 'remotes', index),
              message: 'Remote has no headers configuration',
              rule: 'no-config-for-remote'
            });
          }
        });
      }
      return issues;
    }
  },
  {
    name: 'named-arg-no-leading-dashes',
    description: 'Named argument missing leading dashes',
    check: (data: any, basePath: string) => {
      const issues: ValidationIssue[] = [];
      
      // Check runtime arguments
      if (data.packages) {
        data.packages.forEach((pkg: any, pkgIndex: number) => {
          if (pkg.runtimeArguments) {
            pkg.runtimeArguments.forEach((arg: any, argIndex: number) => {
              if (arg.name && !arg.name.startsWith('-')) {
                issues.push({
                  source: 'linter',
                  severity: 'warning',
                  path: getJsonPath(`/packages/${pkgIndex}/runtimeArguments`, argIndex),
                  message: `Named argument "${arg.name}" should start with "--" or "-"`,
                  rule: 'named-arg-no-leading-dashes'
                });
              }
            });
          }
          
          // Check package arguments
          if (pkg.packageArguments) {
            pkg.packageArguments.forEach((arg: any, argIndex: number) => {
              if (arg.name && !arg.name.startsWith('-')) {
                issues.push({
                  source: 'linter',
                  severity: 'warning',
                  path: getJsonPath(`/packages/${pkgIndex}/packageArguments`, argIndex),
                  message: `Named argument "${arg.name}" should start with "--" or "-"`,
                  rule: 'named-arg-no-leading-dashes'
                });
              }
            });
          }
        });
      }
      
      return issues;
    }
  },
  {
    name: 'template-without-variables',
    description: 'Template string has no corresponding variables',
    check: (data: any, basePath: string) => {
      const issues: ValidationIssue[] = [];
      
      if (data.packages) {
        data.packages.forEach((pkg: any, pkgIndex: number) => {
          // Check runtime arguments
          if (pkg.runtimeArguments) {
            pkg.runtimeArguments.forEach((arg: any, argIndex: number) => {
              if (arg.value && hasTemplateVariables(arg.value)) {
                const templateVars = extractVariableNames(arg.value);
                const definedVars = Object.keys(arg.variables || {});
                const missingVars = templateVars.filter(v => !definedVars.includes(v));
                
                if (missingVars.length > 0) {
                  issues.push({
                    source: 'linter',
                    severity: 'error',
                    path: getJsonPath(`/packages/${pkgIndex}/runtimeArguments`, argIndex),
                    message: `Template contains variables without definitions: ${missingVars.join(', ')}`,
                    rule: 'template-without-variables'
                  });
                }
              }
            });
          }
          
          // Check package arguments
          if (pkg.packageArguments) {
            pkg.packageArguments.forEach((arg: any, argIndex: number) => {
              if (arg.value && hasTemplateVariables(arg.value)) {
                const templateVars = extractVariableNames(arg.value);
                const definedVars = Object.keys(arg.variables || {});
                const missingVars = templateVars.filter(v => !definedVars.includes(v));
                
                if (missingVars.length > 0) {
                  issues.push({
                    source: 'linter',
                    severity: 'error',
                    path: getJsonPath(`/packages/${pkgIndex}/packageArguments`, argIndex),
                    message: `Template contains variables without definitions: ${missingVars.join(', ')}`,
                    rule: 'template-without-variables'
                  });
                }
              }
            });
          }
          
          // Check environment variables
          if (pkg.environmentVariables) {
            pkg.environmentVariables.forEach((env: any, envIndex: number) => {
              if (env.value && hasTemplateVariables(env.value)) {
                const templateVars = extractVariableNames(env.value);
                const definedVars = Object.keys(env.variables || {});
                const missingVars = templateVars.filter(v => !definedVars.includes(v));
                
                if (missingVars.length > 0) {
                  issues.push({
                    source: 'linter',
                    severity: 'error',
                    path: getJsonPath(`/packages/${pkgIndex}/environmentVariables`, envIndex),
                    message: `Template contains variables without definitions: ${missingVars.join(', ')}`,
                    rule: 'template-without-variables'
                  });
                }
              }
            });
          }
        });
      }
      
      // Check remote headers
      if (data.remotes) {
        data.remotes.forEach((remote: any, remoteIndex: number) => {
          if (remote.headers) {
            remote.headers.forEach((header: any, headerIndex: number) => {
              if (header.value && hasTemplateVariables(header.value)) {
                const templateVars = extractVariableNames(header.value);
                const definedVars = Object.keys(header.variables || {});
                const missingVars = templateVars.filter(v => !definedVars.includes(v));
                
                if (missingVars.length > 0) {
                  issues.push({
                    source: 'linter',
                    severity: 'error',
                    path: getJsonPath(basePath, `remotes/${remoteIndex}/headers`, headerIndex),
                    message: `Template contains variables without definitions: ${missingVars.join(', ')}`,
                    rule: 'template-without-variables'
                  });
                }
              }
            });
          }
        });
      }
      
      return issues;
    }
  },
  {
    name: 'inconsistent-value-format',
    description: 'Value format inconsistent with field type',
    check: (data: any, basePath: string) => {
      const issues: ValidationIssue[] = [];
      
      const checkField = (field: any, path: string) => {
        if (field.value !== undefined && field.format) {
          const value = field.value;
          
          switch (field.format) {
            case 'number':
              if (isNaN(Number(value))) {
                issues.push({
                  source: 'linter',
                  severity: 'error',
                  path,
                  message: `Value "${value}" is not a valid number`,
                  rule: 'inconsistent-value-format'
                });
              }
              break;
            case 'boolean':
              if (!['true', 'false'].includes(String(value).toLowerCase())) {
                issues.push({
                  source: 'linter',
                  severity: 'error',
                  path,
                  message: `Value "${value}" is not a valid boolean (should be "true" or "false")`,
                  rule: 'inconsistent-value-format'
                });
              }
              break;
          }
        }
      };
      
      // Check all argument fields
      if (data.packages) {
        data.packages.forEach((pkg: any, pkgIndex: number) => {
          ['runtimeArguments', 'packageArguments', 'environmentVariables'].forEach(section => {
            if (pkg[section]) {
              pkg[section].forEach((field: any, fieldIndex: number) => {
                const path = getJsonPath(`/packages/${pkgIndex}/${section}`, fieldIndex);
                checkField(field, path);
              });
            }
          });
        });
      }
      
      return issues;
    }
  },
  {
    name: 'secret-template-warning',
    description: 'Secret field contains template variables',
    check: (data: any, basePath: string) => {
      const issues: ValidationIssue[] = [];
      
      const checkSecretField = (field: any, path: string) => {
        if (field.isSecret && field.value && hasTemplateVariables(field.value)) {
          issues.push({
            source: 'linter',
            severity: 'warning',
            path,
            message: 'Secret field contains template variables - ensure this is intentional',
            rule: 'secret-template-warning'
          });
        }
      };
      
      // Check all fields that can be secret
      if (data.packages) {
        data.packages.forEach((pkg: any, pkgIndex: number) => {
          ['runtimeArguments', 'packageArguments', 'environmentVariables'].forEach(section => {
            if (pkg[section]) {
              pkg[section].forEach((field: any, fieldIndex: number) => {
                const path = getJsonPath(`/packages/${pkgIndex}/${section}`, fieldIndex);
                checkSecretField(field, path);
              });
            }
          });
        });
      }
      
      if (data.remotes) {
        data.remotes.forEach((remote: any, remoteIndex: number) => {
          if (remote.headers) {
            remote.headers.forEach((header: any, headerIndex: number) => {
              const path = getJsonPath(basePath, `remotes/${remoteIndex}/headers`, headerIndex);
              checkSecretField(header, path);
            });
          }
        });
      }
      
      return issues;
    }
  },
  {
    name: 'unused-variables',
    description: 'Defined variables not used in template',
    check: (data: any, basePath: string) => {
      const issues: ValidationIssue[] = [];
      
      const checkUnusedVariables = (field: any, path: string) => {
        if (field.value && field.variables) {
          const templateVars = extractVariableNames(field.value);
          const definedVars = Object.keys(field.variables);
          const unusedVars = definedVars.filter(v => !templateVars.includes(v));
          
          if (unusedVars.length > 0) {
            issues.push({
              source: 'linter',
              severity: 'warning',
              path,
              message: `Defined variables not used in template: ${unusedVars.join(', ')}`,
              rule: 'unused-variables'
            });
          }
        }
      };
      
      // Check all fields with variables
      if (data.packages) {
        data.packages.forEach((pkg: any, pkgIndex: number) => {
          ['runtimeArguments', 'packageArguments', 'environmentVariables'].forEach(section => {
            if (pkg[section]) {
              pkg[section].forEach((field: any, fieldIndex: number) => {
                const path = getJsonPath(`/packages/${pkgIndex}/${section}`, fieldIndex);
                checkUnusedVariables(field, path);
              });
            }
          });
        });
      }
      
      if (data.remotes) {
        data.remotes.forEach((remote: any, remoteIndex: number) => {
          if (remote.headers) {
            remote.headers.forEach((header: any, headerIndex: number) => {
              const path = getJsonPath(basePath, `remotes/${remoteIndex}/headers`, headerIndex);
              checkUnusedVariables(header, path);
            });
          }
        });
      }
      
      return issues;
    }
  }
];

async function runLinterRules(data: any): Promise<ValidationIssue[]> {
  const issues: ValidationIssue[] = [];
  
  for (const rule of linterRules) {
    try {
      const ruleIssues = rule.check(data, '/');
      issues.push(...ruleIssues);
    } catch (error) {
      console.warn(`Linter rule ${rule.name} failed:`, error);
    }
  }
  
  return issues;
}
