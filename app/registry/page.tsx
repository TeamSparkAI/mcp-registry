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

// Helper function to extract variable names from a template string
const extractVariableNames = (template: string): string[] => {
  const matches = template.match(/\{([^}]+)\}/g);
  return matches ? matches.map(match => match.slice(1, -1)) : [];
};

// Helper function to substitute variables in a template string
const substituteVariables = (
  template: string, 
  variables: Record<string, any>
): string => {
  return template.replace(/\{([^}]+)\}/g, (match, varName) => {
    return variables[varName] || match;
  });
};

// Helper function to substitute variables in a field value
const substituteFieldVariables = (
  field: any,
  config: Record<string, any>,
  fieldId: string
): string => {
  const template = field.value || field.default || '';
  if (!field.variables || Object.keys(field.variables).length === 0) {
    // For fields without variables, check if user has entered a value
    const userHasSetValue = config.hasOwnProperty(fieldId);
    return userHasSetValue ? config[fieldId] : template;
  }

  const variableNames = extractVariableNames(template);
  const variableValues: Record<string, string> = {};
  
  variableNames.forEach(varName => {
    const varFieldId = `${fieldId}_var_${varName}`;
    // Only use default if user hasn't explicitly set a value (including empty)
    const userHasSetValue = config.hasOwnProperty(varFieldId);
    const varField = field.variables[varName];
    variableValues[varName] = userHasSetValue ? config[varFieldId] : (varField?.default || '');
  });

  return substituteVariables(template, variableValues);
};

