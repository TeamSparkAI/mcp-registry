import { ValidationResult } from './linter/types';
export declare function validateServerJson(serverJson: string, schemaUrl?: string): Promise<ValidationResult>;
export declare function substituteTransportUrl(url: string, packageConfig: any): string;
export { lintServerData, linterRules } from './linter';
export type { ValidationIssue, ValidationResult, LinterRule } from './linter/types';
export { getJsonPath } from './linter/utils/jsonPath';
export { hasTemplateVariables, extractVariableNames } from './linter/utils/templates';
