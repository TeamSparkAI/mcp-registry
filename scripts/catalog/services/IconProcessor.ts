import * as fs from 'fs/promises';
import * as path from 'path';
import fetch from 'node-fetch';
import { BuildConfig } from '../types/BuildConfig';
import { ServerEntry } from '../types/ServerEntry';

export class IconProcessor {
  private config: BuildConfig;
  private iconsDir: string;

  constructor(config: BuildConfig) {
    this.config = config;
    this.iconsDir = path.resolve(__dirname, '../../../public/icons');
  }

  async processIcon(server: ServerEntry): Promise<void> {
    if (!server.icon || typeof server.icon !== 'string' || this.isLocalIcon(server.icon)) {
      return;
    }

    // Ensure icons directory exists
    await fs.mkdir(this.iconsDir, { recursive: true });

    let iconUrl = server.icon;
    // Convert GitHub blob URLs to raw URLs
    iconUrl = this.githubBlobToRaw(iconUrl);
    
    // Guess extension from URL for existence check
    const extMatch = iconUrl.match(/\.([a-zA-Z0-9]+)(\?.*)?$/);
    let ext = extMatch ? extMatch[1] : 'bin';
    let dest = path.join(this.iconsDir, `${server.id}.${ext}`);
    let fileAlreadyExists = await this.fileExists(dest);
    let filename = path.basename(dest);
    
    if (!fileAlreadyExists) {
      // If file doesn't exist, download and get real extension
      const tempDest = path.join(this.iconsDir, server.id);
      const downloaded = await this.downloadIcon(iconUrl, tempDest);
      if (downloaded) {
        filename = downloaded;
        dest = path.join(this.iconsDir, downloaded);
      } else {
        console.warn(`Failed to process icon for ${server.id}`);
        return;
      }
    } else {
      console.log(`Icon already exists for ${server.id}, skipping download.`);
    }
    
    server.icon = `/icons/${filename}`;
    console.log(`Updated icon for ${server.id}`);
  }

  private isLocalIcon(icon: string): boolean {
    return icon.startsWith('/') || icon.startsWith('./') || icon.startsWith('../');
  }

  private getExtensionFromContentType(contentType: string, url: string): string {
    console.log('Getting extension from contentType', contentType, 'for url', url);
    if (contentType.includes('svg')) return 'svg';
    if (contentType.includes('png')) return 'png';
    if (contentType.includes('jpeg') || contentType.includes('jpg')) return 'jpg';
    if (contentType.includes('webp')) return 'webp';
    if (contentType.includes('ico')) return 'ico';
    // fallback: try to get from url
    console.log('Failed to get extension from contentType', contentType);
    const m = url.match(/\.([a-zA-Z0-9]+)(\?.*)?$/);
    console.log('Got extension from url', url, );
    if (m) return m[1];
    return 'bin';
  }

  private githubBlobToRaw(url: string): string {
    // Convert https://github.com/user/repo/blob/branch/path/to/file.png
    // to     https://raw.githubusercontent.com/user/repo/branch/path/to/file.png
    const match = url.match(/^https:\/\/github\.com\/([^\/]+)\/([^\/]+)\/blob\/([^\/]+)\/(.+)$/);
    if (match) {
      const [, user, repo, branch, pathPart] = match;
      return `https://raw.githubusercontent.com/${user}/${repo}/${branch}/${pathPart}`;
    }
    return url;
  }

  private async fileExists(filePath: string): Promise<boolean> {
    try {
      await fs.access(filePath);
      return true;
    } catch {
      return false;
    }
  }

  private getOrigin(url: string): string {
    try {
      const u = new URL(url);
      return u.origin + '/';
    } catch {
      return url;
    }
  }

  private async downloadIcon(url: string, dest: string): Promise<string | null> {
    console.log('Downloading icon from', url, 'to', dest);
    try {
      const res = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36',
          'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
          'Referer': this.getOrigin(url),
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        }
      });
      
      if (!res.ok) {
        console.error(`Failed to fetch ${url}: ${res.status}`);
        return null;
      }
      
      const contentType = res.headers.get('content-type') || '';
      const ext = this.getExtensionFromContentType(contentType, res.url);
      const destWithExt = `${dest}.${ext}`;
      const arrayBuffer = await res.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      await fs.writeFile(destWithExt, buffer);
      return path.basename(destWithExt);
    } catch (err) {
      console.error(`Error downloading ${url}:`, err);
      return null;
    }
  }
} 