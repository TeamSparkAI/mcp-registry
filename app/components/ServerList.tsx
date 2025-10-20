'use client';

import React from 'react';
import Link from 'next/link';
import { ServerResponse } from '@/types/mcp-registry';

interface ServerListProps {
  servers: ServerResponse[];
  filteredServers: ServerResponse[];
  searchTerm: string;
  selectedFilters: string[];
  onSearchChange: (term: string) => void;
  onFilterToggle: (filter: string) => void;
  onClearFilters: () => void;
  onServerClick: (serverResponse: ServerResponse) => void;
}

export default function ServerList({
  servers,
  filteredServers,
  searchTerm,
  selectedFilters,
  onSearchChange,
  onFilterToggle,
  onClearFilters,
  onServerClick
}: ServerListProps) {
  const getRemotesSummary = (serverResponse: ServerResponse): string | null => {
    if (!serverResponse.server.remotes || serverResponse.server.remotes.length === 0) {
      return null;
    }
    const remoteTypes = serverResponse.server.remotes.map(remote => remote.type).join(', ');
    return remoteTypes;
  };

  const getPackagesSummary = (serverResponse: ServerResponse): string | null => {
    if (!serverResponse.server.packages || serverResponse.server.packages.length === 0) {
      return null;
    }
    const packageInfos = serverResponse.server.packages.map(pkg => {
      return `${pkg.registryType}`;
    }).join(', ');
    return packageInfos;
  };

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
            <div className="text-right space-y-2">
              <p className="text-base text-gray-500">
                Official Registry: <a href="https://registry.modelcontextprotocol.io" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">registry.modelcontextprotocol.io</a>
              </p>
              <a
                href="/tester"
                className="flex items-center text-base text-green-600 hover:text-green-800 transition-colors"
              >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Developers: Test your server.json
              </a>
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
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              {/* Filter Buttons and Count */}
              <div className="flex justify-between items-center">
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => onFilterToggle('Hosted')}
                    className={`px-3 py-1 text-sm rounded-full border ${
                      selectedFilters.includes('Hosted')
                        ? 'bg-blue-100 border-blue-300 text-blue-800'
                        : 'bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Hosted
                  </button>
                  <button
                    onClick={() => onFilterToggle('Installable')}
                    className={`px-3 py-1 text-sm rounded-full border ${
                      selectedFilters.includes('Installable')
                        ? 'bg-blue-100 border-blue-300 text-blue-800'
                        : 'bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Installable
                  </button>
                  <button
                    onClick={() => onFilterToggle('Latest')}
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
                      onClick={onClearFilters}
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
                  {filteredServers.map((serverResponse) => {
                    const remotesSummary = getRemotesSummary(serverResponse);
                    const packagesSummary = getPackagesSummary(serverResponse);
                    const serverName = serverResponse.server.name;
                    const version = serverResponse.server.version;
                    const serverPath = `/servers/${encodeURIComponent(serverName)}/${encodeURIComponent(version)}`;

                    return (
                      <Link
                        key={`${serverName}-${version}`}
                        href={serverPath}
                        className="border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer block"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <img src="/mcp_black.png" alt="MCP Server" className="w-8 h-8" />
                          </div>
                        </div>
                        
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                          {serverResponse.server.name}
                        </h3>
                        
                        <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                          {serverResponse.server.description}
                        </p>
                        
                        <div className="space-y-2 text-xs text-gray-500">
                          <div className="flex items-center justify-between">
                            <span>Version</span>
                            <span className="font-medium">{serverResponse.server.version}</span>
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
                          {serverResponse.server.status && (
                            <div className="flex items-center justify-between">
                              <span>Status</span>
                              <span className={`font-medium ${
                                serverResponse.server.status === 'active' ? 'text-green-600' : 
                                serverResponse.server.status === 'deprecated' ? 'text-yellow-600' : 
                                'text-gray-600'
                              }`}>
                                {serverResponse.server.status}
                              </span>
                            </div>
                          )}
                        </div>
                        
                      </Link>
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
