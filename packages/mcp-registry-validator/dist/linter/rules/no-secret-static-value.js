"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rule = void 0;
const jsonPath_1 = require("../utils/jsonPath");
exports.rule = {
    name: 'no-secret-static-value',
    message: 'Field with static value should not be marked as secret',
    severity: 'warning', docs: {
        purpose: 'Warn about static values marked as secret, which  will likelt not have the desired effect',
        triggers: [
            'Field has a static value and is marked as isSecret'
        ],
        examples: {
            bad: `{ "value": "public-api-key", "isSecret": true }`,
            good: `{
  "value": "Bearer {token}",
  "isSecret": false,
  "variables": { "token": { "isSecret": true } }
}`
        },
        guidance: [
            'Remove isSecret from static values',
            'Use variables with isSecret for truly sensitive values'
        ],
        scope: [
            'packages.runtimeArguments',
            'packages.packageArguments',
            'packages.environmentVariables',
            'remotes.headers'
        ],
        notes: [
            'Static values will generally be displayed during configuraiton, even if marked as secret',
            'And if the value is hidden during configuration that will be a poor user experience',
        ]
    },
    check: (data, basePath) => {
        const issues = [];
        if (data.packages) {
            data.packages.forEach((pkg, pkgIndex) => {
                ['runtimeArguments', 'packageArguments', 'environmentVariables'].forEach(section => {
                    if (pkg[section]) {
                        pkg[section].forEach((field, fieldIndex) => {
                            if (field.value && field.isSecret) {
                                const path = (0, jsonPath_1.getJsonPath)(`/packages/${pkgIndex}/${section}`, fieldIndex);
                                issues.push({
                                    source: 'linter',
                                    severity: exports.rule.severity,
                                    path: path,
                                    message: 'Field with static value should not be marked as secret - consider using variables instead',
                                    rule: 'no-secret-static-value'
                                });
                            }
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
                        if (header.value && header.isSecret) {
                            const path = (0, jsonPath_1.getJsonPath)(`/remotes/${remoteIndex}/headers`, headerIndex);
                            issues.push({
                                source: 'linter',
                                severity: exports.rule.severity,
                                path: path,
                                message: 'Field with static value should not be marked as secret - consider using variables instead',
                                rule: 'no-secret-static-value'
                            });
                        }
                    });
                }
            });
        }
        return issues;
    }
};
