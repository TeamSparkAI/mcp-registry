import { LinterRule } from '../types';
import { getJsonPath } from '../utils/jsonPath';

export const rule: LinterRule = {
  name: 'require-valid-value-format',
  message: 'Value format inconsistent with field type',
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
