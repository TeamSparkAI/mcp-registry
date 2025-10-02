import { LinterRule } from '../types';
import { getJsonPath } from '../utils/jsonPath';

export const rule: LinterRule = {
  name: 'no-duplicate-env-vars',
  message: 'Duplicate environment variable names found - the second definition will override the first',
  severity: 'error',
  docs: {
    purpose: 'Prevent duplicate environment variable names within the same package, as later definitions override earlier ones',
    triggers: [
      'Multiple environment variables with the same name in the same package'
    ],
    examples: {
      bad: `{
  "packages": [{
    "identifier": "my-package",
    "environmentVariables": [
      {
        "name": "API_KEY",
        "description": "Primary API key",
        "format": "string",
        "isSecret": true
      },
      {
        "name": "API_KEY",
        "description": "Secondary API key",
        "format": "string",
        "isSecret": true
      }
    ]
  }]
}`,
      good: `{
  "packages": [{
    "identifier": "my-package",
    "environmentVariables": [
      {
        "name": "API_KEY",
        "description": "Primary API key",
        "format": "string",
        "isSecret": true
      },
      {
        "name": "SECONDARY_API_KEY",
        "description": "Secondary API key",
        "format": "string",
        "isSecret": true
      }
    ]
  }]
}`
    },
    guidance: [
      'Use unique names for each environment variable',
      'If you need multiple similar variables, use descriptive names like API_KEY and SECONDARY_API_KEY'
    ],
    scope: ['packages.environmentVariables'],
    notes: [
      'Environment variables are processed in order, with later definitions overriding earlier ones',
      'This can lead to unexpected behavior where users think they are setting one variable but actually setting another'
    ]
  },
  check: (data: any, basePath: string) => {
    const issues: any[] = [];
    
    if (data.packages) {
      data.packages.forEach((pkg: any, pkgIndex: number) => {
        if (pkg.environmentVariables && Array.isArray(pkg.environmentVariables)) {
          const seenNames = new Set<string>();
          
          pkg.environmentVariables.forEach((envVar: any, envIndex: number) => {
            if (envVar.name) {
              if (seenNames.has(envVar.name)) {
                issues.push({
                  source: 'linter',
                  severity: rule.severity,
                  path: getJsonPath(basePath, `packages/${pkgIndex}/environmentVariables/${envIndex}/name`),
                  message: `Duplicate environment variable name '${envVar.name}' - this will override the previous definition`,
                  rule: 'no-duplicate-env-vars'
                });
              } else {
                seenNames.add(envVar.name);
              }
            }
          });
        }
      });
    }
    
    return issues;
  }
};
