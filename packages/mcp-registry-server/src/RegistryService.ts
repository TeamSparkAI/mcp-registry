import { RegistryDataSource, ServersQuery, ServiceResult } from './types';

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
  async handleRequest(method: string, path: string, query: Record<string, string>): Promise<ServiceResult> {
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

        // GET /servers/{serverName}/versions
        const versionsMatch = routePath.match(/^\/servers\/([^/]+)\/versions\/?$/);
        if (versionsMatch) {
          const serverName = decodeURIComponent(versionsMatch[1]);
          return await this.handleGetServerVersions(serverName);
        }

        // GET /servers/{serverName}/versions/{version}
        const versionMatch = routePath.match(/^\/servers\/([^/]+)\/versions\/([^/]+)\/?$/);
        if (versionMatch) {
          const serverName = decodeURIComponent(versionMatch[1]);
          const version = decodeURIComponent(versionMatch[2]);
          return await this.handleGetServerVersion(serverName, version);
        }
      }

      // No route matched
      return { ok: false, status: 404, error: 'Not found' };
    } catch (error) {
      console.error('Registry service error:', error);
      return { 
        ok: false, 
        status: 500, 
        error: error instanceof Error ? error.message : 'Internal server error'
      };
    }
  }

  private async handleGetServers(query: Record<string, string>): Promise<ServiceResult> {
    const serversQuery: ServersQuery = {
      cursor: query.cursor,
      limit: query.limit ? parseInt(query.limit) : undefined,
      search: query.search,
      updated_since: query.updated_since,
      version: query.version
    };

    const result = await this.dataSource.getServers(serversQuery);
    return { ok: true, status: 200, data: result };
  }

  private async handleGetServerVersions(serverName: string): Promise<ServiceResult> {
    const result = await this.dataSource.getServerVersions(serverName);
    
    if (result.servers.length === 0) {
      return { ok: false, status: 404, error: 'Server not found' };
    }

    return { ok: true, status: 200, data: result };
  }

  private async handleGetServerVersion(serverName: string, version: string): Promise<ServiceResult> {
    const server = await this.dataSource.getServerVersion(serverName, version);
    
    if (!server) {
      return { ok: false, status: 404, error: 'Server version not found' };
    }

    return { ok: true, status: 200, data: server };
  }
}

