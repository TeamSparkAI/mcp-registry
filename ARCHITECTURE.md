# Architecture: Validation

## Overview

This project uses **server-side validation via Next.js API routes** instead of client-side validation. This is the proper Next.js architecture for handling validation workloads.

## Schema Management

### Single Source of Truth
- **`/registry/server.schema.json`** - Downloaded from official MCP registry
- Updated manually when official schema changes
- All other copies are generated from this

### Build Flow
```
/registry/server.schema.json (manual, committed)
    ↓ prebuild script
/packages/mcp-registry-validator/src/schema/server.schema.json (generated, gitignored)
    ↓ build script  
/packages/mcp-registry-validator/dist/schema/server.schema.json (distributed)
    ↓ ES module import
Used by validator package
```

### No Public Copy Needed
- ❌ **Removed**: `/public/server.schema.json`
- ❌ **Removed**: `/app/registry-utils/validation.ts` (client-side wrapper)
- The schema is imported as a module, not fetched via HTTP

## Validation Flow

### Tester Page
```
User enters server.json
    ↓
POST /api/validate
    ↓
API route (server-side)
    ↓
Import mcp-registry-validator (Node.js)
    ↓
Validate with bundled schema
    ↓
Return results to client
```

### API Endpoint
**`/app/api/validate/route.ts`**
```typescript
import { validateServerJson } from 'mcp-registry-validator';

export async function POST(request: NextRequest) {
  const { serverJson } = await request.json();
  const result = await validateServerJson(serverJson);
  return NextResponse.json(result);
}
```

## Benefits

1. **Simpler**: No client-side schema management
2. **Faster**: No HTTP fetch for schema on every validation
3. **Bundler-friendly**: Schema imported as module, works with Next.js/Turbopack
4. **Consistent**: Same validator used everywhere (API, CLI, build scripts)
5. **Secure**: Validation logic runs server-side

## Development

### Running Dev Server
```bash
pnpm install  # Installs and builds validator
pnpm run dev  # Starts Next.js with validator built
```

### Updating Schema
```bash
# Download latest
curl -o registry/server.schema.json https://...

# Rebuild validator
cd packages/mcp-registry-validator
pnpm build

# Schema now updated everywhere
```

## Files Removed

During cleanup to proper architecture:
- ❌ `/public/server.schema.json` - No longer needed (not fetched via HTTP)
- ❌ `/app/registry-utils/validation.ts` - No longer needed (API handles validation)
- ❌ Client-side schema loading logic

## Files Added

New server-side architecture:
- ✅ `/app/api/validate/route.ts` - Validation API endpoint
- ✅ `/registry/README.md` - Schema management documentation
- ✅ This file (`ARCHITECTURE.md`)
