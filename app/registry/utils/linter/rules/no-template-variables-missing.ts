import { LinterRule } from '../types';
import { getJsonPath } from '../utils/jsonPath';
import { hasTemplateVariables, extractVariableNames } from '../utils/templates';

export const rule: LinterRule = {
  name: 'no-template-variables-missing',
  message: 'Template string has no corresponding variables',
  docs: {
    purpose: 'Catch templates referencing variables that are not defined in field.variables',
    triggers: [
      'Field.value contains {var} but field.variables lacks that key'
    ],
    examples: {
      bad: `{ "value": "Bearer {token}" }`,
      good: `{
  "value": "Bearer {token}",
  "variables": {
    "token": { "format": "string", "isRequired": true }
  }
}`
    },
    guidance: [
      'Add missing variable definitions under field.variables',
      'Or remove unused {placeholders} from the template'
    ],
    scope: [
      'packages.runtimeArguments',
      'packages.packageArguments', 
      'packages.environmentVariables',
      'remotes.headers'
    ],
    notes: [
      'Variables are case-sensitive'

    ]
  },
  check: (data: any, basePath: string) => {
    const issues: any[] = [];
    
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
};
