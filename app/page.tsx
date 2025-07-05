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

// Centralized function to get resource paths
const getResourcePath = (path: string): string => {
  const basePath = window.location.pathname.includes('/ToolCatalog') ? '/ToolCatalog' : '';
  return `${basePath}${path}`;
};

export default function Home() {
  const [servers, setServers] = useState<ServerEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [availableTags, setAvailableTags] = useState<string[]>([]);
  const [selectedServer, setSelectedServer] = useState<ServerEntry | null>(null);
  const [copiedConfig, setCopiedConfig] = useState(false);

  useEffect(() => {
    fetch(getResourcePath('/servers-local.json'))
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setServers(data);
        
        // Extract unique tags
        const tagSet = new Set<string>();
        data.forEach((server: ServerEntry) => {
          server.tags.forEach(tag => tagSet.add(tag));
        });
        setAvailableTags(Array.from(tagSet).sort());
        
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading servers:', error);
        setError('Failed to load server catalog');
        setLoading(false);
      });
  }, []);

  const filteredServers = servers.filter(server => {
    const search = searchTerm.toLowerCase();
    const name = (server.name || '').toLowerCase();
    const description = (server.description || '').toLowerCase();
    const tags = (server.tags || []).map(tag => tag.toLowerCase());

    const nameMatch = name.includes(search);
    const descMatch = description.includes(search);
    const tagMatch = tags.some(tag => tag.includes(search));

    const matchesSearch = !searchTerm || nameMatch || descMatch || tagMatch;
    const matchesTags = selectedTags.length === 0 ||
      selectedTags.some(tag => server.tags.includes(tag));
    return matchesSearch && matchesTags;
  }).sort((a, b) => a.name.localeCompare(b.name));

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const getServerConfigSummary = (server: ServerEntry): string | null => {
    if (!server.serverConfig) {
      return null;
    }
    
    const config = server.serverConfig;
    const type = config.type || 'stdio';
    
    if (type === 'sse' || type === 'streamable') {
      const url = (config as any).url || '';
      if (url) {
        try {
          const urlObj = new URL(url);
          return `${type} - ${urlObj.host}`;
        } catch (e) {
          return `${type} - ${url}`;
        }
      }
      return `${type} - No URL`;
    } else {
      // For stdio servers, show command
      const command = (config as any).command || '';
      return `${type} - ${command || 'No command'}`;
    }
  };

  const handleServerClick = (server: ServerEntry) => {
    setSelectedServer(server);
  };

  const handleBackToCatalog = () => {
    setSelectedServer(null);
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedConfig(true);
      setTimeout(() => setCopiedConfig(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy to clipboard:', err);
    }
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

  // Show server details view
  if (selectedServer) {
    const server = selectedServer;
    const isVerified = server.tags.includes('official') || 
      (server.tags.includes('reference') && !server.tags.includes('archived'));

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <button
                onClick={handleBackToCatalog}
                className="flex items-center text-gray-600 hover:text-gray-800"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Catalog
              </button>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <img 
                  src={getResourcePath('/icon.png')} 
                  alt="TeamSpark" 
                  className="w-5 h-5 object-contain"
                />
                <span>TeamSpark MCP Server Catalog</span>
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
                    <img 
                      src={getResourcePath(server.icon || '/mcp_black.png')} 
                      alt={server.name} 
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center space-x-2">
                      <h1 className="text-2xl font-bold text-gray-900">{server.name}</h1>
                      {isVerified && (
                        <span className="inline-flex items-center justify-center bg-blue-500 rounded-full p-1 flex-shrink-0">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 mt-1">{server.description}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Server Configuration */}
              <div className="bg-white rounded-lg border p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Server Configuration</h2>
                <div className="space-y-3">
                  {server.serverConfig ? (
                    <>
                      <div>
                        <label className="text-sm font-medium text-gray-500">Transport Type</label>
                        <p className="text-gray-900">{getServerConfigSummary(server)}</p>
                      </div>
                      <div>
                        <div className="flex items-center justify-between">
                          <label className="text-sm font-medium text-gray-500">Configuration</label>
                                                  <button
                          onClick={() => copyToClipboard(JSON.stringify(server.serverConfig, null, 2))}
                          className={`flex items-center space-x-1 px-2 py-1 text-xs rounded transition-colors ${
                            copiedConfig 
                              ? 'bg-green-100 text-green-700' 
                              : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                          }`}
                        >
                          {copiedConfig ? (
                            <>
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span>Copied!</span>
                            </>
                          ) : (
                            <>
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                              </svg>
                              <span>Copy Config</span>
                            </>
                          )}
                        </button>
                        </div>
                        <pre className="mt-1 p-3 bg-gray-50 rounded text-sm overflow-x-auto">
                          {JSON.stringify(server.serverConfig, null, 2)}
                        </pre>
                      </div>
                    </>
                  ) : (
                    <div>
                      <p className="text-gray-600">See repository for details</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Repository Information */}
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
                  {typeof server.repository.stars === 'number' && server.repository.stars > 0 && (
                    <div>
                      <label className="text-sm font-medium text-gray-500">Stars</label>
                      <p className="text-gray-900">⭐ {server.repository.stars.toLocaleString()}</p>
                    </div>
                  )}
                  {server.repository.lastUpdated && (
                    <div>
                      <label className="text-sm font-medium text-gray-500">Last Updated</label>
                      <p className="text-gray-900">
                        {new Date(server.repository.lastUpdated).toLocaleDateString()}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Tags */}
              <div className="bg-white rounded-lg border p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Tags</h2>
                <div className="flex flex-wrap gap-2">
                  {server.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metadata */}
              <div className="bg-white rounded-lg border p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Metadata</h2>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium text-gray-500">Catalog ID</label>
                    <p className="text-gray-900 font-mono text-sm">{server.id}</p>
                  </div>
                  {server.serverName && (
                    <div>
                      <label className="text-sm font-medium text-gray-500">Server Name</label>
                      <p className="text-gray-900">{server.serverName}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Show catalog view
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="mb-4 sm:mb-0">
              <div className="flex items-start space-x-3">
                <img 
                  src={getResourcePath('/icon.png')} 
                  alt="TeamSpark" 
                  className="w-16 h-16 object-contain"
                />
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">TeamSpark MCP Server Catalog</h1>
                  <p className="text-gray-600 mt-1">Discover and explore Model Context Protocol servers</p>

                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-base text-gray-500">
                Updated daily from: <a href="https://github.com/modelcontextprotocol/servers/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">@modelcontextprotocol/servers</a>
              </p>
              <p className="text-sm text-gray-400">
                Data Feed:{' '}
                <a
                  href="/servers.json"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  servers.json
                </a>
                {' '}•{' '}
                <svg className="inline w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
                {' '}
                <a
                  href="https://github.com/TeamSparkAI/ToolCatalog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  Source Code
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="space-y-6">
          {/* Search and Filters */}
          <div className="bg-white rounded-lg border p-4">
            <div className="flex gap-4 mb-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search servers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            
            {/* Tags Filter and Count */}
            <div className="flex justify-between items-center">
              <div className="flex flex-wrap gap-2">
                {availableTags.slice(0, 10).map(tag => (
                  <button
                    key={tag}
                    onClick={() => handleTagToggle(tag)}
                    className={`px-3 py-1 text-sm rounded-full border ${
                      selectedTags.includes(tag)
                        ? 'bg-blue-100 border-blue-300 text-blue-800'
                        : 'bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
                {selectedTags.length > 0 && (
                  <button
                    onClick={() => setSelectedTags([])}
                    className="px-3 py-1 text-sm text-gray-600 hover:text-gray-800"
                  >
                    Clear tag filters
                  </button>
                )}
              </div>
              <div className="text-sm text-gray-600">
                {searchTerm || selectedTags.length > 0 
                  ? `${filteredServers.length} matching servers`
                  : `${servers.length} servers`
                }
              </div>
            </div>
          </div>

          {/* Server List */}
          <div className="bg-white rounded-lg border">
            {/* Catalog Servers */}
            {filteredServers.map((server) => {
              const isVerified = server.tags.includes('official') || 
                (server.tags.includes('reference') && !server.tags.includes('archived'));
              
              return (
                <div
                  key={server.id}
                  onClick={() => handleServerClick(server)}
                  className="p-4 border-b border-gray-200 hover:bg-gray-50 cursor-pointer last:border-b-0"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-start space-x-3">
                      <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                        <img 
                          src={getResourcePath(server.icon || '/mcp_black.png')} 
                          alt={server.name} 
                          className="w-10 h-10 object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h3 className="text-lg font-medium text-gray-900">{server.name}</h3>
                          {isVerified && (
                            <span className="ml-1 inline-flex items-center justify-center bg-blue-500 rounded-full p-1">
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </span>
                          )}
                          {getServerConfigSummary(server) && (
                            <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">
                              {getServerConfigSummary(server)}
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                          {server.description}
                        </p>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {server.tags.slice(0, 3).map(tag => (
                            <span
                              key={tag}
                              className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                          {server.tags.length > 3 && (
                            <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">
                              +{server.tags.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 text-gray-400">
                      <div className="text-right">
                        {typeof server.repository.stars === 'number' && server.repository.stars > 0 && (
                          <div className="text-sm">⭐ {server.repository.stars.toLocaleString()}</div>
                        )}
                        {server.repository.lastUpdated && (
                          <div className="text-xs text-gray-500">
                            {new Date(server.repository.lastUpdated).toLocaleDateString()}
                          </div>
                        )}
                      </div>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              );
            })}

            {filteredServers.length === 0 && (
              <div className="p-8 text-center text-gray-500">
                No servers found matching your criteria
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
