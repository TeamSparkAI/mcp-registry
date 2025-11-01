'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { ServerWithMeta, ServerDetail, Package, TransportRemote, generateConfiguredServer, createTrimmedServer, ServerDetailView as ServerDetailViewComponent, NavigationAdapter } from '@teamsparkai/mcp-registry-ux';
import { encodeServerNameForRoute, decodeServerNameFromRoute } from '@/registry-utils/routeUtils';

export default function ServerDetailPage() {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const showTestMode = searchParams.get('test') !== null;
  const [server, setServer] = useState<ServerWithMeta | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [configuringServer, setConfiguringServer] = useState<ServerDetail | null>(null);
  const [packageConfig, setPackageConfig] = useState<Record<string, any>>({});
  const [remoteConfig, setRemoteConfig] = useState<Record<string, any>>({});
  const [showRawModal, setShowRawModal] = useState(false);
  const [visibleFields, setVisibleFields] = useState<Set<string>>(new Set());
  const [showConfigModal, setShowConfigModal] = useState(false);
  const [savedConfig, setSavedConfig] = useState<{trimmedServer: ServerDetail, config: any} | null>(null);

  useEffect(() => {
    loadServer();
  }, [params.serverName, params.version]);

  const loadServer = async () => {
    try {
      setLoading(true);
      // Decode route param back to real server name (-- to /) before API call
      const serverName = decodeServerNameFromRoute(params.serverName as string);
      const version = params.version as string;
      const response = await fetch(`/api/v0/servers/${encodeURIComponent(serverName)}/versions/${encodeURIComponent(version)}`);
      
      if (!response.ok) {
        throw new Error('Failed to load server');
      }
      
      const serverResponse = await response.json();
      // Unwrap ServerResponse -> ServerWithMeta for the detail view component
      // Merge server data with _meta
      const unwrappedServer: ServerWithMeta = {
        ...serverResponse.server,
        _meta: serverResponse._meta
      };
      setServer(unwrappedServer);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load server');
    } finally {
      setLoading(false);
    }
  };

  const handleConfigurePackage = (pkg: any, index: number) => {
    if (!server) return;
    const trimmed = createTrimmedServer(server, index, undefined);
    setConfiguringServer(trimmed);
    setPackageConfig({});
  };

  const handleConfigureRemote = (remote: any, index: number) => {
    if (!server) return;
    const trimmed = createTrimmedServer(server, undefined, index);
    setConfiguringServer(trimmed);
    setRemoteConfig({});
  };

  const handleConfigurationOk = (trimmedServer: ServerDetail, config: any) => {
    // Store the data and show modal (replace with actual save logic later)
    setSavedConfig({ trimmedServer, config });
    setShowConfigModal(true);
    console.log('Configuration OK:', { trimmedServer, config });
  };

  const closeConfiguration = () => {
    setConfiguringServer(null);
    setPackageConfig({});
    setRemoteConfig({});
    setVisibleFields(new Set());
  };

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

  const handleBackToRegistry = () => {
    router.push('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading server details...</p>
        </div>
      </div>
    );
  }

  if (error || !server) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-600 text-6xl mb-4">⚠️</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Server Not Found</h1>
          <p className="text-gray-600 mb-4">{error || 'The requested server could not be found.'}</p>
          <button
            onClick={handleBackToRegistry}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Back to Registry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <button
              onClick={handleBackToRegistry}
              className="flex items-center text-gray-600 hover:text-gray-800"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Registry
            </button>
            <div className="flex items-center space-x-2">
              <img 
                src="/mcp_black.png" 
                alt="MCP Registry" 
                className="w-6 h-6 object-contain"
              />
              <span className="text-lg font-semibold text-gray-900">MCP Server Registry</span>
            </div>
          </div>
        </div>
      </header>

      <ServerDetailViewComponent
        server={server}
        configuringServer={configuringServer}
        packageConfig={packageConfig}
        remoteConfig={remoteConfig}
        visibleFields={visibleFields}
        showRawModal={showRawModal}
        configuredServer={generateConfiguredServer(configuringServer, packageConfig, remoteConfig)}
        onPackageConfigChange={setPackageConfig}
        onRemoteConfigChange={setRemoteConfig}
        onToggleFieldVisibility={toggleFieldVisibility}
        onCloseConfiguration={closeConfiguration}
        onShowRawModal={setShowRawModal}
        onConfigurePackage={handleConfigurePackage}
        onConfigureRemote={handleConfigureRemote}
        {...(showTestMode && {
          onConfigurationOk: handleConfigurationOk,
          okButtonLabel: "Save"
        })}
        navigationAdapter={{
          goToServer: (serverName: string, version: string) => {
            router.push(`/servers/${encodeServerNameForRoute(serverName)}/${encodeURIComponent(version)}`);
          },
          goToServerVersions: (serverName: string) => {
            router.push(`/servers/${encodeServerNameForRoute(serverName)}`);
          }
        }}
      />

      {/* Configuration Data Modal */}
      {showConfigModal && savedConfig && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Configuration Data</h2>
              <button
                onClick={() => setShowConfigModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="overflow-y-auto p-6 space-y-6 flex-1">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Trimmed Server</h3>
                <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto text-sm">
                  {JSON.stringify(savedConfig.trimmedServer, null, 2)}
                </pre>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">MCP Server Config</h3>
                <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto text-sm">
                  {JSON.stringify(savedConfig.config.mcpServerConfig, null, 2)}
                </pre>
              </div>
              {savedConfig.config.runtimeConfig && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Runtime Config</h3>
                  <p className="text-sm text-gray-600 mb-2">Transport runner configuration for non-stdio transports:</p>
                  <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto text-sm">
                    {JSON.stringify(savedConfig.config.runtimeConfig, null, 2)}
                  </pre>
                </div>
              )}
            </div>
            <div className="p-6 border-t border-gray-200 flex justify-end">
              <button
                onClick={() => setShowConfigModal(false)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

