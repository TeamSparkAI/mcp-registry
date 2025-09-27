'use client';

import { useState, useEffect } from 'react';
import { ServerJSON } from '@/types/mcp-registry';
import ServerList from './components/ServerList';
import ServerDetailView from './components/ServerDetailView';

// Centralized function to get resource paths
const getResourcePath = (path: string): string => {
  const basePath = window.location.pathname.includes('/ToolCatalog') ? '/ToolCatalog' : '';
  return `${basePath}${path}`;
};

export default function RegistryPage() {
  const [servers, setServers] = useState<ServerJSON[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<string[]>(['Latest']);
  const [selectedServer, setSelectedServer] = useState<ServerJSON | null>(null);
  const [configuringPackage, setConfiguringPackage] = useState<{pkg: any, index: number} | null>(null);
  const [configuringRemote, setConfiguringRemote] = useState<{remote: any, index: number} | null>(null);
  const [packageConfig, setPackageConfig] = useState<Record<string, any>>({});
  const [remoteConfig, setRemoteConfig] = useState<Record<string, any>>({});
  const [showRawModal, setShowRawModal] = useState(false);
  const [visibleFields, setVisibleFields] = useState<Set<string>>(new Set());

  useEffect(() => {
    loadServerRegistry();
  }, []);

  // Helper functions to check if package/remote has configuration
  const hasPackageConfiguration = (pkg: any) => {
    return pkg.runtimeHint || 
           (pkg.runtimeArguments && pkg.runtimeArguments.length > 0) ||
           (pkg.packageArguments && pkg.packageArguments.length > 0) ||
           (pkg.environmentVariables && pkg.environmentVariables.length > 0);
  };

  const hasRemoteConfiguration = (remote: any) => {
    return remote.headers && remote.headers.length > 0;
  };

  // Configuration handlers
  const handleConfigurePackage = (pkg: any, index: number) => {
    setConfiguringPackage({ pkg, index });
    setPackageConfig({});
  };

  const handleConfigureRemote = (remote: any, index: number) => {
    setConfiguringRemote({ remote, index });
    setRemoteConfig({});
  };

  const closeConfiguration = () => {
    setConfiguringPackage(null);
    setConfiguringRemote(null);
    setPackageConfig({});
    setRemoteConfig({});
    setVisibleFields(new Set());
  };

  // Helper function to check if a field should be treated as secret
  const isSecretField = (field: any) => {
    return field.isSecret === true;
  };

  // Helper function to toggle field visibility
  const toggleFieldVisibility = (fieldId: string) => {
    setVisibleFields(prev => {
      const newSet = new Set(prev);
      if (newSet.has(fieldId)) {
        newSet.delete(fieldId);
      } else {
        newSet.add(fieldId);
      }
      return newSet;
    });
  };


  const handleServerClick = (server: ServerJSON) => {
    setSelectedServer(server);
    // Reset configuration state when selecting a new server
    setConfiguringPackage(null);
    setConfiguringRemote(null);
    setPackageConfig({});
    setRemoteConfig({});
    setVisibleFields(new Set());
  };

  const handleBackToRegistry = () => {
    setSelectedServer(null);
  };

  // Generate MCP client configuration
  const generateConfiguredServer = () => {
    if (!selectedServer) return null;

    const serverName = selectedServer.name.toLowerCase().replace(/[^a-z0-9]/g, '-');
    
    if (configuringPackage && selectedServer.packages) {
      const pkg = selectedServer.packages[configuringPackage.index];
      
      // Build command and args
      const runtimeHint = packageConfig.runtimeHint || pkg.runtimeHint || 'npx';
      const args: string[] = [];
      
      // Add runtime arguments
      if (pkg.runtimeArguments && pkg.runtimeArguments.length > 0) {
        pkg.runtimeArguments.forEach((arg: any) => {
          const value = packageConfig[`runtimeArg_${arg.name || arg.value}`] || arg.value || arg.default;
          if (value) {
            if (arg.name) {
              // Add two leading dashes if name doesn't already start with dashes
              const argName = arg.name.startsWith('-') ? arg.name : `--${arg.name}`;
              args.push(argName, value);
            } else {
              args.push(value);
            }
          }
        });
      } else {
        // Only add package identifier if there are no runtime arguments
        args.push(pkg.identifier);
      }
      
      // Add package arguments
      if (pkg.packageArguments) {
        pkg.packageArguments.forEach((arg: any) => {
          const value = packageConfig[`packageArg_${arg.name || arg.value}`] || arg.value || arg.default;
          if (value) {
            if (arg.name) {
              // Add two leading dashes if name doesn't already start with dashes
              const argName = arg.name.startsWith('-') ? arg.name : `--${arg.name}`;
              args.push(argName, value);
            } else {
              args.push(value);
            }
          }
        });
      }
      
      // Build environment variables
      const env: Record<string, string> = {};
      if (pkg.environmentVariables) {
        pkg.environmentVariables.forEach((envVar: any) => {
          const value = packageConfig[`env_${envVar.name}`] || envVar.value || envVar.default;
          if (value) {
            env[envVar.name] = value;
          }
        });
      }
      
      return {
        mcpServers: {
          [serverName]: {
            command: runtimeHint,
            args: args,
            ...(Object.keys(env).length > 0 && { env })
          }
        }
      };
    }
    
    if (configuringRemote && selectedServer.remotes) {
      const remote = selectedServer.remotes[configuringRemote.index];
      
      // Build headers for remote connection
      const headers: Record<string, string> = {};
      if ('headers' in remote && remote.headers) {
        remote.headers.forEach((header: any) => {
          const value = remoteConfig[`header_${header.name}`] || header.value;
          if (value) {
            headers[header.name] = value;
          }
        });
      }
      
      const config: any = {
        type: remote.type
      };
      
      if ('url' in remote) {
        config.url = remote.url;
      }
      
      if (Object.keys(headers).length > 0) {
        config.headers = headers;
      }
      
      return {
        mcpServers: {
          [serverName]: config
        }
      };
    }
    
    return null;
  };

  const loadServerRegistry = async () => {
    try {
      setLoading(true);
      const response = await fetch(getResourcePath('/server-registry.json'));
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
    return (
      <ServerDetailView
        server={selectedServer}
        configuringPackage={configuringPackage}
        configuringRemote={configuringRemote}
        packageConfig={packageConfig}
        remoteConfig={remoteConfig}
        visibleFields={visibleFields}
        showRawModal={showRawModal}
        configuredServer={generateConfiguredServer()}
        onBackToRegistry={handleBackToRegistry}
        onPackageConfigChange={setPackageConfig}
        onRemoteConfigChange={setRemoteConfig}
        onToggleFieldVisibility={toggleFieldVisibility}
        onCloseConfiguration={closeConfiguration}
        onShowRawModal={setShowRawModal}
        onConfigurePackage={handleConfigurePackage}
        onConfigureRemote={handleConfigureRemote}
        getResourcePath={getResourcePath}
      />
    );
  }

  return (
    <ServerList
      servers={servers}
      filteredServers={filteredServers}
      searchTerm={searchTerm}
      selectedFilters={selectedFilters}
      onSearchChange={setSearchTerm}
      onFilterToggle={handleFilterToggle}
      onClearFilters={() => setSelectedFilters([])}
      onServerClick={handleServerClick}
      getResourcePath={getResourcePath}
    />
  );
}
