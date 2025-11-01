import type { ServerDetail, Package, TransportRemote } from '../types';
import { getFieldId } from './fieldUtils';

/**
 * Creates a trimmed copy of a server object containing only the specified package or remote.
 * This trimmed server can be stored alongside the configuration for later editing.
 * 
 * @param server - The full server object
 * @param packageIndex - The index of the package to keep (if configuring a package)
 * @param remoteIndex - The index of the remote to keep (if configuring a remote)
 * @returns A trimmed server object with only the selected package/remote, or null if invalid
 */
export function createTrimmedServer(
  server: ServerDetail,
  packageIndex?: number,
  remoteIndex?: number
): ServerDetail | null {
  if (!server) return null;

  try {
    // Deep clone the server
    const trimmed = JSON.parse(JSON.stringify(server)) as ServerDetail;

    // If configuring a package, remove all other packages and all remotes
    if (packageIndex !== undefined && trimmed.packages) {
      if (packageIndex >= 0 && packageIndex < trimmed.packages.length) {
        trimmed.packages = [trimmed.packages[packageIndex]];
      } else {
        return null;
      }
      trimmed.remotes = [];
    }
    
    // If configuring a remote, remove all other remotes and all packages
    if (remoteIndex !== undefined && trimmed.remotes) {
      if (remoteIndex >= 0 && remoteIndex < trimmed.remotes.length) {
        trimmed.remotes = [trimmed.remotes[remoteIndex]];
      } else {
        return null;
      }
      trimmed.packages = [];
    }

    return trimmed;
  } catch (error) {
    return null;
  }
}

/**
 * Determines what type of item is being configured in a trimmed server.
 * @param trimmedServer - A trimmed server object
 * @returns 'package' if configuring a package, 'remote' if configuring a remote, or null if invalid
 */
export function getConfigItemType(trimmedServer: ServerDetail | null): 'package' | 'remote' | null {
  if (!trimmedServer) return null;
  
  const hasPackage = trimmedServer.packages && trimmedServer.packages.length === 1;
  const hasRemote = trimmedServer.remotes && trimmedServer.remotes.length === 1;
  
  if (hasPackage && !hasRemote) return 'package';
  if (hasRemote && !hasPackage) return 'remote';
  
  // Invalid state: both, neither, or multiple items
  return null;
}

/**
 * Extracts the package from a trimmed server that is configuring a package.
 * @param trimmedServer - A trimmed server object that should contain exactly one package
 * @returns The package being configured, or null if not a package configuration
 */
export function getConfigPackage(trimmedServer: ServerDetail | null): Package | null {
  if (getConfigItemType(trimmedServer) !== 'package') return null;
  return trimmedServer!.packages![0] || null;
}

/**
 * Extracts the remote from a trimmed server that is configuring a remote.
 * @param trimmedServer - A trimmed server object that should contain exactly one remote
 * @returns The remote being configured, or null if not a remote configuration
 */
export function getConfigRemote(trimmedServer: ServerDetail | null): TransportRemote | null {
  if (getConfigItemType(trimmedServer) !== 'remote') return null;
  const remote = trimmedServer!.remotes![0];
  // Type guard: remotes array contains Transport[], so we need to cast
  return (remote && 'type' in remote && 'url' in remote) ? (remote as TransportRemote) : null;
}

/**
 * Checks if a required field is missing from the configuration.
 * This is the core validation logic shared by RequiredFieldWarning and areAllRequiredFieldsFilled.
 */
function isFieldMissing(
  field: any,
  config: Record<string, any>,
  fieldId: string
): boolean {
  // Check if the main field is required and missing
  if (field.isRequired && !field.value) {
    const userHasSetValue = config.hasOwnProperty(fieldId);
    const currentValue = userHasSetValue ? config[fieldId] : (field.default || '');
    if (!currentValue || currentValue.trim() === '') {
      return true;
    }
  }
  
  // Check if any variables are required and missing
  if (field.variables && Object.keys(field.variables).length > 0) {
    const template = field.value || field.default || '';
    const variableNames = template.match(/\{([^}]+)\}/g)?.map((match: string) => match.slice(1, -1)) || [];
    
    return variableNames.some((varName: string) => {
      const varField = field.variables[varName];
      if (varField.isRequired) {
        const varFieldId = `${fieldId}_var_${varName}`;
        const userHasSetValue = config.hasOwnProperty(varFieldId);
        const currentValue = userHasSetValue ? config[varFieldId] : (varField.default || '');
        return !currentValue || currentValue.trim() === '';
      }
      return false;
    });
  }
  
  return false;
}

