# mcp-registry-validator

MCP Server Registry Validator - Schema validation and linting for MCP server registry entries.

Validate server.json objects against the schema from [The Official MCP Registry](https://github.com/modelcontextprotocol/registry/) combined with linter rules from this project.

This is the same validation performed in developer test mode on the [ToolVault ToolCatalog MCP Server Registry](https://teamsparkai.github.io/ToolCatalog/registry).

Available as a command-line app or via API.

## Features

- **JSON Validation**: Validates server.json as valid JSON
- **Schema Validation**: Validates server.json files against the official MCP server schema
- **Custom Linter Rules**: Applies comprehensive linter rules for best practices

## Installation

```bash
npm install mcp-registry-validator
```

## CLI Usage

The CLI can be used in three ways:

### Option 1: Direct Installation
```bash
# Install globally
npm install -g mcp-registry-validator

# Use directly
mcp-validate validate server.json
mcp-validate validate-registry server-registry.json
mcp-validate --linter-docs prefer-dynamic-port
```

### Option 2: npx (no installation required)
```bash
npx mcp-registry-validator validate server.json
npx mcp-registry-validator validate-registry server-registry.json
npx mcp-registry-validator --linter-docs prefer-dynamic-port
```

### Option 3: Local Installation
```bash
# Install in your project
npm install mcp-registry-validator

# Use via npm scripts or node_modules
npx mcp-validate validate server.json
```

### Available Commands

#### Validate a single server file (server.json object)
```bash
mcp-validate validate server.json
```

#### Validate entire registry (array of server.json objects)
```bash
mcp-validate validate-registry server-registry.json
```

#### Show linter rule documentation
```bash
# Show all rules
mcp-validate --linter-docs

# Show specific rule
mcp-validate --linter-docs prefer-dynamic-port
```

## Sample Output

### Valid Server (with linter suggestions)
```bash
$ mcp-validate validate server.json

🔍 Validating server: server.json

✅ Server complies with schema!

📋 All Issues:
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][WARNING] /packages/0/transport/url: Transport URL contains hard-coded port 8080, consider using {port} variable substitution (prefer-dynamic-port)
```

### Invalid Server (with errors)
```bash
$ mcp-validate validate server.json

🔍 Validating server: server.json

❌ Server has schema errors:
   • [SCHEMA][ERROR] /repository/url: must match format "uri" (#/definitions/Repository/properties/url/format)

📋 All Issues:
   • [SCHEMA][ERROR] /repository/url: must match format "uri" (#/definitions/Repository/properties/url/format)
   • [LINTER][WARNING] /packages/0/transport/url: Transport URL contains hard-coded port 8080, consider using {port} variable substitution (prefer-dynamic-port)
```

## Programmatic API

```typescript
import { validateServerJson, lintServerData, linterRules } from 'mcp-registry-validator';

// Validate a server JSON string
const result = await validateServerJson(jsonString);

// Run linter rules only
const issues = await lintServerData(serverData);

// Access available linter rules
console.log(linterRules.map(r => r.name));
```

## Linter Rules

The validator includes over a dozen comprehensive linter rules for MCP server registry best practices. For detailed documentation of each rule including examples, triggers, and guidance, see:

**[📚 Complete Linter Rules Documentation](./linter.md)**

You can also view linter rules directly via CLI:
```bash
mcp-validate --linter-docs                      # Show all rules
mcp-validate --linter-docs prefer-dynamic-port  # Show specific rule
```

## Validation Types

- **Parse Errors**: Invalid JSON syntax
- **Schema Errors**: Violations of the official MCP server schema
- **Linter Errors**: Best practice violations (error, warning, info severity)

## License

MIT

