import * as fs from 'fs';
import * as path from 'path';
import { Octokit } from '@octokit/rest';
import * as dotenv from 'dotenv';
import { BuildConfig } from './types/BuildConfig';
import { ServerEntry } from './types/ServerEntry';
import { ServerScraper } from './services/ServerScraper';
import { ReadmeDownloader } from './services/ReadmeDownloader';
import { ConfigProcessor } from './services/ConfigProcessor';
import { ConfigPrioritizer } from './services/ConfigPrioritizer';
import { IconProcessor } from './services/IconProcessor';
import { createUrlSafeServerName } from './utils/id';

dotenv.config({ path: path.join(__dirname, '..', '..', '.env') });

// We can use these for testing, either limit the total number of servers to process, or a list of server ids to process
const MAX_SERVERS = 0; // 0 means no limit
const SERVER_IDS: string[] = []; // If empty, all servers will be processed

export class CatalogBuilder {
  private serverScraper: ServerScraper;
  private readmeDownloader: ReadmeDownloader;
  private configProcessor: ConfigProcessor;
  private configPrioritizer: ConfigPrioritizer;
  private iconProcessor: IconProcessor;
  private config: BuildConfig;
  private octokit: Octokit;

  constructor(config: BuildConfig) {
    this.config = config;

    this.config.maxServers = MAX_SERVERS;
    this.config.serverIds = SERVER_IDS;
    
    // Initialize GitHub authentication
    const token = this.getGitHubToken();
    this.octokit = new Octokit({ 
      auth: token,
      userAgent: 'toolshed-server-catalog-script'
    });
    
    this.serverScraper = new ServerScraper(config, this.octokit);
    this.readmeDownloader = new ReadmeDownloader(config, this.octokit);
    this.configProcessor = new ConfigProcessor(config);
    this.configPrioritizer = new ConfigPrioritizer(config);
    this.iconProcessor = new IconProcessor(config);
  }

  async buildCatalog(): Promise<void> {
    try {
      // Step 1: Scrape server list (creates initial servers.json)
      console.log('Step 1: Scraping server list...');
      const servers = await this.serverScraper.scrapeServers();
      console.log(`Found ${servers.length} servers`);

      // Step 2: Process each server individually (excluding icons)
      console.log('Step 2: Processing servers...');
      await this.processServers(servers);

      // Step 3: Write servers.json (without local icon references)
      console.log('Step 3: Writing servers catalog...');
      await this.writeServers(servers, 'servers.json');

      // Step 4: Process icons and write servers-local.json (if enabled)
      if (this.config.steps.icons) {
        console.log('Step 4: Processing icons...');
        await this.processIcons(servers);
        await this.writeServers(servers, 'servers-local.json');
        console.log('Icon processing completed!');
      }

      console.log('Catalog build completed successfully!');
    } catch (error) {
      console.error('Catalog build failed:', error);
      throw error;
    }
  }

  private async processServers(servers: ServerEntry[]): Promise<void> {
    console.log(`Processing ${servers.length} servers...`);
    
    for (let i = 0; i < servers.length; i++) {
      const server = servers[i];
      console.log(`Processing ${i + 1}/${servers.length}: ${server.name}`);

      try {
        await this.processServer(server);
        console.log(`✓ Processed ${server.name}`);
      } catch (error) {
        console.error(`✗ Failed to process ${server.name}:`, error);
        // Continue with next server instead of failing entire pipeline
      }
    }
  }

  private async processServer(server: ServerEntry): Promise<void> {
    // Download README (in memory)
    if (this.config.steps.download) {
      const readme = await this.readmeDownloader.downloadReadme(server);
      
      // Extract configs (in memory)
      if (this.config.steps.process) {
        const configs = await this.configProcessor.extractConfigs(server.id, readme);
        
        // Prioritize and select best config (in memory)
        if (this.config.steps.prioritize) {
          const bestConfig = await this.configPrioritizer.selectBestConfig(configs);
          if (bestConfig) {
            // Apply any overrides
            const finalConfig = this.configPrioritizer.applyOverrides(server.id, bestConfig);
            server.serverName = createUrlSafeServerName(server.name);
            server.serverConfig = finalConfig;
          }
        }
      }
    }
  }

  private getGitHubToken(): string {
    // First try GH_PAT_RO
    const patToken = process.env.GH_PAT_RO;
    if (patToken) {
      return patToken;
    }
    
    // Then try GitHub Actions default token
    const ghaToken = process.env.GITHUB_TOKEN;
    if (ghaToken) {
      return ghaToken;
    }
    
    // If neither is available, error
    throw new Error('GitHub token not found in environment. Please set either GH_PAT_RO or GITHUB_TOKEN');
  }

  private async processIcons(servers: ServerEntry[]): Promise<void> {
    console.log(`Processing icons for ${servers.length} servers...`);
    
    for (let i = 0; i < servers.length; i++) {
      const server = servers[i];
      if (server.icon) {
        console.log(`Processing icon ${i + 1}/${servers.length}: ${server.name}`);
        try {
          await this.iconProcessor.processIcon(server);
          console.log(`✓ Processed icon for ${server.name}`);
        } catch (error) {
          console.error(`✗ Failed to process icon for ${server.name}:`, error);
          // Continue with next server instead of failing entire pipeline
        }
      }
    }
  }

  private async writeServers(servers: ServerEntry[], filename: string = 'servers.json'): Promise<void> {
    const outputPath = path.join(__dirname, '..', '..', 'public', filename);
    
    // Ensure the public directory exists
    const publicDir = path.dirname(outputPath);
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
      console.log(`Created directory: ${publicDir}`);
    }
    
    fs.writeFileSync(outputPath, JSON.stringify(servers, null, 2), 'utf8');
    console.log(`Successfully wrote ${servers.length} servers to ${outputPath}`);
  }
} 