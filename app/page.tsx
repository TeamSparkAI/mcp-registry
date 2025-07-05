'use client';

import { useState, useEffect } from 'react';

interface ServerEntry {
  id: string;
  icon: string | null;
  name: string;
  description: string;
  repository: {
    url: string;
    source: string;
    stars: number;
    lastUpdated: string;
  };
  tags: string[];
  serverName: string;
  serverConfig: {
    type: string;
    command: string;
    args: string[];
    env?: Record<string, string>;
  };
}

export default function Home() {
  const [servers, setServers] = useState<ServerEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('all');

  useEffect(() => {
    fetch('/servers-local.json')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setServers(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading servers:', error);
        setError('Failed to load server catalog');
        setLoading(false);
      });
  }, []);

  // Get unique tags for filtering
  const allTags = ['all', ...Array.from(new Set(servers.flatMap(server => server.tags)))];

  // Filter servers based on search term and selected tag
  const filteredServers = servers.filter(server => {
    const matchesSearch = server.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         server.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === 'all' || server.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading server catalog...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-600 text-6xl mb-4">⚠️</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Error Loading Catalog</h1>
          <p className="text-gray-600">{error}</p>
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
              <h1 className="text-3xl font-bold text-gray-900">MCP Server Catalog</h1>
              <p className="text-gray-600 mt-1">Discover and explore Model Context Protocol servers</p>
            </div>
            <div className="text-sm text-gray-500">
              {servers.length} servers available
            </div>
          </div>
        </div>
      </header>

      {/* Search and Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          {/* Search */}
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search servers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          {/* Tag Filter */}
          <div className="sm:w-48">
            <select
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {allTags.map(tag => (
                <option key={tag} value={tag}>
                  {tag === 'all' ? 'All Tags' : tag.charAt(0).toUpperCase() + tag.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredServers.length} of {servers.length} servers
          </p>
        </div>

        {/* Server Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServers.map((server) => (
            <div key={server.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden">
              {/* Server Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{server.name}</h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{server.description}</p>
                  </div>
                  {server.icon && (
                    <img 
                      src={server.icon} 
                      alt={`${server.name} icon`}
                      className="w-8 h-8 rounded object-cover ml-3"
                    />
                  )}
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {server.tags.map(tag => (
                    <span 
                      key={tag}
                      className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Server Details */}
              <div className="p-6">
                {/* Repository Info */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                    <span>Repository</span>
                    <div className="flex items-center space-x-2">
                      <span>⭐ {typeof server.repository.stars === 'number'
                        ? server.repository.stars.toLocaleString()
                        : 'N/A'}</span>
                      <span>•</span>
                      <span>{formatDate(server.repository.lastUpdated)}</span>
                    </div>
                  </div>
                  <a 
                    href={server.repository.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm break-all"
                  >
                    {server.repository.url}
                  </a>
                </div>

                {/* Server Config */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Configuration</h4>
                  <div className="bg-gray-50 rounded p-3 text-sm font-mono">
                    {server.serverConfig ? (
                      <>
                        <div className="text-gray-600 mb-1">Type: {server.serverConfig.type}</div>
                        <div className="text-gray-600 mb-1">Command: {server.serverConfig.command}</div>
                        {server.serverConfig.args && (
                          <div className="text-gray-600">
                            Args: {server.serverConfig.args.join(' ')}
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="text-gray-400 italic">No configuration available</div>
                    )}
                  </div>
                </div>

                {/* Environment Variables (if any) */}
                {server.serverConfig && server.serverConfig.env && Object.keys(server.serverConfig.env).length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Environment Variables</h4>
                    <div className="bg-yellow-50 rounded p-3 text-sm">
                      <p className="text-yellow-800">
                        This server requires environment variables to be configured.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* No results */}
        {filteredServers.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No servers found</h3>
            <p className="text-gray-600">Try adjusting your search terms or filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}
