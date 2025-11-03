'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ServerResponse, ServerList as ServerListComponent, NavigationAdapter, LinkProps } from '@teamsparkai/mcp-registry-ux';
import { encodeServerNameForRoute } from '@/registry-utils/routeUtils';
import { ThemeToggle } from './components/ThemeToggle';
import { useRegistryClient } from '@teamsparkai/mcp-registry-ux';

export default function RegistryPage() {
  const { client } = useRegistryClient();
  const [servers, setServers] = useState<ServerResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<string[]>(['Latest']);

  useEffect(() => {
    loadServerRegistry();
  }, [client]);

  const loadServerRegistry = async () => {
    try {
      setLoading(true);
      const response = await client.getServers({ limit: 10000 });
      if (response.servers) {
        setServers(response.servers);
      } else {
        throw new Error('Invalid response format');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load server registry');
    } finally {
      setLoading(false);
    }
  };

  const filteredServers = servers.filter(serverResponse => {
    const search = searchTerm.toLowerCase();
    const name = (serverResponse.server.name || '').toLowerCase();
    const description = (serverResponse.server.description || '').toLowerCase();

    const nameMatch = name.includes(search);
    const descMatch = description.includes(search);

    const matchesSearch = !searchTerm || nameMatch || descMatch;
    
    // Filter logic for Latest/Hosted/Installable
    let matchesFilters = true;
    if (selectedFilters.length > 0) {
      matchesFilters = selectedFilters.every(filter => {
        if (filter === 'Latest') {
          return serverResponse._meta?.['io.modelcontextprotocol.registry/official']?.isLatest === true;
        } else if (filter === 'Hosted') {
          return serverResponse.server.remotes && serverResponse.server.remotes.length > 0;
        } else if (filter === 'Installable') {
          return serverResponse.server.packages && serverResponse.server.packages.length > 0;
        }
        return false;
      });
    }
    
    return matchesSearch && matchesFilters;
  }).sort((a, b) => (a.server.name || '').localeCompare(b.server.name || ''));

  const handleFilterToggle = (filter: string) => {
    setSelectedFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 dark:border-blue-400 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300">Loading server registry...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-600 dark:text-red-400 text-6xl mb-4">⚠️</div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Error Loading Registry</h1>
          <p className="text-gray-600 dark:text-gray-300">{error}</p>
        </div>
      </div>
    );
  }

  const navigationAdapter: NavigationAdapter = {
    goToServer: (serverName: string, version: string) => {
      return `/servers/${encodeServerNameForRoute(serverName)}/${encodeURIComponent(version)}`;
    },
    goToServerVersions: (serverName: string) => {
      return `/servers/${encodeServerNameForRoute(serverName)}`;
    },
    Link: ({ href, children, className, onClick }: LinkProps) => {
      return (
        <Link href={href} className={className} onClick={onClick}>
          {children}
        </Link>
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="mb-4 sm:mb-0">
              <div className="flex items-start space-x-3">
                <img 
                  src="/mcp_black.png" 
                  alt="MCP Registry" 
                  className="w-16 h-16 object-contain dark:hidden"
                />
                <img 
                  src="/mcp_white.png" 
                  alt="MCP Registry" 
                  className="w-16 h-16 object-contain hidden dark:block"
                />
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white">MCP Server Registry</h1>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">Browse and discover servers from the official MCP Registry</p>
                </div>
              </div>
            </div>
            <div className="text-right space-y-2">
              <div className="flex items-center justify-end gap-2">
                <ThemeToggle />
                <Link
                  href="/about"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-600 hover:border-gray-400 dark:hover:border-gray-500 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  About This Service
                </Link>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                Official Registry: <a href="https://registry.modelcontextprotocol.io" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">registry.modelcontextprotocol.io</a>
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <ServerListComponent
          servers={servers}
          filteredServers={filteredServers}
          searchTerm={searchTerm}
          selectedFilters={selectedFilters}
          onSearchChange={setSearchTerm}
          onFilterToggle={handleFilterToggle}
          onClearFilters={() => setSelectedFilters([])}
          onServerClick={() => {}} // No longer needed with Link navigation
          navigationAdapter={navigationAdapter}
        />
      </div>
    </div>
  );
}
