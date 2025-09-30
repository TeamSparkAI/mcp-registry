import { LinterRule } from '../types';
import { getJsonPath } from '../utils/jsonPath';

export const rule: LinterRule = {
  name: 'require-config-for-package',
  message: 'Package has no configuration options',
  docs: {
    purpose: 'Encourage packages to provide configuration options for better user experience',
    triggers: [
      'Package has no runtimeArguments, packageArguments, environmentVariables, or runtimeHint',
      'Package appears to be a simple command without any customization options'
    ],
    examples: {
      bad: `{ "identifier": "my-package", "version": "1.0.0" }`,
      good: `{
  "identifier": "my-package",
  "version": "1.0.0",
  "runtimeArguments": [
    { "name": "--port", "description": "Port to run on" }
  ]
}`
    },
    guidance: [
      'Add runtimeArguments for command-line options',
      'Add packageArguments for package-specific configuration',
      'Add environmentVariables for environment-based settings',
      'Consider adding runtimeHint if the runtime differs from default'
    ],
    scope: ['packages'],
    notes: [
      'Some packages may legitimately not need configuration',
      'This is a warning, not an error - simple packages are valid',
      'Focus on packages that could benefit from user customization'
    ]
  },
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
