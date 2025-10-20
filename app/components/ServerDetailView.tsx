'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ServerJSON } from '@/types/mcp-registry';
import ConfigurationForm from './ConfigurationForm';
import RequiredFieldWarning from './RequiredFieldWarning';
import ConfigurationPreview from './ConfigurationPreview';

interface FieldConfig {
  name?: string;
  value?: string;
  default?: string;
  isRequired?: boolean;
  isSecret?: boolean;
  description?: string;
}

interface PackageConfig {
  identifier: string;
  version: string;
  registryType: string;
  runtimeHint?: string;
  runtimeArguments?: FieldConfig[];
  packageArguments?: FieldConfig[];
  environmentVariables?: FieldConfig[];
  transport?: {
    type: string;
    url?: string;
    headers?: FieldConfig[];
  };
}

interface RemoteConfig {
  type: string;
  url?: string;
  headers?: FieldConfig[];
}

interface ServerDetailViewProps {
  server: ServerJSON;
  configuringPackage?: { pkg: PackageConfig; index: number } | null;
  configuringRemote?: { remote: RemoteConfig; index: number } | null;
  packageConfig: Record<string, any>;
  remoteConfig: Record<string, any>;
  visibleFields: Set<string>;
  showRawModal: boolean;
  configuredServer: any;
  onPackageConfigChange: (config: Record<string, any>) => void;
  onRemoteConfigChange: (config: Record<string, any>) => void;
  onToggleFieldVisibility: (fieldId: string) => void;
  onCloseConfiguration: () => void;
  onShowRawModal: (show: boolean) => void;
  onConfigurePackage: (pkg: PackageConfig, index: number) => void;
  onConfigureRemote: (remote: RemoteConfig, index: number) => void;
  isTestMode?: boolean;
  testServerJson?: string;
  onUpdateTestServerJson?: (json: string) => void;
  onApplyTestServerJson?: (json: string) => void;
  onEditTestServerJson?: () => void;
}

export default function ServerDetailView({
  server,
  configuringPackage,
  configuringRemote,
  packageConfig,
  remoteConfig,
  visibleFields,
  showRawModal,
  configuredServer,
  onPackageConfigChange,
  onRemoteConfigChange,
  onToggleFieldVisibility,
  onCloseConfiguration,
  onShowRawModal,
  onConfigurePackage,
  onConfigureRemote,
  isTestMode = false,
  testServerJson = '',
  onUpdateTestServerJson,
  onApplyTestServerJson,
  onEditTestServerJson
}: ServerDetailViewProps) {
  const [copied, setCopied] = useState(false);
  
  const hasPackageConfiguration = (pkg: PackageConfig) => {
    return pkg.runtimeHint || 
           (pkg.runtimeArguments && pkg.runtimeArguments.length > 0) ||
           (pkg.packageArguments && pkg.packageArguments.length > 0) ||
           (pkg.environmentVariables && pkg.environmentVariables.length > 0) ||
           (pkg.transport?.headers && pkg.transport.headers.length > 0);
  };

  const hasRemoteConfiguration = (remote: RemoteConfig) => {
    return remote.headers && remote.headers.length > 0;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
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
                  <h1 className="text-2xl font-bold text-gray-900">
                    <Link href={`/servers/${encodeURIComponent(server.name)}`} className="hover:text-blue-600 transition-colors">
                      {server.name}
                    </Link>
                  </h1>
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

          {/* Configuration View */}
          {(configuringPackage || configuringRemote) && (
            <>
              <ConfigurationForm
                configuringPackage={configuringPackage}
                configuringRemote={configuringRemote}
                packageConfig={packageConfig}
                remoteConfig={remoteConfig}
                visibleFields={visibleFields}
                onPackageConfigChange={onPackageConfigChange}
                onRemoteConfigChange={onRemoteConfigChange}
                onToggleFieldVisibility={onToggleFieldVisibility}
                onClose={onCloseConfiguration}
              />
              
              <RequiredFieldWarning
                configuringPackage={configuringPackage}
                configuringRemote={configuringRemote}
                packageConfig={packageConfig}
                remoteConfig={remoteConfig}
              />

              <ConfigurationPreview configuredServer={configuredServer} />
            </>
          )}

          {/* Details Grid */}
          {!configuringPackage && !configuringRemote && (
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
                          {hasRemoteConfiguration(remote as RemoteConfig) && (
                            <div className="ml-4">
                              <button
                                onClick={() => onConfigureRemote(remote as RemoteConfig, index)}
                                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                              >
                                Configure
                              </button>
                            </div>
                          )}
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
                                <p className="text-gray-900">{pkg.version}</p>
                              </div>
                              <div>
                                <label className="text-sm font-medium text-gray-500">Registry Type</label>
                                <p className="text-gray-900">{pkg.registryType}</p>
                              </div>
                              {(pkg.transport as any)?.type && (
                                <div>
                                  <label className="text-sm font-medium text-gray-500">Transport</label>
                                  <p className="text-gray-900">{(pkg.transport as any).type}</p>
                                </div>
                              )}
                              {(pkg.transport as any)?.url && (
                                <div>
                                  <label className="text-sm font-medium text-gray-500">Transport URL</label>
                                  <p className="text-gray-900 font-mono text-sm break-all">{(pkg.transport as any).url}</p>
                                </div>
                              )}
                              {(pkg.transport as any)?.headers && (pkg.transport as any).headers.length > 0 && (
                                <div className="col-span-full">
                                  <label className="text-sm font-medium text-gray-500">Transport Headers</label>
                                  <div className="mt-1 space-y-2">
                                    {(pkg.transport as any).headers.map((header: any, headerIndex: number) => (
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
                          </div>
                          {hasPackageConfiguration(pkg as PackageConfig) && (
                            <div className="ml-4">
                              <button
                                onClick={() => onConfigurePackage(pkg as PackageConfig, index)}
                                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                              >
                                Configure
                              </button>
                            </div>
                          )}
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
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold text-gray-900">Registry Information</h2>
                    <button
                      onClick={() => onShowRawModal(true)}
                      className="px-4 py-2 rounded-lg bg-gray-600 text-white hover:bg-gray-700 transition-colors text-sm font-medium"
                    >
                      server.json
                    </button>
                  </div>
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
          )}

          {/* Raw JSON Modal */}
          {showRawModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-gray-900">Server JSON</h2>
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(JSON.stringify(server, null, 2));
                          setCopied(true);
                          setTimeout(() => setCopied(false), 2000);
                        }}
                        className={`flex items-center px-4 py-2 rounded-lg transition-colors text-sm font-medium ${
                          copied 
                            ? 'bg-green-600 text-white hover:bg-green-700' 
                            : 'bg-blue-600 text-white hover:bg-blue-700'
                        }`}
                      >
                        {copied ? (
                          <>
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Copied!
                          </>
                        ) : (
                          <>
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                            Copy to Clipboard
                          </>
                        )}
                      </button>
                      <button
                        onClick={() => onShowRawModal(false)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm overflow-x-auto max-h-96">
                    {JSON.stringify(server, null, 2)}
                  </pre>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
