'use client';

import { useState, useEffect, useRef } from 'react';
import { ServerJSON } from '@/types/mcp-registry';
import ServerList from './components/ServerList';
import ServerDetailView from './components/ServerDetailView';
import ValidationIssues from './components/ValidationIssues';
import { validateServerJson, ValidationResult } from './utils/validation';

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
  const [validationResult, setValidationResult] = useState<ValidationResult | null>(null);
  const [isValidating, setIsValidating] = useState(false);
  const [isEditingTestServer, setIsEditingTestServer] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    loadServerRegistry();
  }, []);

  // Auto-size textarea when content changes
  useEffect(() => {
    if (textareaRef.current && testServerJson) {
      const textarea = textareaRef.current;
      textarea.style.height = 'auto';
      textarea.style.height = Math.min(textarea.scrollHeight, window.innerHeight - 300) + 'px';
    }
  }, [testServerJson]);

  // Auto-size textarea when entering edit mode
  useEffect(() => {
    if (isEditingTestServer && textareaRef.current) {
      // Small delay to ensure the textarea is rendered
      setTimeout(() => {
        if (textareaRef.current) {
          const textarea = textareaRef.current;
          textarea.style.height = 'auto';
          textarea.style.height = Math.min(textarea.scrollHeight, window.innerHeight - 300) + 'px';
        }
      }, 50);
    }
  }, [isEditingTestServer]);

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
    setIsEditingTestServer(true);
    setTestServerJson('');
    setTestServer(null);
    setSelectedServer(null);
    setConfiguringPackage(null);
    setConfiguringRemote(null);
    setPackageConfig({});
    setRemoteConfig({});
    setVisibleFields(new Set());
    setValidationResult(null);
    setIsValidating(false); // Reset validation state
  };

  const handleValidateJson = async () => {
    if (!testServerJson.trim()) {
      setValidationResult(null);
      return;
    }

    setIsValidating(true);
    try {
      const result = await validateServerJson(testServerJson, getResourcePath);
      setValidationResult(result);
      
      // Scroll to validation results after they appear
      setTimeout(() => {
        const resultsElement = document.getElementById('validation-results');
        if (resultsElement) {
          resultsElement.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
        }
      }, 100); // Small delay to ensure DOM is updated
    } catch (error) {
      console.error('Validation error:', error);
      setValidationResult({
        valid: false,
        issues: [{
          source: 'schema',
          severity: 'error',
          path: '/',
          message: `Validation failed: ${error instanceof Error ? error.message : 'Unknown error'}`,
          rule: 'validation-error'
        }]
      });
      
      // Scroll to validation results even for errors
      setTimeout(() => {
        const resultsElement = document.getElementById('validation-results');
        if (resultsElement) {
          resultsElement.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
        }
      }, 100);
    } finally {
      setIsValidating(false);
    }
  };

  const handleSubmitTestServerJson = async () => {
    if (!testServerJson.trim()) {
      return;
    }

    setIsValidating(true);
    try {
      // Only run parse validation (Step 1)
      const result = await validateServerJson(testServerJson, getResourcePath);
      
      // Check if there are any parse errors (source: 'parse')
      const parseErrors = result.issues.filter(issue => issue.source === 'parse');
      
      if (parseErrors.length > 0) {
        // Show parse errors and stay in edit mode
        setValidationResult({
          valid: false,
          issues: parseErrors
        });
        setIsValidating(false);
        
        // Scroll to validation results
        setTimeout(() => {
          const resultsElement = document.getElementById('validation-results');
          if (resultsElement) {
            resultsElement.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'start' 
            });
          }
        }, 100);
        return;
      }
      
      // If no parse errors, proceed to registry entry details
      const parsedServer = JSON.parse(testServerJson);
      setTestServer(parsedServer);
      setSelectedServer(parsedServer);
      setIsEditingTestServer(false);
      setValidationResult(null); // Clear any previous validation results
      
    } catch (error) {
      console.error('Parse validation error:', error);
      setValidationResult({
        valid: false,
        issues: [{
          source: 'parse',
          severity: 'error',
          path: '/',
          message: `JSON parse error: ${error instanceof Error ? error.message : 'Unknown error'}`,
          rule: 'json-parse'
        }]
      });
      setIsValidating(false);
      
      // Scroll to validation results
      setTimeout(() => {
        const resultsElement = document.getElementById('validation-results');
        if (resultsElement) {
          resultsElement.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
        }
      }, 100);
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
    setIsEditingTestServer(false);
    setTestServerJson('');
    setTestServer(null);
    setSelectedServer(null);
    setConfiguringPackage(null);
    setConfiguringRemote(null);
    setPackageConfig({});
    setRemoteConfig({});
    setVisibleFields(new Set());
    setValidationResult(null);
  };

  const handleEditTestServerJson = () => {
    // Go back to validation mode with current server JSON
    if (testServer) {
      setTestServerJson(JSON.stringify(testServer, null, 2));
      setSelectedServer(null);
      setConfiguringPackage(null);
      setConfiguringRemote(null);
      setPackageConfig({});
      setRemoteConfig({});
      setVisibleFields(new Set());
      setValidationResult(null);
      setIsValidating(false); // Reset validation state
      setIsEditingTestServer(true);
    }
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
      const defaultRuntimeHints: Record<string, string> = {
        'npm': 'npx',
        'pypi': 'uvx',
        'oci': 'docker',
        'nuget': 'dnx',
        'mcpb': 'mcpb'
      };
      const runtimeHint = packageConfig.runtimeHint || pkg.runtimeHint || defaultRuntimeHints[pkg.registryType] || 'npx';
      const args: string[] = [];
      
      // Handle OCI registry type - build image name and set as identifier
      let packageIdentifier = pkg.identifier;
      if (pkg.registryType === 'oci') {
        // Build Docker image name from registryBaseUrl and identifier
        if (pkg.registryBaseUrl) {
          try {
            const url = new URL(pkg.registryBaseUrl);
            const host = url.host;
            packageIdentifier = `${host}/${pkg.identifier}`;
          } catch (e) {
            // If registryBaseUrl is not a valid URL, use it as-is
            packageIdentifier = `${pkg.registryBaseUrl}/${pkg.identifier}`;
          }
        }
        
        // Add version if present
        if (pkg.version) {
          packageIdentifier = `${packageIdentifier}:${pkg.version}`;
        }
      }
      
      let packageIdentifierAdded = false;

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
                  if (!packageIdentifierAdded && packageIdentifier === value) {
                    packageIdentifierAdded = true;
                  }
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
                if (!packageIdentifierAdded && packageIdentifier === value) {
                  packageIdentifierAdded = true;
                }
                args.push(value);
              }
            }
          }
        });
      }
      
      // Add package identifier unless it has already been added in argument processing above
      if (!packageIdentifierAdded) {
        args.push(packageIdentifier);
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
      
      // Handle transport URL substitution for packages
      let transportUrl = (pkg.transport as any)?.url;
      if (transportUrl && (pkg.transport as any)?.type === 'sse') {
        // Substitute variables in transport URL using package configuration
        const variables = extractVariableNames(transportUrl);
        variables.forEach(variable => {
          // Look for matching runtime arguments
          const runtimeArg = pkg.runtimeArguments?.find((arg: any) => 
            arg.valueHint === variable || arg.name === variable
          );
          
          // Look for matching package arguments  
          const packageArg = pkg.packageArguments?.find((arg: any) =>
            arg.valueHint === variable || arg.name === variable
          );
          
          // Look for matching environment variables
          const envVar = pkg.environmentVariables?.find((env: any) =>
            env.name === variable
          );
          
          // Use the first match found and substitute with user input
          const match = runtimeArg || packageArg || envVar;
          if (match) {
            let fieldId = '';
            if (runtimeArg) {
              fieldId = `runtimeArg_${(runtimeArg as any).name || (runtimeArg as any).value}`;
            } else if (packageArg) {
              fieldId = `packageArg_${(packageArg as any).name || (packageArg as any).value}`;
            } else if (envVar) {
              fieldId = `env_${(envVar as any).name}`;
            }
            
            const value = substituteFieldVariables(match, packageConfig, fieldId);
            if (value) {
              transportUrl = transportUrl.replace(`{${variable}}`, value);
            }
          }
        });
      }
      
      const serverConfig: any = {
        command: runtimeHint,
        args: args,
        ...(Object.keys(env).length > 0 && { env })
      };
      
      // Add transport configuration if present
      if (pkg.transport) {
        serverConfig.transport = {
          type: pkg.transport.type,
          url: transportUrl
        };
        
        // Add transport headers if present
        if ((pkg.transport as any).headers && (pkg.transport as any).headers.length > 0) {
          const transportHeaders: Record<string, string> = {};
          (pkg.transport as any).headers.forEach((header: any) => {
            const fieldId = `transport_header_${header.name}`;
            const value = substituteFieldVariables(header, packageConfig, fieldId);
            if (value) {
              transportHeaders[header.name] = value;
            }
          });
          
          if (Object.keys(transportHeaders).length > 0) {
            serverConfig.transport.headers = transportHeaders;
          }
        }
      }
      
      return {
        mcpServers: {
          [serverName]: serverConfig
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

  // Show test mode input (when editing JSON)
  if (testMode && isEditingTestServer) {
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
                ref={textareaRef}
                value={testServerJson}
                onChange={(e) => setTestServerJson(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg font-mono text-sm resize-none"
                style={{
                  minHeight: '200px',
                  maxHeight: 'calc(100vh - 300px)',
                  height: 'auto'
                }}
                onInput={(e) => {
                  const target = e.target as HTMLTextAreaElement;
                  target.style.height = 'auto';
                  target.style.height = Math.min(target.scrollHeight, window.innerHeight - 300) + 'px';
                }}
                placeholder='{"name": "my-server", "description": "My test server", ...}'
              />
              <div className="mt-4 flex justify-between items-center">
                <button
                  onClick={handleValidateJson}
                  disabled={!testServerJson.trim() || isValidating}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center"
                >
                  {isValidating ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Validating...
                    </>
                  ) : (
                    'Validate'
                  )}
                </button>
                <div className="flex space-x-3">
                  <button
                    onClick={handleExitTestMode}
                    className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSubmitTestServerJson}
                    disabled={!testServerJson.trim() || isValidating}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {isValidating ? 'Testing...' : 'Test Configuration'}
                  </button>
                </div>
              </div>
            </div>

            {/* Validation Results */}
            {validationResult && (
              <div id="validation-results" className="bg-white rounded-lg border p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Validation Results</h3>
                <ValidationIssues issues={validationResult.issues} />
              </div>
            )}
          </div>
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
        onEditTestServerJson={handleEditTestServerJson}
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
      onTestServerJson={handleTestServerJson}
      getResourcePath={getResourcePath}
    />
  );
}
