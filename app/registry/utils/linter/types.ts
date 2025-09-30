export interface ValidationIssue {
  source: 'parse' | 'schema' | 'linter';
  severity: 'error' | 'warning' | 'info';
  path: string; // JSON path like "/packages/0/transport/url"
  message: string;
  rule?: string; // For linter rules like "no-leading-dashes"
}

export interface ValidationResult {
  valid: boolean;
  issues: ValidationIssue[];
}

export interface LinterRule {
  name: string;
  message: string;
  severity: 'error' | 'warning' | 'info';
  check: (data: any, path: string) => ValidationIssue[];
  docs?: {
    purpose: string;
    triggers?: string[];
    examples?: {
      bad?: string;
      good?: string;
    };
    guidance?: string[];
    scope?: string[];
    notes?: string[];
  };
}
