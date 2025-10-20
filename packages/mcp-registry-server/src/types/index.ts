// ServerDetail: Server data per server.schema.json (NO registry metadata)
export interface ServerDetail {
  $schema?: string;
  name: string;
  version: string;
  description?: string;
  icon?: string;
  homepage?: string;
  websiteUrl?: string;
  repository?: {
    type: string;
    url: string;
    source?: string;
    id?: string;
    subfolder?: string;
  };
  status?: string;
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

// Registry metadata (separate from server data)
export interface RegistryMeta {
  'io.modelcontextprotocol.registry/official'?: {
    serverId?: string;
    versionId?: string;
    status?: string;
    publishedAt?: string;
    updatedAt?: string;
    isLatest?: boolean;
  };
  [key: string]: any;
}

// ServerResponse: Wrapped format per OpenAPI spec
export interface ServerResponse {
  server: ServerDetail;
  _meta: RegistryMeta;
}

// API Response structures (matching OpenAPI spec)
export interface ServerList {
  servers: ServerResponse[];
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
   * Get all versions of a specific server by name
   */
  getServerVersions(serverName: string): Promise<ServerList>;
  
  /**
   * Get a specific version of a server by name and version
   */
  getServerVersion(serverName: string, version: string): Promise<ServerResponse | null>;
}

// Service result types (protocol-agnostic responses)
export type ResponseData = ServerList | ServerResponse;

export interface SuccessResponse {
  ok: true;
  status: 200;
  data: ResponseData;
}

export interface ErrorResponse {
  ok: false;
  status: 404 | 500;
  error: string;
}

export type ServiceResult = SuccessResponse | ErrorResponse;

