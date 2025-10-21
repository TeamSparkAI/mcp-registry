# mcp-registry-server

A framework-agnostic TypeScript implementation of the [MCP Registry Protocol](https://github.com/modelcontextprotocol/registry) with pluggable data sources and adapters for Next.js and Express.

## Features

- ✅ **Full OpenAPI Spec Implementation** - All read endpoints from the official MCP Registry API
- 🔌 **Pluggable Data Sources** - File-based, database, or custom data sources
- ⚡ **Framework Adapters** - Next.js (available), Express (planned)
- 🚀 **Serverless Ready** - Works on Vercel, AWS Lambda, etc.
- 💾 **In-Memory Caching** - Optional caching for performance
- 📦 **TypeScript First** - Full type safety with exported interfaces

## Architecture

This package implements the **MCP Registry Protocol** as a reusable library, with the core protocol logic completely independent of both the web framework and the data storage mechanism.

### Three-Layer Design

The architecture separates concerns into three distinct layers:

```
┌─────────────────────────────────────┐
│   Framework Adapter (Next.js/...)   │  ← HTTP request/response handling
├─────────────────────────────────────┤
│   RegistryService (Protocol Core)   │  ← Protocol implementation
├─────────────────────────────────────┤
│   DataSource (File/DB/HTTP/...)     │  ← Data storage & retrieval
└─────────────────────────────────────┘
```

**Layer 1: RegistryService (Core Protocol)**
- Implements the MCP Registry OpenAPI specification
- Framework-agnostic: takes method/path/query, returns data/status
- No dependencies on HTTP libraries, web frameworks, or storage
- Pure TypeScript business logic, fully testable in isolation

**Layer 2: Data Source Interface**
- Abstract interface: `RegistryDataSource`
- Implementations: `FileDataSource`, future `DatabaseDataSource`, `HttpDataSource`, etc.
- Core service depends only on the interface, not implementations
- Swap storage backends without touching protocol logic

**Layer 3: Framework Adapters**
- Thin wrappers: convert framework types to/from service types
- Next.js adapter provided, Express adapter planned
- Add support for any framework with ~10 lines of adapter code

**Benefits:**
- **Portability**: Same core runs in Next.js, Express, Fastify, Lambda, etc.
- **Flexibility**: Start with files, scale to database, add caching layers
- **Testability**: Test protocol logic with mock data sources, no HTTP mocking needed
- **Reusability**: Published npm package anyone can integrate

### Design Principles

**Single Base Path**
- Users mount the registry at **one** base path (e.g., `/api/v0` or `/registry`)
- The library handles all internal routing and sub-paths
- Users never need to know about individual endpoints like `/servers` or `/servers/:id`
- All routing logic is encapsulated within the package

**Separation of Concerns**
- Server implementation is independent of data storage
- Pluggable `RegistryDataSource` interface allows multiple backends
- Framework adapters are thin wrappers around the core service
- Data source abstraction enables different deployment scenarios

## Installation

```bash
npm install mcp-registry-server
# or
pnpm add mcp-registry-server
# or
yarn add mcp-registry-server
```

## Quick Start

### Next.js API Route

Create a catch-all API route at `app/api/v0/[...path]/route.ts`:

```typescript
import { createRegistryHandler, FileDataSource } from 'mcp-registry-server';

const handler = createRegistryHandler({
  dataSource: new FileDataSource({
    registryPath: 'public/server-registry.json'
  })
});

export { handler as GET, handler as POST };
```

That's it! Your registry API is now available at `/api/v0/servers`.

## API Endpoints

The registry server implements the following endpoints:

```
GET  /v0/servers
     ?cursor={offset}          # Pagination offset (default: 0)
     &limit={count}            # Results per page (default: 50)
     &search={term}            # Search server names/descriptions
     &updated_since={date}     # Filter by update date (RFC3339)
     &version={version}        # Filter by version

GET  /v0/servers/{serverId}/versions
     Returns all versions of a specific server

GET  /v0/servers/{serverId}/versions/{versionId}
     Returns a specific server version
```

## Data Sources

The registry server uses pluggable data sources, allowing you to serve data from files, databases, or custom sources.

### FileDataSource

Loads data from a JSON file with in-memory caching.

```typescript
import { FileDataSource } from 'mcp-registry-server';

const dataSource = new FileDataSource({
  registryPath: 'path/to/server-registry.json'
});
```

**Features:**
- Loads entire registry into memory on cold start
- Caches data across warm function invocations
- Fast in-memory filtering and search
- Suitable for up to ~100k servers

**Performance:**
- Fast cold starts (load + parse JSON)
- In-memory operations for warm requests

**Data Format:**

```json
{
  "servers": [
    {
      "$schema": "https://static.modelcontextprotocol.io/schemas/2025-10-17/server.schema.json",
      "name": "example-server",
      "version": "1.0.0",
      "description": "An example server",
      "_meta": {
        "io.modelcontextprotocol.registry/official": {
          "serverId": "uuid-here",
          "versionId": "uuid-here",
          "isLatest": true
        }
      }
      // ... other server.json fields
    }
  ]
}
```

### Custom Data Sources

Implement the `RegistryDataSource` interface:

```typescript
import { RegistryDataSource, ServersQuery, ServerList, Server } from 'mcp-registry-server';

class CustomDataSource implements RegistryDataSource {
  async getServers(query: ServersQuery): Promise<ServerList> {
    // Fetch and filter servers based on query parameters
    return {
      servers: [...],
      metadata: {
        nextCursor: '...',
        totalResults: 100
      }
    };
  }

  async getServerVersionsByServerId(serverId: string): Promise<ServerList> {
    // Return all versions of a server
    return {
      servers: [...],
      metadata: {
        totalResults: 5
      }
    };
  }

  async getServerByIds(serverId: string, versionId: string): Promise<Server | null> {
    // Return specific server version
    return { ... };
  }
}
```

**Example: Database Data Source**

```typescript
class DatabaseDataSource implements RegistryDataSource {
  private db: Database;

  constructor(connectionString: string) {
    this.db = new Database(connectionString);
  }

  async getServers(query: ServersQuery): Promise<ServerList> {
    const { cursor, limit = 50, search, updated_since, version } = query;
    
    let sql = 'SELECT * FROM servers WHERE 1=1';
    const params: any[] = [];
    
    if (search) {
      sql += ' AND (name ILIKE $1 OR description ILIKE $1)';
      params.push(`%${search}%`);
    }
    
    if (updated_since) {
      sql += ` AND updated_at > $${params.length + 1}`;
      params.push(updated_since);
    }
    
    if (version) {
      sql += ` AND version = $${params.length + 1}`;
      params.push(version);
    }
    
    sql += ` ORDER BY name LIMIT $${params.length + 1} OFFSET $${params.length + 2}`;
    params.push(limit, parseInt(cursor || '0'));
    
    const results = await this.db.query(sql, params);
    
    return {
      servers: results.rows,
      metadata: {
        nextCursor: results.rows.length === limit 
          ? (parseInt(cursor || '0') + limit).toString() 
          : undefined,
        totalResults: await this.getCount(query)
      }
    };
  }

  // ... implement other methods
}
```

## Framework Adapters

### Next.js Adapter

The Next.js adapter creates a handler compatible with Next.js 13+ App Router API routes.

```typescript
import { createRegistryHandler } from 'mcp-registry-server';

const handler = createRegistryHandler({
  dataSource: myDataSource,
  basePrefix: '/v0' // optional, defaults to '/v0'
});

export { handler as GET, handler as POST };
```

**Key Features:**
- Automatic request/response conversion
- Query parameter parsing
- Error handling with appropriate HTTP status codes
- Works with Next.js serverless functions

### Express Adapter (Planned)

```typescript
import { createRegistryRouter } from 'mcp-registry-server';
import express from 'express';

const app = express();

const registryRouter = createRegistryRouter({
  dataSource: myDataSource
});

// Mount at any base path
app.use('/registry', registryRouter);
```

## Configuration

### RegistryServiceConfig

```typescript
interface RegistryServiceConfig {
  dataSource: RegistryDataSource;  // Required: Data source implementation
  basePrefix?: string;              // Optional: API path prefix (default: '/v0')
}
```

### FileDataSourceConfig

```typescript
interface FileDataSourceConfig {
  registryPath: string;  // Path to server-registry.json file
}
```

## Deployment Scenarios

### 1. Public Registry Mirror (Vercel)

Deploy a complete registry mirror with automated daily updates.

```typescript
// app/api/v0/[...path]/route.ts
import { createRegistryHandler, FileDataSource } from 'mcp-registry-server';

const handler = createRegistryHandler({
  dataSource: new FileDataSource({
    registryPath: 'public/server-registry.json'
  })
});

export { handler as GET, handler as POST };
```

**Data Management:**
- GitHub Action downloads registry data daily
- Automatic Vercel deployment on data changes
- In-memory caching for fast responses

**Example:** [mcp-registry](https://github.com/TeamSparkAI/mcp-registry)

### 2. MCP Gateway Integration

Serve a registry of locally installed MCP servers from your gateway.

```typescript
import { createRegistryHandler } from 'mcp-registry-server';
import { GatewayDataSource } from './datasources/gateway';

const handler = createRegistryHandler({
  dataSource: new GatewayDataSource({
    gatewayRuntime: myGatewayRuntime
  })
});

export { handler as GET, handler as POST };
```

**Custom Data Source:**

```typescript
class GatewayDataSource implements RegistryDataSource {
  private runtime: GatewayRuntime;

  async getServers(query: ServersQuery): Promise<ServerList> {
    // Query locally installed servers from gateway runtime
    const installedServers = await this.runtime.getInstalledServers();
    
    // Apply filters, pagination, etc.
    return {
      servers: installedServers,
      metadata: { totalResults: installedServers.length }
    };
  }
  
  // ... implement other methods
}
```

### 3. Database-Backed Registry

For high-scale deployments or when you need advanced querying.

```typescript
import { createRegistryHandler } from 'mcp-registry-server';
import { DatabaseDataSource } from './datasources/database';

const handler = createRegistryHandler({
  dataSource: new DatabaseDataSource({
    connectionString: process.env.DATABASE_URL
  })
});

export { handler as GET, handler as POST };
```

**When to use:**
- 200k+ servers
- Complex filtering requirements
- Multiple read replicas
- Advanced analytics

## Performance Characteristics

### FileDataSource

**Memory Usage:**
- Entire registry cached in memory on cold start
- Projected scaling based on registry growth
- Safe up to ~100k servers in memory

**Response Times:**
- Fast cold starts (load + parse JSON)
- In-memory operations for warm requests
- Optimized search and filtering

**Scalability:**
- ✅ Excellent: < 10k servers (fast, simple)
- ✅ Good: 10k - 100k servers (acceptable performance)
- ⚠️  Consider database: > 100k servers (beyond memory limits)

### Database Data Source

**Response Times:**
- Fast indexed queries
- Optimized for large-scale deployments

**Scalability:**
- ✅ Excellent: Any scale with proper indexing
- Horizontal scaling with read replicas
- Query optimization crucial

## TypeScript Types

All types are exported for use in your application:

```typescript
import type {
  Server,
  ServerList,
  ServersQuery,
  RegistryDataSource,
  RegistryServiceConfig
} from 'mcp-registry-server';
```

### Key Interfaces

```typescript
// Server data matching server.schema.json
interface Server {
  $schema: string;
  name: string;
  version: string;
  description?: string;
  packages?: Package[];
  remotes?: Remote[];
  _meta?: {
    'io.modelcontextprotocol.registry/official'?: {
      serverId: string;
      versionId: string;
      isLatest?: boolean;
      publishedAt?: string;
      updatedAt?: string;
    };
  };
  // ... additional fields
}

// API response format
interface ServerList {
  servers: Server[];
  metadata: {
    nextCursor?: string;
    totalResults?: number;
  };
}

// Query parameters
interface ServersQuery {
  cursor?: string;
  limit?: number;
  search?: string;
  updated_since?: string;
  version?: string;
}
```

## Error Handling

The registry service returns appropriate HTTP status codes:

- `200 OK` - Successful request
- `404 Not Found` - Server or version not found
- `500 Internal Server Error` - Server error

Example error response:

```json
{
  "error": "Server not found"
}
```

## Development

```bash
# Install dependencies
pnpm install

# Build the package
pnpm build

# Watch mode
pnpm dev

# Run tests
pnpm test
```

## Related Packages

- **[mcp-registry-validator](https://www.npmjs.com/package/mcp-registry-validator)** - Schema validation and linting for server.json files
- **[@mcp-registry/ui](https://www.npmjs.com/package/@mcp-registry/ui)** (planned) - React components for registry UIs

## Protocol Reference

This package implements the official MCP Registry protocol:

- **Protocol Specification**: https://github.com/modelcontextprotocol/registry
- **OpenAPI Spec**: https://github.com/modelcontextprotocol/registry/blob/main/docs/reference/api/openapi.yaml
- **Official Registry**: https://registry.modelcontextprotocol.io

## Contributing

This is an alternative TypeScript implementation of the MCP Registry protocol. For protocol discussions and issues, see the [official registry project](https://github.com/modelcontextprotocol/registry).

## License

MIT

## Links

- [GitHub Repository](https://github.com/TeamSparkAI/mcp-registry)
- [Example Deployment](https://github.com/TeamSparkAI/mcp-registry)
- [MCP Protocol](https://github.com/modelcontextprotocol)

