# MCP Registry Protocol Reference

This directory contains reference documentation for the official MCP Registry protocol.

## OpenAPI Specification

- **openapi.yaml** - The official OpenAPI specification for the MCP Registry API
  - Source: https://github.com/modelcontextprotocol/registry/blob/main/docs/reference/api/openapi.yaml
  - Defines the REST API endpoints, request/response formats, and protocol behavior
  - Our TypeScript implementation follows this specification
  - Manually imported from the source and manually updated

### Schema Directory

- **schema/server.schema.json** - Current JSON Schema for MCP server.json files
  - **Source of truth** for current schema version in this project
  - Automatically updated to the latest version from https://github.com/modelcontextprotocol/static
  - Latest version determined by sorting available schema versions (e.g., 2025-10-17 > 2025-09-16)
  - Only updated when a newer version is detected
  - Defines the structure and validation rules for server metadata

- **schema/YYYY-MM-DD/** - Versioned schema directories
  - Each directory contains `server.schema.json` for that specific version
  - Source: https://github.com/modelcontextprotocol/static/tree/main/schemas
  - Synced automatically to support validation of older server.json files
  - New versions are added automatically, existing versions are not modified
  - Example: `schema/2025-09-16/server.schema.json`

## Updating Schemas

**Automated (Daily via GitHub Actions):**
- The `download-registry.yml` workflow runs daily at 2 AM UTC
- Clones https://github.com/modelcontextprotocol/static
- Scans `schemas/` directory for all versioned subdirectories
- Adds any new versioned schemas to `schema/YYYY-MM-DD/` directories
- Determines latest version by sorting directory names (e.g., 2025-10-17)
- Updates `schema/server.schema.json` only if a newer version exists
- Commits and pushes changes automatically

## Usage

These reference files serve as the source of truth for:
1. **API Implementation** - `openapi.yaml` defines the REST API contract
2. **Schema Validation** - `schema/` directory provides current and historical schemas

## Official Documentation

- MCP Registry Protocol: https://github.com/modelcontextprotocol/registry
- Registry API Reference: https://registry.modelcontextprotocol.io
