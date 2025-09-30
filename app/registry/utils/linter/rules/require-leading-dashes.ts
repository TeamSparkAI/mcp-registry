import { LinterRule } from '../types';
import { getJsonPath } from '../utils/jsonPath';

export const rule: LinterRule = {
  name: 'require-leading-dashes',
  message: 'Named argument missing leading dashes',
  docs: {
    purpose: 'Ensure named arguments follow standard command-line conventions with leading dashes',
    triggers: [
      'Named argument has a name but doesn\'t start with -- or -',
      'Argument appears to be a flag or option but lacks proper prefix'
    ],
    examples: {
      bad: `{ "name": "port", "description": "Port number" }`,
      good: `{ "name": "--port", "description": "Port number" }`
    },
    guidance: [
      'Use -- for long-form options (e.g., --port, --verbose)',
      'Use - for short-form options (e.g., -p, -v)',
      'Follow standard command-line argument conventions'
    ],
    scope: [
      'packages.runtimeArguments',
      'packages.packageArguments'
    ],
    notes: [
      'This follows standard Unix/Linux command-line conventions',
      'Some tools may accept arguments without dashes, but it\'s not recommended',
      'Consistent formatting improves user experience'
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
