# MCP Registry - Deployment Guide

## Overview

This document describes the deployed application at [https://registry.teamspark.ai/](https://registry.teamspark.ai/).

**What it is:**
A Next.js application that mirrors the official MCP Registry (updated daily) and provides:
1. **Registry Website** - Browse and search servers visually
2. **Registry API** - REST API implementing the official MCP Registry protocol
3. **Server Tester** - Validate and test server.json files

**For package documentation**, see:
- [mcp-registry-server](../packages/mcp-registry-server/README.md) - API server package with architecture details
- [mcp-registry-validator](../packages/mcp-registry-validator/README.md) - Validation package

**For future ideas**, see [TODO.md](../todo.md)

## Protocol Reference

**Official MCP Registry Protocol**: The reference Go implementation and protocol specification are maintained as an open source project at [https://github.com/modelcontextprotocol/registry](https://github.com/modelcontextprotocol/registry)

**Protocol Specification**: The API contract is defined in the OpenAPI specification at [https://github.com/modelcontextprotocol/registry/blob/main/docs/reference/api/openapi.yaml](https://github.com/modelcontextprotocol/registry/blob/main/docs/reference/api/openapi.yaml)

This TypeScript implementation follows the same protocol and API contract as defined in the OpenAPI specification.

**Architecture**: The core protocol implementation is completely independent of the web framework and data storage mechanism. See [mcp-registry-server package documentation](../packages/mcp-registry-server/README.md#architecture) for detailed architecture explanation.

## The Deployed Application

**Live at**: [https://registry.teamspark.ai/](https://registry.teamspark.ai/)

This project deploys a complete registry mirror as a Next.js application on Vercel, consisting of:

### Registry API
- Implements the official MCP Registry protocol (OpenAPI spec)
- Endpoints: `/api/v0/*` (Next.js API routes)
- Supports pagination, search, and filtering
- Backed by file-based data source with periodic updates from official registry

### Visual Registry Explorer
- Web UI for browsing and searching MCP servers
- Server detail views with full metadata
- Configuration helper for generating MCP client configs
- Uses the registry API as its data source

### Server.json Tester/Verifier
- Standalone tool for testing and validating server.json files
- Paste or upload server.json content
- Real-time schema validation
- Linter rule checking
- Configuration preview

### Data Updates
- GitHub Action periodically downloads data from official registry
- Generates index and individual server files
- Automatic Vercel deployment on data changes

## Deployment Configuration

**Live URL**: [https://registry.teamspark.ai/](https://registry.teamspark.ai/)

**Platform**: Vercel
- Serverless deployment
- Auto-deploy from GitHub on push to `main`
- Node.js runtime for API routes (required for file system access)
- Edge Network for caching and static assets

**Data Storage**: File-based with in-memory caching
- Single `public/server-registry.json` file
- Synced daily from official registry via GitHub Actions
- FileDataSource implementation (see [package docs](../packages/mcp-registry-server/README.md))

## Application Routes

### API Endpoints

Implements the official MCP Registry protocol at `/api/v0/*`:

```
GET  /api/v0/servers                           # List servers
GET  /api/v0/servers/{serverName}/versions     # List server versions
GET  /api/v0/servers/{serverName}/versions/{version}  # Get specific version
POST /api/validate                              # Validate server.json
```

See [OpenAPI spec](../registry/openapi.yaml) for full API documentation.

### Web Routes

```
/                                # Main registry explorer
/servers/{serverName}            # All versions of a server
/servers/{serverName}/{version}  # Server detail page  
/about                           # About this service
/tester                          # Server.json validator/tester
```

## Automated Updates

**GitHub Action** (`.github/workflows/download-registry.yml`):
- **Schedule**: Daily at 2 AM UTC
- **Process**: 
  1. Downloads `server-registry.json` from official registry
  2. Syncs schemas from `modelcontextprotocol/static`
  3. Commits changes with `[skip ci]` message
  4. Triggers Vercel deployment automatically

**Schema Versioning**:
- Current: `/registry/schema/server.schema.json`
- Versioned: `/registry/schema/{version}/server.schema.json`
- Bundled into validator at build time

