"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rule = void 0;
const jsonPath_1 = require("../utils/jsonPath");
const templates_1 = require("../utils/templates");
exports.rule = {
    name: 'no-remote-transport-variables',
    message: 'Remote transport URL cannot contain variable references',
    severity: 'error',
    docs: {
        purpose: 'Prevent variable references in remote transport URLs since there is no configuration context to resolve them',
        triggers: [
            'Remote transport URL contains {variable} references'
        ],
        examples: {
            bad: `{
  "remotes": [{
    "type": "sse",
    "url": "http://localhost:{port}/sse"
  }]
}`,
            good: `{
  "remotes": [{
    "type": "sse", 
    "url": "http://localhost:8080/sse"
  }]
}`
        },
        guidance: [
            'Use static URLs for remote transports',
            'Remove variable references from remote transport URLs',
            'Use package transports if variable substitution is needed'
        ],
        scope: ['remotes.transport.url'],
        notes: [
            'Remote transports have no configuration context to resolve variables',
            'Only package transports can use variable substitution'
        ]
    },
    check: (data, basePath) => {
        const issues = [];
        if (data.remotes) {
            data.remotes.forEach((remote, remoteIndex) => {
                if (remote.transport?.url && (0, templates_1.hasTemplateVariables)(remote.transport.url)) {
                    issues.push({
                        source: 'linter',
                        severity: exports.rule.severity,
                        path: (0, jsonPath_1.getJsonPath)(basePath, `remotes/${remoteIndex}/transport/url`),
                        message: 'Remote transport URL cannot contain variable references',
                        rule: 'no-remote-transport-variables'
                    });
                }
            });
        }
        return issues;
    }
};
