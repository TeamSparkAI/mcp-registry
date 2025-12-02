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

📊 VALIDATION SUMMARY (2350 server entries)
══════════════════════════════════════════════════
✅ Valid: 1699 servers
❌ Invalid: 651 servers (398 schema errors, 291 linter errors)
📈 Success rate: 72.3%

📋 SCHEMA VERSIONS
──────────────────────────────────────────────────
  2025-10-17 (current): 1113 servers
  2025-09-29: 1059 servers
  2025-09-16: 158 servers
  2025-07-09: 3 servers
  missing: 17 servers

📊 SCHEMA ERROR BREAKDOWN
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
⚠️  Any linter issues: 1454 servers

📊 LINTER RULE BREAKDOWN
──────────────────────────────────────────────────
  require-config-for-package: 688 instances
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


live.alpic.staging/send-email-mcp-01f22b8f (14 versions) - this vendor has many other servers with many versions

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

### No package or remote config (allowed by schema)

54% (1279 of 2350) have no package or remote configuration (all servers)
66% (742 of 1113) have no package or remote config (current schema)

These server entries do not contain enough information to allow a user to install or connect to the server


