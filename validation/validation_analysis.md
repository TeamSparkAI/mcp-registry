# Data validation analysis [12/01/2025]

As of 12/01/2025

## Download script

Downloads currently published servers from https://registry.modelcontextprotocol.io/v0

Usage: pnpm registry:download

## Validation script

Validate local (downloaded) server list

Usage: pnpm registry:validate [options]

Options:
  --help, -h                    Show this help message

  --linter-docs [ruleName]      Show linter rule documentation
                                If ruleName is provided, show docs for that rule only
                                Otherwise, show docs for all rules

  --schema-version <version>    Only validate servers with the specified schema version
                                Example: --schema-version 2025-10-17

  --rule <ruleName>             Only show servers/issues with the specified rule
                                Can be a linter rule name (e.g., "no-leading-dashes")
                                or a schema rule path (partial match supported)

  --mode <mode>                 Filter by issue type: "schema" or "linter"
                                If not specified, shows both schema and linter issues

  --summary-only                Show only summary sections (skip detailed server issues)

Examples:
  pnpm registry:validate
  pnpm registry:validate --mode schema
  pnpm registry:validate --mode linter
  pnpm registry:validate --schema-version 2025-10-17
  pnpm registry:validate --rule no-leading-dashes
  pnpm registry:validate --rule /properties/packages/items/properties/transport
  pnpm registry:validate --summary-only
  pnpm registry:validate --schema-version 2025-10-17 --mode schema --summary-only
  pnpm registry:validate --linter-docs
  pnpm registry:validate --linter-docs rule-name-here

## Validation Summary

📊 VALIDATION SUMMARY
══════════════════════════════════════════════════
✅ Valid: 1703 servers
❌ Invalid (schema or linter errors): 651 servers
📈 Success rate: 72.3%

📋 SCHEMA VERSIONS
──────────────────────────────────────────────────
  2025-10-17 (current): 1117 servers
  2025-09-29: 1059 servers
  2025-09-16: 158 servers
  2025-07-09: 3 servers
  missing: 17 servers

📊 SCHEMA ERROR BREAKDOWN -
   Search in details by wrapping in square brackets, e.g.: [required@/repository]
