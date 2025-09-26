#!/usr/bin/env tsx

import { getRegistryService } from '../../lib/services/registryService';

async function downloadRegistry() {
  try {
    console.log('Starting registry download...');
    
    const registryService = getRegistryService();
    
    // Force reload the registry from the API
    await registryService.reloadRegistry();
    
    // Get the updated server count
    const servers = await registryService.getAllServers();
    
    console.log(`✅ Successfully downloaded registry with ${servers.length} servers`);
    console.log(`📁 Registry file saved to: ${registryService.getRegistryFilePath()}`);
    
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
