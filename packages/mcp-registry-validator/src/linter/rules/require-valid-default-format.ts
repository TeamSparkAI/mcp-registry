import { LinterRule } from '../types';
import { getJsonPath } from '../utils/jsonPath';

export const rule: LinterRule = {
  name: 'require-valid-default-format',
  message: 'Default value format inconsistent with field type',
  severity: 'error',
  docs: {
    purpose: 'Validate that default values match their declared format (number, boolean, etc.)',
    triggers: [
      'Default value doesn\'t match the expected data type'
    ],
    examples: {
      bad: `{ "default": "not-a-number", "format": "number" }`,
      good: `{ "default": "42", "format": "number" }`
    },
    guidance: [
      'Ensure numeric defaults are valid numbers (can be strings like "42")',
      'Use "true" or "false" for boolean defaults (case-insensitive)',
      'Remove format constraint if default type is flexible'
    ],
    scope: [
      'packages.runtimeArguments',
      'packages.packageArguments',
      'packages.environmentVariables',
      'remotes.headers'
    ],
    notes: [
      'Format validation helps catch configuration errors',
      'Defaults should match the same format as values'
    ]
  },
  check: (data: any, basePath: string) => {
    const issues: any[] = [];
    
    const checkDefaultFormat = (field: any, path: string) => {
      if (field.default !== undefined && field.format) {
        const defaultValue = field.default;
        
        switch (field.format) {
          case 'number':
            if (isNaN(Number(defaultValue))) {
              issues.push({
                source: 'linter',
                severity: rule.severity,
                path,
                message: `Default value "${defaultValue}" is not a valid number`,
                rule: 'require-valid-default-format'
              });
            }
            break;
          case 'boolean':
            if (!['true', 'false'].includes(String(defaultValue).toLowerCase())) {
              issues.push({
                source: 'linter',
                severity: rule.severity,
                path,
                message: `Default value "${defaultValue}" is not a valid boolean (should be "true" or "false")`,
                rule: 'require-valid-default-format'
              });
            }
            break;
        }
      }
    };
    
    if (data.packages) {
      data.packages.forEach((pkg: any, pkgIndex: number) => {
        ['runtimeArguments', 'packageArguments', 'environmentVariables'].forEach(section => {
          if (pkg[section]) {
            pkg[section].forEach((field: any, fieldIndex: number) => {
              const path = getJsonPath(`/packages/${pkgIndex}/${section}`, fieldIndex);
              checkDefaultFormat(field, path);
            });
          }
        });
      });
    }
    
    // Check remote headers
    if (data.remotes) {
      data.remotes.forEach((remote: any, remoteIndex: number) => {
        if (remote.headers) {
          remote.headers.forEach((header: any, headerIndex: number) => {
            const path = getJsonPath(`/remotes/${remoteIndex}/headers`, headerIndex);
            checkDefaultFormat(header, path);
          });
        }
      });
    }
    
    return issues;
  }
};
