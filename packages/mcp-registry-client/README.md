# @teamsparkai/mcp-registry-client

TypeScript client SDK and type definitions for the MCP Registry API.

## Installation

```bash
npm install @teamsparkai/mcp-registry-client
# or
pnpm add @teamsparkai/mcp-registry-client
# or
yarn add @teamsparkai/mcp-registry-client
```

## Overview

This package provides:

- **Full-featured registry client** - Production-ready SDK for interacting with MCP Registry APIs
- **Complete type definitions** - TypeScript types for all registry API responses and `server.json` schemas
- **URL encoding** - Automatic handling of server names with special characters (e.g., `io.github.user/repo`)
- **Error handling** - Proper error messages and HTTP status handling
- **Timeout support** - Configurable request timeouts
- **Type safety** - Full TypeScript support for all API operations

## Quick Start

### Basic Usage

```typescript
import { RegistryClient } from '@teamsparkai/mcp-registry-client';

const client = new RegistryClient({
  baseUrl: 'https://registry.modelcontextprotocol.io/v0'
});

// Fetch list of servers
const response = await client.getServers({
  limit: 10,
  search: 'database'
});

console.log(`Found ${response.servers.length} servers`);
```

### Get Specific Server Version

```typescript
const server = await client.getServerVersion(
  'io.github.user/repo',
  '1.0.0'
);

console.log(server.server.name);
console.log(server.server.description);
```

### Get All Versions of a Server

```typescript
const versions = await client.getServerVersions('io.github.user/repo');

versions.servers.forEach(server => {
  console.log(`${server.server.version} - ${server._meta?.['io.modelcontextprotocol.registry/official']?.isLatest ? 'latest' : ''}`);
});
```

### Using Types

```typescript
import { 
  ServerResponse, 
  ServerListResponse, 
  ServerDetail, 
  Package,
  TransportRemote 
} from '@teamsparkai/mcp-registry-client';

function processServer(server: ServerResponse) {
  const detail: ServerDetail = server.server;
  const metadata = server._meta;
  // ... use typed data
}
```

## API Reference

### RegistryClient

#### Constructor

```typescript
new RegistryClient(config: RegistryClientConfig)
```

**Config options:**
- `baseUrl` (required): Base URL of the registry API (e.g., `https://registry.modelcontextprotocol.io/v0`)
- `fetch` (optional): Custom fetch implementation (defaults to global fetch)
- `timeout` (optional): Request timeout in milliseconds (defaults to 30000)

#### Methods

##### `getServers(params?)`

Fetch a list of servers with optional query parameters.

```typescript
getServers(params?: {
  search?: string;           // Search term
  limit?: number;            // Number of results per page
  cursor?: string;          // Pagination cursor
  updated_since?: string;   // RFC3339 datetime (only return servers updated after this time)
  version?: string;         // Filter by version ('latest' or exact version like '1.2.3')
}): Promise<ServerListResponse>
```

**Returns:** `ServerListResponse` with `servers` array and optional `metadata` (pagination info)

##### `getServerVersion(serverName, version)`

Fetch a specific version of a server.

```typescript
getServerVersion(
  serverName: string,  // Server identifier (e.g., 'io.github.user/repo')
  version: string       // Version string (e.g., '1.0.0')
): Promise<ServerResponse>
```

**Returns:** `ServerResponse` with `server` (ServerDetail) and `_meta` (RegistryMeta)

**Note:** Server names are automatically URL-encoded (handles names with `/` characters)

##### `getServerVersions(serverName)`

Fetch all versions of a specific server.

```typescript
getServerVersions(
  serverName: string  // Server identifier (e.g., 'io.github.user/repo')
): Promise<ServerListResponse>
```

**Returns:** `ServerListResponse` with all versions of the server

## Types

All TypeScript types are exported from the package. Key types include:

### Response Types
- `ServerResponse` - Single server response (wrapped format with `server` and `_meta`)
- `ServerListResponse` - List of servers with pagination metadata
- `ServerDetail` - Server data per `server.json` schema (no registry metadata)
- `ServerWithMeta` - ServerDetail with `_meta` merged (for convenience)
- `ResponseMetadata` - Pagination metadata (`nextCursor`, `count`, `totalResults`)
- `RegistryMeta` - Registry-specific metadata extensions

### Schema Types
- `Package` - Package definition with transport, arguments, environment variables
- `TransportLocal` - stdio transport
- `TransportRemote` - HTTP/SSE transport with headers
- `Icon` - Server icon definition
- `Argument` - Positional or named arguments
- `KeyValueInput` - Environment variables and headers
- `Input` - Base input interface

### Full Type Export

```typescript
import type {
  // Response types
  ServerResponse,
  ServerListResponse,
  ServerDetail,
  ServerWithMeta,
  ResponseMetadata,
  RegistryMeta,
  
  // Schema types
  Package,
  TransportLocal,
  TransportRemote,
  Transport,
  Icon,
  Argument,
  PositionalArgument,
  NamedArgument,
  KeyValueInput,
  Input,
  InputWithVariables,
  Repository,
  OfficialRegistryMetadata
} from '@teamsparkai/mcp-registry-client';
```

## Error Handling

The client throws errors for:
- Network failures
- HTTP errors (4xx, 5xx) with status codes
- Request timeouts
- Invalid responses

```typescript
try {
  const server = await client.getServerVersion('invalid', '1.0.0');
} catch (error) {
  if (error instanceof Error) {
    console.error('Failed to fetch server:', error.message);
  }
}
```

## Examples

### Pagination

```typescript
const allServers: ServerResponse[] = [];
let cursor: string | undefined = undefined;

while (true) {
  const response = await client.getServers({ 
    limit: 100,
    cursor 
  });
  
  allServers.push(...response.servers);
  
  if (!response.metadata?.nextCursor) {
    break;
  }
  
  cursor = response.metadata.nextCursor;
}
```

### Custom Fetch (Node.js)

```typescript
import fetch from 'node-fetch';

const client = new RegistryClient({
  baseUrl: 'https://registry.modelcontextprotocol.io/v0',
  fetch: fetch as any,
  timeout: 60000 // 60 seconds
});
```

### Search and Filter

```typescript
// Search for servers
const searchResults = await client.getServers({
  search: 'database',
  limit: 20
});

// Get only latest versions
const latestServers = await client.getServers({
  version: 'latest'
});

// Get servers updated in last 24 hours
const recentServers = await client.getServers({
  updated_since: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()
});
```

## License

MIT

## Repository

- GitHub: https://github.com/TeamSparkAI/mcp-registry/tree/main/packages/mcp-registry-client
- Issues: https://github.com/TeamSparkAI/mcp-registry/issues

