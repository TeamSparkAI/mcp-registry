# MCP Registry UX

Reusable React components for browsing and configuring MCP servers from the registry.

## Overview

This package provides a framework-agnostic set of React components and utilities for integrating MCP registry functionality into your application. It includes:

- **Searchable server catalog** - Browse and filter MCP servers
- **Server detail views** - Display server information with configuration options
- **Interactive configuration** - Configure package and remote arguments through a guided UI
- **Configuration generation** - Generate configured `server.json` output from user selections
- **Full registry client SDK** - Production-ready client for the registry API

## Installation

```bash
npm install mcp-registry-ux
# or
pnpm add mcp-registry-ux
# or
yarn add mcp-registry-ux
```

**Note:** `@teamsparkai/mcp-registry-client` is automatically installed as a dependency. All types needed to use the UX components are re-exported from `mcp-registry-ux`, so you can import everything from this package.

### Peer Dependencies

- `react`: ^18.0.0 or ^19.0.0
- `react-dom`: ^18.0.0 or ^19.0.0
- `tailwindcss`: ^3.0.0

### CSS Styles

Import the package's CSS file in your application's main CSS file:

```css
/* Must be before @tailwind directives */
@import 'mcp-registry-ux/styles.css';
```

## Quick Start

### Basic Server List

```tsx
import { ServerList, RegistryClient } from 'mcp-registry-ux';
import { useState } from 'react';

function MyApp() {
  const [servers, setServers] = useState([]);
  const [filteredServers, setFilteredServers] = useState([]);
  
  // Fetch servers using the built-in client
  useEffect(() => {
    const client = new RegistryClient({ baseUrl: 'https://registry.example.com/api/v0' });
    client.getServers().then(response => {
      setServers(response.servers);
      setFilteredServers(response.servers);
    });
  }, []);

  const navigationAdapter = {
    goToServer: (serverName, version) => {
      window.location.href = `/servers/${encodeURIComponent(serverName)}/${encodeURIComponent(version)}`;
    },
    goToServerVersions: (serverName) => {
      window.location.href = `/servers/${encodeURIComponent(serverName)}`;
    },
    Link: ({ href, children, className }) => (
      <a href={href} className={className}>{children}</a>
    )
  };

  return (
    <ServerList
      servers={servers}
      filteredServers={filteredServers}
      searchTerm={''}
      selectedFilters={[]}
      onSearchChange={(term) => {/* filter logic */}}
      onFilterToggle={(filter) => {/* toggle filter */}}
      onClearFilters={() => {/* clear filters */}}
      onServerClick={() => {}}
      navigationAdapter={navigationAdapter}
    />
  );
}
```

### Server Detail with Configuration

```tsx
import { ServerDetailView, generateConfiguredServer, RegistryClient } from 'mcp-registry-ux';
import { ServerWithMeta } from 'mcp-registry-ux';

function ServerPage({ serverName, version }) {
  const [server, setServer] = useState<ServerWithMeta | null>(null);
  const [configuringPackage, setConfiguringPackage] = useState(null);
  const [packageConfig, setPackageConfig] = useState({});

  // Fetch server details
  useEffect(() => {
    const client = new RegistryClient({ baseUrl: 'https://registry.example.com/api/v0' });
    client.getServerVersion(serverName, version).then(response => {
      setServer({
        ...response.server,
        _meta: response._meta
      });
    });
  }, [serverName, version]);

  const navigationAdapter = {
    goToServer: (name, ver) => router.push(`/servers/${name}/${ver}`),
    goToServerVersions: (name) => router.push(`/servers/${name}`),
    Link: ({ href, children, className }) => (
      <Link href={href} className={className}>{children}</Link>
    )
  };

  if (!server) return <div>Loading...</div>;

  return (
    <ServerDetailView
      server={server}
      configuringPackage={configuringPackage}
      configuringRemote={null}
      packageConfig={packageConfig}
      remoteConfig={{}}
      visibleFields={new Set()}
      showRawModal={false}
      configuredServer={generateConfiguredServer(
        server, 
        configuringPackage, 
        null, 
        packageConfig, 
        {}
      )}
      onPackageConfigChange={setPackageConfig}
      onRemoteConfigChange={() => {}}
      onToggleFieldVisibility={() => {}}
      onCloseConfiguration={() => setConfiguringPackage(null)}
      onShowRawModal={() => {}}
      onConfigurePackage={(pkg, index) => setConfiguringPackage({ pkg, index })}
      onConfigureRemote={() => {}}
      navigationAdapter={navigationAdapter}
    />
  );
}
```

## Architecture

### Framework-Agnostic Design

The package is built using React only - no framework-specific dependencies. Integration with routing frameworks (Next.js, React Router, etc.) is handled through adapters.

### Adapters

#### RegistryAdapter

Interface for data fetching. Use the built-in `RegistryClient` or implement your own:

```tsx
import { RegistryAdapter, ServerListResponse, ServerResponse } from 'mcp-registry-ux';

interface RegistryAdapter {
  getServers(params?: {
    search?: string;
    limit?: number;
    cursor?: string;
    updated_since?: string;
    version?: string;
  }): Promise<ServerListResponse>;
  
  getServerVersion(serverName: string, version: string): Promise<ServerResponse>;
  
  getServerVersions(serverName: string): Promise<ServerListResponse>;
}
```

#### NavigationAdapter

