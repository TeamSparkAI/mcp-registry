import * as fs from 'fs';
import * as path from 'path';
import JSON5 from 'json5';
import { BuildConfig } from '../types/BuildConfig';
import { ServerConfig } from '../types/ServerEntry';

export class ConfigProcessor {
  private config: BuildConfig;

  constructor(config: BuildConfig) {
    this.config = config;
  }

  async extractConfigs(serverId: string, readme: string): Promise<ServerConfig[]> {
    const jsonBlocks = this.extractJsonBlocks(readme);
    let serverConfigs: { [name: string]: any }[] = [];
    const seenConfigs = new Set<string>();
    
    // First pass: Try to extract mcpServers
    for (const block of jsonBlocks) {
      let cleaned = this.cleanJsonBlock(block);
      if (!cleaned.trim()) {
        continue; // Skip empty blocks
      }
      try {
        const parsed = JSON5.parse(cleaned);
        if (parsed.mcpServers && typeof parsed.mcpServers === 'object') {
          const keys = Object.keys(parsed.mcpServers);
          if (keys.length > 0) {
            const name = keys[0];
            const config = { [name]: parsed.mcpServers[name] };
            const configKey = JSON.stringify(config);
            if (!seenConfigs.has(configKey)) {
              serverConfigs.push(config);
              seenConfigs.add(configKey);
            }
          }
        }
      } catch (e: any) {
        console.warn(`Failed to parse JSON in ${serverId}:`, e.message);
        console.warn(`Attempted to parse:`, cleaned);
      }
    }
    
    // If no mcpServers found, try servers
    if (serverConfigs.length === 0) {
      for (const block of jsonBlocks) {
        let cleaned = this.cleanJsonBlock(block);
        if (!cleaned.trim()) {
          continue; // Skip empty blocks
        }
        try {
          const parsed = JSON5.parse(cleaned);
          if (parsed.servers && typeof parsed.servers === 'object') {
            const keys = Object.keys(parsed.servers);
            if (keys.length > 0) {
              const name = keys[0];
              const config = { [name]: parsed.servers[name] };
              const configKey = JSON.stringify(config);
              if (!seenConfigs.has(configKey)) {
                serverConfigs.push(config);
                seenConfigs.add(configKey);
              }
            }
          }
        } catch (e: any) {
          console.warn(`Failed to parse JSON in ${serverId}:`, e.message);
          console.warn(`Attempted to parse:`, cleaned);
        }
      }
    }
    
    // If no servers found, try standalone configs
    if (serverConfigs.length === 0) {
      for (const block of jsonBlocks) {
        let cleaned = this.cleanJsonBlock(block);
        if (!cleaned.trim()) {
          continue; // Skip empty blocks
        }
        try {
          const parsed = JSON5.parse(cleaned);
          const keys = Object.keys(parsed);
          if (keys.length > 0) {
            const first = parsed[keys[0]];
            if (first && typeof first === 'object' && (first.command || first.url)) {
              const config = { [keys[0]]: first };
              const configKey = JSON.stringify(config);
              if (!seenConfigs.has(configKey)) {
                serverConfigs.push(config);
                seenConfigs.add(configKey);
              }
            }
          }
        } catch (e: any) {
          console.warn(`Failed to parse JSON in ${serverId}:`, e.message);
          console.warn(`Attempted to parse:`, cleaned);
        }
      }
    }

    // Convert to ServerConfig objects
    const result: ServerConfig[] = serverConfigs.map(config => {
      const serverName = Object.keys(config)[0];
      return this.extractMCPConfig(config[serverName]);
    });

    // Optionally save for debugging
    if (this.config.debugMode && result.length > 0) {
      await this.saveConfigs(serverId, result);
    }

    return result;
  }

