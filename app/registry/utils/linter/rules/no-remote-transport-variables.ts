import { LinterRule } from '../types';
import { getJsonPath } from '../utils/jsonPath';
import { hasTemplateVariables } from '../utils/templates';

export const rule: LinterRule = {
  name: 'no-remote-transport-variables',
  message: 'Remote transport URL cannot contain variable references',
  severity: 'error',
  docs: {
    purpose: 'Prevent variable references in remote transport URLs since there is no configuration context to resolve them',
    triggers: [
      'Remote transport URL contains {variable} references'
    ],
    examples: {
      bad: `{
  "remotes": [{
    "type": "sse",
    "url": "http://localhost:{port}/sse"
  }]
}`,
      good: `{
  "remotes": [{
    "type": "sse", 
    "url": "http://localhost:8080/sse"
  }]
}`
    },
    guidance: [
      'Use static URLs for remote transports',
      'Remove variable references from remote transport URLs',
      'Use package transports if variable substitution is needed'
    ],
    scope: ['remotes.transport.url'],
    notes: [
      'Remote transports have no configuration context to resolve variables',
      'Only package transports can use variable substitution'
    ]
  },
  check: (data: any, basePath: string) => {
    const issues: any[] = [];
    
    if (data.remotes) {
      data.remotes.forEach((remote: any, remoteIndex: number) => {
        if (remote.transport?.url && hasTemplateVariables(remote.transport.url)) {
          issues.push({
            source: 'linter',
            severity: rule.severity,
            path: getJsonPath(basePath, `remotes/${remoteIndex}/transport/url`),
            message: 'Remote transport URL cannot contain variable references',
            rule: 'no-remote-transport-variables'
          });
        }
      });
    }
    
    return issues;
  }
};
