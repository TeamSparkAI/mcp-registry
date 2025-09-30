import { LinterRule } from '../types';
import { getJsonPath } from '../utils/jsonPath';
import { hasTemplateVariables } from '../utils/templates';

export const rule: LinterRule = {
  name: 'no-secret-template',
  message: 'Secret field contains template variables',
  check: (data: any, basePath: string) => {
    const issues: any[] = [];
    
    const checkSecretField = (field: any, path: string) => {
      if (field.isSecret && field.value && hasTemplateVariables(field.value)) {
        issues.push({
          source: 'linter',
          severity: 'warning',
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
