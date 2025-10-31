// Import and re-export shared types from @teamsparkai/mcp-registry-client
import type {
  ServerDetail,
  ServerResponse,
  RegistryMeta,
  ServerListResponse,
  ResponseMetadata
} from '@teamsparkai/mcp-registry-client';

export type {
  ServerDetail,
  ServerResponse,
  RegistryMeta,
  ServerListResponse,
  ResponseMetadata
};

// Server-specific types (not in shared types package)

// ServerList: Similar to ServerListResponse but with required metadata
// Used internally by the server package's data source interface
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
