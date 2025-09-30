import { ValidationIssue, LinterRule } from './types';
import { linterRules } from './index';

async function runLinterRules(data: any): Promise<ValidationIssue[]> {
  const issues: ValidationIssue[] = [];
  
  for (const rule of linterRules) {
    try {
      const ruleIssues = rule.check(data, '/');
      // Update severity to use rule's default severity if not specified
      const updatedIssues = ruleIssues.map(issue => ({
        ...issue,
        severity: issue.severity || rule.severity
      }));
      issues.push(...updatedIssues);
    } catch (error) {
      console.warn(`Linter rule ${rule.name} failed:`, error);
    }
  }
  
  return issues;
}

// Exported helper to run linter outside the UI (e.g., in scripts)
export async function lintServerData(data: any): Promise<ValidationIssue[]> {
  return runLinterRules(data);
}

export { runLinterRules };
