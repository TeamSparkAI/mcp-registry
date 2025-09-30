import { LinterRule } from '../types';
import { getJsonPath } from '../utils/jsonPath';

export const rule: LinterRule = {
  name: 'prefer-config-for-remote',
  message: 'Remote has no configuration options',
  docs: {
    purpose: 'Suggest adding headers configuration for remotes that may need authentication or custom headers',
    triggers: [
      'Remote has no headers configuration',
      'Remote appears to be a simple endpoint without authentication requirements'
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
      'Include common headers like Authorization, Content-Type, or custom API keys',
      'Consider if the remote endpoint needs any special headers'
    ],
    scope: ['remotes'],
    notes: [
      'This is an info-level suggestion, not a requirement',
      'Some remotes may not need headers (public endpoints)',
      'Focus on remotes that likely require authentication'
    ]
  },
  check: (data: any, basePath: string) => {
    const issues: any[] = [];
    if (data.remotes) {
      data.remotes.forEach((remote: any, index: number) => {
        const hasConfig = remote.headers?.length;
        if (!hasConfig) {
          issues.push({
            source: 'linter',
            severity: 'info',
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
