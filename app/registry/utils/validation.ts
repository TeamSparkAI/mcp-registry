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
  message: string;
  check: (data: any, path: string) => ValidationIssue[];
  docs?: {
    purpose: string;
    triggers?: string[];
    examples?: {
      bad?: string;
      good?: string;
    };
    guidance?: string[];
    scope?: string[];
    notes?: string[];
  };
}

// Load schema once and cache it
let schema: any = null;
let validate: any = null;

async function loadSchema(getResourcePath?: (path: string) => string) {
  if (!schema) {
    const schemaPath = getResourcePath ? getResourcePath('/server.schema.json') : '/server.schema.json';
    const response = await fetch(schemaPath);
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
    name: 'require-config-for-package',
    message: 'Package has no configuration options',
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
              rule: 'require-config-for-package'
            });
          }
        });
      }
      return issues;
    }
  },
  {
    name: 'prefer-config-for-remote',
    message: 'Remote has no configuration options',
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
              rule: 'prefer-config-for-remote'
            });
          }
        });
      }
      return issues;
    }
  },
  {
    name: 'require-leading-dashes',
    message: 'Named argument missing leading dashes',
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
                  rule: 'require-leading-dashes'
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
                  rule: 'require-leading-dashes'
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
    name: 'no-template-variables-missing',
    message: 'Template string has no corresponding variables',
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
                    rule: 'no-template-variables-missing'
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
                    rule: 'no-template-variables-missing'
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
                    rule: 'no-template-variables-missing'
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
                    rule: 'no-template-variables-missing'
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
    name: 'require-valid-value-format',
    message: 'Value format inconsistent with field type',
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
                  rule: 'require-valid-value-format'
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
                  rule: 'require-valid-value-format'
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
    name: 'no-secret-template',
    message: 'Secret field contains template variables',
    check: (data: any, basePath: string) => {
      const issues: ValidationIssue[] = [];
      
      const checkSecretField = (field: any, path: string) => {
        if (field.isSecret && field.value && hasTemplateVariables(field.value)) {
          issues.push({
            source: 'linter',
            severity: 'warning',
            path,
            message: 'Secret field contains template variables - ensure this is intentional',
            rule: 'no-secret-template'
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
    name: 'no-unused-variables',
    message: 'Defined variables not used in template',
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
              rule: 'no-unused-variables'
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
  },
  {
    name: 'no-value-with-irrelevant-properties',
    message: 'Field with value should not have default, isRequired, or choices',
    check: (data: any, basePath: string) => {
      const issues: ValidationIssue[] = [];
      
      // Check all argument fields
      if (data.packages) {
        data.packages.forEach((pkg: any, pkgIndex: number) => {
          ['runtimeArguments', 'packageArguments', 'environmentVariables'].forEach(section => {
            if (pkg[section]) {
              pkg[section].forEach((field: any, fieldIndex: number) => {
                if (field.value && (field.default || field.isRequired || field.choices)) {
                  const path = getJsonPath(`/packages/${pkgIndex}/${section}`, fieldIndex);
                  const irrelevantProps = [];
                  if (field.default) irrelevantProps.push('default');
                  if (field.isRequired) irrelevantProps.push('isRequired');
                  if (field.choices) irrelevantProps.push('choices');
                  
                  issues.push({
                    source: 'linter',
                    severity: 'warning',
                    path: path,
                    message: `Field with 'value' should not have: ${irrelevantProps.join(', ')} - these properties have no effect when value is present`,
                    rule: 'no-value-with-irrelevant-properties'
                  });
                }
              });
            }
          });
        });
      }
      
      return issues;
    }
  },
  {
    name: 'no-secret-static-value',
    message: 'Field with static value should not be marked as secret',
    check: (data: any, basePath: string) => {
      const issues: ValidationIssue[] = [];
      
      // Check all argument fields
      if (data.packages) {
        data.packages.forEach((pkg: any, pkgIndex: number) => {
          ['runtimeArguments', 'packageArguments', 'environmentVariables'].forEach(section => {
            if (pkg[section]) {
              pkg[section].forEach((field: any, fieldIndex: number) => {
                if (field.value && field.isSecret) {
                  const path = getJsonPath(`/packages/${pkgIndex}/${section}`, fieldIndex);
                  
                  issues.push({
                    source: 'linter',
                    severity: 'warning',
                    path: path,
                    message: 'Field with static value should not be marked as secret - consider using variables instead',
                    rule: 'no-secret-static-value'
                  });
                }
              });
            }
          });
        });
      }
      
      return issues;
    }
  },
  {
    name: 'require-valid-default-choice',
    message: 'Default value must be one of the available choices',
    check: (data: any, basePath: string) => {
      const issues: ValidationIssue[] = [];
      
      const checkDefaultChoice = (field: any, path: string) => {
        if (field.default !== undefined && field.choices && Array.isArray(field.choices)) {
          if (!field.choices.includes(field.default)) {
            issues.push({
              source: 'linter',
              severity: 'error',
              path,
              message: `Default value "${field.default}" is not one of the available choices: [${field.choices.join(', ')}]`,
              rule: 'require-valid-default-choice'
            });
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
                checkDefaultChoice(field, path);
              });
            }
          });
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

// Exported helper to run linter outside the UI (e.g., in scripts)
export async function lintServerData(data: any): Promise<ValidationIssue[]> {
  return runLinterRules(data);
}
