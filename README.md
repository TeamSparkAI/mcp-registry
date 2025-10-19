# MCP Registry Mirror & API Server

A TypeScript implementation of the [Model Context Protocol Registry](https://github.com/modelcontextprotocol/registry), providing:

1. **Registry Mirror Application** - Next.js web app deployed on Vercel
2. **Reusable API Server Package** - npm package for adding registry functionality to your own apps
3. **Validation Tools** - Schema validation and linting for server.json files

## 🚀 Live Application

**[https://teamspark-mcp-registry.vercel.app/](https://teamspark-mcp-registry.vercel.app/)**

### Features

- **Registry Explorer** - Browse and search all 668 MCP servers
- **Server Details** - View full metadata, packages, and configuration options  
- **Configuration Generator** - Generate MCP client configs with custom settings
- **Server.json Tester** - Validate and lint server.json files
- **API Access** - Full REST API at `/api/v0/*` endpoints

## 📦 Packages

This monorepo contains reusable TypeScript packages:

### `mcp-registry-validator`

Schema validation and linting for MCP server.json files.

```typescript
import { validateServerJson } from 'mcp-registry-validator';

const result = await validateServerJson(serverJsonString);
console.log(result.valid, result.issues);
```

**Features:**
- Multi-version schema support
- Comprehensive linter rules
- Browser and Node.js compatible
- Detailed error messages

### `mcp-registry-server`

Core API server implementation with pluggable data sources.

```typescript
import { createRegistryHandler, FileDataSource } from 'mcp-registry-server';

// Next.js API route
const handler = createRegistryHandler({
  dataSource: new FileDataSource({
    registryPath: 'public/server-registry.json'
  })
});

export { handler as GET, handler as POST };
```

**Features:**
- Framework-agnostic core with Next.js adapter
- Pluggable data source interface (file, database, custom)
- In-memory caching for performance
- Full OpenAPI spec implementation
- Serverless-ready (Vercel, AWS Lambda, etc.)

**[→ Full Package Documentation](packages/mcp-registry-server/README.md)**

## 🏗️ Architecture

### Data Flow

```
Official Registry (GitHub)
    ↓ (daily sync via GHA)
server-registry.json
    ↓ (loaded by FileDataSource)
In-Memory Cache
    ↓ (served by RegistryService)
API Endpoints
    ↓ (consumed by frontend)
Next.js Application
```

### Key Design Principles

- **Frontend is 100% API-based** - No direct file access from client
- **Pluggable data sources** - Swap FileDataSource for database, gateway, etc.
- **Server-side validation** - Schemas bundled at build time
- **Serverless-ready** - Works on Vercel, AWS Lambda, etc.

## 🔄 Automated Updates

A GitHub Action runs daily to:
- Download latest `server-registry.json` from official registry
- Sync schema versions from `modelcontextprotocol/static`
- Commit changes and trigger deployment

See [`.github/workflows/download-registry.yml`](.github/workflows/download-registry.yml)

## 🛠️ Development

### Prerequisites

- Node.js 18+
- pnpm 10+

### Setup

```bash
# Install dependencies
pnpm install

# Build packages
pnpm --filter mcp-registry-validator build
pnpm --filter mcp-registry-server build

# Run dev server
pnpm run dev
```

### Project Structure

```
/app                    # Next.js application
  /api                  # API routes
  /components           # React components
  /servers/[serverId]/[versionId]  # Dynamic server detail pages
/packages
  /mcp-registry-validator   # Validation package
  /mcp-registry-server      # API server package
/registry               # Protocol references
  /schema               # JSON schemas (versioned)
  openapi.yaml          # API specification
/public
  server-registry.json  # Registry data (synced daily)
```

### Testing

```bash
# Run the validator
cd packages/mcp-registry-validator
pnpm dev validate path/to/server.json

# Test API endpoints
curl 'http://localhost:3000/api/v0/servers?limit=5'
curl 'http://localhost:3000/api/v0/servers/{serverId}/versions'

# Validate the entire registry
pnpm run registry:validate
```

## 📚 Documentation

- [**Design Document**](docs/registry-service-design.md) - Architecture decisions and future enhancement ideas
- [**Registry Reference**](registry/README.md) - OpenAPI spec and schema management
- [**Official Protocol**](https://github.com/modelcontextprotocol/registry) - MCP Registry protocol specification

## 🎯 Current Status

**Production Deployment**: [https://teamspark-mcp-registry.vercel.app/](https://teamspark-mcp-registry.vercel.app/)

### ✅ What's Built

- Registry mirror application with API and web UI
- `mcp-registry-validator` - Schema validation and linting package
- `mcp-registry-server` - Core API server with Next.js adapter
- Server-side validation endpoints
- Automated daily data and schema syncing
- 668 servers, ~414ms API response time

### 🔮 Potential Enhancements

- Component library (`@mcp-registry/ui`) for reusable UI components
- Express adapter for `mcp-registry-server`
- Database data source (if scale requires beyond current 668 servers)
- Rate limiting, analytics, and monitoring

See [docs/registry-service-design.md](docs/registry-service-design.md) for architecture details and enhancement ideas.

## 🤝 Contributing

This is an alternative TypeScript implementation of the official MCP Registry protocol. For protocol discussions and issues, see the [official registry project](https://github.com/modelcontextprotocol/registry).

## 📄 License

MIT

## 🔗 Links

- [Official MCP Registry](https://registry.modelcontextprotocol.io)
- [MCP Protocol](https://github.com/modelcontextprotocol)
- [Official Registry Protocol (Go)](https://github.com/modelcontextprotocol/registry)