──────────────────────────────────────────────────
  required@/repository: 512 instances
  required@/packages/*: 148 instances
  schema-missing@/: 17 instances
  not@/packages/*/version: 15 instances
  enum@/packages/*/transport/type: 10 instances
  enum@/packages/*/packageArguments/*/type: 6 instances
  format@/packages/*/transport/url: 5 instances
  anyOf@/packages/*/transport: 5 instances
  enum@/packages/*/environmentVariables/*/format: 4 instances
  anyOf@/packages/*/packageArguments/*: 3 instances
  enum@/remotes/*/type: 2 instances
  format@/remotes/*/url: 2 instances
  anyOf@/remotes/*: 2 instances
  required@/packages/*/packageArguments/*: 1 instances

🧭 LINTER SUMMARY
══════════════════════════════════════════════════
🚫 Failed linter (error): 291 servers
⚠️  Any linter issues: 1456 servers

📊 LINTER RULE BREAKDOWN
   Search in details by wrapping in parens, e.g.: (require-config-for-package)
──────────────────────────────────────────────────
  require-config-for-package: 690 instances
  prefer-config-for-remote: 581 instances
  no-template-variables-missing: 289 instances
  no-value-with-irrelevant-properties: 189 instances
  no-secret-template: 151 instances
  no-secret-static-value: 151 instances
  prefer-dynamic-port: 99 instances
  require-args-leading-dashes: 51 instances
  require-valid-default-choice: 8 instances
  require-valid-choices-format: 4 instances
  no-unused-variables: 2 instances

❌ Validation Failed: 398 server(s) with schema errors, 291 server(s) with linter errors (651 total invalid)

## Issues Under registry control

### required@/repository: 512 instances
  • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required)
  • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required)

Used to be:
    "repository": {
        "url": "",
        "source": ""
    },

Now:
    "repository": {},

mcp-publish was/is causing, migration didn't help (empty object still doesn't validate)

### schema-missing@/: 17 instances

Registry probably shouldn't publish servers with missing schemas or bad schema references

## Issues under publisher control

### required@/packages/*: 148 instances

Missing package version (all in servers with schema prior to current)

### Other schema errors in current version

  enum@/packages/*/packageArguments/*/type: 4 instances
  anyOf@/packages/*/packageArguments/*: 2 instances

This is two servers from the same vendor with a parameter having a "type" of ""

io.github.easytocloud/mac-letterhead

    "packageArguments": [
      {
        "value": "mcp",
        "type": ""
      }
    ]


### No package or remote config (allowed by schema)

(require-config-for-package)
(prefer-config-for-remote)

54% (1279 of 2350) have no package or remote configuration (all servers)
66% (742 of 1113) have no package or remote config (current schema)

These server entries do not contain enough information to allow a user to install or connect to the server.  Is that OK?  It's basically saying "come to the repo and figure out how to install/connect"

### Bad understanding of "value"

no-template-variables-missing: 289 instances
no-value-with-irrelevant-properties: 189 instances
no-secret-template: 151 instances
no-secret-static-value: 151 instances

Most of the Smithery servers (as below) have a value that specifies variable, but no variable is defined 
- Should either define variable, or change "value" to "default" so user can type see they need to supply it
- Genereally seems to be a misunderstanding that "value" is a static value, and not understanding that template/variable feature exists

no-template-variable-missing - specifying a variable in the value, but not defining it

no-value-with-irrelevant-properties - using isRequired on "value" (provided static value) makes no sense

no-secret-template - a value containing a template should not be secret (you want to see the template, just the variable should be seceret)

no-secret-static-values - isSecret is not applicable for a static value - the intention in all of these cases is to have the "smithery_api_key" variable be a secret, not the value template

    "server": {
      "$schema": "https://static.modelcontextprotocol.io/schemas/2025-09-29/server.schema.json",
      "name": "ai.smithery/BadRooBot-my_test_mcp",
      "description": "Get current weather for any city and create images from your prompts. Streamline planning, reports…",
      "repository": {
        "url": "https://github.com/BadRooBot/python_mcp",
        "source": "github"
      },
      "version": "1.14.0",
      "remotes": [
        {
          "type": "streamable-http",
          "url": "https://server.smithery.ai/@BadRooBot/my_test_mcp/mcp",
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
      ]
    }

### prefer-dynamic-port - 99 instances

Package transport URL with hardcoded ports (prefer dynamic with port variable

    {
      "server": {
        "$schema": "https://static.modelcontextprotocol.io/schemas/2025-09-29/server.schema.json",
        "name": "io.github.Antonytm/mcp-all",
        "description": "A Model Context Protocol server to run other MCP servers",
        "repository": {
          "url": "https://github.com/Antonytm/mcp-all",
          "source": "github"
        },
        "version": "0.1.14",
        "packages": [
          {
            "registryType": "npm",
            "registryBaseUrl": "https://registry.npmjs.org",
            "identifier": "@antonytm/mcp-all",
            "version": "0.1.14",
            "transport": {
              "type": "streamable-http",
              "url": "http://localhost:3001/mcp"
            }
          }
        ]
      }
    }

### require-args-leading-dashes: 51 instances

Params specified with leading dash or dashes.

In all cases, server does actually require dashes in param names (but didn't specify them)

I recommended adding a `prefix` property to address this (make it impossible): https://github.com/modelcontextprotocol/registry/issues/657

https://www.npmjs.com/package/@agent-infra/mcp-server-filesystem

    {
      "server": {
        "$schema": "https://static.modelcontextprotocol.io/schemas/2025-09-29/server.schema.json",
        "name": "io.github.bytedance/mcp-server-filesystem",
        "description": "MCP server for filesystem access",
        "repository": {
          "url": "https://github.com/bytedance/UI-TARS-desktop",
          "source": "github",
          "subfolder": "packages/agent-infra/mcp-servers/filesystem"
        },
        "version": "1.0.0",
        "packages": [
          {
            "registryType": "npm",
            "registryBaseUrl": "https://registry.npmjs.org",
            "identifier": "@agent-infra/mcp-server-filesystem",
            "version": "latest",
            "transport": {
              "type": "stdio"
            },
            "packageArguments": [
              {
                "description": "Comma-separated list of allowed directories for file operations",
                "isRequired": true,
                "format": "string",
                "type": "named",
                "name": "allowed-directories"
              }
            ]
          }
        ]
      }
    }

### Misc

require-valid-default-choice: 8 instances
require-valid-choices-format: 4 instances
no-unused-variables: 2 instances

### Many versions / test servers

This vendor (and several others) appear to be "test publishing" (often a dozen or more versions in quick succession, sometimes obvious "test" servers)

   live.alpic.staging/send-email-mcp-01f22b8f (14 versions)

## Issues

If we are going to put this validation in MCP Inspector (TypeScript) and MCP Registry (Golang), how do we avoid maintaining parallel implementations

An argument for the publisher passing validation is that at some point it seems likely that they are also going to be signing these entries, meaning we can't just "fix them".