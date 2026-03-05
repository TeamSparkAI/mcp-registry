'use client';

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ServerResponse, ServerList as ServerListComponent, NavigationAdapter, LinkProps } from '@teamsparkai/mcp-registry-ux';
import { encodeServerNameForRoute } from '@/registry-utils/routeUtils';
import { ThemeToggle } from './components/ThemeToggle';
import { useRegistryClient } from '@teamsparkai/mcp-registry-ux';
import { useRegistryListCache } from './context/RegistryListCacheContext';
import { validateServerJson } from '@teamsparkai/mcp-registry-validator';
import type { ValidationResult } from '@teamsparkai/mcp-registry-validator';

const VALIDATION_PROGRESS_INTERVAL = 2000; // update progress every N servers (no state for results until done)

function getServerKey(s: ServerResponse): string {
  return `${s.server.name}/${s.server.version}`;
}

/** Extract schema version from server $schema URL (e.g. "2025-12-11"). Returns "—" if missing or unparseable. */
function getSchemaVersion(sr: ServerResponse): string {
  const url = (sr.server as { $schema?: string })?.$schema;
  if (!url || typeof url !== 'string') return '—';
  const match = url.match(/\/schemas\/([^/]+)\//);
  return match ? match[1] : url;
}

/** In validate-mode display we exclude this schema warning so it doesn't clutter counts and filters. */
function isNonCurrentSchemaVersionIssue(issue: { source?: string; message?: string }): boolean {
  return issue.source === 'schema' && (issue.message?.includes('Using non-current schema version') ?? false);
}

const INVALID_SCHEMA_VERSION_LABEL = 'Invalid';

/** Server has invalid schema version (missing $schema, invalid URL, or unsupported version) per validation. */
function getInvalidSchemaVersionServerKeys(validationResults: Record<string, ValidationResult>): Set<string> {
  const invalid = new Set<string>();
  const invalidRules = new Set(['schema-missing', 'schema-invalid-url', 'schema-version-unsupported']);
  for (const [serverKey, result] of Object.entries(validationResults)) {
    const hasInvalid = (result.issues || []).some(
      (i) => i.source === 'schema' && i.rule && invalidRules.has(i.rule)
    );
    if (hasInvalid) invalid.add(serverKey);
  }
  return invalid;
}

function RegistryPageContent() {
  const searchParams = useSearchParams();
  const validateMode = searchParams.get('mode') === 'validate';
  const { client } = useRegistryClient();
  const {
    cachedServers,
    setCachedServers,
    searchTerm,
    setSearchTerm,
    selectedFilters,
    setSelectedFilters,
    cachedValidationResults,
    setCachedValidationResults,
  } = useRegistryListCache();

  const [servers, setServers] = useState<ServerResponse[]>(cachedServers ?? []);
  const [loading, setLoading] = useState(!cachedServers);
  const [error, setError] = useState<string | null>(null);
  const [validationResults, setValidationResults] = useState<Record<string, ValidationResult>>({});
  const [validationProgress, setValidationProgress] = useState<{ done: number; total: number } | null>(null);
  const [selectedSchemaVersion, setSelectedSchemaVersion] = useState<string | null>(null);
  const [selectedIssueFilter, setSelectedIssueFilter] = useState<{ type: 'schema' | 'linter'; key: string } | null>(null);

  useEffect(() => {
    if (cachedServers) {
      setServers(cachedServers);
      setLoading(false);
    }
  }, [cachedServers]);

  useEffect(() => {
    loadServerRegistry();
  }, [client]);

  // Run validation locally when mode=validate. Use cached results when navigating back so we don't re-validate.
  useEffect(() => {
    if (!validateMode || servers.length === 0) return;

    const allCached = cachedValidationResults && servers.every((sr) => cachedValidationResults[getServerKey(sr)] !== undefined);
    if (allCached) {
      setValidationResults(cachedValidationResults);
      setValidationProgress(null);
      return;
    }

    const total = servers.length;
    setValidationProgress({ done: 0, total });
    setValidationResults({});
    let cancelled = false;

    (async () => {
      const results: Record<string, ValidationResult> = {};
      for (let i = 0; i < total && !cancelled; i++) {
        const sr = servers[i];
        const key = getServerKey(sr);
        try {
          results[key] = await validateServerJson(JSON.stringify(sr.server));
        } catch {
          results[key] = { valid: false, issues: [] };
        }
        const done = i + 1;
        if (done % VALIDATION_PROGRESS_INTERVAL === 0 || done === total) {
          setValidationProgress((p) => (p ? { ...p, done } : null));
        }
      }
      if (!cancelled) {
        setValidationResults(results);
        setCachedValidationResults(results);
        setValidationProgress(null);
      }
    })();

    return () => { cancelled = true; };
  }, [validateMode, servers.length, cachedValidationResults, setCachedValidationResults]);

  const loadServerRegistry = async () => {
    try {
      if (!cachedServers) setLoading(true);
      const response = await client.getServers({ limit: 10000 });
      if (response.servers) {
        setServers(response.servers);
        setCachedServers(response.servers);
        setCachedValidationResults(null);
      } else {
        throw new Error('Invalid response format');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load server registry');
    } finally {
      setLoading(false);
    }
  };

  const invalidSchemaServerKeys = validateMode ? getInvalidSchemaVersionServerKeys(validationResults) : new Set<string>();

  // Build validation summary: (1) table by schema VERSION, (2) schema issues + linter issues lists (filtered by selected schema version when set).
  const validationSummary = (() => {
    if (!validateMode) {
      return {
        schema: [] as { key: string; label: string; count: number }[],
        linter: [] as { rule: string; severity: 'error' | 'warning' | 'info'; count: number }[],
        tableRows: [] as { label: string; filter: { type: 'schemaVersion'; version: string } | null; serverCount: number; schemaError: number; linterError: number; warning: number; info: number }[],
      };
    }
    const versionToServerKeys = new Map<string, Set<string>>();
    for (const sr of servers) {
      const key = getServerKey(sr);
      const version = invalidSchemaServerKeys.has(key) ? INVALID_SCHEMA_VERSION_LABEL : getSchemaVersion(sr);
      if (!versionToServerKeys.has(version)) versionToServerKeys.set(version, new Set());
      versionToServerKeys.get(version)!.add(key);
    }
    const scopeKeys = selectedSchemaVersion !== null ? versionToServerKeys.get(selectedSchemaVersion) ?? new Set<string>() : null;
    const allSchemaError = new Set<string>();
    const allLinterError = new Set<string>();
    const allWarning = new Set<string>();
    const allInfo = new Set<string>();
    const schemaMap = new Map<string, Set<string>>();
    const linterErrorMap = new Map<string, Set<string>>();
    const linterWarningMap = new Map<string, Set<string>>();
    const linterInfoMap = new Map<string, Set<string>>();
    for (const [serverKey, result] of Object.entries(validationResults)) {
      if (scopeKeys !== null && !scopeKeys.has(serverKey)) continue;
      for (const issue of result.issues || []) {
        if (isNonCurrentSchemaVersionIssue(issue)) continue;
        if (issue.source === 'schema') {
          allSchemaError.add(serverKey);
          const k = issue.message || `${issue.path}`;
          if (!schemaMap.has(k)) schemaMap.set(k, new Set());
          schemaMap.get(k)!.add(serverKey);
        } else if (issue.source === 'linter' && issue.rule) {
          if (issue.severity === 'error') {
            allLinterError.add(serverKey);
            if (!linterErrorMap.has(issue.rule)) linterErrorMap.set(issue.rule, new Set());
            linterErrorMap.get(issue.rule)!.add(serverKey);
          } else if (issue.severity === 'warning') {
            allWarning.add(serverKey);
            if (!linterWarningMap.has(issue.rule)) linterWarningMap.set(issue.rule, new Set());
            linterWarningMap.get(issue.rule)!.add(serverKey);
          } else if (issue.severity === 'info') {
            allInfo.add(serverKey);
            if (!linterInfoMap.has(issue.rule)) linterInfoMap.set(issue.rule, new Set());
            linterInfoMap.get(issue.rule)!.add(serverKey);
          }
        }
        if (issue.severity === 'warning') allWarning.add(serverKey);
        if (issue.severity === 'info') allInfo.add(serverKey);
      }
    }
    const countForVersion = (version: string, source: Set<string>) => {
      const keys = versionToServerKeys.get(version);
      if (!keys) return 0;
      return Array.from(keys).filter((k) => source.has(k)).length;
    };
    const allSchemaErrorAll = new Set<string>();
    const allLinterErrorAll = new Set<string>();
    const allWarningAll = new Set<string>();
    const allInfoAll = new Set<string>();
    for (const [serverKey, result] of Object.entries(validationResults)) {
      for (const issue of result.issues || []) {
        if (isNonCurrentSchemaVersionIssue(issue)) continue;
        if (issue.source === 'schema') allSchemaErrorAll.add(serverKey);
        if (issue.source === 'linter' && issue.severity === 'error') allLinterErrorAll.add(serverKey);
        if (issue.severity === 'warning') allWarningAll.add(serverKey);
        if (issue.severity === 'info') allInfoAll.add(serverKey);
      }
    }
    const versions = Array.from(versionToServerKeys.keys()).sort((a, b) => {
      if (a === INVALID_SCHEMA_VERSION_LABEL) return 1;
      if (b === INVALID_SCHEMA_VERSION_LABEL) return -1;
      if (a === '—') return 1;
      if (b === '—') return -1;
      return b.localeCompare(a);
    });
    const tableRows: { label: string; filter: { type: 'schemaVersion'; version: string } | null; serverCount: number; schemaError: number; linterError: number; warning: number; info: number }[] = [
      {
        label: 'All Schemas',
        filter: null,
        serverCount: servers.length,
        schemaError: allSchemaErrorAll.size,
        linterError: allLinterErrorAll.size,
        warning: allWarningAll.size,
        info: allInfoAll.size,
      },
      ...versions.map((version) => ({
        label: version,
        filter: { type: 'schemaVersion' as const, version },
        serverCount: versionToServerKeys.get(version)?.size ?? 0,
        schemaError: countForVersion(version, allSchemaErrorAll),
        linterError: countForVersion(version, allLinterErrorAll),
        warning: countForVersion(version, allWarningAll),
        info: countForVersion(version, allInfoAll),
      })),
    ];
    const schema = Array.from(schemaMap.entries())
      .map(([key, set]) => ({ key, label: key.length > 60 ? key.slice(0, 57) + '…' : key, count: set.size }))
      .sort((a, b) => b.count - a.count);
    const severityOrder = { error: 0, warning: 1, info: 2 } as const;
    const linterRows: { rule: string; severity: 'error' | 'warning' | 'info'; count: number }[] = [];
    const allRules = new Set([...linterErrorMap.keys(), ...linterWarningMap.keys(), ...linterInfoMap.keys()]);
    for (const rule of allRules) {
      const e = (linterErrorMap.get(rule)?.size ?? 0);
      const w = (linterWarningMap.get(rule)?.size ?? 0);
      const i = (linterInfoMap.get(rule)?.size ?? 0);
      if (e) linterRows.push({ rule, severity: 'error', count: e });
      if (w) linterRows.push({ rule, severity: 'warning', count: w });
      if (i) linterRows.push({ rule, severity: 'info', count: i });
    }
    linterRows.sort((a, b) => severityOrder[a.severity] - severityOrder[b.severity] || b.count - a.count);
    const linter = linterRows;
    return { schema, linter, tableRows };
  })();

  const baseFilteredServers = servers.filter(serverResponse => {
    const search = searchTerm.toLowerCase();
    const name = (serverResponse.server.name || '').toLowerCase();
    const description = (serverResponse.server.description || '').toLowerCase();

    const nameMatch = name.includes(search);
    const descMatch = description.includes(search);

    const matchesSearch = !searchTerm || nameMatch || descMatch;
    
    let matchesFilters = true;
    if (selectedFilters.length > 0) {
      matchesFilters = selectedFilters.every(filter => {
        if (filter === 'Latest') {
          return serverResponse._meta?.['io.modelcontextprotocol.registry/official']?.isLatest === true;
        } else if (filter === 'Hosted') {
          return serverResponse.server.remotes && serverResponse.server.remotes.length > 0;
        } else if (filter === 'Installable') {
          return serverResponse.server.packages && serverResponse.server.packages.length > 0;
        }
        return false;
      });
    }
    
    return matchesSearch && matchesFilters;
  });

  // Apply schema version filter, then issue filter (both work together)
  const afterSchemaFilter =
    selectedSchemaVersion !== null
      ? selectedSchemaVersion === INVALID_SCHEMA_VERSION_LABEL
        ? baseFilteredServers.filter((sr) => invalidSchemaServerKeys.has(getServerKey(sr)))
        : baseFilteredServers.filter((sr) => getSchemaVersion(sr) === selectedSchemaVersion && !invalidSchemaServerKeys.has(getServerKey(sr)))
      : baseFilteredServers;
  const filteredServers = selectedIssueFilter
    ? afterSchemaFilter.filter((sr) => {
        const key = getServerKey(sr);
        const result = validationResults[key];
        if (!result?.issues) return false;
        const issues = result.issues.filter((i) => !isNonCurrentSchemaVersionIssue(i));
        if (selectedIssueFilter.type === 'schema') {
          return issues.some(
            (i) => i.source === 'schema' && (i.message || `${i.path}`) === selectedIssueFilter!.key
          );
        }
        return issues.some((i) => i.source === 'linter' && i.rule === selectedIssueFilter.key);
      })
    : afterSchemaFilter;

  const sortedFilteredServers = [...filteredServers].sort((a, b) => (a.server.name || '').localeCompare(b.server.name || ''));

  const handleFilterToggle = (filter: string) => {
    setSelectedFilters(
      selectedFilters.includes(filter)
        ? selectedFilters.filter(f => f !== filter)
        : [...selectedFilters, filter]
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 dark:border-blue-400 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300">Loading server registry...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-600 dark:text-red-400 text-6xl mb-4">⚠️</div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Error Loading Registry</h1>
          <p className="text-gray-600 dark:text-gray-300">{error}</p>
        </div>
      </div>
    );
  }

  const querySuffix = validateMode ? '?mode=validate' : '';
  const navigationAdapter: NavigationAdapter = {
    goToServer: (serverName: string, version: string) => {
      return `/servers/${encodeServerNameForRoute(serverName)}/${encodeURIComponent(version)}${querySuffix}`;
    },
    goToServerVersions: (serverName: string) => {
      return `/servers/${encodeServerNameForRoute(serverName)}${querySuffix}`;
    },
    Link: ({ href, children, className, onClick }: LinkProps) => {
      return (
        <Link href={href} className={className} onClick={onClick}>
          {children}
        </Link>
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="mb-4 sm:mb-0">
              <div className="flex items-start space-x-3">
                <img 
                  src="/mcp_black.png" 
                  alt="MCP Registry" 
                  className="w-16 h-16 object-contain dark:hidden"
                />
                <img 
                  src="/mcp_white.png" 
                  alt="MCP Registry" 
                  className="w-16 h-16 object-contain hidden dark:block"
                />
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white">MCP Server Registry</h1>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">Browse and discover servers from the official MCP Registry</p>
                </div>
              </div>
            </div>
            <div className="text-right space-y-2">
              <div className="flex items-center justify-end gap-2">
                <ThemeToggle />
                <Link
                  href="/about"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-600 hover:border-gray-400 dark:hover:border-gray-500 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  About This Service
                </Link>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                Official Registry: <a href="https://registry.modelcontextprotocol.io" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">registry.modelcontextprotocol.io</a>
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <ServerListComponent
          servers={servers}
          filteredServers={sortedFilteredServers}
          searchTerm={searchTerm}
          selectedFilters={selectedFilters}
          onSearchChange={setSearchTerm}
          onFilterToggle={handleFilterToggle}
          onClearFilters={() => setSelectedFilters([])}
          onServerClick={() => {}}
          navigationAdapter={navigationAdapter}
          validateMode={validateMode}
          validationResults={validateMode ? Object.fromEntries(Object.entries(validationResults).map(([k, v]) => [k, { ...v, issues: (v.issues || []).filter((i) => !isNonCurrentSchemaVersionIssue(i)) }])) : undefined}
          validationSummary={validateMode ? validationSummary : undefined}
          validationProgress={validationProgress}
          selectedSchemaVersion={selectedSchemaVersion}
          onSchemaVersionFilterClick={(v: string | null) => {
            setSelectedSchemaVersion(v);
            setSelectedIssueFilter(null);
          }}
          onClearSchemaVersionFilter={() => {
            setSelectedSchemaVersion(null);
            setSelectedIssueFilter(null);
          }}
          selectedIssueFilter={selectedIssueFilter}
          onIssueFilterClick={setSelectedIssueFilter}
          onClearIssueFilter={() => setSelectedIssueFilter(null)}
          getServerKey={getServerKey}
        />
      </div>
    </div>
  );
}

export default function RegistryPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 dark:border-blue-400 mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-300">Loading...</p>
          </div>
        </div>
      }
    >
      <RegistryPageContent />
    </Suspense>
  );
}
