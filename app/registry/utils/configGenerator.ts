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
export const substituteFieldVariables = (
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

// Generate MCP client configuration from selected server and config
export function generateConfiguredServer(
  selectedServer: any,
  configuringPackage: { pkg: any; index: number } | null,
  configuringRemote: { remote: any; index: number } | null,
  packageConfig: Record<string, any>,
  remoteConfig: Record<string, any>
): any {
  if (!selectedServer) return null;
  
  // Don't generate config if server data is invalid
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
    
    // Build full package identifier based on registry type
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
      
      // Add version if present (Docker uses colon)
      if (pkg.version) {
        packageIdentifier = `${packageIdentifier}:${pkg.version}`;
      }
    } else if (pkg.registryType === 'npm' || pkg.registryType === 'pypi') {
      // For npm/pypi, add version with @ symbol if present
      if (pkg.version) {
        packageIdentifier = `${packageIdentifier}@${pkg.version}`;
      }
    }
    
    let packageIdentifierAdded = false;
    
    // Extract base package name for comparison (without version)
    const getBasePackageName = (pkgId: string): string => {
      // Remove version suffix (@version or :version)
      return pkgId.replace(/[@:][^@:]*$/, '');
    };
    const basePackageName = getBasePackageName(packageIdentifier);

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
                
                // Check if this named argument indicates the package has been specified
                if (!packageIdentifierAdded) {
                  const isPackageSpecified = 
                    // For npx: -y/--yes with package value, or -p/--package exists
                    (runtimeHint === 'npx' && (
                      (argName === '-y' || argName === '--yes') && getBasePackageName(value) === basePackageName ||
                      (argName === '-p' || argName === '--package')
                    )) ||
                    // For uvx: -q with package value, or --from exists  
                    (runtimeHint === 'uvx' && (
                      (argName === '-q') && getBasePackageName(value) === basePackageName ||
                      (argName === '--from')
                    ));
                  
                  if (isPackageSpecified) {
                    packageIdentifierAdded = true;
                  }
                }
              } else {
                // Check if this value is the same package (regardless of version)
                if (!packageIdentifierAdded && getBasePackageName(value) === basePackageName) {
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
              
              // Check if this named argument indicates the package has been specified
              if (!packageIdentifierAdded) {
                const isPackageSpecified = 
                  // For npx: -y/--yes with package value, or -p/--package exists
                  (runtimeHint === 'npx' && (
                    (argName === '-y' || argName === '--yes') && getBasePackageName(value) === basePackageName ||
                    (argName === '-p' || argName === '--package')
                  )) ||
                  // For uvx: -q with package value, or --from exists  
                  (runtimeHint === 'uvx' && (
                    (argName === '-q') && getBasePackageName(value) === basePackageName ||
                    (argName === '--from')
                  ));
                
                if (isPackageSpecified) {
                  packageIdentifierAdded = true;
                }
              }
            } else {
              // Check if this value is the same package (regardless of version)
              if (!packageIdentifierAdded && getBasePackageName(value) === basePackageName) {
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
    
    // For stdio transport in package, generate MCP client config only
    if (pkg.transport?.type === 'stdio') {
      const serverConfig: any = {
        type: 'stdio',
        command: runtimeHint,
        args: args,
        ...(Object.keys(env).length > 0 && { env })
      };
      
      return {
        mcpServerConfig: { [serverName]: serverConfig }
      };
    }
    
    // For sse/streamable-http transport in package, generate TWO configs
    if (pkg.transport && (pkg.transport.type === 'sse' || pkg.transport.type === 'streamable-http')) {
      // MCP Client Config (for connecting to the server)
      const clientConfig: any = {
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
          clientConfig.headers = transportHeaders;
        }
      }
      
      // Runtime Config (for running the server)
      const runtimeConfig = {
        command: runtimeHint,
        args: args,
        ...(Object.keys(env).length > 0 && { env })
      };
      
      return {
        mcpServerConfig: { [serverName]: clientConfig },
        runtimeConfig: runtimeConfig
      };
    }
    
    // Fallback for no transport or unknown transport type - assume stdio
    const serverConfig: any = {
      type: 'stdio',
      command: runtimeHint,
      args: args,
      ...(Object.keys(env).length > 0 && { env })
    };
    
    return {
      mcpServerConfig: { [serverName]: serverConfig }
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
      mcpServerConfig: { [serverName]: config }
    };
  }
  
  return null;
}

