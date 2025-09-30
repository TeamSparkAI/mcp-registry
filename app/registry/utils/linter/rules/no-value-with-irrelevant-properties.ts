import { LinterRule } from '../types';
import { getJsonPath } from '../utils/jsonPath';

export const rule: LinterRule = {
  name: 'no-value-with-irrelevant-properties',
  message: 'Field with value should not have default, isRequired, or choices',
  docs: {
    purpose: 'Identify fields with static values that also have properties that only apply to user input fields',
    triggers: [
      'Field has a static value but also has default, isRequired, or choices',
      'Static value field includes properties meant for dynamic configuration'
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
      'These properties only apply to fields that users configure',
      'Keep static value fields simple and clean'
    ],
    scope: [
      'packages.runtimeArguments',
      'packages.packageArguments',
      'packages.environmentVariables'
    ],
    notes: [
      'Static values are fixed and don\'t need user input properties',
      'This helps distinguish between static and dynamic configuration',
      'Cleaner configuration reduces confusion'
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
};
