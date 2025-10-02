import { LinterRule } from '../types';
import { getJsonPath } from '../utils/jsonPath';

export const rule: LinterRule = {
  name: 'require-valid-choices-format',
  message: 'Choice values format inconsistent with field type',
  severity: 'error',
  docs: {
    purpose: 'Validate that all choice values match their declared format (number, boolean, etc.)',
    triggers: [
      'Choice values don\'t match the expected data type'
    ],
    examples: {
      bad: `{ "choices": ["not-a-number", "42"], "format": "number" }`,
      good: `{ "choices": ["1", "42", "100"], "format": "number" }`
    },
    guidance: [
      'Ensure all numeric choices are valid numbers (can be strings like "42")',
      'Use "true" or "false" for boolean choices (case-insensitive)',
      'Remove format constraint if choice types are flexible'
    ],
    scope: [
      'packages.runtimeArguments',
      'packages.packageArguments',
      'packages.environmentVariables',
      'remotes.headers'
    ],
    notes: [
      'Format validation helps catch configuration errors',
      'All choices should match the same format as values and defaults'
    ]
  },
  check: (data: any, basePath: string) => {
    const issues: any[] = [];
    
    const checkChoicesFormat = (field: any, path: string) => {
      if (field.choices && Array.isArray(field.choices) && field.format) {
        field.choices.forEach((choice: any, choiceIndex: number) => {
          switch (field.format) {
            case 'number':
              if (isNaN(Number(choice))) {
                issues.push({
                  source: 'linter',
                  severity: rule.severity,
                  path: `${path}/choices[${choiceIndex}]`,
                  message: `Choice value "${choice}" is not a valid number`,
                  rule: 'require-valid-choices-format'
                });
              }
              break;
            case 'boolean':
              if (!['true', 'false'].includes(String(choice).toLowerCase())) {
                issues.push({
                  source: 'linter',
                  severity: rule.severity,
                  path: `${path}/choices[${choiceIndex}]`,
                  message: `Choice value "${choice}" is not a valid boolean (should be "true" or "false")`,
                  rule: 'require-valid-choices-format'
                });
              }
              break;
          }
        });
      }
    };
    
    if (data.packages) {
      data.packages.forEach((pkg: any, pkgIndex: number) => {
        ['runtimeArguments', 'packageArguments', 'environmentVariables'].forEach(section => {
          if (pkg[section]) {
            pkg[section].forEach((field: any, fieldIndex: number) => {
              const path = getJsonPath(`/packages/${pkgIndex}/${section}`, fieldIndex);
              checkChoicesFormat(field, path);
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
            checkChoicesFormat(header, path);
          });
        }
      });
    }
    
    return issues;
  }
};
