"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rule = void 0;
const jsonPath_1 = require("../utils/jsonPath");
exports.rule = {
    name: 'require-valid-default-choice',
    message: 'Default value must be one of the available choices',
    severity: 'error',
    docs: {
        purpose: 'Ensure default values are valid options when choices are provided',
        triggers: [
            'Field has both default and choices, but default is not in the choices array'
        ],
        examples: {
            bad: `{
  "default": "invalid",
  "choices": ["option1", "option2"]
}`,
            good: `{
  "default": "option1",
  "choices": ["option1", "option2"]
}`
        },
        guidance: [
            'Set default to one of the valid choices',
            'Or remove the default if no choice should be pre-selected',
            'Ensure consistency between default and available options'
        ],
        scope: [
            'packages.runtimeArguments',
            'packages.packageArguments',
            'packages.environmentVariables',
            'remotes.headers'
        ],
        notes: [
            'Default should always be a valid choice when choices are specified'
        ]
    },
    check: (data, basePath) => {
        const issues = [];
        const checkDefaultChoice = (field, path) => {
            if (field.default !== undefined && field.choices && Array.isArray(field.choices)) {
                if (!field.choices.includes(field.default)) {
                    issues.push({
                        source: 'linter',
                        severity: exports.rule.severity,
                        path,
                        message: `Default value "${field.default}" is not one of the available choices: [${field.choices.join(', ')}]`,
                        rule: 'require-valid-default-choice'
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
                            checkDefaultChoice(field, path);
                        });
                    }
                });
            });
        }
        // Check remote headers
        if (data.remotes) {
            data.remotes.forEach((remote, remoteIndex) => {
                if (remote.headers) {
                    remote.headers.forEach((header, headerIndex) => {
                        const path = (0, jsonPath_1.getJsonPath)(`/remotes/${remoteIndex}/headers`, headerIndex);
                        checkDefaultChoice(header, path);
                    });
                }
            });
        }
        return issues;
    }
};
