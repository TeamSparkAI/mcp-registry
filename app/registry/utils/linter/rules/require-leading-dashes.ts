import { LinterRule } from '../types';
import { getJsonPath } from '../utils/jsonPath';

export const rule: LinterRule = {
  name: 'require-leading-dashes',
  message: 'Named argument missing leading dashes',
  check: (data: any, basePath: string) => {
    const issues: any[] = [];
    
    if (data.packages) {
      data.packages.forEach((pkg: any, pkgIndex: number) => {
        if (pkg.runtimeArguments) {
          pkg.runtimeArguments.forEach((arg: any, argIndex: number) => {
            if (arg.name && !arg.name.startsWith('-')) {
              issues.push({
                source: 'linter',
                severity: 'warning',
                path: getJsonPath(`/packages/${pkgIndex}/runtimeArguments`, argIndex),
                message: `Named argument "${arg.name}" should start with "--" or "-"`,
                rule: 'require-leading-dashes'
              });
            }
          });
        }
        
        if (pkg.packageArguments) {
          pkg.packageArguments.forEach((arg: any, argIndex: number) => {
            if (arg.name && !arg.name.startsWith('-')) {
              issues.push({
                source: 'linter',
                severity: 'warning',
                path: getJsonPath(`/packages/${pkgIndex}/packageArguments`, argIndex),
                message: `Named argument "${arg.name}" should start with "--" or "-"`,
                rule: 'require-leading-dashes'
              });
            }
          });
        }
      });
    }
    
    return issues;
  }
};
