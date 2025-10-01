// Main API exports
export { validateServerJson, substituteTransportUrl } from './validation';
export { lintServerData, linterRules } from './linter';
export type { ValidationIssue, ValidationResult, LinterRule } from './linter/types';

// Re-export utility functions
export { getJsonPath } from './linter/utils/jsonPath';
export { hasTemplateVariables, extractVariableNames } from './linter/utils/templates';

