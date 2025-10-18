// Core service
export { RegistryService, type RegistryServiceConfig } from './RegistryService';

// Types
export * from './types';

// Data sources
export { FileDataSource, type FileDataSourceConfig } from './datasources/FileDataSource';

// Adapters
export { createRegistryHandler } from './adapters/nextjs';

