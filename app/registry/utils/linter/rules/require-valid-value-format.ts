import { LinterRule } from '../types';
import { getJsonPath } from '../utils/jsonPath';

export const rule: LinterRule = {
  name: 'require-valid-value-format',
  message: 'Value format inconsistent with field type',
  docs: {
    purpose: 'Validate that field values match their declared format (number, boolean, etc.)',
    triggers: [
      'Field has format: "number" but value cannot be parsed as a number',
      'Field has format: "boolean" but value is not "true" or "false"',
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
      'packages.environmentVariables'
    ],
    notes: [
      'Format validation helps catch configuration errors early',
      'String values are always valid regardless of format',
      'Consider if the format constraint is necessary'
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
    
    return issues;
  }
};
