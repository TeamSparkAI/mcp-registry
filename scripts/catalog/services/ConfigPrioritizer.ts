import * as fs from 'fs';
import * as path from 'path';
import { BuildConfig } from '../types/BuildConfig';
import { ServerConfig } from '../types/ServerEntry';

export class ConfigPrioritizer {
  private config: BuildConfig;
  private configOverrides: Record<string, ServerConfig>;

  constructor(config: BuildConfig) {
    this.config = config;
    this.configOverrides = this.loadConfigOverrides();
  }

  async selectBestConfig(configs: ServerConfig[]): Promise<ServerConfig | null> {
    if (configs.length === 0) return null;
    
    let highestPriority = 5;
    let bestConfig: ServerConfig = configs[0]; // Start with the first config
    
    for (const config of configs) {
      const priority = this.getPriority(config);
      if (priority < highestPriority) {
        highestPriority = priority;
        bestConfig = config;
      }
    }
    
    return bestConfig;
  }

  private getPriority(config: ServerConfig): number {
    // Priority 1: command == "npx" and arguments do not contain "mcp-remote", or command == "uvx"
    if (config.command === 'npx' && config.args && !config.args.some(arg => arg.includes('mcp-remote'))) {
      return 1;
    }
    if (config.command === 'uvx') {
      return 1;
    }

    // Priority 2: url attribute exists and the value does not contain a local address
    if (config.url && !this.isLocalAddress(config.url)) {
      return 2;
    }

    // Priority 3: command == "docker"
    if (config.command === 'docker') {
      return 3;
    }

    // Priority 4: command == "npx", arguments contain "mcp-remote" and arguments do not contain a local address
    if (config.command === 'npx' && config.args && 
        config.args.some(arg => arg.includes('mcp-remote')) && 
        !config.args.some(arg => this.isLocalAddress(arg))) {
      return 4;
    }

    // Priority 5: all others
    return 5;
  }

  private isLocalAddress(value: string): boolean {
    const localPatterns = [
      /localhost/i,
      /127\.\d+\.\d+\.\d+/,
      /192\.168\.\d+\.\d+/,
      /10\.\d+\.\d+\.\d+/,
      /172\.(1[6-9]|2[0-9]|3[0-1])\.\d+\.\d+/
    ];
    return localPatterns.some(pattern => pattern.test(value));
  }

  private loadConfigOverrides(): Record<string, ServerConfig> {
    try {
      const configOverridesPath = path.join(__dirname, '..', 'config-overrides.json');
      if (fs.existsSync(configOverridesPath)) {
        return JSON.parse(fs.readFileSync(configOverridesPath, 'utf8'));
      }
    } catch (error) {
      console.warn('Failed to load config overrides:', error);
    }
    return {};
  }

  // Method to apply overrides to a server's config
  applyOverrides(serverId: string, config: ServerConfig): ServerConfig {
    const override = this.configOverrides[serverId];
    if (override) {
      return { ...config, ...override };
    }
    return config;
  }
} 