  private extractJsonBlocks(markdown: string): string[] {
    const lines = markdown.split(/\r?\n/);
    const blocks: string[] = [];
    let inBlock = false;
    let blockLines: string[] = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (!inBlock) {
        const match = line.match(/^```json(5)?(\s|$)/);
        if (match) {
          inBlock = true;
          blockLines = [];
          continue; // Start capturing from the next line
        }
      } else {
        // End block on closing ```
        if (/^\s*`{3,}\s*$/.test(line)) {
          blocks.push(blockLines.join('\n').trim());
          inBlock = false;
          continue;
        }
        // End block on two consecutive blank lines
        if (blockLines.length > 0 && /^\s*$/.test(line) && /^\s*$/.test(blockLines[blockLines.length - 1])) {
          blocks.push(blockLines.join('\n').trim());
          inBlock = false;
          continue;
        }
        blockLines.push(line);
      }
    }
    // If file ends while still in a block, push what we have
    if (inBlock && blockLines.length > 0) {
      blocks.push(blockLines.join('\n').trim());
    }
    return blocks;
  }

  private cleanJsonBlock(block: string): string {
    // Remove lines that are just ellipsis comments
    let cleaned = block
      .split('\n')
      .filter(line => !line.trim().startsWith('...'))
      .filter(line => !line.trim().startsWith('#'))
      .join('\n');

    // Remove single-line // and # comments only when outside of strings
    cleaned = this.removeSingleLineCommentsPreservingStrings(cleaned);

    // Remove multi-line /* ... */ comments
    cleaned = cleaned.replace(/\/\*[\s\S]*?\*\//g, '');

    // Skip blocks that look like environment variables (KEY=VALUE format)
    const lines = cleaned.split('\n');
    const envVarLines = lines.filter(line => /^[A-Z_][A-Z0-9_]*=/.test(line.trim()));
    if (envVarLines.length > 0 && envVarLines.length === lines.filter(line => line.trim()).length) {
      return ''; // Return empty to skip this block
    }

    // Skip blocks that look like JSONL (JSON Lines) - multiple JSON objects on separate lines
    const jsonLines = lines.filter(line => line.trim().startsWith('{') && line.trim().endsWith('}'));
    if (jsonLines.length > 1 && jsonLines.length === lines.filter(line => line.trim()).length) {
      return ''; // Return empty to skip this block
    }

    // If the content doesn't start with a curly brace or square bracket, wrap it in curly braces
    if (!cleaned.trim().startsWith('{') && !cleaned.trim().startsWith('[')) {
      cleaned = `{
${cleaned}
}`;
    }
    
    return cleaned;
  }

  private removeSingleLineCommentsPreservingStrings(block: string): string {
    const commentMarkers = ['//', '#'];
    const lines = block.split('\n');
    const processedLines = lines.map(line => {
      let inString = false;
      let escaped = false;
      let result = '';
      let i = 0;
      while (i < line.length) {
        const char = line[i];
        if (escaped) {
          result += char;
          escaped = false;
          i++;
          continue;
        }
        if (char === '\\') {
          result += char;
          escaped = true;
          i++;
          continue;
        }
        if (char === '"') {
          result += char;
          inString = !inString;
          i++;
          continue;
        }
        // Check for comment markers only if not in a string
        if (!inString) {
          for (const marker of commentMarkers) {
            if (line.startsWith(marker, i)) {
              // Stop at the comment marker
              return result.trimEnd();
            }
          }
        }
        result += char;
        i++;
      }
      return result;
    });
    return processedLines.join('\n');
  }

  private looksLikeConfig(obj: any): boolean {
    if (!obj || typeof obj !== 'object') return false;
    return (
      Object.values(obj).some(
        (v: any) => v && typeof v === 'object' && (v.command || v.url)
      )
    );
  }

  private extractMCPConfig(config: any): ServerConfig {
    const mcpConfig: ServerConfig = {};

    if (config.type) {
      mcpConfig.type = config.type;
    } else {
      if (config.command) {
        mcpConfig.type = "stdio";
      } else if (config.url) {
        if (config.url.includes("/mcp") && !config.url.includes("/sse")) {
          mcpConfig.type = "streamable";
        } else {
          mcpConfig.type = "sse";
        }
      }
    }

    if (config.command) mcpConfig.command = config.command;
    if (config.args) mcpConfig.args = config.args;
    if (config.env) mcpConfig.env = config.env;
    if (config.url) mcpConfig.url = config.url;
    if (config.headers) mcpConfig.headers = config.headers;
    
    return mcpConfig;
  }

  private async saveConfigs(serverId: string, configs: ServerConfig[]): Promise<void> {
    const configsDir = path.join(__dirname, '..', 'data', 'configs');
    
    // Ensure directory exists
    if (!fs.existsSync(configsDir)) {
      fs.mkdirSync(configsDir, { recursive: true });
    }
    
    const filepath = path.join(configsDir, `${serverId}.json`);
    fs.writeFileSync(filepath, JSON.stringify(configs, null, 2), 'utf8');
  }
} 