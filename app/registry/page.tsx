'use client';

import { useState, useEffect } from 'react';
import { ServerJSON } from '@/types/mcp-registry';

export default function RegistryPage() {
  const [servers, setServers] = useState<ServerJSON[]>([]);
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
      const response = await fetch('/server-registry.json');
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

  const filteredServers = servers.filter(server => {
    const search = searchTerm.toLowerCase();
    const name = (server.name || '').toLowerCase();
    const description = (server.description || '').toLowerCase();

    const nameMatch = name.includes(search);
    const descMatch = description.includes(search);

    const matchesSearch = !searchTerm || nameMatch || descMatch;
    
    // Filter logic for Latest/Hosted/Installable
    let matchesFilters = true;
    if (selectedFilters.length > 0) {
      matchesFilters = selectedFilters.every(filter => {
        if (filter === 'Latest') {
          return server._meta?.['io.modelcontextprotocol.registry/official']?.isLatest === true;
        } else if (filter === 'Hosted') {
          return server.remotes && server.remotes.length > 0;
        } else if (filter === 'Installable') {
          return server.packages && server.packages.length > 0;
        }
        return false;
      });
    }
    
    return matchesSearch && matchesFilters;
  }).sort((a, b) => a.name.localeCompare(b.name));

  const getRemotesSummary = (server: ServerJSON): string | null => {
    if (!server.remotes || server.remotes.length === 0) {
      return null;
    }
    const remoteTypes = server.remotes.map(remote => remote.type).join(', ');
    return remoteTypes;
  };

  const getPackagesSummary = (server: ServerJSON): string | null => {
    if (!server.packages || server.packages.length === 0) {
      return null;
    }
    const packageInfos = server.packages.map(pkg => {
      return `${pkg.registryType}`;
    }).join(', ');
    return packageInfos;
  };

  const isOfficial = (server: ServerJSON) => {
    return server._meta?.['io.modelcontextprotocol.registry/official']?.isLatest;
  };

  const handleFilterToggle = (filter: string) => {
    setSelectedFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const [selectedServer, setSelectedServer] = useState<ServerJSON | null>(null);

  const handleServerClick = (server: ServerJSON) => {
    setSelectedServer(server);
  };

  const handleBackToRegistry = () => {
    setSelectedServer(null);
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

  // Show server details view
  if (selectedServer) {
    const server = selectedServer;

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <button
                onClick={handleBackToRegistry}
                className="flex items-center text-gray-600 hover:text-gray-800"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Registry
              </button>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <img 
                  src="/mcp_black.png" 
                  alt="MCP Registry" 
                  className="w-5 h-5 object-contain"
                />
                <span>MCP Server Registry</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="space-y-6">
            {/* Server Header */}
            <div className="bg-white rounded-lg border p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 min-w-0 flex-1 mr-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <img src="/mcp_black.png" alt="MCP Server" className="w-10 h-10" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h1 className="text-2xl font-bold text-gray-900">{server.name}</h1>
                    <p className="text-gray-600 mt-1">{server.description}</p>
                    {server.websiteUrl && (
                      <div className="mt-2">
                        <a 
                          href={server.websiteUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 break-all"
                        >
                          {server.websiteUrl}
                        </a>
                      </div>
                    )}
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                      <span>Version: {server.version}</span>
                      {server.status && <span>Status: {server.status}</span>}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Details Grid */}
            <div className="space-y-6">
              {/* Repository Information */}
              {server.repository && server.repository.url && server.repository.url.trim() !== '' && (
                <div className="bg-white rounded-lg border p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Repository</h2>
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm font-medium text-gray-500">Source</label>
                      <p className="text-gray-900 capitalize">{server.repository.source}</p>
                    </div>
                    <div>
                      <a 
                        href={server.repository.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 break-all"
                      >
                        {server.repository.url}
                      </a>
                    </div>
                    {server.repository.subfolder && (
                      <div>
                        <label className="text-sm font-medium text-gray-500">Subfolder</label>
                        <p className="text-gray-900">{server.repository.subfolder}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Remotes Section */}
              {server.remotes && server.remotes.length > 0 && (
                <div className="bg-white rounded-lg border p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Remotes</h2>
                  <div className="space-y-4">
                    {server.remotes.map((remote, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex-1">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <label className="text-sm font-medium text-gray-500">Type</label>
                                <p className="text-gray-900 font-mono">{remote.type}</p>
                              </div>
                              {(remote.type === 'streamable-http' || remote.type === 'sse') && remote.url && (
                                <div>
                                  <label className="text-sm font-medium text-gray-500">URL</label>
                                  <a 
                                    href={remote.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-800 break-all block"
                                  >
                                    {remote.url}
                                  </a>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        {(remote.type === 'streamable-http' || remote.type === 'sse') && remote.headers && remote.headers.length > 0 && (
                          <div className="mt-4">
                            <label className="text-sm font-medium text-gray-500">Headers</label>
                            <div className="mt-1 space-y-2">
                              {remote.headers.map((header, headerIndex) => (
                                <div key={headerIndex} className="flex items-center space-x-4 text-sm">
                                  <span className="font-mono bg-gray-100 px-2 py-1 rounded">{header.name}</span>
                                  <span className="text-gray-600">:</span>
                                  <span className="font-mono bg-gray-100 px-2 py-1 rounded">{header.value || '(empty)'}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Packages Section */}
              {server.packages && server.packages.length > 0 && (
                <div className="bg-white rounded-lg border p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Packages</h2>
                  <div className="space-y-4">
                    {server.packages.map((pkg, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex-1">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                              <div>
                                <label className="text-sm font-medium text-gray-500">Identifier</label>
                                <div>
                                  {pkg.registryType === 'npm' ? (
                                    <a 
                                      href={`https://www.npmjs.com/package/${pkg.identifier}`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-blue-600 hover:text-blue-800 font-mono break-all"
                                    >
                                      {pkg.identifier}
                                    </a>
                                  ) : pkg.registryType === 'pypi' ? (
                                    <a 
                                      href={`https://pypi.org/project/${pkg.identifier}`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-blue-600 hover:text-blue-800 font-mono break-all"
                                    >
                                      {pkg.identifier}
                                    </a>
                                  ) : (
                                    <p className="text-gray-900 font-mono">{pkg.identifier}</p>
                                  )}
                                </div>
                              </div>
                              <div>
                                <label className="text-sm font-medium text-gray-500">Version</label>
                                <p className="text-gray-900">v{pkg.version}</p>
                              </div>
                              <div>
                                <label className="text-sm font-medium text-gray-500">Registry Type</label>
                                <p className="text-gray-900">{pkg.registryType}</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {pkg.runtimeHint && (
                          <div className="border-t border-gray-100 pt-4 mt-4">
                            <label className="text-sm font-medium text-gray-500">Runtime Hint</label>
                            <p className="text-gray-900 font-mono text-sm bg-gray-50 p-2 rounded">{pkg.runtimeHint}</p>
                          </div>
                        )}

                        {pkg.runtimeArguments && pkg.runtimeArguments.length > 0 && (
                          <div className="border-t border-gray-100 pt-4 mt-4">
                            <label className="text-sm font-medium text-gray-500">Runtime Arguments</label>
                            <div className="mt-1 space-y-2">
                              {pkg.runtimeArguments.map((arg, argIndex) => (
                                <div key={argIndex} className="flex items-center space-x-4 text-sm">
                                  {arg.type === 'named' && arg.name && (
                                    <span className="font-mono bg-gray-100 px-2 py-1 rounded">{arg.name}</span>
                                  )}
                                  {arg.type === 'named' && arg.name && (
                                    <span className="text-gray-600">:</span>
                                  )}
                                  <span className="font-mono bg-gray-100 px-2 py-1 rounded">{arg.value || arg.default || '(empty)'}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {pkg.packageArguments && pkg.packageArguments.length > 0 && (
                          <div className="border-t border-gray-100 pt-4 mt-4">
                            <label className="text-sm font-medium text-gray-500">Package Arguments</label>
                            <div className="mt-1 space-y-2">
                              {pkg.packageArguments.map((arg, argIndex) => (
                                <div key={argIndex} className="flex items-center space-x-4 text-sm">
                                  {arg.type === 'named' && arg.name && (
                                    <span className="font-mono bg-gray-100 px-2 py-1 rounded">{arg.name}</span>
                                  )}
                                  {arg.type === 'named' && arg.name && (
                                    <span className="text-gray-600">:</span>
                                  )}
                                  <span className="font-mono bg-gray-100 px-2 py-1 rounded">{arg.value || arg.default || '(empty)'}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {pkg.environmentVariables && pkg.environmentVariables.length > 0 && (
                          <div className="border-t border-gray-100 pt-4 mt-4">
                            <label className="text-sm font-medium text-gray-500">Environment Variables</label>
                            <div className="mt-1 space-y-2">
                              {pkg.environmentVariables.map((envVar, envIndex) => (
                                <div key={envIndex} className="flex items-center space-x-4 text-sm">
                                  <span className="font-mono bg-gray-100 px-2 py-1 rounded">{envVar.name}</span>
                                  <span className="text-gray-600">:</span>
                                  <span className="font-mono bg-gray-100 px-2 py-1 rounded">{envVar.value || envVar.default || '(empty)'}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Registry Metadata */}
              {server._meta && (
                <div className="bg-white rounded-lg border p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Registry Information</h2>
                  <div className="space-y-3">
                    {server._meta['io.modelcontextprotocol.registry/official'] && (
                      <>
                        <div>
                          <label className="text-sm font-medium text-gray-500">Server ID</label>
                          <p className="text-gray-900 font-mono text-sm">{server._meta['io.modelcontextprotocol.registry/official'].serverId}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-500">Version ID</label>
                          <p className="text-gray-900 font-mono text-sm">{server._meta['io.modelcontextprotocol.registry/official'].versionId}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-500">Published</label>
                          <p className="text-gray-900">
                            {new Date(server._meta['io.modelcontextprotocol.registry/official'].publishedAt).toLocaleDateString()}
                          </p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-500">Latest Version</label>
                          <p className="text-gray-900">
                            {server._meta['io.modelcontextprotocol.registry/official'].isLatest ? 'Yes' : 'No'}
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="mb-4 sm:mb-0">
              <div className="flex items-start space-x-3">
                <img 
                  src="/mcp_black.png" 
                  alt="MCP Registry" 
                  className="w-16 h-16 object-contain"
                />
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">MCP Server Registry</h1>
                  <p className="text-gray-600 mt-1">Browse and discover servers from the official MCP Registry</p>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-base text-gray-500">
                Official Registry: <a href="https://registry.modelcontextprotocol.io" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">registry.modelcontextprotocol.io</a>
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="space-y-6">
          {/* Search and Filters */}
          <div className="bg-white rounded-lg border p-6">
            <div className="flex flex-col gap-4">
              <div>
                <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                  Search Servers
                </label>
                <input
                  id="search"
                  type="text"
                  placeholder="Search by name or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              {/* Filter Buttons and Count */}
              <div className="flex justify-between items-center">
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => handleFilterToggle('Hosted')}
                    className={`px-3 py-1 text-sm rounded-full border ${
                      selectedFilters.includes('Hosted')
                        ? 'bg-blue-100 border-blue-300 text-blue-800'
                        : 'bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Hosted
                  </button>
                  <button
                    onClick={() => handleFilterToggle('Installable')}
                    className={`px-3 py-1 text-sm rounded-full border ${
                      selectedFilters.includes('Installable')
                        ? 'bg-blue-100 border-blue-300 text-blue-800'
                        : 'bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Installable
                  </button>
                  <button
                    onClick={() => handleFilterToggle('Latest')}
                    className={`px-3 py-1 text-sm rounded-full border ${
                      selectedFilters.includes('Latest')
                        ? 'bg-blue-100 border-blue-300 text-blue-800'
                        : 'bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Latest
                  </button>
                  {selectedFilters.length > 0 && (
                    <button
                      onClick={() => setSelectedFilters([])}
                      className="px-3 py-1 text-sm text-gray-600 hover:text-gray-800"
                    >
                      Clear filters
                    </button>
                  )}
                </div>
                <div className="text-sm text-gray-600">
                  {searchTerm || selectedFilters.length > 0 
                    ? `${filteredServers.length} matching servers`
                    : `${servers.length} servers`
                  }
                </div>
              </div>
            </div>
          </div>

          {/* Server Grid */}
          <div className="bg-white rounded-lg border">
            <div className="p-6">
              {filteredServers.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-gray-500">
                    {searchTerm ? 'No servers found matching your search.' : 'No servers available.'}
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredServers.map((server) => {
                    const remotesSummary = getRemotesSummary(server);
                    const packagesSummary = getPackagesSummary(server);

                    return (
                      <div
                        key={`${server.name}-${server.version}`}
                        className="border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer"
                        onClick={() => handleServerClick(server)}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <img src="/mcp_black.png" alt="MCP Server" className="w-8 h-8" />
                          </div>
                        </div>
                        
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                          {server.name}
                        </h3>
                        
                        <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                          {server.description}
                        </p>
                        
                        <div className="space-y-2 text-xs text-gray-500">
                          <div className="flex items-center justify-between">
                            <span>Version</span>
                            <span className="font-medium">{server.version}</span>
                          </div>
                          {remotesSummary && (
                            <div className="flex items-center justify-between">
                              <span>Remotes</span>
                              <span className="font-medium">{remotesSummary}</span>
                            </div>
                          )}
                          {packagesSummary && (
                            <div className="flex items-center justify-between">
                              <span>Packages</span>
                              <span className="font-medium">{packagesSummary}</span>
                            </div>
                          )}
                          {server.status && (
                            <div className="flex items-center justify-between">
                              <span>Status</span>
                              <span className={`font-medium ${
                                server.status === 'active' ? 'text-green-600' : 
                                server.status === 'deprecated' ? 'text-yellow-600' : 
                                'text-gray-600'
                              }`}>
                                {server.status}
                              </span>
                            </div>
                          )}
                        </div>
                        
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
