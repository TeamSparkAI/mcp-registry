import { LinterRule } from '../types';
import { getJsonPath } from '../utils/jsonPath';

export const rule: LinterRule = {
  name: 'require-config-for-package',
  message: 'Package has no configuration options',
  check: (data: any, basePath: string) => {
    const issues: any[] = [];
    if (data.packages) {
      data.packages.forEach((pkg: any, index: number) => {
        const hasConfig = pkg.runtimeArguments?.length || 
                         pkg.packageArguments?.length || 
                         pkg.environmentVariables?.length ||
                         pkg.runtimeHint;
        if (!hasConfig) {
          issues.push({
            source: 'linter',
            severity: 'warning',
            path: getJsonPath(basePath, 'packages', index),
            message: 'Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables',
            rule: 'require-config-for-package'
          });
        }
      });
    }
    return issues;
  }
};
