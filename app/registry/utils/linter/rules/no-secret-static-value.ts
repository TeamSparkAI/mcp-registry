import { LinterRule } from '../types';
import { getJsonPath } from '../utils/jsonPath';

export const rule: LinterRule = {
  name: 'no-secret-static-value',
  message: 'Field with static value should not be marked as secret',
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
