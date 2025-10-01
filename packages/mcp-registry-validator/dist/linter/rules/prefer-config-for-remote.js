"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rule = void 0;
const jsonPath_1 = require("../utils/jsonPath");
exports.rule = {
    name: 'prefer-config-for-remote',
    message: 'Remote has no configuration options',
    severity: 'info',
    docs: {
        purpose: 'Suggest adding headers configuration for remotes that may need authentication or custom headers',
        triggers: [
            'Remote has no headers configuration'
        ],
        examples: {
            bad: `{ "type": "streamable-http", "url": "https://api.example.com/mcp" }`,
            good: `{
  "type": "streamable-http",
  "url": "https://api.example.com/mcp",
  "headers": [
    { "name": "Authorization", "description": "API key for authentication" }
  ]
}`
        },
        guidance: [
            'Add headers configuration if the remote requires authentication',
            'This typicslly includes headers like Authorization, or custom API keys',
        ],
        scope: ['remotes'],
        notes: [
            'Some remotes may not need headers (public endpoints)',
            'Consider providing an empty headers object if no headers are needed'
        ]
    },
    check: (data, basePath) => {
        const issues = [];
        if (data.remotes) {
            data.remotes.forEach((remote, index) => {
                const hasConfig = remote.headers?.length;
                if (!hasConfig) {
                    issues.push({
                        source: 'linter',
                        severity: exports.rule.severity,
                        path: (0, jsonPath_1.getJsonPath)(basePath, 'remotes', index),
                        message: 'Remote has no headers configuration',
                        rule: 'prefer-config-for-remote'
                    });
                }
            });
        }
        return issues;
    }
};
