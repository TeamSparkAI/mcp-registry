import { LinterRule } from '../types';
import { getJsonPath } from '../utils/jsonPath';

export const rule: LinterRule = {
  name: 'no-value-with-irrelevant-properties',
  message: 'Field with value should not have default, isRequired, or choices',
  severity: 'warning',  docs: {
    purpose: 'Identify fields with static values that also have properties that only apply to user input fields',
    triggers: [
      'Field has a static value but also has default, isRequired, or choices (properties that only apply to user input fields)'
    ],
    examples: {
      bad: `{
  "value": "static-value",
  "default": "other-value",
  "isRequired": true
}`,
      good: `{ "value": "static-value" }`
    },
    guidance: [
      'Remove default, isRequired, and choices from fields with static values',
      'These properties only apply to fields that users configure'
    ],
    scope: [
      'packages.runtimeArguments',
      'packages.packageArguments',
      'packages.environmentVariables',
      'remotes.headers'
    ],
    notes: [
      'This sometimes happens when value is used in error, and user input is expected (sometimes when value is used instead of default)',
      'Clean, consistent value specifications produce predictable configuration and reduce confusion'
    ]
  },
  check: (data: any, basePath: string) => {
    const issues: any[] = [];
    
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
                  severity: rule.severity,
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
    
    // Check remote headers
    if (data.remotes) {
      data.remotes.forEach((remote: any, remoteIndex: number) => {
        if (remote.headers) {
          remote.headers.forEach((header: any, headerIndex: number) => {
            if (header.value && (header.default || header.isRequired || header.choices)) {
              const path = getJsonPath(`/remotes/${remoteIndex}/headers`, headerIndex);
              const irrelevantProps = [];
              if (header.default) irrelevantProps.push('default');
              if (header.isRequired) irrelevantProps.push('isRequired');
              if (header.choices) irrelevantProps.push('choices');
              
              issues.push({
                source: 'linter',
                severity: rule.severity,
                path: path,
                message: `Field with 'value' should not have: ${irrelevantProps.join(', ')} - these properties have no effect when value is present`,
                rule: 'no-value-with-irrelevant-properties'
              });
            }
          });
        }
      });
    }
    
    return issues;
  }
};
