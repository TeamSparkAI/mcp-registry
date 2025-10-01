"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rule = void 0;
const jsonPath_1 = require("../utils/jsonPath");
const templates_1 = require("../utils/templates");
exports.rule = {
    name: 'no-secret-template',
    message: 'Secret field contains template variables',
    severity: 'warning', docs: {
        purpose: 'Warn about secret fields that contain template variables',
        triggers: [
            'Field is marked as isSecret and contains {variables}'
        ],
        examples: {
            bad: `{ "value": "Bearer {api_key}", "isSecret": true }`,
            good: `{
  "value": "Bearer {api_key}",
  "isSecret": false,
  "variables": { "api_key": { "isSecret": true } }
}`
        },
        guidance: [
            'Move secret marking to the variable level instead of the template',
            'Use non-secret templates with secret variables'
        ],
        scope: [
            'packages.runtimeArguments',
            'packages.packageArguments',
            'packages.environmentVariables',
            'remotes.headers'
        ],
        notes: [
            'It is typicslly undesriable to hide the template value',
        ]
    },
    check: (data, basePath) => {
        const issues = [];
        const checkSecretField = (field, path) => {
            if (field.isSecret && field.value && (0, templates_1.hasTemplateVariables)(field.value)) {
                issues.push({
                    source: 'linter',
                    severity: exports.rule.severity,
                    path,
                    message: 'Secret field contains template variables - ensure this is intentional',
                    rule: 'no-secret-template'
                });
            }
        };
        if (data.packages) {
            data.packages.forEach((pkg, pkgIndex) => {
                ['runtimeArguments', 'packageArguments', 'environmentVariables'].forEach(section => {
                    if (pkg[section]) {
                        pkg[section].forEach((field, fieldIndex) => {
                            const path = (0, jsonPath_1.getJsonPath)(`/packages/${pkgIndex}/${section}`, fieldIndex);
                            checkSecretField(field, path);
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
                        checkSecretField(header, path);
                    });
                }
            });
        }
        return issues;
    }
};