/**
 * Checks if all required fields are filled for a configuration.
 * This is the inverse of the logic in RequiredFieldWarning (which uses .some()).
 * @param trimmedServer - The trimmed server being configured
 * @param packageConfig - Package configuration values
 * @param remoteConfig - Remote configuration values
 * @returns true if all required fields are filled, false otherwise
 */
export function areAllRequiredFieldsFilled(
  trimmedServer: ServerDetail | null,
  packageConfig: Record<string, any>,
  remoteConfig: Record<string, any>
): boolean {
  if (!trimmedServer) return false;

  const itemType = getConfigItemType(trimmedServer);
  if (!itemType) return false;

  const pkg = getConfigPackage(trimmedServer);
  if (pkg) {
    // Check runtime arguments
    if (pkg.runtimeArguments) {
      for (let argIndex = 0; argIndex < pkg.runtimeArguments.length; argIndex++) {
        const arg = pkg.runtimeArguments[argIndex] as any;
        const fieldId = getFieldId(arg, 'runtimeArg', argIndex);
        if (isFieldMissing(arg, packageConfig, fieldId)) {
          return false;
        }
      }
    }
    
    // Check package arguments
    if (pkg.packageArguments) {
      for (let argIndex = 0; argIndex < pkg.packageArguments.length; argIndex++) {
        const arg = pkg.packageArguments[argIndex] as any;
        const fieldId = getFieldId(arg, 'packageArg', argIndex);
        if (isFieldMissing(arg, packageConfig, fieldId)) {
          return false;
        }
      }
    }
    
    // Check environment variables
    if (pkg.environmentVariables) {
      for (let envIndex = 0; envIndex < pkg.environmentVariables.length; envIndex++) {
        const env = pkg.environmentVariables[envIndex] as any;
        const fieldId = getFieldId(env, 'env', envIndex);
        if (isFieldMissing(env, packageConfig, fieldId)) {
          return false;
        }
      }
    }
    
    // Check transport headers
    const transport = pkg.transport as TransportRemote;
    if (transport?.headers) {
      for (let headerIndex = 0; headerIndex < transport.headers.length; headerIndex++) {
        const header = transport.headers[headerIndex] as any;
        const fieldId = getFieldId(header, 'transport_header', headerIndex);
        if (isFieldMissing(header, packageConfig, fieldId)) {
          return false;
        }
      }
    }
  }

  const remote = getConfigRemote(trimmedServer);
  if (remote) {
    // Check headers
    if (remote.headers) {
      for (let headerIndex = 0; headerIndex < remote.headers.length; headerIndex++) {
        const header = remote.headers[headerIndex] as any;
        const fieldId = getFieldId(header, 'header', headerIndex);
        if (isFieldMissing(header, remoteConfig, fieldId)) {
          return false;
        }
      }
    }
  }

  return true;
}

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
/**
 * Generates a configured server JSON from a trimmed server object and user configuration.
 * 
 * @param trimmedServer - A trimmed server object containing only the package/remote being configured
 * @param packageConfig - User configuration values for the package being configured
 * @param remoteConfig - User configuration values for the remote being configured
 * @returns A configured server JSON object, or null if invalid
 */
export function generateConfiguredServer(
  trimmedServer: ServerDetail | null,
  packageConfig: Record<string, any>,
  remoteConfig: Record<string, any>
): any {
  if (!trimmedServer) return null;
  
  // Don't generate config if server data is invalid
  try {
    JSON.stringify(trimmedServer);
  } catch (error) {
    return null;
  }

  const serverName = trimmedServer.name.toLowerCase().replace(/[^a-z0-9]/g, '-');
  
  // Configure package if present (trimmed server will have exactly one package if configuring one)
  const pkg = getConfigPackage(trimmedServer);
  if (pkg) {
    
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
  
  // Configure remote if present (trimmed server will have exactly one remote if configuring one)
  const remote = getConfigRemote(trimmedServer);
  if (remote) {
    
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

