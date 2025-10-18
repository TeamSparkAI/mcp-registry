import { NextRequest } from 'next/server';
import { RegistryService, RegistryServiceConfig } from '../RegistryService';

export function createRegistryHandler(config: RegistryServiceConfig) {
  const service = new RegistryService(config);

  return async function handler(request: NextRequest) {
    const url = new URL(request.url);
    const path = url.pathname;
    const method = request.method;

    // Extract query parameters
    const query: Record<string, string> = {};
    url.searchParams.forEach((value, key) => {
      query[key] = value;
    });

    return await service.handleRequest(method, path, query);
  };
}

