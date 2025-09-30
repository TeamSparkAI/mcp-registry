import { LinterRule } from '../types';
import { getJsonPath } from '../utils/jsonPath';
import { hasTemplateVariables } from '../utils/templates';

export const rule: LinterRule = {
  name: 'no-secret-template',
  message: 'Secret field contains template variables',
  severity: 'warning',  docs: {
    purpose: 'Warn about secret fields that contain template variables',
    triggers: [
      'Field is marked as isSecret and contains {variables}'
    ],
    examples: {
      bad: `{ "value": "Bearer {api_key}", "isSecret": true }`,
      good: `{
  "value": "Bearer {api_key}",
  "isSecret": false,
  "variables": { "api_key": { "isSecret": true } }
}`
    },
    guidance: [
      'Move secret marking to the variable level instead of the template',
      'Use non-secret templates with secret variables'
    ],
    scope: [
      'packages.runtimeArguments',
      'packages.packageArguments',
      'packages.environmentVariables',
      'remotes.headers'
    ],
    notes: [
      'It is typicslly undesriable to hide the template value',
    ]
  },
  check: (data: any, basePath: string) => {
    const issues: any[] = [];
    
    const checkSecretField = (field: any, path: string) => {
      if (field.isSecret && field.value && hasTemplateVariables(field.value)) {
        issues.push({
          source: 'linter',
          severity: rule.severity,
          path,
          message: 'Secret field contains template variables - ensure this is intentional',
          rule: 'no-secret-template'
        });
      }
    };
    
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
};
