"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rule = void 0;
const jsonPath_1 = require("../utils/jsonPath");
const templates_1 = require("../utils/templates");
exports.rule = {
    name: 'no-template-variables-missing',
    message: 'Template string has no corresponding variables',
    severity: 'error',
    docs: {
        purpose: 'Catch templates referencing variables that are not defined in field.variables',
        triggers: [
            'Field.value contains {var} but field.variables lacks that key'
        ],
        examples: {
            bad: `{ "value": "Bearer {token}" }`,
            good: `{
  "value": "Bearer {token}",
  "variables": {
    "token": { "format": "string", "isRequired": true }
  }
}`
        },
        guidance: [
            'Add missing variable definitions under field.variables',
            'Or remove unused {placeholders} from the template'
        ],
        scope: [
            'packages.runtimeArguments',
            'packages.packageArguments',
            'packages.environmentVariables',
            'remotes.headers'
        ],
        notes: [
            'Variables are case-sensitive'
        ]
    },
    check: (data, basePath) => {
        const issues = [];
        if (data.packages) {
            data.packages.forEach((pkg, pkgIndex) => {
                // Check runtime arguments
                if (pkg.runtimeArguments) {
                    pkg.runtimeArguments.forEach((arg, argIndex) => {
                        if (arg.value && (0, templates_1.hasTemplateVariables)(arg.value)) {
                            const templateVars = (0, templates_1.extractVariableNames)(arg.value);
                            const definedVars = Object.keys(arg.variables || {});
                            const missingVars = templateVars.filter(v => !definedVars.includes(v));
                            if (missingVars.length > 0) {
                                issues.push({
                                    source: 'linter',
                                    severity: exports.rule.severity,
                                    path: (0, jsonPath_1.getJsonPath)(`/packages/${pkgIndex}/runtimeArguments`, argIndex),
                                    message: `Template contains variables without definitions: ${missingVars.join(', ')}`,
                                    rule: 'no-template-variables-missing'
                                });
                            }
                        }
                    });
                }
                // Check package arguments
                if (pkg.packageArguments) {
                    pkg.packageArguments.forEach((arg, argIndex) => {
                        if (arg.value && (0, templates_1.hasTemplateVariables)(arg.value)) {
                            const templateVars = (0, templates_1.extractVariableNames)(arg.value);
                            const definedVars = Object.keys(arg.variables || {});
                            const missingVars = templateVars.filter(v => !definedVars.includes(v));
                            if (missingVars.length > 0) {
                                issues.push({
                                    source: 'linter',
                                    severity: exports.rule.severity,
                                    path: (0, jsonPath_1.getJsonPath)(`/packages/${pkgIndex}/packageArguments`, argIndex),
                                    message: `Template contains variables without definitions: ${missingVars.join(', ')}`,
                                    rule: 'no-template-variables-missing'
                                });
                            }
                        }
                    });
                }
                // Check environment variables
                if (pkg.environmentVariables) {
                    pkg.environmentVariables.forEach((env, envIndex) => {
                        if (env.value && (0, templates_1.hasTemplateVariables)(env.value)) {
                            const templateVars = (0, templates_1.extractVariableNames)(env.value);
                            const definedVars = Object.keys(env.variables || {});
                            const missingVars = templateVars.filter(v => !definedVars.includes(v));
                            if (missingVars.length > 0) {
                                issues.push({
                                    source: 'linter',
                                    severity: exports.rule.severity,
                                    path: (0, jsonPath_1.getJsonPath)(`/packages/${pkgIndex}/environmentVariables`, envIndex),
                                    message: `Template contains variables without definitions: ${missingVars.join(', ')}`,
                                    rule: 'no-template-variables-missing'
                                });
                            }
                        }
                    });
                }
            });
        }
        // Check remote headers
        if (data.remotes) {
            data.remotes.forEach((remote, remoteIndex) => {
                if (remote.headers) {
                    remote.headers.forEach((header, headerIndex) => {
                        if (header.value && (0, templates_1.hasTemplateVariables)(header.value)) {
                            const templateVars = (0, templates_1.extractVariableNames)(header.value);
                            const definedVars = Object.keys(header.variables || {});
                            const missingVars = templateVars.filter(v => !definedVars.includes(v));
                            if (missingVars.length > 0) {
                                issues.push({
                                    source: 'linter',
                                    severity: exports.rule.severity,
                                    path: (0, jsonPath_1.getJsonPath)(basePath, `remotes/${remoteIndex}/headers`, headerIndex),
                                    message: `Template contains variables without definitions: ${missingVars.join(', ')}`,
                                    rule: 'no-template-variables-missing'
                                });
                            }
                        }
                    });
                }
            });
        }
        return issues;
    }
};
