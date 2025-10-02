# TODO

Add support for "strict" mode
- No inference of things like packageHint
- No auto add of package ref
- No auto prefix of arg names that don't start with a dash
- Review and identify any other non-spec massaging we do

Limitations (isSecret):
- Fields with fixed "value" and "isSecret" are not currently obscured in the UX (it's not clear they should be)
- Input format boolean or input with choices shows dropdown, whose selection is not masked if "isSecret" is specified

## Validator

Separate package (CLI and API) published to npm 

Implement linter levels, rule suppression in CLI

Implement linter rule suppression in server.json object

## Build System

**Issue**: mcp-registry-validator dist files are checked into git, causing merge conflicts and repo bloat. However, removing them breaks GitHub Pages deployment since the Next.js app imports directly from `dist/browser`.

**Solution**: Add build step to deploy workflow before Next.js build:
```yaml
- name: Build mcp-registry-validator
  run: cd packages/mcp-registry-validator && pnpm build
```
Then remove `dist/` from git tracking and add to `.gitignore`.

Linter - implement suppression by rule:
{
  "name": "my-server",
  "_meta": {
    "io.modelcontextprotocol.registry/official": { ... },
    "io.modelcontextprotocol.registry/linter": {
      "suppress": ["require-config-for-package", "prefer-config-for-remote"]
    }
  }
}

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

## server.json schema recommendations

https://github.com/modelcontextprotocol/registry/discussions/572

NamedArgument description change to `--flag {value}`

Input properties description remove "default" from first sentence

PositionalArgument valueHint - add to all Input objects, remove anyOf value/valueHint requirement on PositionalArgument

## Docs improvements

Update Generic Registry openapi spec
- https://github.com/modelcontextprotocol/registry/blob/main/docs/reference/api/openapi.yaml
- With Transport changes (as in: https://github.com/modelcontextprotocol/registry/pull/345)
- Assuming this file was manually created given that it has drifted and is checked-in (as opposed the official version which is generated from Go code)

Update Official Registry openapi spec:
- This the source of truth: https://github.com/modelcontextprotocol/registry/blob/main/docs/reference/server-json/server.schema.json
- But https://registry.modelcontextprotocol.io/openapi.yaml (and https://registry.modelcontextprotocol.io/docs) are not driven by the schema, they are driven by the Go struct field tags which don't include the docs (I don't see any clean way to fix that without manually maintaining them in both places - yuck)

These docs are great and should probably be linked in the Publish My Server doc
- https://github.com/modelcontextprotocol/registry/blob/main/docs/reference/server-json/generic-server-json.md
- Underlying docs: server.json spec (links to server.schema.json)

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