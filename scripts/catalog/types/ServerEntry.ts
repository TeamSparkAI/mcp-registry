export interface ServerEntry {
  id: string;
  icon: string | null;
  name: string;
  description: string;
  repository: {
    url: string;
    source: 'github' | 'gitlab' | 'other';
    stars?: number;
    lastUpdated?: string;
  };
  tags: string[];
  serverName?: string;
  serverConfig?: ServerConfig;
}

export interface ServerConfig {
  type?: string;
  command?: string;
  args?: string[];
  env?: Record<string, string>;
  url?: string;
  headers?: Record<string, string>;
} 