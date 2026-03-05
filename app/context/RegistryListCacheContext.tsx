'use client';

import React, { createContext, useCallback, useContext, useState } from 'react';
import type { ServerResponse } from '@teamsparkai/mcp-registry-ux';
import type { ValidationResult } from '@teamsparkai/mcp-registry-validator';

interface RegistryListCacheState {
  cachedServers: ServerResponse[] | null;
  searchTerm: string;
  selectedFilters: string[];
  cachedValidationResults: Record<string, ValidationResult> | null;
}

interface RegistryListCacheContextValue extends RegistryListCacheState {
  setCachedServers: (servers: ServerResponse[] | null) => void;
  setSearchTerm: (term: string) => void;
  setSelectedFilters: (filters: string[]) => void;
  setCachedValidationResults: (results: Record<string, ValidationResult> | null) => void;
}

const defaultState: RegistryListCacheState = {
  cachedServers: null,
  searchTerm: '',
  selectedFilters: ['Latest'],
  cachedValidationResults: null,
};

const RegistryListCacheContext = createContext<RegistryListCacheContextValue | null>(null);

export function RegistryListCacheProvider({ children }: { children: React.ReactNode }) {
  const [cachedServers, setCachedServersState] = useState<ServerResponse[] | null>(defaultState.cachedServers);
  const [searchTerm, setSearchTermState] = useState(defaultState.searchTerm);
  const [selectedFilters, setSelectedFiltersState] = useState<string[]>(defaultState.selectedFilters);
  const [cachedValidationResults, setCachedValidationResultsState] = useState<Record<string, ValidationResult> | null>(defaultState.cachedValidationResults);

  const setCachedServers = useCallback((servers: ServerResponse[] | null) => {
    setCachedServersState(servers);
  }, []);

  const setSearchTerm = useCallback((term: string) => {
    setSearchTermState(term);
  }, []);

  const setSelectedFilters = useCallback((filters: string[]) => {
    setSelectedFiltersState(filters);
  }, []);

  const setCachedValidationResults = useCallback((results: Record<string, ValidationResult> | null) => {
    setCachedValidationResultsState(results);
  }, []);

  const value: RegistryListCacheContextValue = {
    cachedServers,
    searchTerm,
    selectedFilters,
    cachedValidationResults,
    setCachedServers,
    setSearchTerm,
    setSelectedFilters,
    setCachedValidationResults,
  };

  return (
    <RegistryListCacheContext.Provider value={value}>
      {children}
    </RegistryListCacheContext.Provider>
  );
}

export function useRegistryListCache() {
  const ctx = useContext(RegistryListCacheContext);
  if (!ctx) {
    throw new Error('useRegistryListCache must be used within RegistryListCacheProvider');
  }
  return ctx;
}
