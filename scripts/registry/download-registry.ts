#!/usr/bin/env tsx

import { ServerResponse, ServerListResponse } from '../../types/mcp-registry';
import fs from 'fs';
import path from 'path';

// Official MCP Registry API endpoint
const MCP_REGISTRY_API_URL = 'https://registry.modelcontextprotocol.io/v0/servers';
const REGISTRY_FILE_PATH = path.join(process.cwd(), 'public', 'server-registry.json');

async function fetchAllServers(): Promise<ServerResponse[]> {
  const allServers: ServerResponse[] = [];
  let cursor: string | undefined = undefined;
  const limit = 100; // Maximum per page

  while (true) {
    const params = new URLSearchParams();
    if (cursor) params.set('cursor', cursor);
    params.set('limit', limit.toString());
    
    const url = `${MCP_REGISTRY_API_URL}?${params.toString()}`;
    console.log(`Fetching: ${url}`);
    
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch registry: ${response.status} ${response.statusText}`);
    }

    const data: ServerListResponse = await response.json();
    
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

async function saveToFile(servers: ServerResponse[]): Promise<void> {
  // Ensure public directory exists
  const publicPath = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicPath)) {
    fs.mkdirSync(publicPath, { recursive: true });
  }

  const registryData: ServerListResponse = {
    servers: servers,
    metadata: { count: servers.length }
  };

  const jsonContent = JSON.stringify(registryData, null, 2);
  fs.writeFileSync(REGISTRY_FILE_PATH, jsonContent, 'utf8');
  
  console.log(`Saved ${servers.length} servers to ${REGISTRY_FILE_PATH}`);
}

async function downloadRegistry() {
  try {
    console.log('Starting registry download...');
    console.log('Downloading registry from official API...');
    
    // Fetch all servers from the registry API
    const servers = await fetchAllServers();
    
    console.log(`Downloaded ${servers.length} servers`);
    
    // Save to file
    await saveToFile(servers);
    
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
