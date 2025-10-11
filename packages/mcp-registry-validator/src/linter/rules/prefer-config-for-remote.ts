import { LinterRule } from '../types';
import { getJsonPath } from '../utils/jsonPath';

export const rule: LinterRule = {
  name: 'prefer-config-for-remote',
  message: 'Remote has no configuration options',
  severity: 'info',
  docs: {
    purpose: 'Suggest adding headers configuration for remotes that may need authentication or custom headers',
    triggers: [
      'Remote has no headers configuration'
    ],
    examples: {
      bad: `{ "type": "streamable-http", "url": "https://api.example.com/mcp" }`,
      good: `{
  "type": "streamable-http",
  "url": "https://api.example.com/mcp",
  "headers": [
    { "name": "Authorization", "description": "API key for authentication" }
  ]
}`
    },
    guidance: [
      'Add headers configuration if the remote requires authentication',
      'This typicslly includes headers like Authorization, or custom API keys',
    ],
    scope: ['remotes'],
    notes: [
      'Some remotes may not need headers (public endpoints)',
      'Consider providing an empty headers object if no headers are needed'
    ]
  },
  check: (data: any, basePath: string) => {
    const issues: any[] = [];
    if (data.remotes) {
      data.remotes.forEach((remote: any, index: number) => {
        // Only warn if headers is not present at all (undefined)
        // An empty array explicitly says "no headers needed"
        const hasConfig = 'headers' in remote;
        if (!hasConfig) {
          issues.push({
            source: 'linter',
            severity: rule.severity,
            path: getJsonPath(basePath, 'remotes', index),
            message: 'Remote has no headers configuration',
            rule: 'prefer-config-for-remote'
          });
        }
      });
    }
    return issues;
  }
};
