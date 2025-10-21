# TODO

## Application Enhancements

### Component Library
- Extract UI components into `@mcp-registry/ui` package
- Enable other MCP applications to reuse components:
  - `ServerList` - browsing and search UI
  - `ServerDetailView` - server details with metadata
  - `ValidationIssues` - validation error display
  - `ConfigGenerator` - configuration form and preview

### Additional Framework Support
- Add Express adapter for `mcp-registry-server` package
- Enable use in non-Next.js environments (e.g., MCP Gateway integration)

### Scalability & Performance
- Add database data source (PostgreSQL, MongoDB, etc.) if registry grows beyond 100k servers
- Implement Redis caching strategy for high-traffic scenarios
- Add rate limiting to protect API endpoints

### Analytics & Monitoring
- Add usage metrics and analytics
- Monitor API performance and errors
- Track popular servers and search patterns

### Publishing Support
- Consider adding write endpoints if moving from read-only mirror
- Implement `POST /v0/publish` from OpenAPI spec
- Add authentication and validation for submissions

## Validator & Linter


In prod, suppress runtimeHint and all fixed args/env vars/headers (only show UX for elements being configured)

Add support for "strict" mode
- No inference of things like packageHint
- No auto add of package ref
- No auto prefix of arg names that don't start with a dash
- Review and identify any other non-spec massaging we do

Limitations (isSecret):
- Fields with fixed "value" and "isSecret" are not currently obscured in the UX (it's not clear they should be)
- Input format boolean or input with choices shows dropdown, whose selection is not masked if "isSecret" is specified

Linter - valueHint on named args (not allowed / needed)

## Pending registry PRs

### https://github.com/modelcontextprotocol/registry/pull/570

Remote URI template substitution
- Implement config UX support for remote variables
- Implement token replacement in generated config for same
- Update linter rules 
  - Remove no-remote-transport-variables
  - Add no-remote-template-variabes-missing or exapand no-template-variables-missing to cover
  - Same for no-unused-variables

### https://github.com/modelcontextprotocol/registry/pull/601

Implement placeholder support in UX

## Config Validation in our UX

1. Validate JSON
2. Validate server.schema.json (via Ajv)
3. Run linter rules

Consistent result format consolidated across all checks and displayed

Schema and linter return JSON path indicating error
- We could use jsonc to highlight the JSON element corresponding to the schema/linter issue

# Official MCP registry





## Issues with current servers

Servers using default with what should be placeholder:
- io.github.SamYuan1990/i18n-agent-action
- io.github.cr7258/elasticsearch-mcp-server (maybe)

Servers using "value" as "default":
- io.github.ChiR24/unreal-engine-mcp
- io.github.florentine-ai/mcp
- io.github.saucelabs-sample-test-frameworks/sauce-api-mcp

Use of value with token and no variable (dozens of these)

"remotes": [
  {
    "type": "streamable-http",
    "url": "https://server.smithery.ai/@arjunkmrm/perplexity-search/mcp",
    "headers": [
      {
        "description": "Bearer token for Smithery authentication",
        "isRequired": true,
        "value": "Bearer {smithery_api_key}",
        "isSecret": true,
        "name": "Authorization"
      }
    ]
  }
],

Either "value" should be "default", or ideally:

"remotes": [
  {
    "type": "streamable-http",
    "url": "https://server.smithery.ai/@arjunkmrm/perplexity-search/mcp",
    "headers": [
      {
        "description": "Bearer token for Smithery authentication",
        "value": "Bearer {smithery_api_key}",
        "name": "Authorization",
        "variables": {
          "smithery_api_key": {
            "description": "Smithery API key",
            "isRequired": true,
            "isSecret": true,
            "format": "string"
          }
        }
      }
    ]
  }
],

Note: Don't need isRequired or isSecret on header, since it's a static pattern and the secret is in the variable