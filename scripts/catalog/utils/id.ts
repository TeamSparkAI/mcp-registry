import { randomBytes, createHash } from 'crypto';

/**
 * Sanitizes a server name to be URL-safe
 * @param serverName - The name of the server
 * @returns A URL-safe server name
 */
export function createUrlSafeServerName(serverName: string): string {
    return serverName
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
}

/**
 * Creates a unique server ID in the format: serverName:hash
 * Uses SHA256 hash of the repository URL, truncated to 8 characters
 * @param serverName - The name of the server
 * @param repoUrl - The repository URL to hash
 * @returns A unique server ID string
 */
export function createServerId(serverName: string, repoUrl: string): string {
    // Sanitize server name: lowercase, replace non-alphanumeric chars with hyphens, remove multiple hyphens
    const sanitizedName = createUrlSafeServerName(serverName);
    
    // Create SHA256 hash of the repository URL
    const hash = createHash('sha256').update(repoUrl).digest('hex');
    
    // Take first 8 characters for a shorter, readable hash
    const shortHash = hash.substring(0, 8);
    
    // Return in format: serverName:hash
    return `${sanitizedName}:${shortHash}`;
}