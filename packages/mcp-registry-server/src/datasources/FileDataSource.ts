import fs from 'fs';
import path from 'path';
import { RegistryDataSource, ServersQuery, ServerList, Server } from '../types';

export interface FileDataSourceConfig {
  registryPath: string; // Path to server-registry.json
}

interface Registry {
  servers: Server[];
}

export class FileDataSource implements RegistryDataSource {
  private registryPath: string;
  private cache: Registry | null = null;

  constructor(config: FileDataSourceConfig) {
    this.registryPath = config.registryPath;
  }

  private loadRegistry(): Registry {
    if (this.cache) {
      return this.cache;
    }

    const data = fs.readFileSync(this.registryPath, 'utf8');
    this.cache = JSON.parse(data);
    return this.cache!;
  }

  async getServers(query: ServersQuery): Promise<ServerList> {
    const registry = this.loadRegistry();
    let filtered = [...registry.servers];

    // Apply search filter
    if (query.search) {
      const searchLower = query.search.toLowerCase();
      filtered = filtered.filter(s => 
        s.name.toLowerCase().includes(searchLower) ||
        s.description?.toLowerCase().includes(searchLower)
      );
    }

    // Apply updated_since filter
    if (query.updated_since) {
      const sinceDate = new Date(query.updated_since);
      filtered = filtered.filter(s => {
        const serverDate = s._meta?.['io.modelcontextprotocol.registry/official']?.updated;
        if (!serverDate) return false;
        return new Date(serverDate) > sinceDate;
      });
    }

    // Apply version filter
    if (query.version) {
      if (query.version === 'latest') {
        // Group by server name and keep only latest version
        const latestMap = new Map<string, Server>();
        for (const server of filtered) {
          const existing = latestMap.get(server.name);
          if (!existing || this.compareVersions(server.version, existing.version) > 0) {
            latestMap.set(server.name, server);
          }
        }
        filtered = Array.from(latestMap.values());
      } else {
        // Filter by exact version
        filtered = filtered.filter(s => s.version === query.version);
      }
    }

    // Apply pagination
    const limit = query.limit || 50;
    const cursor = query.cursor ? parseInt(query.cursor) : 0;
    const start = cursor;
    const end = start + limit;
    const page = filtered.slice(start, end);

    return {
      servers: page,
      metadata: {
        nextCursor: end < filtered.length ? end.toString() : undefined,
        totalResults: filtered.length
      }
    };
  }

  async getServerVersionsByServerId(serverId: string): Promise<ServerList> {
    const registry = this.loadRegistry();
    
    // Find all versions of this server by serverId
    const versions = registry.servers.filter(s => {
      const meta = s._meta?.['io.modelcontextprotocol.registry/official'];
      return meta?.serverId === serverId;
    });
    
    // Sort by version (newest first)
    versions.sort((a, b) => this.compareVersions(b.version, a.version));

    return {
      servers: versions,
      metadata: {
        totalResults: versions.length
      }
    };
  }

  async getServerByIds(serverId: string, versionId: string): Promise<Server | null> {
    const registry = this.loadRegistry();
    
    // Find exact match by serverId and versionId
    const server = registry.servers.find(s => {
      const meta = s._meta?.['io.modelcontextprotocol.registry/official'];
      return meta?.serverId === serverId && meta?.versionId === versionId;
    });

    return server || null;
  }

  private compareVersions(a: string, b: string): number {
    const aParts = a.split('.').map(Number);
    const bParts = b.split('.').map(Number);

    for (let i = 0; i < Math.max(aParts.length, bParts.length); i++) {
      const aNum = aParts[i] || 0;
      const bNum = bParts[i] || 0;
      
      if (aNum !== bNum) {
        return aNum - bNum;
      }
    }

    return 0;
  }
}

