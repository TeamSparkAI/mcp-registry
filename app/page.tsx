'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ServerResponse, ServerList as ServerListComponent, NavigationAdapter, LinkProps } from '@teamsparkai/mcp-registry-ux';
import { encodeServerNameForRoute } from '@/registry-utils/routeUtils';

export default function RegistryPage() {
  const [servers, setServers] = useState<ServerResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<string[]>(['Latest']);

  useEffect(() => {
    loadServerRegistry();
  }, []);




  const loadServerRegistry = async () => {
    try {
      setLoading(true);
      // Fetch all servers from the API (with a high limit to get all)
      const response = await fetch('/api/v0/servers?limit=10000');
      if (!response.ok) {
        throw new Error('Failed to load server registry');
      }
      const data = await response.json();
      if (data.servers) {
        setServers(data.servers);
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
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading server registry...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-600 text-6xl mb-4">⚠️</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Error Loading Registry</h1>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  const navigationAdapter: NavigationAdapter = {
    goToServer: (serverName: string, version: string) => {
      window.location.href = `/servers/${encodeServerNameForRoute(serverName)}/${encodeURIComponent(version)}`;
    },
    goToServerVersions: (serverName: string) => {
      window.location.href = `/servers/${encodeServerNameForRoute(serverName)}`;
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
  );
}
