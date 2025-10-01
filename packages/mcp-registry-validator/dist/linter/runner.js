"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lintServerData = lintServerData;
exports.runLinterRules = runLinterRules;
const index_1 = require("./index");
async function runLinterRules(data) {
    const issues = [];
    for (const rule of index_1.linterRules) {
        try {
            const ruleIssues = rule.check(data, '/');
            // Update severity to use rule's default severity if not specified
            const updatedIssues = ruleIssues.map(issue => ({
                ...issue,
                severity: issue.severity || rule.severity
            }));
            issues.push(...updatedIssues);
        }
        catch (error) {
            console.warn(`Linter rule ${rule.name} failed:`, error);
        }
    }
    return issues;
}
// Exported helper to run linter outside the UI (e.g., in scripts)
async function lintServerData(data) {
    return runLinterRules(data);
}
