import { Octokit } from '@octokit/rest';
import { createServerId } from '../utils/id';
import { BuildConfig } from '../types/BuildConfig';
import { ServerEntry } from '../types/ServerEntry';
import { parseRepoUrl } from '../utils/github';

export class ServerScraper {
  private config: BuildConfig;
  private octokit: Octokit;

  constructor(config: BuildConfig, octokit: Octokit) {
    this.config = config;
    this.octokit = octokit;
  }

  async scrapeServers(): Promise<ServerEntry[]> {
    try {
      console.log('Fetching README from modelcontextprotocol/servers...');
      const markdownContent = await this.fetchReadme();
      const lines = markdownContent.split('\n');
      const servers: ServerEntry[] = [];
      const seenServerIds = new Set<string>();
      
      // Find section indices
      const refIdx = lines.findIndex(l => l.match(/^## .*Reference Servers/));
      const archIdx = lines.findIndex(l => l.match(/^### .*Archived/));
      const officialIdx = lines.findIndex(l => l.match(/^### .*Official Integrations/));
      const communityIdx = lines.findIndex(l => l.match(/^### .*Community Servers/));
      const frameworksIdx = lines.findIndex(l => l.match(/^## .*Frameworks/));
      
      // Find next section or end for each
      const next = (idx: number) =>
        [archIdx, officialIdx, communityIdx, lines.length].filter(i => i > idx).sort((a, b) => a - b)[0];
      
      // Helper function to add servers while checking for duplicates
      const addServersFromSection = (start: number, end: number, tags: string[]) => {
        const sectionServers = this.parseSection(lines, start, end, tags);
        for (const server of sectionServers) {
          if (this.config.serverIds && this.config.serverIds.length > 0 && !this.config.serverIds.includes(server.id)) {
            continue;
          }
          if (this.config.maxServers && this.config.maxServers > 0 && servers.length >= this.config.maxServers) {
            break;
          }
          if (seenServerIds.has(server.id)) {
            console.log(`Skipping duplicate server: ${server.id} (${server.name})`);
            continue;
          }
          servers.push(server);
          seenServerIds.add(server.id);
        }
      };
      
      // Reference Servers
      if (refIdx !== -1) {
        addServersFromSection(refIdx + 1, next(refIdx), ['reference']);
      }
      // Archived
      if (archIdx !== -1) {
        addServersFromSection(archIdx + 1, next(archIdx), ['reference', 'archived']);
      }
      // Official Integrations
      if (officialIdx !== -1) {
        addServersFromSection(officialIdx + 1, next(officialIdx), ['official']);
      }
      // Community Servers (terminate at ## .*Frameworks if present)
      if (communityIdx !== -1) {
        const communityEnd = frameworksIdx !== -1 && frameworksIdx > communityIdx ? frameworksIdx : next(communityIdx);
        addServersFromSection(communityIdx + 1, communityEnd, ['community']);
      }

      // Fetch repository metadata
      await this.fetchRepoMetadata(servers);

      return servers;
    } catch (error) {
      console.error('Error scraping servers:', error);
      throw error;
    }
  }

  private cleanMarkdownLinks(text: string): string {
    // Remove markdown links like [text](url) and keep just the text
    return text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
  }

  private parseSection(
    lines: string[],
    start: number,
    end: number,
    tags: string[]
  ): ServerEntry[] {
    const servers: ServerEntry[] = [];
    for (let i = start; i < end; i++) {
      const line = lines[i].trim();
      if (!line.startsWith('-')) continue;
      
      // Extract icon if present
      const iconMatch = line.match(/<img[^>]+src="([^"]+)"[^>]*>/);
      const icon = iconMatch ? iconMatch[1] : null;
      
      // Extract name and repository
      const nameRepoMatch = line.match(/\*\*\[([^\]]+)\]\(([^)]+)\)\*\*/);
      if (!nameRepoMatch) continue;
      const name = nameRepoMatch[1];
      let repoUrl = nameRepoMatch[2];
      
      // Extract description (everything after the repository link)
      const descriptionMatch = line.match(/\*\*\[[^\]]+\]\([^)]+\)\*\*\s*-\s*(.+)/);
      let description = descriptionMatch ? descriptionMatch[1].trim() : '';
      description = this.cleanMarkdownLinks(description);
      
      // Determine repository source
      let source: 'github' | 'gitlab' | 'other' = 'other';
      if (tags.includes('reference') && repoUrl && !repoUrl.startsWith('http')) {
        // Reference server with relative path
        repoUrl = `https://github.com/modelcontextprotocol/servers/tree/main/${repoUrl.replace(/^\/*/, '')}`;
        source = 'github';
      } else if (repoUrl.includes('github.com')) {
        source = 'github';
      } else if (repoUrl.includes('gitlab.com')) {
        source = 'gitlab';
      }
      
      // Generate ID after URL is fully resolved
      const serverId = createServerId(name, repoUrl);
      
      servers.push({
        id: serverId,
        icon,
        name,
        description,
        repository: { url: repoUrl, source },
        tags: [...tags],
      });
    }
    return servers;
  }

  private async fetchRepoMetadata(servers: ServerEntry[]): Promise<void> {
    console.log('Fetching repository metadata...');
    
    for (const server of servers) {
      if (server.repository.source === 'github') {
        const repoInfo = parseRepoUrl(server.repository.url);
        if (repoInfo.owner && repoInfo.repo) {
          try {
            const { data: repoData } = await this.octokit.rest.repos.get({ 
              owner: repoInfo.owner, 
              repo: repoInfo.repo 
            });
            server.repository.stars = repoData.stargazers_count;
            server.repository.lastUpdated = repoData.updated_at;
          } catch (error: any) {
            console.error(`Error fetching repo metadata for ${server.name}:`, error.message || error);
          }
        }
      }
    }
  }

  private async fetchReadme(): Promise<string> {
    const { data } = await this.octokit.rest.repos.getReadme({
      owner: 'modelcontextprotocol',
      repo: 'servers',
      mediaType: { format: 'raw' },
    });
    return typeof data === 'string' ? data : data.toString();
  }
} 