# TODO

Add support for "strict" mode
- No inference of things like packageHint
- No auto add of package ref
- No auto prefix of arg namess that don't start with a dash
- Review and identify any other non-spec massaging we do

Add support for other registry types (npm and pypi should work)
- oci (docker)
- mcpb
- nuget

Limitations (isSecret):
- Fields with fixed "value" and "isSecret" are not currently obscured in the UX (it's not clear they should be)
- Input format boolean or input with choices shows dropdown, whose selection is not masked if "isSecret" is specified

-----

## Official MCP Registry project

Clarify named arguments, docs say: "A command-line `--flag={value}`."
- In actualy use it is `--flag {value}` (in all cases spot-checked in current registry)
- If you needed `--flag={value}` the more appropriate config would be a positional arg with a variable

"value" description - remove "default" from description (several published servers use "value" as "default")
- io.github.ChiR24/unreal-engine-mcp
- io.github.florentine-ai/mcp
- io.github.saucelabs-sample-test-frameworks/sauce-api-mcp
- All Smithery servers use "value": "Bearer {smithery_api_key}" (which should either be "default", or they should have a variable for the token value)

valueHint - only on positional args - why not on all values (named args, env vars, and headers)?
- Why is value or valueHint required in schema?  (with description it's reasonable to have neither even for a positional arg)

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

## Config Validation in our UX

server.schema.json is a JSON Schema Draft 7 file
Ajv (in Javascript) is the most popular validator

Parse as JSON (done, maybe better error reporting)
Validate schema with Ajv
Apply additional linter rules that schema won't catch:
- No config for package/remote (per package/remote) - explain why this could be better ;)
- Named arg with no leading dashes (field)
- Value with token in braces and no corresponding variable (field)
- Value and default, isRequired, choices (field)
  - isSecret (static value that is secret, is that a thing?)
- Value not consistent with format (number and not number, boolean and not string true/false)
- Value with tokens/variables and isSecret (could be, probably not, actually a secret)
- Variable in parent string and not required (maybe real, likely error)

### Issues with current servers

Uses of "value" that were intended to be default (see above)

Use of value with token and no variable

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