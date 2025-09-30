import { LinterRule } from '../types';
import { getJsonPath } from '../utils/jsonPath';

export const rule: LinterRule = {
  name: 'no-secret-static-value',
  message: 'Field with static value should not be marked as secret',
  docs: {
    purpose: 'Warn about static values marked as secret, which may not provide the intended security benefit',
    triggers: [
      'Field has a static value but is marked as isSecret: true',
      'Fixed value field is treated as sensitive information'
    ],
    examples: {
      bad: `{ "value": "public-api-key", "isSecret": true }`,
      good: `{
  "value": "Bearer {token}",
  "isSecret": false,
  "variables": { "token": { "isSecret": true } }
}`
    },
    guidance: [
      'Remove isSecret from static values - they\'re already visible in the config',
      'Use variables with isSecret for truly sensitive values',
      'Consider if the static value should actually be secret'
    ],
    scope: [
      'packages.runtimeArguments',
      'packages.packageArguments',
      'packages.environmentVariables'
    ],
    notes: [
      'Static values are visible in the server configuration',
      'Marking them as secret provides no security benefit',
      'Use variables for values that should be kept secret'
    ]
  },
  check: (data: any, basePath: string) => {
    const issues: any[] = [];
    
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
};
