import { CatalogBuilder } from './CatalogBuilder';
import { BuildConfig } from './types/BuildConfig';

async function main() {
  const config: BuildConfig = {
    debugMode: process.argv.includes('--debug'),
    steps: {
      scrape: true,
      download: true,
      process: true,
      prioritize: true,
      icons: true,
    },
    options: {
      forceRedownload: process.argv.includes('--force'), // TODO: Implement this
      skipExistingIcons: process.argv.includes('--skip-icons'), // TODO: Implement this
    },
  };

  try {
    console.log('Starting catalog build...');
    console.log(`Debug mode: ${config.debugMode}`);

    const builder = new CatalogBuilder(config);
    await builder.buildCatalog();

    console.log('Catalog build completed successfully!');
  } catch (error) {
    console.error('Catalog build failed:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}