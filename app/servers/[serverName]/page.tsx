'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ServerResponse, getBestIcon } from '@teamsparkai/mcp-registry-ux';
import { encodeServerNameForRoute, decodeServerNameFromRoute } from '@/registry-utils/routeUtils';

export default function ServerVersionsPage() {
  const params = useParams();
  const router = useRouter();
  const [versions, setVersions] = useState<ServerResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadVersions();
  }, [params.serverName]);

  const loadVersions = async () => {
    try {
      setLoading(true);
      // Decode route param back to real server name (-- to /) before API call
      const serverName = decodeServerNameFromRoute(params.serverName as string);
      const response = await fetch(`/api/v0/servers/${encodeURIComponent(serverName)}/versions`);
      
      if (!response.ok) {
        throw new Error('Failed to load server versions');
      }
      
      const data = await response.json();
      setVersions(data.servers);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load server versions');
    } finally {
      setLoading(false);
    }
  };

  const handleBackToRegistry = () => {
    router.push('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading versions...</p>
        </div>
      </div>
    );
  }

  if (error || versions.length === 0) {
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

  const serverName = versions[0]?.server.name || decodeServerNameFromRoute(params.serverName as string);
  const latestVersion = versions.find(v => v._meta?.['io.modelcontextprotocol.registry/official']?.isLatest);

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

      {/* Main Content */}
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="space-y-6">
            {/* Server Header */}
            <div className="bg-white rounded-lg border p-6">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <img 
                    src={getBestIcon(versions[0]?.server.icons, 'light') || "/mcp_black.png"} 
                    alt={versions[0]?.server.title || serverName}
                    className="w-10 h-10 object-contain"
                    onError={(e) => {
                      e.currentTarget.src = "/mcp_black.png";
                    }}
                  />
                </div>
                <div className="flex-1">
                  <h1 className="text-2xl font-bold text-gray-900">{serverName}</h1>
                  {versions[0]?.server.title && (
                    <p className="text-lg font-semibold text-gray-800 mt-1">{versions[0].server.title}</p>
                  )}
                  {versions[0]?.server.description && (
                    <p className="text-gray-600 mt-1">{versions[0].server.description}</p>
                  )}
                  <div className="mt-2 text-sm text-gray-500">
                    {versions.length} version{versions.length !== 1 ? 's' : ''} available
                  </div>
                </div>
              </div>
            </div>

            {/* Versions List */}
            <div className="bg-white rounded-lg border p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Available Versions</h2>
              <div className="space-y-3">
                {versions.map((serverResponse) => {
                  const version = serverResponse.server.version;
                  const isLatest = serverResponse._meta?.['io.modelcontextprotocol.registry/official']?.isLatest;
                  const publishedAt = serverResponse._meta?.['io.modelcontextprotocol.registry/official']?.publishedAt;
                  const status = serverResponse.server.status;
                  const versionPath = `/servers/${encodeServerNameForRoute(serverName)}/${encodeURIComponent(version)}`;

                  return (
                    <Link
                      key={version}
                      href={versionPath}
                      className="block border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-md transition-all"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="text-lg font-semibold text-gray-900 font-mono">{version}</div>
                          {isLatest && (
                            <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                              Latest
                            </span>
                          )}
                          {status === 'deprecated' && (
                            <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                              Deprecated
                            </span>
                          )}
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          {publishedAt && (
                            <span>
                              Published {new Date(publishedAt).toLocaleDateString()}
                            </span>
                          )}
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                      {serverResponse.server.packages && serverResponse.server.packages.length > 0 && (
                        <div className="mt-2 text-sm text-gray-600">
                          {serverResponse.server.packages.length} package{serverResponse.server.packages.length !== 1 ? 's' : ''}
                        </div>
                      )}
                      {serverResponse.server.remotes && serverResponse.server.remotes.length > 0 && (
                        <div className="mt-1 text-sm text-gray-600">
                          {serverResponse.server.remotes.length} remote{serverResponse.server.remotes.length !== 1 ? 's' : ''}
                        </div>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

