import { LinterRule } from '../types';
import { getJsonPath } from '../utils/jsonPath';
import { hasTemplateVariables, extractVariableNames } from '../utils/templates';

export const rule: LinterRule = {
  name: 'no-transport-url-variables-missing',
  message: 'Package transport URL contains variables without matching configuration',
  severity: 'error',
  docs: {
    purpose: 'Ensure transport URL variables in packages are defined in package configuration',
    triggers: [
      'Package transport URL contains {variable} but no matching runtime argument, package argument, or environment variable'
    ],
    examples: {
      bad: `{
  "packages": [{
    "identifier": "my-server",
    "transport": {
      "type": "sse",
      "url": "http://localhost:{port}/sse"
    },
    "runtimeArguments": [{
      "name": "--host",
      "valueHint": "host"
    }]
  }]
}`,
      good: `{
  "packages": [{
    "identifier": "my-server", 
    "transport": {
      "type": "sse",
      "url": "http://localhost:{port}/sse"
    },
    "runtimeArguments": [{
      "name": "--port",
      "valueHint": "port"
    }]
  }]
}`
    },
    guidance: [
      'Add runtime arguments with matching valueHint or name',
      'Add package arguments with matching valueHint or name', 
      'Add environment variables with matching name',
      'Or remove variables from the transport URL'
    ],
    scope: ['packages.transport.url'],
    notes: [
      'Variables in transport URLs must be resolvable to package configuration',
      'Check valueHint, name fields in runtimeArguments, packageArguments, and environmentVariables'
    ]
  },
  check: (data: any, basePath: string) => {
    const issues: any[] = [];
    
    if (data.packages) {
      data.packages.forEach((pkg: any, pkgIndex: number) => {
        if (pkg.transport?.url && hasTemplateVariables(pkg.transport.url)) {
          const urlVariables = extractVariableNames(pkg.transport.url);
          
          // Check if variables are defined in package configuration
          const definedVariables = new Set<string>();
          
          // Check runtime arguments
          if (pkg.runtimeArguments) {
            pkg.runtimeArguments.forEach((arg: any) => {
              if (arg.valueHint) definedVariables.add(arg.valueHint);
              if (arg.name) definedVariables.add(arg.name);
            });
          }
          
          // Check package arguments
          if (pkg.packageArguments) {
            pkg.packageArguments.forEach((arg: any) => {
              if (arg.valueHint) definedVariables.add(arg.valueHint);
              if (arg.name) definedVariables.add(arg.name);
            });
          }
          
          // Check environment variables
          if (pkg.environmentVariables) {
            pkg.environmentVariables.forEach((env: any) => {
              if (env.name) definedVariables.add(env.name);
            });
          }
          
          // Find missing variables
          const missingVariables = urlVariables.filter(variable => !definedVariables.has(variable));
          
          if (missingVariables.length > 0) {
            issues.push({
              source: 'linter',
              severity: rule.severity,
              path: getJsonPath(basePath, `packages/${pkgIndex}/transport/url`),
              message: `Transport URL contains variables without matching configuration: ${missingVariables.join(', ')}`,
              rule: 'no-transport-url-variables-missing'
            });
          }
        }
      });
    }
    
    return issues;
  }
};
