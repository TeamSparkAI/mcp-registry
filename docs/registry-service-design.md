# MCP Registry Service Design

## Overview

This project provides:

1. **A Public Registry Mirror**: A Next.js application deployed on Vercel that mirrors the official MCP server registry with daily updates, providing:
   - Registry API implementing the official MCP Registry protocol
   - Visual registry explorer web app for browsing servers
   - Server.json tester/verifier for validating server configurations

2. **Reusable TypeScript Libraries**: npm packages that enable developers to implement registry functionality in their own applications:
   - Core API server with pluggable data sources
   - Validation and linting tools
   - UI components for server browsing and configuration

This is an alternative TypeScript implementation of the official MCP Registry protocol.

## Protocol Reference

**Official MCP Registry Protocol**: The reference Go implementation and protocol specification are maintained as an open source project at [https://github.com/modelcontextprotocol/registry](https://github.com/modelcontextprotocol/registry)

**Protocol Specification**: The API contract is defined in the OpenAPI specification at [https://github.com/modelcontextprotocol/registry/blob/main/docs/reference/api/openapi.yaml](https://github.com/modelcontextprotocol/registry/blob/main/docs/reference/api/openapi.yaml)

This TypeScript implementation follows the same protocol and API contract as defined in the OpenAPI specification.

## The Deployed Application

This project deploys a complete registry mirror as a Next.js application on Vercel, consisting of:

### Registry API
- Implements the official MCP Registry protocol (OpenAPI spec)
- Endpoint: `/registry/*` (or similar)
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

## Architecture Decisions

### Technology Stack

**Framework: Next.js with API Routes**
- Next.js chosen for the serverless API routes feature
- Provides both API endpoints and optional frontend hosting
- Well-suited for Vercel deployment

**Hosting: Vercel**
- Serverless architecture with global edge deployment
- 1GB memory limit per function (Hobby/Pro tiers)
- Good performance for static exports and API routes
- Zero-config deployment from GitHub

**Language: TypeScript**
- Type safety for API contracts and data models
- Reuses existing `mcp-registry-validator` package
- Enables code sharing with frontend components

### Alternative Considered: Express

Express was considered for its flexibility and composability (similar to the reference Go implementation), but Next.js was chosen because:
- Vercel hosting strongly favors Next.js
- API routes provide serverless benefits
- Still possible to export Express-compatible middleware for other use cases (e.g., MCP gateway integration)

## Data Source Architecture

### Design Principles

**Separation of Concerns**
- Server implementation is independent of data storage
- Pluggable data source interface allows multiple backends
- Data source abstraction enables different deployment scenarios

**Use Cases**
1. **Open source deployment**: Comes with default file-based data source
2. **MCP Gateway integration**: Custom data source for installed servers
3. **Database-backed**: Could add SQL/NoSQL data sources later

### Data Source Interface

```typescript
interface RegistryDataSource {
  getServers(): Promise<Server[]>
  getServer(id: string): Promise<Server | null>
  // Additional methods as needed
}
```

Implementations:
- `FileDataSource` - reads from JSON files (default)
- `GatewayDataSource` - queries MCP gateway runtime
- Future: `DatabaseDataSource` for SQL/NoSQL backends

## Data Storage Approach

### File-Based Storage (Default)

**Index File: `servers-index.json`**
- Contains lightweight metadata for all servers
- Fields: `id`, `name`, `version`, `updated`
- Size: ~159 bytes per entry
- Total size at 10k servers: ~1.6MB

**Individual Server Files: `servers/{id}.json`**
- Full server details including packages, remotes, configuration
- Average size: ~959 bytes per server
- Loaded on-demand for specific server queries

### Memory Caching Strategy (File-Based Data Source)

**Cache the Index**
- Load entire index file into memory on cold start
- Size: ~106KB for current 668 servers, ~1.6MB at 10k servers
- Enables fast filtering and search operations
- Persists across warm function invocations

**Optional: Full Server Cache**
- At 10k servers: ~9.6MB for all full server data
- Total memory usage: ~11.2MB (index + servers)
- Well within 1GB serverless limit
- Next.js runtime: ~50-100MB
- Leaves ~600-750MB available for other operations

**Memory Budget Analysis**
- Target usage: ~500MB (50% of 1GB limit)
- Safe limit: ~100,000 servers (~112MB cache)
- Performance remains fast (< 120ms for complex operations)
- Beyond 200k servers, consider database backend

### Performance Characteristics

**Cold Start (first request after idle)**
- Load index: ~50-100ms
- Parse JSON: ~10-20ms
- Total: ~100-200ms

**Warm Requests (subsequent requests)**
- Filter index: ~1-2ms (10k servers)
- Sort results: ~5-10ms (10k servers)
- Load 50 server files: ~50ms with Promise.all
- Total: ~50-100ms

**Scalability**
- 10k servers: Fast (~100ms response time)
- 100k servers: Acceptable (~120ms response time)
- 200k+ servers: Consider database migration

## API Requirements

### Protocol Specifications

The registry server must implement the following API capabilities:

**Pagination**
- `cursor`: Pagination cursor parameter (numeric offset)
- `limit`: Maximum number of items to return (default: 50)
- `nextCursor`: Returned in response metadata when more results available

**Search & Filtering**
- `search`: Case-insensitive substring search on server names
- `updated_since`: Filter servers updated after RFC3339 timestamp
- `version`: Filter by version (currently supports "latest" only)

### Implementation Approach

**In-Memory Filtering**
```typescript
// Load index once (cached across requests)
if (!serverIndex) {
  serverIndex = await loadServerIndex()
}

// Apply filters in memory
let filtered = serverIndex

if (search) {
  filtered = filtered.filter(s => 
    s.name.toLowerCase().includes(search.toLowerCase())
  )
}

if (updated_since) {
  filtered = filtered.filter(s => s.updated > updated_since)
}

if (version) {
  filtered = filtered.filter(s => s.version === version)
}

// Simple offset-based pagination
const start = cursor ? parseInt(cursor) : 0
const end = start + limit
const page = filtered.slice(start, end)

// Load full details for page results
const servers = await Promise.all(
  page.map(entry => loadServerDetails(entry.id))
)

return {
  servers,
  nextCursor: end < filtered.length ? end.toString() : null
}
```

**Why This Works**
- Index is small enough to filter entirely in memory
- Filtering operations are fast (< 20ms for 10k servers)
- Loading 50 individual files in parallel is acceptable (~50ms)
- No complex database queries needed
- Simple to implement and maintain

## Deployment Scenarios

### 1. Public Registry Deployment (This Project)

**Technology**: Next.js deployed to Vercel

**Setup**:
```typescript
// app/registry/[...path]/route.ts
import { createRegistryHandler, FileDataSource } from 'mcp-registry-server'

const handler = createRegistryHandler({ 
  dataSource: new FileDataSource({
    indexPath: './data/servers-index.json',
    serversPath: './data/servers'
  })
})

export { handler as GET, handler as POST }
```

**Data Management**:
- GitHub Action downloads registry data periodically
- Generates index and individual server files
- Automatic Vercel deployment on data changes

**Hosting**: Vercel with serverless functions

### 2. ToolVault Gateway Integration

**Technology**: Next.js or Express (TBD)

**Next.js Option**:
```typescript
// app/registry/[...path]/route.ts
import { createRegistryHandler } from 'mcp-registry-server'
import { ToolVaultDataSource } from './datasources/toolvault'

const handler = createRegistryHandler({ 
  dataSource: new ToolVaultDataSource()
})

export { handler as GET, handler as POST }
```

**Express Option**:
```typescript
import { createRegistryRouter } from 'mcp-registry-server'
import { ToolVaultDataSource } from './datasources/toolvault'

const app = express()

// Existing gateway routes
app.use('/api/gateway', gatewayRoutes)

// Mount registry for installed servers
app.use('/registry', createRegistryRouter({ 
  dataSource: new ToolVaultDataSource()
}))
```

**Data Source**: Custom `ToolVaultDataSource` that queries locally installed MCP servers from the gateway runtime

**Hosting**: Self-hosted or cloud deployment alongside ToolVault

### 3. Database-Backed Deployment (Future)

**Use Case**: High-scale deployment with 200k+ servers

**Technology**: Either Next.js or Express with database data source

**Setup**:
```typescript
import { DatabaseDataSource } from 'mcp-registry-server/datasources'

const dataSource = new DatabaseDataSource({
  connectionString: process.env.DATABASE_URL
})

// Use with either Next.js handler or Express router
```

## Package Structure

This project will provide three npm packages:

### 1. Core API Server (`mcp-registry-server`)

**Architecture**: Framework-agnostic core with Express and Next.js adapters

**Core Implementation**:
- `RegistryService` class with pluggable data source interface
- Protocol implementation following OpenAPI spec
- Request handling logic independent of Express or Next.js

**Express Adapter**:
```typescript
import { createRegistryRouter } from 'mcp-registry-server'

// Returns Express Router that handles all registry routes
const registryRouter = createRegistryRouter({ 
  dataSource: myDataSource 
})

// Mount at any base path
app.use('/registry', registryRouter)
```

**Next.js Adapter**:
```typescript
// app/registry/[...path]/route.ts
import { createRegistryHandler } from 'mcp-registry-server'

const handler = createRegistryHandler({ 
  dataSource: myDataSource 
})

export { handler as GET, handler as POST }
```

**Key Design Principle**: Users mount the registry at a single base path. The library handles all internal routing and sub-paths. Users never need to know about individual endpoints like `/servers` or `/servers/:id`.

### 2. Validation Package (`mcp-registry-validator`)
- Already published and maintained
- JSON Schema validation for server.json files
- Linter rules for best practices
- Browser and Node.js compatible

### 3. Component Library (`mcp-registry-ui` or similar)
- React components for server browsing and search
- Server detail views with configuration UI
- Configuration form generation from server metadata
- MCP client config generation utilities
- Validation error display components

**Purpose**: Other MCP client applications can use these components to provide consistent UX for server discovery, configuration, and setup without rebuilding the functionality from scratch.

## Current Data Statistics

**Production Registry (`server-registry.json`)**:
- Total servers: 668
- File size: 930KB
- Average server size: 959 bytes
- Index entry size: 159 bytes
- Total index size: 106KB

**Projections**:
- 10k servers: ~9.6MB total, ~1.6MB index
- 100k servers: ~96MB total, ~16MB index
- Memory cache safe up to 100k servers

## Open Questions

### Component Library Styling

**Question**: How should components be styled to allow user customization?

**Consideration**: Component styling approach needs to balance ease of use out-of-the-box with flexibility for customization. Details to be determined during component library extraction phase.

## Implementation Status

### ✅ Phase 1: Repository Cleanup (COMPLETED)
**Status**: Complete

**What was done**:
- ✅ Removed old catalog project from repository
- ✅ Moved registry UI from `/app/registry` to `/app` (root)
- ✅ Removed obsolete GitHub Actions (`update-catalog.yml`, `deploy.yml`)
- ✅ Updated all internal links and imports
- ✅ Deleted unused data files (`servers.json`, `servers-local.json`)
- ✅ Fixed `.gitignore` issues (node_modules, dist files)
- ✅ Created `/registry` directory for protocol references (OpenAPI spec, schemas)
- ✅ Implemented automated schema syncing via GitHub Actions

**Deviation from plan**: We cleaned up this repo directly rather than forking. The catalog project was simply removed.

### ✅ Phase 2: Core API Server Package (COMPLETED)
**Status**: Complete

**What was done**:
- ✅ Created `mcp-registry-server` package structure
- ✅ Implemented `RegistryService` with pluggable data source interface
- ✅ Implemented `FileDataSource` with in-memory caching
- ✅ Created Next.js adapter (`createRegistryHandler`)
- ✅ Full TypeScript types and interfaces
- ✅ Implemented all OpenAPI read endpoints:
  - `GET /api/v0/servers` (list, search, filter, paginate)
  - `GET /api/v0/servers/{serverId}/versions` (all versions)
  - `GET /api/v0/servers/{serverId}/versions/{versionId}` (specific)

**Deviation from plan**: Express adapter not yet implemented (Next.js only for now). Can be added in Phase 6 if needed.

### ✅ Phase 3: Frontend API Integration (COMPLETED)
**Status**: Complete

**What was done**:
- ✅ Added catch-all API route at `/app/api/v0/[...path]/route.ts`
- ✅ Integrated `createRegistryHandler` with `FileDataSource`
- ✅ Updated main page to fetch from `/api/v0/servers`
- ✅ Created dynamic routing: `/servers/[serverId]/[versionId]`
- ✅ Updated all components to use API endpoints
- ✅ Removed all direct file access from frontend
- ✅ Implemented server-side validation via `/api/validate` endpoint
- ✅ Updated tester UI to use validation API

**Deviations from plan**:
- **API path**: Using `/api/v0/...` (Next.js convention) instead of `/registry/...`
- **Routing**: Using `serverId` AND `versionId` (UUIDs) instead of just versionId
  - Example: `/servers/bcee55b5-2316-4f92-8b66-db907496714b/00636d73-03c1-4107-a591-84b271cd1646`
  - Cleaner URLs, no special character encoding issues
- **Data structure**: Using single `server-registry.json` file instead of index + individual files
  - Simpler implementation with in-memory caching
  - Works well at current scale (668 servers, 930KB file)
  - Can refactor to split files later if needed

### 🚀 Phase 4: Deploy to Vercel (READY)
**Status**: Ready for deployment

**What needs to be done**:
- ☐ Deploy to Vercel (infrastructure ready)
- ☐ Configure Vercel project settings
- ☐ Set up GitHub integration for auto-deployment
- ☐ Test production deployment thoroughly:
  - ☐ Verify API endpoints work in serverless environment
  - ☐ Test search and filtering
  - ☐ Test server detail pages
  - ☐ Validate server.json files
  - ☐ Generate configurations
- ☐ Monitor performance and errors

**Prerequisites**: All complete
- ✅ Removed `output: 'export'` from Next.js config
- ✅ API routes are serverless-compatible
- ✅ Frontend is 100% API-based
- ✅ Data updates automatically via GitHub Actions

### 📦 Phase 5: Component Library (TODO)
**Status**: Not started (optional enhancement)

**What needs to be done**:
- ☐ Create `@mcp-registry/ui` package structure
- ☐ Extract reusable components:
  - ☐ `ServerList` - browsing and search UI
  - ☐ `ServerDetailView` - server details with metadata
  - ☐ `ValidationIssues` - validation error display
  - ☐ `ConfigGenerator` - configuration form and preview
- ☐ Determine component styling approach
- ☐ Document component APIs
- ☐ Publish to npm

**Purpose**: Enable other MCP applications to reuse the UI components.

### 🔮 Phase 6: Future Enhancements (TODO)
**Status**: Future work

**Possible enhancements**:
- ☐ Add Express adapter for `mcp-registry-server` package
- ☐ Add database data source (if scale requires)
- ☐ Implement caching strategy (Redis, etc.)
- ☐ Add rate limiting
- ☐ Add analytics/metrics
- ☐ Implement ToolVault integration with custom data source
- ☐ Consider publishing support (if moving from read-only mirror)

## Current Implementation Details

### API Endpoints (as-built)

All endpoints are mounted at `/api/v0/`:

```
GET  /api/v0/servers
     ?cursor={offset}          # Pagination offset (default: 0)
     &limit={count}            # Results per page (default: 50)
     &search={term}            # Search server names/descriptions
     &updated_since={date}     # Filter by update date
     &version={version}        # Filter by version

GET  /api/v0/servers/{serverId}/versions
     Returns all versions of a server

GET  /api/v0/servers/{serverId}/versions/{versionId}
     Returns specific server version

POST /api/validate
     Validates server.json content
```

### Frontend Routes (as-built)

```
/                              # Main registry explorer (list view)
/servers/{serverId}/{versionId} # Server detail page
/tester                        # Server.json validator/tester
```

### Data Storage (as-built)

**Current Implementation**:
- Single file: `public/server-registry.json` (930KB, 668 servers)
- `FileDataSource` loads entire file into memory on cold start
- In-memory caching persists across warm function invocations
- Filtering, search, and pagination all done in-memory

**Performance**:
- Cold start: ~100-200ms (load + parse JSON)
- Warm requests: ~50-100ms (in-memory operations)
- Well within serverless limits at current scale

**Scalability**:
- Current: 668 servers, 930KB
- Projected at 10k servers: ~9.6MB
- Safe up to ~100k servers in memory
- Beyond that, consider database migration or split-file approach

### Package Structure (as-built)

**Published Packages**:
1. `mcp-registry-validator` - Schema validation, linting (already published)
2. `mcp-registry-server` - Core API, data sources, Next.js adapter (ready for publishing)

**Planned Packages**:
3. `@mcp-registry/ui` - React components (Phase 5)

### Automated Updates

**GitHub Action** (`download-registry.yml`):
- Runs daily at 2 AM UTC
- Downloads `server-registry.json` from official registry
- Syncs schemas from `modelcontextprotocol/static`
- Commits changes if updates found
- Triggers Vercel deployment automatically

**Schema Management**:
- Current schema: `/registry/schema/server.schema.json`
- Versioned schemas: `/registry/schema/{version}/server.schema.json`
- Bundled at build time into validator package
- Supports multi-version validation with warnings for outdated schemas

