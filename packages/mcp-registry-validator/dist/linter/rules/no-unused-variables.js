"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rule = void 0;
const jsonPath_1 = require("../utils/jsonPath");
const templates_1 = require("../utils/templates");
exports.rule = {
    name: 'no-unused-variables',
    message: 'Defined variables not used in template',
    severity: 'warning', docs: {
        purpose: 'Identify variables that are defined but never referenced in the template string',
        triggers: [
            'Field.variables contains keys that don\'t appear in field.value'
        ],
        examples: {
            bad: `{
  "value": "Hello {name}",
  "variables": {
    "name": {},
    "unused": {}
  }
}`,
            good: `{
  "value": "Hello {name}",
  "variables": {
    "name": { "format": "string" }
  }
}`
        },
        guidance: [
            'Remove unused variable definitions',
            'Or add references to unused variables in the template'
        ],
        scope: [
            'packages.runtimeArguments',
            'packages.packageArguments',
            'packages.environmentVariables',
            'remotes.headers'
        ],
        notes: [
            'Variables are case-sensitive in template matching'
        ]
    },
    check: (data, basePath) => {
        const issues = [];
        const checkUnusedVariables = (field, path) => {
            if (field.value && field.variables) {
                const templateVars = (0, templates_1.extractVariableNames)(field.value);
                const definedVars = Object.keys(field.variables);
                const unusedVars = definedVars.filter(v => !templateVars.includes(v));
                if (unusedVars.length > 0) {
                    issues.push({
                        source: 'linter',
                        severity: exports.rule.severity,
                        path,
                        message: `Defined variables not used in template: ${unusedVars.join(', ')}`,
                        rule: 'no-unused-variables'
                    });
                }
            }
        };
        if (data.packages) {
            data.packages.forEach((pkg, pkgIndex) => {
                ['runtimeArguments', 'packageArguments', 'environmentVariables'].forEach(section => {
                    if (pkg[section]) {
                        pkg[section].forEach((field, fieldIndex) => {
                            const path = (0, jsonPath_1.getJsonPath)(`/packages/${pkgIndex}/${section}`, fieldIndex);
                            checkUnusedVariables(field, path);
                        });
                    }
                });
            });
        }
        if (data.remotes) {
            data.remotes.forEach((remote, remoteIndex) => {
                if (remote.headers) {
                    remote.headers.forEach((header, headerIndex) => {
                        const path = (0, jsonPath_1.getJsonPath)(basePath, `remotes/${remoteIndex}/headers`, headerIndex);
                        checkUnusedVariables(header, path);
                    });
                }
            });
        }
        return issues;
    }
};
