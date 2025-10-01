import { ValidationIssue } from './types';
declare function runLinterRules(data: any): Promise<ValidationIssue[]>;
export declare function lintServerData(data: any): Promise<ValidationIssue[]>;
export { runLinterRules };
