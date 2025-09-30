import { LinterRule } from '../types';
import { getJsonPath } from '../utils/jsonPath';

export const rule: LinterRule = {
  name: 'require-valid-default-choice',
  message: 'Default value must be one of the available choices',
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
    
    return issues;
  }
};
