'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useRegistryClient } from '@teamsparkai/mcp-registry-ux';
import { decodeServerNameFromRoute } from '@/registry-utils/routeUtils';
import { TesterContent } from '../../TesterContent';

export default function TesterServerPage() {
  const params = useParams();
  const { client } = useRegistryClient();
  const [initialJson, setInitialJson] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const serverNameParam = params.serverName as string;
  const versionParam = params.version as string;

  useEffect(() => {
    if (!serverNameParam || !versionParam || !client) return;
    const serverName = decodeServerNameFromRoute(serverNameParam);
    const version = decodeURIComponent(versionParam);
    let cancelled = false;
    setLoading(true);
    setError(null);
    client
      .getServerVersion(serverName, version)
      .then((response) => {
        if (cancelled) return;
        const json = JSON.stringify(response.server, null, 2);
        setInitialJson(json);
      })
      .catch((err) => {
        if (!cancelled) setError(err instanceof Error ? err.message : 'Failed to load server');
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => { cancelled = true; };
  }, [client, serverNameParam, versionParam]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="text-gray-600 dark:text-gray-400">Loading server…</div>
      </div>
    );
  }

  if (error || initialJson === null) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="bg-white dark:bg-gray-800 rounded-lg border dark:border-gray-700 p-6 max-w-md">
          <p className="text-red-600 dark:text-red-400 mb-4">{error ?? 'Server not found'}</p>
          <a href="/tester" className="text-blue-600 dark:text-blue-400 hover:underline">
            Paste JSON instead
          </a>
        </div>
      </div>
    );
  }

  const serverName = decodeServerNameFromRoute(serverNameParam);
  const version = decodeURIComponent(versionParam);
  return (
    <TesterContent
      initialJson={initialJson}
      autoValidate
      serverBreadcrumb={{ name: serverName, version }}
    />
  );
}
