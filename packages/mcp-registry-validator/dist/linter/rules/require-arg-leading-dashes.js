"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rule = void 0;
const jsonPath_1 = require("../utils/jsonPath");
exports.rule = {
    name: 'require-arg-leading-dashes',
    message: 'Named argument missing leading dashes',
    severity: 'warning', docs: {
        purpose: 'Ensure named arguments follow standard command-line conventions with leading dashes',
        triggers: [
            'Named argument has a name but doesn\'t start with -- or -'
        ],
        examples: {
            bad: `{ "name": "port", "description": "Port number" }`,
            good: `{ "name": "--port", "description": "Port number" }`
        },
        guidance: [
            'Use - or -- as appropriate (e.g., -y, --port)',
        ],
        scope: [
            'packages.runtimeArguments',
            'packages.packageArguments'
        ],
        notes: [
            'Some tools may accept argument names without leading dashes, but it\'s not recommended'
        ]
    },
    check: (data, basePath) => {
        const issues = [];
        if (data.packages) {
            data.packages.forEach((pkg, pkgIndex) => {
                if (pkg.runtimeArguments) {
                    pkg.runtimeArguments.forEach((arg, argIndex) => {
                        if (arg.name && !arg.name.startsWith('-')) {
                            issues.push({
                                source: 'linter',
                                severity: exports.rule.severity,
                                path: (0, jsonPath_1.getJsonPath)(`/packages/${pkgIndex}/runtimeArguments`, argIndex),
                                message: `Named argument "${arg.name}" should start with "--" or "-"`,
                                rule: 'require-args-leading-dashes'
                            });
                        }
                    });
                }
                if (pkg.packageArguments) {
                    pkg.packageArguments.forEach((arg, argIndex) => {
                        if (arg.name && !arg.name.startsWith('-')) {
                            issues.push({
                                source: 'linter',
                                severity: exports.rule.severity,
                                path: (0, jsonPath_1.getJsonPath)(`/packages/${pkgIndex}/packageArguments`, argIndex),
                                message: `Named argument "${arg.name}" should start with "--" or "-"`,
                                rule: 'require-args-leading-dashes'
                            });
                        }
                    });
                }
            });
        }
        return issues;
    }
};
