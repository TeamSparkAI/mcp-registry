"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasTemplateVariables = hasTemplateVariables;
exports.extractVariableNames = extractVariableNames;
// Helper function to check if a string contains template variables
function hasTemplateVariables(template) {
    return /\{[^}]+\}/.test(template);
}
// Helper function to extract variable names from template
function extractVariableNames(template) {
    const matches = template.match(/\{([^}]+)\}/g);
    return matches ? matches.map(match => match.slice(1, -1)) : [];
}
