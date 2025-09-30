import { LinterRule } from '../types';
import { getJsonPath } from '../utils/jsonPath';

export const rule: LinterRule = {
  name: 'require-valid-value-format',
  message: 'Value format inconsistent with field type',
  docs: {
    purpose: 'Validate that field values match their declared format (number, boolean, etc.)',
    triggers: [
      'Value doesn\'t match the expected data type'
    ],
    examples: {
      bad: `{ "value": "not-a-number", "format": "number" }`,
      good: `{ "value": "42", "format": "number" }`
    },
    guidance: [
      'Ensure numeric values are valid numbers (can be strings like "42")',
      'Use "true" or "false" for boolean values (case-insensitive)',
      'Remove format constraint if value type is flexible'
    ],
    scope: [
      'packages.runtimeArguments',
      'packages.packageArguments',
      'packages.environmentVariables',
      'remotes.headers'
    ],
    notes: [
      'Format validation helps catch configuration errors'

    ]
  },
  check: (data: any, basePath: string) => {
    const issues: any[] = [];
    
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
    
    // Check remote headers
    if (data.remotes) {
      data.remotes.forEach((remote: any, remoteIndex: number) => {
        if (remote.headers) {
          remote.headers.forEach((header: any, headerIndex: number) => {
            const path = getJsonPath(`/remotes/${remoteIndex}/headers`, headerIndex);
            checkField(header, path);
          });
        }
      });
    }
    
    return issues;
  }
};
