'use client';

import React, { createContext, useContext, useMemo } from 'react';
import { RegistryClient, RegistryClientConfig } from '../adapters';

interface RegistryClientContextType {
  client: RegistryClient;
}

const RegistryClientContext = createContext<RegistryClientContextType | undefined>(undefined);

// Default registry endpoint - external registry URL
const DEFAULT_REGISTRY_URL = 'https://registry.teamspark.ai/api/v0';

// Default client instance (created lazily when needed)
let defaultClientInstance: RegistryClient | null = null;

/**
 * Gets or creates the default RegistryClient instance.
 * Uses the external registry URL as default.
 */
function getDefaultClient(): RegistryClient {
  if (!defaultClientInstance) {
    defaultClientInstance = new RegistryClient({ baseUrl: DEFAULT_REGISTRY_URL });
  }
  return defaultClientInstance;
}

interface RegistryClientProviderProps {
  children: React.ReactNode;
  config?: RegistryClientConfig;
}

/**
 * Optional provider component that supplies a RegistryClient instance to all child components.
 * 
 * If no provider is used, components will use the default client pointing to the external registry.
 * This allows customizing the client configuration (e.g., different endpoint, custom fetch).
 * 
 * @example
 * // No provider needed - uses default external registry
 * function MyApp() {
 *   const { client } = useRegistryClient();
 *   // Uses https://registry.teamspark.ai/api/v0
 * }
 * 
 * @example
 * // Override to use local API
 * RegistryClientProvider with config={{ baseUrl: '/api/v0' }} wrapping your app
 * 
 * @example
 * // With custom fetch implementation
 * RegistryClientProvider with config={{ baseUrl: '/api/v0', fetch: customFetch, timeout: 60000 }}
 */
export function RegistryClientProvider({ 
  children, 
  config 
}: RegistryClientProviderProps) {
  // Create client instance once and reuse it (memoized to avoid recreating on every render)
  const client = useMemo(() => {
    if (config) {
      return new RegistryClient(config);
    }
    return getDefaultClient();
  }, [config?.baseUrl, config?.fetch, config?.timeout]);

  return (
    <RegistryClientContext.Provider value={{ client }}>
      {children}
    </RegistryClientContext.Provider>
  );
}

/**
 * Hook to access the RegistryClient instance.
 * 
 * If used within a RegistryClientProvider, returns the provider's client.
 * Otherwise, returns the default client (pointing to external registry at https://registry.teamspark.ai/api/v0).
 * 
 * @example
 * function MyComponent() {
 *   const { client } = useRegistryClient();
 *   
 *   useEffect(() => {
 *     client.getServers().then(response => {
 *       console.log(response.servers);
 *     });
 *   }, []);
 * }
 * 
 * @example
 * // With provider override: uses /api/v0
 * // Without provider: uses https://registry.teamspark.ai/api/v0
 */
export function useRegistryClient(): RegistryClientContextType {
  const context = useContext(RegistryClientContext);
  
  // If no provider, use default client
  if (context === undefined) {
    return { client: getDefaultClient() };
  }
  
  return context;
}

