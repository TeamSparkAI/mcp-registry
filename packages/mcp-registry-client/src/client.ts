import { ServerResponse, ServerListResponse } from './types';

export interface RegistryClientConfig {
  baseUrl: string;
  fetch?: typeof fetch;
  timeout?: number;
}

/**
 * Full-featured registry API client.
 * Provides methods for fetching servers and server versions from the MCP Registry API.
 */
export class RegistryClient {
  private baseUrl: string;
  private fetchFn: typeof fetch;
  private timeout: number;

  constructor(config: RegistryClientConfig) {
    this.baseUrl = config.baseUrl.replace(/\/$/, ''); // Remove trailing slash
    this.fetchFn = config.fetch || (typeof window !== 'undefined' ? window.fetch.bind(window) : globalThis.fetch.bind(globalThis));
    this.timeout = config.timeout || 30000;
  }

  /**
   * Make a fetch request with timeout
   */
  private async fetchWithTimeout(url: string, options?: RequestInit): Promise<Response> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeout);

    try {
      const response = await this.fetchFn(url, {
        ...options,
        signal: controller.signal
      });
      clearTimeout(timeoutId);
      return response;
    } catch (error) {
      clearTimeout(timeoutId);
      if (error instanceof Error && error.name === 'AbortError') {
        throw new Error(`Request timeout after ${this.timeout}ms`);
      }
      throw error;
    }
  }

  /**
   * Encode server name for URL (handles names with / characters)
   */
  private encodeServerName(serverName: string): string {
    return encodeURIComponent(serverName);
  }

  /**
   * Build query string from params
   */
  private buildQueryString(params: Record<string, string | number | undefined>): string {
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        searchParams.set(key, String(value));
      }
    });
    const query = searchParams.toString();
    return query ? `?${query}` : '';
  }

  /**
   * Handle API errors
   */
  private async handleResponse(response: Response): Promise<any> {
    if (!response.ok) {
      let errorMessage = `HTTP ${response.status} ${response.statusText}`;
      try {
        const errorData = await response.json();
        if (errorData.error) {
          errorMessage = errorData.error;
        }
      } catch {
        // Ignore JSON parse errors
      }
      throw new Error(errorMessage);
    }
    return response.json();
  }

  /**
   * Fetch a list of servers with optional query parameters.
   */
  async getServers(params?: {
    search?: string;
    limit?: number;
    cursor?: string;
    updated_since?: string;
    version?: string;
  }): Promise<ServerListResponse> {
    const queryParams: Record<string, string | number | undefined> = {};
    if (params?.search) queryParams.search = params.search;
    if (params?.limit) queryParams.limit = params.limit;
    if (params?.cursor) queryParams.cursor = params.cursor;
    if (params?.updated_since) queryParams.updated_since = params.updated_since;
    if (params?.version) queryParams.version = params.version;

    const queryString = this.buildQueryString(queryParams);
    const url = `${this.baseUrl}/servers${queryString}`;

    try {
      const response = await this.fetchWithTimeout(url);
      return await this.handleResponse(response);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to fetch servers: ${error.message}`);
      }
      throw new Error('Failed to fetch servers: Unknown error');
    }
  }

  /**
   * Fetch a specific version of a server.
   */
  async getServerVersion(serverName: string, version: string): Promise<ServerResponse> {
    const encodedName = this.encodeServerName(serverName);
    const encodedVersion = encodeURIComponent(version);
    const url = `${this.baseUrl}/servers/${encodedName}/versions/${encodedVersion}`;

    try {
      const response = await this.fetchWithTimeout(url);
      return await this.handleResponse(response);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to fetch server version: ${error.message}`);
      }
      throw new Error('Failed to fetch server version: Unknown error');
    }
  }

  /**
   * Fetch all versions of a specific server.
   */
  async getServerVersions(serverName: string): Promise<ServerListResponse> {
    const encodedName = this.encodeServerName(serverName);
    const url = `${this.baseUrl}/servers/${encodedName}/versions`;

    try {
      const response = await this.fetchWithTimeout(url);
      return await this.handleResponse(response);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to fetch server versions: ${error.message}`);
      }
      throw new Error('Failed to fetch server versions: Unknown error');
    }
  }
}

