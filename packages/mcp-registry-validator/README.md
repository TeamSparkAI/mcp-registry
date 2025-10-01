# @toolcatalog/mcp-registry-validator

MCP Server Registry Validator - Schema validation and linting for MCP server registry entries.

Validate server.json objects against the schema from [The Official MCP Registry](https://github.com/modelcontextprotocol/registry/) combined with linter rules from this project.

## Features

- **Schema Validation**: Validates server.json files against the official MCP server schema
- **Custom Linter Rules**: 13 comprehensive linter rules for best practices
- **CLI Interface**: Command-line tool for validation and documentation
- **Programmatic API**: TypeScript API for integration into other tools

## Installation

```bash
npm install @toolcatalog/mcp-registry-validator
```

## CLI Usage

### Validate a single server file
```bash
npx @toolcatalog/mcp-registry-validator validate server.json
```

### Validate entire registry
```bash
npx @toolcatalog/mcp-registry-validator validate-registry server-registry.json
```

### Show linter rule documentation
```bash
# Show all rules
npx @toolcatalog/mcp-registry-validator --linter-docs

# Show specific rule
npx @toolcatalog/mcp-registry-validator --linter-docs prefer-dynamic-port
```

## Programmatic API

```typescript
import { validateServerJson, lintServerData, linterRules } from '@toolcatalog/mcp-registry-validator';

// Validate a server JSON string
const result = await validateServerJson(jsonString);

// Run linter rules only
const issues = await lintServerData(serverData);

// Access available linter rules
console.log(linterRules.map(r => r.name));
```

## Linter Rules

The validator includes 13 custom linter rules:

1. **require-config-for-package** - Encourage packages to provide configuration options
2. **prefer-config-for-remote** - Suggest adding headers configuration for remotes
3. **require-arg-leading-dashes** - Ensure named arguments start with dashes
4. **no-template-variables-missing** - Validate template variables are defined
5. **require-valid-value-format** - Ensure values match expected data types
6. **no-secret-template** - Warn about secret fields with template variables
7. **no-unused-variables** - Detect unused variable definitions
8. **no-value-with-irrelevant-properties** - Warn about conflicting field properties
9. **no-secret-static-value** - Warn about static values marked as secret
10. **require-valid-default-choice** - Validate default values against choices
11. **no-transport-url-variables-missing** - Ensure transport URL variables are defined
12. **no-remote-transport-variables** - Prevent variables in remote transport URLs
13. **prefer-dynamic-port** - Encourage dynamic port variables over hard-coded ports

## Validation Types

- **Parse Errors**: Invalid JSON syntax
- **Schema Errors**: Violations of the official MCP server schema
- **Linter Errors**: Best practice violations (error, warning, info severity)

## License

MIT

