import { LinterRule } from '../types';
import { getJsonPath } from '../utils/jsonPath';
import { extractVariableNames } from '../utils/templates';

export const rule: LinterRule = {
  name: 'no-unused-variables',
  message: 'Defined variables not used in template',
  check: (data: any, basePath: string) => {
    const issues: any[] = [];
    
    const checkUnusedVariables = (field: any, path: string) => {
      if (field.value && field.variables) {
        const templateVars = extractVariableNames(field.value);
        const definedVars = Object.keys(field.variables);
        const unusedVars = definedVars.filter(v => !templateVars.includes(v));
        
        if (unusedVars.length > 0) {
          issues.push({
            source: 'linter',
            severity: 'warning',
            path,
            message: `Defined variables not used in template: ${unusedVars.join(', ')}`,
            rule: 'no-unused-variables'
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
              checkUnusedVariables(field, path);
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
            checkUnusedVariables(header, path);
          });
        }
      });
    }
    
    return issues;
  }
};
