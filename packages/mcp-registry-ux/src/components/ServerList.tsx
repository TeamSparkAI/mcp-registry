import React from 'react';
import { ServerResponse } from '../types';
import { NavigationAdapter, LinkProps } from '../adapters';
import { getBestIcon } from '../utils/iconUtils';

interface ServerListProps {
  servers: ServerResponse[];
  filteredServers: ServerResponse[];
  searchTerm: string;
  selectedFilters: string[];
  onSearchChange: (term: string) => void;
  onFilterToggle: (filter: string) => void;
  onClearFilters: () => void;
  onServerClick: (serverResponse: ServerResponse) => void;
  navigationAdapter?: NavigationAdapter;
  headerActions?: React.ReactNode; // Optional actions to render in the header
}

export function ServerList({
  servers,
  filteredServers,
  searchTerm,
  selectedFilters,
  onSearchChange,
  onFilterToggle,
  onClearFilters,
  onServerClick,
  navigationAdapter,
  headerActions
}: ServerListProps) {
  const LinkComponent = navigationAdapter?.Link || (({ href, children, className, onClick }: LinkProps) => (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  ));
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
                {headerActions}
                <LinkComponent
                  href="/about"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-600 hover:border-gray-400 dark:hover:border-gray-500 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  About This Service
                </LinkComponent>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                Official Registry: <a href="https://registry.modelcontextprotocol.io" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">registry.modelcontextprotocol.io</a>
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="space-y-6">
          {/* Search and Filters */}
          <div className="bg-white dark:bg-gray-800 rounded-lg border dark:border-gray-700 p-6">
            <div className="flex flex-col gap-4">
              <div>
                <label htmlFor="search" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Search Servers
                </label>
                <input
                  id="search"
                  type="text"
                  placeholder="Search by name or description..."
                  value={searchTerm}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                />
              </div>
              
              {/* Filter Buttons and Count */}
              <div className="flex justify-between items-center">
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => onFilterToggle('Hosted')}
                    className={`px-3 py-1 text-sm rounded-full border ${
                      selectedFilters.includes('Hosted')
                        ? 'bg-blue-100 dark:bg-blue-900 border-blue-300 dark:border-blue-700 text-blue-800 dark:text-blue-200'
                        : 'bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    Hosted
                  </button>
                  <button
                    onClick={() => onFilterToggle('Installable')}
                    className={`px-3 py-1 text-sm rounded-full border ${
                      selectedFilters.includes('Installable')
                        ? 'bg-blue-100 dark:bg-blue-900 border-blue-300 dark:border-blue-700 text-blue-800 dark:text-blue-200'
                        : 'bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    Installable
                  </button>
                  <button
                    onClick={() => onFilterToggle('Latest')}
                    className={`px-3 py-1 text-sm rounded-full border ${
                      selectedFilters.includes('Latest')
                        ? 'bg-blue-100 dark:bg-blue-900 border-blue-300 dark:border-blue-700 text-blue-800 dark:text-blue-200'
                        : 'bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    Latest
                  </button>
                  {selectedFilters.length > 0 && (
                    <button
                      onClick={onClearFilters}
                      className="px-3 py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                    >
                      Clear filters
                    </button>
                  )}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {searchTerm || selectedFilters.length > 0 
                    ? `${filteredServers.length} matching servers`
                    : `${servers.length} servers`
                  }
                </div>
              </div>
            </div>
          </div>

          {/* Server Grid */}
          <div className="bg-white dark:bg-gray-800 rounded-lg border dark:border-gray-700">
            <div className="p-6">
              {filteredServers.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-gray-500 dark:text-gray-400">
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
                    const title = serverResponse.server.title;
                    const iconSrc = getBestIcon(serverResponse.server.icons, 'light');
                    const serverPath = `/servers/${encodeURIComponent(serverName)}/${encodeURIComponent(version)}`;
                    const handleClick = () => {
                      if (navigationAdapter) {
                        navigationAdapter.goToServer(serverName, version);
                      } else {
                        window.location.href = serverPath;
                      }
                    };

                    return (
                      <LinkComponent
                        key={`${serverName}-${version}`}
                        href={serverPath}
                        onClick={handleClick}
                        className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-md transition-all cursor-pointer block"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                            <img 
                              src={iconSrc || "/mcp_black.png"} 
                              alt={title || serverName}
                              className="w-8 h-8 object-contain"
                              onError={(e) => {
                                // Fallback to default icon on load error
                                e.currentTarget.src = "/mcp_black.png";
                              }}
                            />
                          </div>
                        </div>
                        
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 line-clamp-2">
                          {serverResponse.server.name}
                        </h3>
                        
                        {title && (
                          <p className="text-base font-medium text-gray-700 dark:text-gray-300 mb-2 line-clamp-1">
                            {title}
                          </p>
                        )}
                        
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-3">
                          {serverResponse.server.description}
                        </p>
                        
                        <div className="space-y-2 text-xs text-gray-500 dark:text-gray-400">
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
                                serverResponse.server.status === 'active' ? 'text-green-600 dark:text-green-400' : 
                                serverResponse.server.status === 'deprecated' ? 'text-yellow-600 dark:text-yellow-400' : 
                                'text-gray-600 dark:text-gray-400'
                              }`}>
                                {serverResponse.server.status}
                              </span>
                            </div>
                          )}
                        </div>
                        
                      </LinkComponent>
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