// Helper function to process repeated arguments
const processRepeatedArguments = (
  args: any[],
  config: Record<string, any>,
  baseFieldId: string
): void => {
  const instances = config[`${baseFieldId}_instances`] || [0];
  instances.forEach((instanceIndex: number) => {
    const fieldId = `${baseFieldId}_${instanceIndex}`;
    const value = substituteFieldVariables(args[0], config, fieldId);
    if (value) {
      if (args[0].name) {
        const argName = args[0].name.startsWith('-') ? args[0].name : `--${args[0].name}`;
        args.push(argName, value);
      } else {
        args.push(value);
      }
    }
  });
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
  const [testMode, setTestMode] = useState(false);
  const [testServerJson, setTestServerJson] = useState('');
  const [testServer, setTestServer] = useState<ServerJSON | null>(null);

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

  const handleTestServerJson = () => {
    setTestMode(true);
    setTestServerJson('');
    setTestServer(null);
    setSelectedServer(null);
    setConfiguringPackage(null);
    setConfiguringRemote(null);
    setPackageConfig({});
    setRemoteConfig({});
    setVisibleFields(new Set());
  };

  const handleSubmitTestServerJson = () => {
    try {
      const parsedServer = JSON.parse(testServerJson);
      setTestServer(parsedServer);
      setSelectedServer(parsedServer);
      setTestMode(false);
    } catch (error) {
      alert('Invalid JSON. Please check your server.json format.');
    }
  };

  const handleUpdateTestServerJson = (newJson: string) => {
    // Only update the textarea value, don't process the server until submitted
    setTestServerJson(newJson);
  };

  const handleApplyTestServerJson = (newJson: string) => {
    // Process the server data when user applies changes
    try {
      const parsedServer = JSON.parse(newJson);
      const oldServer = selectedServer;
      
      setTestServer(parsedServer);
      setSelectedServer(parsedServer);
      setTestServerJson(newJson);
      
      // Smart configuration mode handling based on package/remote counts
      if (configuringPackage && oldServer && parsedServer) {
        const oldPackageCount = oldServer.packages?.length || 0;
        const newPackageCount = parsedServer.packages?.length || 0;
        
        // Stay in package config mode if there was exactly 1 package before and after
        if (oldPackageCount === 1 && newPackageCount === 1) {
          // Re-trigger configuration with the updated package (preserve structure)
          setConfiguringPackage({ pkg: parsedServer.packages![0], index: 0 });
          // Clear form data to reflect the new package structure
          setPackageConfig({});
          setVisibleFields(new Set());
        } else {
          // Exit configuration mode for multiple packages or count changes
          setConfiguringPackage(null);
          setPackageConfig({});
          setRemoteConfig({});
          setVisibleFields(new Set());
        }
      } else if (configuringRemote && oldServer && parsedServer) {
        const oldRemoteCount = oldServer.remotes?.length || 0;
        const newRemoteCount = parsedServer.remotes?.length || 0;
        
        // Stay in remote config mode if there was exactly 1 remote before and after
        if (oldRemoteCount === 1 && newRemoteCount === 1) {
          // Re-trigger configuration with the updated remote (preserve structure)
          setConfiguringRemote({ remote: parsedServer.remotes![0], index: 0 });
          // Clear form data to reflect the new remote structure
          setRemoteConfig({});
          setVisibleFields(new Set());
        } else {
          // Exit configuration mode for multiple remotes or count changes
          setConfiguringPackage(null);
          setConfiguringRemote(null);
          setPackageConfig({});
          setRemoteConfig({});
          setVisibleFields(new Set());
        }
      } else {
        // Not in configuration mode, just clear any stale state
        setConfiguringPackage(null);
        setConfiguringRemote(null);
        setPackageConfig({});
        setRemoteConfig({});
        setVisibleFields(new Set());
      }
    } catch (error) {
      alert('Invalid JSON. Please check your server.json format.');
    }
  };

  const handleExitTestMode = () => {
    setTestMode(false);
    setTestServerJson('');
    setTestServer(null);
    setSelectedServer(null);
    setConfiguringPackage(null);
    setConfiguringRemote(null);
    setPackageConfig({});
    setRemoteConfig({});
    setVisibleFields(new Set());
  };

  // Generate MCP client configuration
  const generateConfiguredServer = () => {
    if (!selectedServer) return null;
    
    // Don't generate config if server data is invalid (e.g., during JSON editing)
    try {
      JSON.stringify(selectedServer);
    } catch (error) {
      return null;
    }

    const serverName = selectedServer.name.toLowerCase().replace(/[^a-z0-9]/g, '-');
    
    if (configuringPackage && selectedServer.packages) {
      const pkg = selectedServer.packages[configuringPackage.index];
      
      // Build command and args
      const runtimeHint = packageConfig.runtimeHint || pkg.runtimeHint || 'npx';
      const args: string[] = [];
      
      // Add runtime arguments
      if (pkg.runtimeArguments && pkg.runtimeArguments.length > 0) {
        pkg.runtimeArguments.forEach((arg: any) => {
          if (arg.isRepeated) {
            // Handle repeated arguments
            const baseFieldId = `runtimeArg_${arg.name || arg.value}`;
            const instances = packageConfig[`${baseFieldId}_instances`] || [0];
            instances.forEach((instanceIndex: number) => {
              const fieldId = `${baseFieldId}_${instanceIndex}`;
              const value = substituteFieldVariables(arg, packageConfig, fieldId);
              if (value) {
                if (arg.name) {
                  const argName = arg.name.startsWith('-') ? arg.name : `--${arg.name}`;
                  args.push(argName, value);
                } else {
                  args.push(value);
                }
              }
            });
          } else {
            // Handle single arguments
            const fieldId = `runtimeArg_${arg.name || arg.value}`;
            const value = substituteFieldVariables(arg, packageConfig, fieldId);
            if (value) {
              if (arg.name) {
                const argName = arg.name.startsWith('-') ? arg.name : `--${arg.name}`;
                args.push(argName, value);
              } else {
                args.push(value);
              }
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
          if (arg.isRepeated) {
            // Handle repeated arguments
            const baseFieldId = `packageArg_${arg.name || arg.value}`;
            const instances = packageConfig[`${baseFieldId}_instances`] || [0];
            instances.forEach((instanceIndex: number) => {
              const fieldId = `${baseFieldId}_${instanceIndex}`;
              const value = substituteFieldVariables(arg, packageConfig, fieldId);
              if (value) {
                if (arg.name) {
                  const argName = arg.name.startsWith('-') ? arg.name : `--${arg.name}`;
                  args.push(argName, value);
                } else {
                  args.push(value);
                }
              }
            });
          } else {
            // Handle single arguments
            const fieldId = `packageArg_${arg.name || arg.value}`;
            const value = substituteFieldVariables(arg, packageConfig, fieldId);
            if (value) {
              if (arg.name) {
                const argName = arg.name.startsWith('-') ? arg.name : `--${arg.name}`;
                args.push(argName, value);
              } else {
                args.push(value);
              }
            }
          }
        });
      }
      
      // Build environment variables
      const env: Record<string, string> = {};
      if (pkg.environmentVariables) {
        pkg.environmentVariables.forEach((envVar: any) => {
          const fieldId = `env_${envVar.name}`;
          const value = substituteFieldVariables(envVar, packageConfig, fieldId);
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
          const fieldId = `header_${header.name}`;
          const value = substituteFieldVariables(header, remoteConfig, fieldId);
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
        onBackToRegistry={testServer ? handleExitTestMode : handleBackToRegistry}
        onPackageConfigChange={setPackageConfig}
        onRemoteConfigChange={setRemoteConfig}
        onToggleFieldVisibility={toggleFieldVisibility}
        onCloseConfiguration={closeConfiguration}
        onShowRawModal={setShowRawModal}
        onConfigurePackage={handleConfigurePackage}
        onConfigureRemote={handleConfigureRemote}
        getResourcePath={getResourcePath}
        isTestMode={!!testServer}
        testServerJson={testServerJson}
        onUpdateTestServerJson={handleUpdateTestServerJson}
        onApplyTestServerJson={handleApplyTestServerJson}
      />
    );
  }

  // Show test mode input
  if (testMode) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <button
                onClick={handleExitTestMode}
                className="flex items-center text-gray-600 hover:text-gray-800"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Registry
              </button>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <img 
                  src={getResourcePath('/mcp_black.png')} 
                  alt="MCP Registry" 
                  className="w-5 h-5 object-contain"
                />
                <span>Test Mode</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="space-y-6">
            <div className="bg-white rounded-lg border p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Test Your Server Configuration</h2>
              <p className="text-gray-600 mb-4">
                Paste your server.json below to test it using our configuration interface.
              </p>
              <textarea
                value={testServerJson}
                onChange={(e) => setTestServerJson(e.target.value)}
                className="w-full h-64 p-4 border border-gray-300 rounded-lg font-mono text-sm"
                placeholder='{"name": "my-server", "description": "My test server", ...}'
              />
              <div className="mt-4 flex justify-end space-x-3">
                <button
                  onClick={handleExitTestMode}
                  className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmitTestServerJson}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                >
                  Test Configuration
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
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
      onTestServerJson={handleTestServerJson}
      getResourcePath={getResourcePath}
    />
  );
}
