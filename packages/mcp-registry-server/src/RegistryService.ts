import { RegistryDataSource, ServersQuery, ServerList, Server } from './types';

export interface RegistryServiceConfig {
  dataSource: RegistryDataSource;
  basePrefix?: string; // e.g., '/v0' - defaults to '/v0'
}

export class RegistryService {
  private dataSource: RegistryDataSource;
  private basePrefix: string;

  constructor(config: RegistryServiceConfig) {
    this.dataSource = config.dataSource;
    this.basePrefix = config.basePrefix || '/v0';
  }

  /**
   * Handle a request by routing to the appropriate endpoint handler
   */
  async handleRequest(method: string, path: string, query: Record<string, string>): Promise<Response> {
    // Remove basePrefix if present
    let routePath = path;
    if (path.startsWith(this.basePrefix)) {
      routePath = path.substring(this.basePrefix.length);
    }

    try {
      // Route to appropriate handler
      if (method === 'GET') {
        // GET /servers
        if (routePath === '/servers' || routePath === '/servers/') {
          return await this.handleGetServers(query);
        }

        // GET /servers/{serverId}/versions
        const versionsMatch = routePath.match(/^\/servers\/([^/]+)\/versions\/?$/);
        if (versionsMatch) {
          const serverId = decodeURIComponent(versionsMatch[1]);
          return await this.handleGetServerVersions(serverId);
        }

        // GET /servers/{serverId}/versions/{versionId}
        const versionMatch = routePath.match(/^\/servers\/([^/]+)\/versions\/([^/]+)\/?$/);
        if (versionMatch) {
          const serverId = decodeURIComponent(versionMatch[1]);
          const versionId = decodeURIComponent(versionMatch[2]);
          return await this.handleGetServerVersion(serverId, versionId);
        }
      }

      // No route matched
      return this.createResponse(404, { error: 'Not found' });
    } catch (error) {
      console.error('Registry service error:', error);
      return this.createResponse(500, { 
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  }

  private async handleGetServers(query: Record<string, string>): Promise<Response> {
    const serversQuery: ServersQuery = {
      cursor: query.cursor,
      limit: query.limit ? parseInt(query.limit) : undefined,
      search: query.search,
      updated_since: query.updated_since,
      version: query.version
    };

    const result = await this.dataSource.getServers(serversQuery);
    return this.createResponse(200, result);
  }

  private async handleGetServerVersions(serverId: string): Promise<Response> {
    const result = await this.dataSource.getServerVersionsByServerId(serverId);
    
    if (result.servers.length === 0) {
      return this.createResponse(404, { error: 'Server not found' });
    }

    return this.createResponse(200, result);
  }

  private async handleGetServerVersion(serverId: string, versionId: string): Promise<Response> {
    const server = await this.dataSource.getServerByIds(serverId, versionId);
    
    if (!server) {
      return this.createResponse(404, { error: 'Server version not found' });
    }

    return this.createResponse(200, server);
  }

  private createResponse(status: number, data: any): Response {
    return new Response(JSON.stringify(data), {
      status,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}