Interface for routing/navigation. Integrate with your framework's router:

```tsx
import { NavigationAdapter } from 'mcp-registry-ux';

const navigationAdapter: NavigationAdapter = {
  goToServer: (serverName: string, version: string) => {
    // Navigate to server detail page
  },
  goToServerVersions: (serverName: string) => {
    // Navigate to server versions list
  },
  Link: ({ href, children, className }) => {
    // Optional: Framework-specific Link component
    // If not provided, components use regular <a> tags
  }
};
```

### RegistryClient

Full-featured registry API client included in the package:

```tsx
import { RegistryClient } from 'mcp-registry-ux';

const client = new RegistryClient({
  baseUrl: 'https://registry.example.com/api/v0',
  fetch: customFetch, // Optional: custom fetch implementation
  timeout: 30000      // Optional: request timeout in ms (default: 30000)
});

// Fetch servers
const response = await client.getServers({ 
  search: 'github', 
  limit: 20 
});

// Fetch specific server version
const server = await client.getServerVersion('server-name', '1.0.0');

// Fetch all versions of a server
const versions = await client.getServerVersions('server-name');
```

Features:
- Automatic URL encoding of server names (handles names with `/` characters)
- Request timeout handling
- Error handling with descriptive messages
- Type-safe API responses

## Components

### ServerList

Searchable and filterable server catalog component.

**Props:**
- `servers: ServerResponse[]` - All servers
- `filteredServers: ServerResponse[]` - Filtered servers to display
- `searchTerm: string` - Current search term
- `selectedFilters: string[]` - Active filters (e.g., `['Latest', 'Hosted']`)
- `onSearchChange: (term: string) => void` - Search handler
- `onFilterToggle: (filter: string) => void` - Filter toggle handler
- `onClearFilters: () => void` - Clear all filters
- `onServerClick: (server: ServerResponse) => void` - Server click handler
- `navigationAdapter: NavigationAdapter` - Navigation adapter (required)

### ServerDetailView

Detailed server view with configuration options.

**Props:**
- `server: ServerWithMeta` - Server data with metadata
- `configuringPackage: { pkg: Package; index: number } | null` - Currently configuring package
- `configuringRemote: { remote: TransportRemote; index: number } | null` - Currently configuring remote
- `packageConfig: Record<string, any>` - Package configuration values
- `remoteConfig: Record<string, any>` - Remote configuration values
- `visibleFields: Set<string>` - Set of visible (non-masked) field IDs
- `showRawModal: boolean` - Show raw config modal
- `configuredServer: any` - Generated configured server JSON
- `onPackageConfigChange: (config: Record<string, any>) => void` - Package config update handler
- `onRemoteConfigChange: (config: Record<string, any>) => void` - Remote config update handler
- `onToggleFieldVisibility: (fieldId: string) => void` - Toggle field visibility (for secrets)
- `onCloseConfiguration: () => void` - Close configuration form
- `onShowRawModal: (show: boolean) => void` - Show/hide raw config modal
- `onConfigurePackage: (pkg: Package, index: number) => void` - Start package configuration
- `onConfigureRemote: (remote: TransportRemote, index: number) => void` - Start remote configuration
- `navigationAdapter?: NavigationAdapter` - Optional navigation adapter

### ConfigurationForm

Form for configuring package and remote arguments.

### ConfigurationPreview

Preview of generated MCP client configuration.

### ValidationIssues

Display validation errors and warnings.

### RequiredFieldWarning

Warning component for missing required fields.

## Utilities

### Configuration Generation

```tsx
import { generateConfiguredServer } from 'mcp-registry-ux';

const configured = generateConfiguredServer(
  server,              // ServerWithMeta
  configuringPackage,  // { pkg: Package; index: number } | null
  configuringRemote,   // { remote: TransportRemote; index: number } | null
  packageConfig,       // Record<string, any>
  remoteConfig         // Record<string, any>
);
```

### Icon Utilities

```tsx
import { getBestIcon } from 'mcp-registry-ux';

// Get best icon based on theme preference
const iconSrc = getBestIcon(server.icons, 'light'); // or 'dark'
```

### Field Utilities

```tsx
import { getFieldId, getFieldDisplayValue, getFieldDisplayLabel } from 'mcp-registry-ux';

// Generate unique field ID for form inputs
const fieldId = getFieldId(field, 'package', index);

// Get human-readable display value for read-only fields
const displayValue = getFieldDisplayValue(field);

// Get display label for a field
const label = getFieldDisplayLabel(field);
```

## Types

All types needed to use the components are exported from this package:

- `ServerResponse`, `ServerListResponse`
- `ServerDetail`, `ServerWithMeta`
- `Package`, `TransportRemote`, `TransportLocal`
- `Icon`, `RegistryMeta`
- `FieldConfig` (UX-specific, not in types package)

You can import types directly from `mcp-registry-ux`:
```tsx
import { ServerResponse, ServerDetail, Package } from 'mcp-registry-ux';
```

If you need types not exported by this package (e.g., `Input`, `Argument`, `Transport`), you can install and import from `@teamsparkai/mcp-registry-client` separately.

## Usage Examples

See the main registry application (`app/`) for complete usage examples:
- `app/page.tsx` - Server list with search and filters
- `app/servers/[serverName]/[version]/page.tsx` - Server detail with configuration
- `app/tester/page.tsx` - Server JSON validation and testing

## License

MIT
