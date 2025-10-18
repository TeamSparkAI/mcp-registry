// Server data structures (matching server.schema.json)
export interface Server {
  $schema: string;
  name: string;
  version: string;
  description?: string;
  icon?: string;
  homepage?: string;
  repository?: {
    type: string;
    url: string;
  };
  license?: string;
  vendor?: {
    name: string;
    url?: string;
  };
  sourceCode?: string;
  packages?: any[];
  remotes?: any[];
  [key: string]: any; // Allow additional properties
}

// API Response structures (matching OpenAPI spec)
export interface ServerList {
  servers: Server[];
  metadata: {
    nextCursor?: string;
    totalResults?: number;
  };
}

// Query parameters for /v0/servers
export interface ServersQuery {
  cursor?: string;
  limit?: number;
  search?: string;
  updated_since?: string;
  version?: string;
}

// Data source interface
export interface RegistryDataSource {
  /**
   * Get all servers matching the query parameters
   */
  getServers(query: ServersQuery): Promise<ServerList>;
  
  /**
   * Get all versions of a specific server by serverId
   */
  getServerVersionsByServerId(serverId: string): Promise<ServerList>;
  
  /**
   * Get a specific version of a server by serverId and versionId
   */
  getServerByIds(serverId: string, versionId: string): Promise<Server | null>;
}

// Internal routing types
export interface RouteMatch {
  path: string;
  method: string;
  params: Record<string, string>;
  query: Record<string, string>;
}

