'use client';

import React from 'react';
import { RegistryClientProvider } from '@teamsparkai/mcp-registry-ux';

interface RegistryClientWrapperProps {
  children: React.ReactNode;
}

/**
 * Client-side wrapper for RegistryClientProvider.
 * Only wraps children with provider if NEXT_PUBLIC_REGISTRY_URL is set.
 * Otherwise, uses default external registry (no provider needed).
 */
export function RegistryClientWrapper({ children }: RegistryClientWrapperProps) {
  const registryUrl = process.env.NEXT_PUBLIC_REGISTRY_URL;
  
  if (registryUrl) {
    return (
      <RegistryClientProvider config={{ baseUrl: registryUrl }}>
        {children as any}
      </RegistryClientProvider>
    );
  }
  
  return <>{children}</>;
}

