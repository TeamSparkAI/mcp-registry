#!/usr/bin/env tsx

import { ServerResponse, ServerListResponse, RegistryClient } from '@teamsparkai/mcp-registry-client';
import { put } from '@vercel/blob';
import fs from 'fs';
import path from 'path';

// Official MCP Registry API endpoint
const MCP_REGISTRY_API_URL = 'https://registry.modelcontextprotocol.io/v0';
const REGISTRY_FILE_PATH = path.join(process.cwd(), 'public', 'server-registry.json');
/** Fixed Blob pathname — must match FileDataSource / app consumers */
export const REGISTRY_BLOB_PATHNAME = 'registry/server-registry.json';

async function fetchAllServers(): Promise<ServerResponse[]> {
  const client = new RegistryClient({
    baseUrl: MCP_REGISTRY_API_URL,
    timeout: 60000 // 60 seconds for large downloads
  });
  
  const allServers: ServerResponse[] = [];
  let cursor: string | undefined = undefined;
  const limit = 100; // Maximum per page

  while (true) {
    const data = await client.getServers({
      cursor,
      limit
    });
    
    if (data.servers) {
      // Keep wrapped format as-is per OpenAPI spec
      allServers.push(...data.servers);
      console.log(`Fetched ${data.servers.length} servers (total: ${allServers.length})`);
    }
    
    // Check if we have more pages
    if (!data.metadata?.nextCursor || data.servers?.length === 0) {
      break;
    }
    
    cursor = data.metadata.nextCursor;
  }

  return allServers;
}

function buildRegistryJson(servers: ServerResponse[]): string {
  const registryData: ServerListResponse = {
    servers: servers,
    metadata: { count: servers.length }
  };
  // Compact JSON — smaller Blob upload / storage (no pretty-print)
  return JSON.stringify(registryData);
}

async function saveToFile(jsonContent: string, serverCount: number): Promise<void> {
  const publicPath = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicPath)) {
    fs.mkdirSync(publicPath, { recursive: true });
  }

  fs.writeFileSync(REGISTRY_FILE_PATH, jsonContent, 'utf8');
  console.log(`Saved ${serverCount} servers to ${REGISTRY_FILE_PATH}`);
}

async function uploadToBlob(jsonContent: string): Promise<void> {
  const token = process.env.BLOB_READ_WRITE_TOKEN;
  if (!token) {
    throw new Error('BLOB_READ_WRITE_TOKEN is required to upload the registry to Vercel Blob');
  }

  console.log(`Uploading to Vercel Blob: ${REGISTRY_BLOB_PATHNAME} (${(jsonContent.length / 1024 / 1024).toFixed(1)} MB)...`);

  const blob = await put(REGISTRY_BLOB_PATHNAME, jsonContent, {
    access: 'private',
    token,
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: 'application/json',
    multipart: true,
    // Short cache so overwrites are visible soon (API also uses in-memory cache per instance)
    cacheControlMaxAge: 60,
  });

  console.log(`✅ Uploaded to Blob: ${blob.pathname}`);
}

async function downloadRegistry() {
  try {
    console.log('Starting registry download...');
    console.log('Downloading registry from official API...');
    
    const servers = await fetchAllServers();
    console.log(`Downloaded ${servers.length} servers`);

    const jsonContent = buildRegistryJson(servers);

    // Always write locally (dev / validate scripts). Do not commit this file in CI.
    await saveToFile(jsonContent, servers.length);

    if (process.env.BLOB_READ_WRITE_TOKEN) {
      await uploadToBlob(jsonContent);
    } else {
      console.log('⚠️  BLOB_READ_WRITE_TOKEN not set — skipped Blob upload (local file only)');
    }
    
    console.log(`✅ Successfully downloaded registry with ${servers.length} servers`);
    console.log(`📁 Registry file saved to: ${REGISTRY_FILE_PATH}`);
    
    return 0;
  } catch (error) {
    console.error('❌ Error downloading registry:', error);
    return 1;
  }
}

// Run the script
downloadRegistry().then(exitCode => {
  process.exit(exitCode);
});
