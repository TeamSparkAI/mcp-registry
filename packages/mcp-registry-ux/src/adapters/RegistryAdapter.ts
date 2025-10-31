import { ServerResponse, ServerListResponse } from '@teamsparkai/mcp-registry-client';

/**
 * Interface for fetching registry data.
 * Allows consumers to provide custom implementations for caching, GraphQL, etc.
 */
export interface RegistryAdapter {
  /**
   * Fetch list of servers with full query support
   */
  getServers(params?: {
    search?: string;
    limit?: number;
    cursor?: string;
    updated_since?: string;  // RFC3339 datetime
    version?: string;         // 'latest' or exact version like '1.2.3'
  }): Promise<ServerListResponse>;
  
  /**
   * Fetch specific server version
   */
  getServerVersion(serverName: string, version: string): Promise<ServerResponse>;
  
  /**
   * Fetch all versions of a server
   */
  getServerVersions(serverName: string): Promise<ServerListResponse>;
}



