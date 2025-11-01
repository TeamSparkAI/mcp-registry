'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ServerWithMeta, Package, TransportRemote, generateConfiguredServer, ServerDetailView as ServerDetailViewComponent, NavigationAdapter } from '@teamsparkai/mcp-registry-ux';
import { encodeServerNameForRoute, decodeServerNameFromRoute } from '@/registry-utils/routeUtils';

export default function ServerDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [server, setServer] = useState<ServerWithMeta | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [configuringPackage, setConfiguringPackage] = useState<{pkg: any, index: number} | null>(null);
  const [configuringRemote, setConfiguringRemote] = useState<{remote: any, index: number} | null>(null);
  const [packageConfig, setPackageConfig] = useState<Record<string, any>>({});
  const [remoteConfig, setRemoteConfig] = useState<Record<string, any>>({});
  const [showRawModal, setShowRawModal] = useState(false);
  const [visibleFields, setVisibleFields] = useState<Set<string>>(new Set());

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
        configuringPackage={configuringPackage}
        configuringRemote={configuringRemote}
        packageConfig={packageConfig}
        remoteConfig={remoteConfig}
        visibleFields={visibleFields}
        showRawModal={showRawModal}
        configuredServer={generateConfiguredServer(server, configuringPackage, configuringRemote, packageConfig, remoteConfig)}
        onPackageConfigChange={setPackageConfig}
        onRemoteConfigChange={setRemoteConfig}
        onToggleFieldVisibility={toggleFieldVisibility}
        onCloseConfiguration={closeConfiguration}
        onShowRawModal={setShowRawModal}
        onConfigurePackage={handleConfigurePackage}
        onConfigureRemote={handleConfigureRemote}
        navigationAdapter={{
          goToServer: (serverName: string, version: string) => {
            router.push(`/servers/${encodeServerNameForRoute(serverName)}/${encodeURIComponent(version)}`);
          },
          goToServerVersions: (serverName: string) => {
            router.push(`/servers/${encodeServerNameForRoute(serverName)}`);
          }
        }}
      />
    </div>
  );
}

