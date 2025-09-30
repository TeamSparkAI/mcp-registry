import { LinterRule } from '../types';
import { getJsonPath } from '../utils/jsonPath';

export const rule: LinterRule = {
  name: 'prefer-config-for-remote',
  message: 'Remote has no configuration options',
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
