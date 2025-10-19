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

## Technical Implementation

The `mcp-registry-server` package provides the core API implementation. For complete technical details, architecture, performance characteristics, and deployment examples, see:

**[→ mcp-registry-server Package Documentation](../packages/mcp-registry-server/README.md)**

**Key Design Features:**
- Framework-agnostic core with pluggable data sources
- Next.js adapter (available), Express adapter (planned)
- File-based data source with in-memory caching (current implementation)
- Supports database and custom data sources for different scenarios

## Package Structure

This monorepo provides multiple npm packages:

### 1. `mcp-registry-server`
Core API server with framework adapters and pluggable data sources.

**[→ Full Package Documentation](../packages/mcp-registry-server/README.md)**

### 2. `mcp-registry-validator`
Schema validation and linting for server.json files (already published).

### 3. `@mcp-registry/ui` (Planned - Phase 5)
React components for server browsing, configuration, and validation display.

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

