import { LinterRule } from '../types';
import { getJsonPath } from '../utils/jsonPath';

export const rule: LinterRule = {
  name: 'require-arg-leading-dashes',
  message: 'Named argument missing leading dashes',
  severity: 'warning',  docs: {
    purpose: 'Ensure named arguments follow standard command-line conventions with leading dashes',
    triggers: [
      'Named argument has a name but doesn\'t start with -- or -'
    ],
    examples: {
      bad: `{ "name": "port", "description": "Port number" }`,
      good: `{ "name": "--port", "description": "Port number" }`
    },
    guidance: [
      'Use - or -- as appropriate (e.g., -y, --port)',
    ],
    scope: [
      'packages.runtimeArguments',
      'packages.packageArguments'
    ],
    notes: [
      'Some tools may accept argument names without leading dashes, but it\'s not recommended'
    ]
  },
  check: (data: any, basePath: string) => {
    const issues: any[] = [];
    
    if (data.packages) {
      data.packages.forEach((pkg: any, pkgIndex: number) => {
        if (pkg.runtimeArguments) {
          pkg.runtimeArguments.forEach((arg: any, argIndex: number) => {
            if (arg.name && !arg.name.startsWith('-')) {
              issues.push({
                source: 'linter',
                severity: rule.severity,
                path: getJsonPath(`/packages/${pkgIndex}/runtimeArguments`, argIndex),
                message: `Named argument "${arg.name}" should start with "--" or "-"`,
                rule: 'require-args-leading-dashes'
              });
            }
          });
        }
        
        if (pkg.packageArguments) {
          pkg.packageArguments.forEach((arg: any, argIndex: number) => {
            if (arg.name && !arg.name.startsWith('-')) {
              issues.push({
                source: 'linter',
                severity: rule.severity,
                path: getJsonPath(`/packages/${pkgIndex}/packageArguments`, argIndex),
                message: `Named argument "${arg.name}" should start with "--" or "-"`,
                rule: 'require-args-leading-dashes'
              });
            }
          });
        }
      });
    }
    
    return issues;
  }
};
