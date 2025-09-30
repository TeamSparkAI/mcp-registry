import { LinterRule } from '../types';
import { getJsonPath } from '../utils/jsonPath';

export const rule: LinterRule = {
  name: 'require-valid-default-choice',
  message: 'Default value must be one of the available choices',
  docs: {
    purpose: 'Ensure default values are valid options when choices are provided',
    triggers: [
      'Field has both default and choices, but default is not in the choices array'
    ],
    examples: {
      bad: `{
  "default": "invalid",
  "choices": ["option1", "option2"]
}`,
      good: `{
  "default": "option1",
  "choices": ["option1", "option2"]
}`
    },
    guidance: [
      'Set default to one of the valid choices',
      'Or remove the default if no choice should be pre-selected',
      'Ensure consistency between default and available options'
    ],
    scope: [
      'packages.runtimeArguments',
      'packages.packageArguments',
      'packages.environmentVariables',
      'remotes.headers'
    ],
    notes: [
      'Default should always be a valid choice when choices are specified'
    ]
  },
  check: (data: any, basePath: string) => {
    const issues: any[] = [];
    
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
    
    // Check remote headers
    if (data.remotes) {
      data.remotes.forEach((remote: any, remoteIndex: number) => {
        if (remote.headers) {
          remote.headers.forEach((header: any, headerIndex: number) => {
            const path = getJsonPath(`/remotes/${remoteIndex}/headers`, headerIndex);
            checkDefaultChoice(header, path);
          });
        }
      });
    }
    
    return issues;
  }
};
