"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rule = void 0;
const jsonPath_1 = require("../utils/jsonPath");
exports.rule = {
    name: 'prefer-dynamic-port',
    message: 'Package transport URL contains hard-coded port number, prefer dynamic port via variable substitution',
    severity: 'warning',
    docs: {
        purpose: 'Encourage use of dynamic port variables instead of hard-coded port numbers for better flexibility',
        triggers: [
            'Package transport URL contains hard-coded port numbers (e.g., :8080, :3000, :9000)'
        ],
        examples: {
            bad: `{
  "packages": [{
    "identifier": "my-server",
    "transport": {
      "type": "sse",
      "url": "http://localhost:8080/sse"
    }
  }]
}`,
            good: `{
  "packages": [{
    "identifier": "my-server",
    "transport": {
      "type": "sse",
      "url": "http://localhost:{port}/sse"
    },
    "runtimeArguments": [{
      "name": "--port",
      "valueHint": "port",
      "description": "Port number for the server"
    }]
  }]
}`
        },
        guidance: [
            'Replace hard-coded port numbers with {port} variable substitution',
            'Add runtime argument or package argument with matching valueHint or name'
        ],
        scope: ['packages.transport.url'],
        notes: [
            'Hard-coded ports make packages less flexible for different environments',
            'Dynamic ports allow users to configure ports based on their setup'
        ]
    },
    check: (data, basePath) => {
        const issues = [];
        if (data.packages) {
            data.packages.forEach((pkg, pkgIndex) => {
                if (pkg.transport?.url) {
                    const url = pkg.transport.url;
                    // Check for hard-coded port patterns
                    // Matches :PORT where PORT is 1-5 digits
                    const hardCodedPortPattern = /:\d{1,5}(?:\/|$)/;
                    if (hardCodedPortPattern.test(url)) {
                        // Extract the port number for more specific messaging
                        const portMatch = url.match(/:(\d{1,5})(?:\/|$)/);
                        const portNumber = portMatch ? portMatch[1] : 'unknown';
                        issues.push({
                            source: 'linter',
                            severity: exports.rule.severity,
                            path: (0, jsonPath_1.getJsonPath)(basePath, `packages/${pkgIndex}/transport/url`),
                            message: `Transport URL contains hard-coded port ${portNumber}, consider using {port} variable substitution`,
                            rule: 'prefer-dynamic-port'
                        });
                    }
                }
            });
        }
        return issues;
    }
};
