import * as fs from 'fs';
import * as path from 'path';
import { Octokit } from '@octokit/rest';
import { BuildConfig } from '../types/BuildConfig';
import { ServerEntry } from '../types/ServerEntry';
import { parseRepoUrl } from '../utils/github';

export class ReadmeDownloader {
  private config: BuildConfig;
  private octokit: Octokit;

  constructor(config: BuildConfig, octokit: Octokit) {
    this.config = config;
    this.octokit = octokit;
  }

  async downloadReadme(server: ServerEntry): Promise<string> {
    const repoInfo = parseRepoUrl(server.repository.url);
    if (repoInfo.source !== 'github') {
      console.log(`Skipping ${server.name} - not a GitHub repository`);
      return '';
    }

    if (!repoInfo.owner || !repoInfo.repo) {
      console.log(`Skipping ${server.name} - could not parse GitHub URL: ${server.repository.url}`);
      return '';
    }

    try {
      let content: string;
      
      if (repoInfo.path) {
        // Try to get README from the specific directory using getContent
        try {
          const { data } = await this.octokit.rest.repos.getContent({
            owner: repoInfo.owner,
            repo: repoInfo.repo,
            path: `${repoInfo.path}/README.md`,
            mediaType: { format: 'raw' }
          });
          content = typeof data === 'string' ? data : data.toString();
        } catch (error: any) {
          if (error.status === 404) {
            // Fall back to root README
            const { data } = await this.octokit.rest.repos.getReadme({
              owner: repoInfo.owner,
              repo: repoInfo.repo,
              mediaType: { format: 'raw' }
            });
            content = typeof data === 'string' ? data : data.toString();
          } else {
            throw error;
          }
        }
      } else {
        // No path specified, get root README
        const { data } = await this.octokit.rest.repos.getReadme({
          owner: repoInfo.owner,
          repo: repoInfo.repo,
          mediaType: { format: 'raw' }
        });
        content = typeof data === 'string' ? data : data.toString();
      }

      // Optionally save for debugging
      if (this.config.debugMode) {
        await this.saveReadme(server.id, content);
      }

      return content;
    } catch (error: any) {
      if (error.status === 404) {
        console.log(`No README found for ${server.name}`);
      } else {
        console.error(`Error downloading README for ${server.name}:`, error.message || error);
      }
      return '';
    }
  }





  private async saveReadme(serverId: string, content: string): Promise<void> {
    const readmesDir = path.join(__dirname, '..', 'data', 'readmes');
    
    // Ensure directory exists
    if (!fs.existsSync(readmesDir)) {
      fs.mkdirSync(readmesDir, { recursive: true });
    }
    
    const filepath = path.join(readmesDir, `${serverId}.md`);
    fs.writeFileSync(filepath, content, 'utf8');
  }
} 