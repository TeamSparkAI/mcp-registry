import React from 'react';
import { ServerResponse } from '../types';
import { NavigationAdapter, LinkProps } from '../adapters';
import { getBestIcon } from '../utils/iconUtils';

export interface ValidationSummaryTableRow {
  label: string;
  filter: { type: 'schemaVersion'; version: string } | null;
  serverCount: number;
  schemaError: number;
  linterError: number;
  warning: number;
  info: number;
}

export interface ValidationSummaryShape {
  schema: { key: string; label: string; count: number }[];
  linter: { rule: string; severity: 'error' | 'warning' | 'info'; count: number }[];
  tableRows?: ValidationSummaryTableRow[];
}

interface ServerListProps {
  servers: ServerResponse[];
  filteredServers: ServerResponse[];
  searchTerm: string;
  selectedFilters: string[];
  onSearchChange: (term: string) => void;
  onFilterToggle: (filter: string) => void;
  onClearFilters: () => void;
  onServerClick: (serverResponse: ServerResponse) => void;
  navigationAdapter?: NavigationAdapter;
  /** When true, show validation summary and per-server issue badges */
  validateMode?: boolean;
  validationResults?: Record<string, { issues?: { source: string; severity?: string; message?: string; path?: string; rule?: string }[] }>;
  validationSummary?: ValidationSummaryShape;
  validationProgress?: { done: number; total: number } | null;
  selectedSchemaVersion?: string | null;
  onSchemaVersionFilterClick?: (version: string | null) => void;
  onClearSchemaVersionFilter?: () => void;
  selectedIssueFilter?: { type: 'schema' | 'linter'; key: string } | null;
  onIssueFilterClick?: (filter: { type: 'schema' | 'linter'; key: string }) => void;
  onClearIssueFilter?: () => void;
  getServerKey?: (server: ServerResponse) => string;
}

export function ServerList({
  servers,
  filteredServers,
  searchTerm,
  selectedFilters,
  onSearchChange,
  onFilterToggle,
  onClearFilters,
  onServerClick,
  navigationAdapter,
  validateMode,
  validationResults = {},
  validationSummary,
  validationProgress,
  selectedSchemaVersion,
  onSchemaVersionFilterClick,
  onClearSchemaVersionFilter,
  selectedIssueFilter,
  onIssueFilterClick,
  onClearIssueFilter,
  getServerKey = (s) => `${s.server.name}/${s.server.version}`,
}: ServerListProps) {
  const LinkComponent = navigationAdapter?.Link || (({ href, children, className, onClick }: LinkProps) => (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  ));
  const getRemotesSummary = (serverResponse: ServerResponse): string | null => {
    if (!serverResponse.server.remotes || serverResponse.server.remotes.length === 0) {
      return null;
    }
    const remoteTypes = serverResponse.server.remotes.map(remote => remote.type).join(', ');
    return remoteTypes;
  };

  const getPackagesSummary = (serverResponse: ServerResponse): string | null => {
    if (!serverResponse.server.packages || serverResponse.server.packages.length === 0) {
      return null;
    }
    const packageInfos = serverResponse.server.packages.map(pkg => {
      return `${pkg.registryType}`;
    }).join(', ');
    return packageInfos;
  };

  return (
    <div className="space-y-6">
          {/* Validation summary table (when mode=validate) */}
          {validateMode && validationSummary && (
            <div className="bg-white dark:bg-gray-800 rounded-lg border dark:border-gray-700 p-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Validation summary</h2>
              {validationProgress && validationProgress.done < validationProgress.total && (
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  Validating… {validationProgress.done} / {validationProgress.total} servers
                </p>
              )}
              {validationSummary.tableRows && validationSummary.tableRows.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-600">
                        <th className="text-left py-2 pr-4 font-medium text-gray-700 dark:text-gray-300">Schema</th>
                        <th className="text-right py-2 px-2 font-medium text-gray-700 dark:text-gray-300">Servers</th>
                        <th className="text-right py-2 px-2 font-medium text-red-700 dark:text-red-300">Schema Error</th>
                        <th className="text-right py-2 px-2 font-medium text-amber-700 dark:text-amber-300">Linter Error</th>
                        <th className="text-right py-2 px-2 font-medium text-yellow-700 dark:text-yellow-300">Warning</th>
                        <th className="text-right py-2 px-2 font-medium text-blue-700 dark:text-blue-300">Info</th>
                      </tr>
                    </thead>
                    <tbody>
                      {validationSummary.tableRows.map((row, idx) => {
                        const isSelected = row.filter === null ? !selectedSchemaVersion : selectedSchemaVersion === row.filter.version;
                        const isAll = row.filter === null;
                        return (
                          <tr
                            key={isAll ? 'all' : `schemaVersion-${row.filter!.version}-${idx}`}
                            className={`border-b border-gray-100 dark:border-gray-700 ${
                              isSelected ? 'bg-blue-50 dark:bg-blue-900/30' : 'hover:bg-gray-50 dark:hover:bg-gray-700/50'
                            }`}
                          >
                            <td className="py-2 pr-4">
                              <button
                                type="button"
                                onClick={() => {
                                  if (row.filter) onSchemaVersionFilterClick?.(row.filter.version);
                                  else onClearSchemaVersionFilter?.();
                                }}
                                className={`text-left w-full font-mono truncate max-w-xs block ${isAll ? 'font-semibold text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'}`}
                                title={row.label}
                              >
                                {row.label.length > 50 ? row.label.slice(0, 47) + '…' : row.label}
                              </button>
                            </td>
                            <td className="text-right py-2 px-2 text-gray-600 dark:text-gray-400 tabular-nums">{row.serverCount ?? '—'}</td>
                            <td className="text-right py-2 px-2 text-red-600 dark:text-red-400 tabular-nums">{row.schemaError || '—'}</td>
                            <td className="text-right py-2 px-2 text-amber-600 dark:text-amber-400 tabular-nums">{row.linterError || '—'}</td>
                            <td className="text-right py-2 px-2 text-yellow-600 dark:text-yellow-400 tabular-nums">{row.warning || '—'}</td>
                            <td className="text-right py-2 px-2 text-blue-600 dark:text-blue-400 tabular-nums">{row.info || '—'}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-sm text-gray-500 dark:text-gray-400">No schema versions to display.</p>
              )}
              {validationSummary.schema.length > 0 || validationSummary.linter.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 pt-6 border-t border-gray-200 dark:border-gray-600">
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Schema issues</h3>
                    <ul className="space-y-1">
                      {validationSummary.schema.map((item) => (
                        <li key={item.key}>
                          <button
                            type="button"
                            onClick={() => onIssueFilterClick?.({ type: 'schema', key: item.key })}
                            className={`text-left text-sm w-full px-2 py-1 rounded truncate max-w-full block ${
                              selectedIssueFilter?.type === 'schema' && selectedIssueFilter?.key === item.key
                                ? 'bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-200'
                                : 'text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                            }`}
                            title={item.key}
                          >
                            {item.label} <span className="font-medium">({item.count})</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Linter issues</h3>
                    <ul className="space-y-1">
                      {validationSummary.linter.map((item) => {
                        const severityStyles = {
                          error: 'bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-200',
                          warning: 'bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-200',
                          info: 'bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200',
                        };
                        const isSelected = selectedIssueFilter?.type === 'linter' && selectedIssueFilter?.key === item.rule;
                        return (
                          <li key={`${item.rule}-${item.severity}`}>
                            <button
                              type="button"
                              onClick={() => onIssueFilterClick?.({ type: 'linter', key: item.rule })}
                              className={`text-left text-sm w-full px-2 py-1 rounded truncate max-w-full block flex items-center gap-2 ${
                                isSelected ? severityStyles[item.severity] : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                              }`}
                            >
                              <span className="truncate min-w-0">{item.rule}</span>
                              <span className="font-medium shrink-0">({item.count})</span>
                              <span className={`shrink-0 px-1.5 py-0.5 text-xs font-medium rounded ml-auto ${item.severity === 'error' ? 'bg-red-200 dark:bg-red-800 text-red-900 dark:text-red-100' : item.severity === 'warning' ? 'bg-amber-200 dark:bg-amber-800 text-amber-900 dark:text-amber-100' : 'bg-blue-200 dark:bg-blue-800 text-blue-900 dark:text-blue-100'}`}>
                                {item.severity}
                              </span>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              ) : null}
              {selectedIssueFilter && (
                <button
                  type="button"
                  onClick={onClearIssueFilter}
                  className="mt-4 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                >
                  Clear issue filter
                </button>
              )}
            </div>
          )}

          {/* Search and Filters */}
          <div className="bg-white dark:bg-gray-800 rounded-lg border dark:border-gray-700 p-6">
            <div className="flex flex-col gap-4">
              <div>
                <label htmlFor="search" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Search Servers
                </label>
                <input
                  id="search"
                  type="text"
                  placeholder="Search by name or description..."
                  value={searchTerm}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                />
              </div>
              
              {/* Filter Buttons and Count */}
              <div className="flex justify-between items-center">
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => onFilterToggle('Hosted')}
                    className={`px-3 py-1 text-sm rounded-full border ${
                      selectedFilters.includes('Hosted')
                        ? 'bg-blue-100 dark:bg-blue-900 border-blue-300 dark:border-blue-700 text-blue-800 dark:text-blue-200'
                        : 'bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    Hosted
                  </button>
                  <button
                    onClick={() => onFilterToggle('Installable')}
                    className={`px-3 py-1 text-sm rounded-full border ${
                      selectedFilters.includes('Installable')
                        ? 'bg-blue-100 dark:bg-blue-900 border-blue-300 dark:border-blue-700 text-blue-800 dark:text-blue-200'
                        : 'bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    Installable
                  </button>
                  <button
                    onClick={() => onFilterToggle('Latest')}
                    className={`px-3 py-1 text-sm rounded-full border ${
                      selectedFilters.includes('Latest')
                        ? 'bg-blue-100 dark:bg-blue-900 border-blue-300 dark:border-blue-700 text-blue-800 dark:text-blue-200'
                        : 'bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    Latest
                  </button>
                  {selectedFilters.length > 0 && (
                    <button
                      onClick={onClearFilters}
                      className="px-3 py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                    >
                      Clear filters
                    </button>
                  )}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {searchTerm || selectedFilters.length > 0 
                    ? `${filteredServers.length} matching servers`
                    : `${servers.length} servers`
                  }
                </div>
              </div>
            </div>
          </div>

          {/* Server Grid */}
          <div className="bg-white dark:bg-gray-800 rounded-lg border dark:border-gray-700">
            <div className="p-6">
              {filteredServers.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-gray-500 dark:text-gray-400">
                    {searchTerm ? 'No servers found matching your search.' : 'No servers available.'}
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  {filteredServers.map((serverResponse) => {
                    const remotesSummary = getRemotesSummary(serverResponse);
                    const packagesSummary = getPackagesSummary(serverResponse);
                    const serverName = serverResponse.server.name;
                    const version = serverResponse.server.version;
                    const title = serverResponse.server.title;
                    const iconSrc = getBestIcon(serverResponse.server.icons, 'light');
                    const serverPath = navigationAdapter 
                      ? navigationAdapter.goToServer(serverName, version) || `/servers/${encodeURIComponent(serverName)}/${encodeURIComponent(version)}`
                      : `/servers/${encodeURIComponent(serverName)}/${encodeURIComponent(version)}`;
                    const handleClick = () => {
                      onServerClick(serverResponse);
                    };
                    const serverKey = getServerKey(serverResponse);
                    const validation = validateMode ? validationResults[serverKey] : undefined;
                    const issueCount = validation?.issues?.length ?? 0;
                    const hasErrors = (validation?.issues ?? []).some((i) => i.severity === 'error');

                    return (
                      <LinkComponent
                        key={`${serverName}-${version}`}
                        href={serverPath || `/servers/${encodeURIComponent(serverName)}/${encodeURIComponent(version)}`}
                        onClick={handleClick}
                        className="flex items-start gap-4 border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-md transition-all cursor-pointer"
                      >
                        <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                          <img 
                            src={iconSrc || "/mcp_black.png"} 
                            alt={title || serverName}
                            className="w-12 h-12 object-contain"
                            onError={(e) => {
                              // Fallback to default icon on load error
                              e.currentTarget.src = "/mcp_black.png";
                            }}
                          />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 flex items-center gap-2">
                            {serverResponse.server.name}
                            {issueCount > 0 && (
                              <span
                                className={`inline-flex min-w-[20px] h-5 px-1.5 items-center justify-center rounded text-xs font-medium ${
                                  hasErrors
                                    ? 'bg-red-500 text-white'
                                    : 'bg-amber-500 text-white'
                                }`}
                                title={`${issueCount} validation issue${issueCount !== 1 ? 's' : ''}`}
                              >
                                {issueCount > 99 ? '99+' : issueCount}
                              </span>
                            )}
                          </h3>
                          
                          {title && (
                            <p className="text-base font-medium text-gray-700 dark:text-gray-300 mb-2">
                              {title}
                            </p>
                          )}
                          
                          <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                            {serverResponse.server.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-4 text-xs text-gray-500 dark:text-gray-400">
                            <div>
                              <span className="font-medium">Version:</span> {serverResponse.server.version}
                            </div>
                            {remotesSummary && (
                              <div>
                                <span className="font-medium">Remotes:</span> {remotesSummary}
                              </div>
                            )}
                            {packagesSummary && (
                              <div>
                                <span className="font-medium">Packages:</span> {packagesSummary}
                              </div>
                            )}
                            {serverResponse.server.status && (
                              <div>
                                <span className="font-medium">Status:</span>{' '}
                                <span className={`${
                                  serverResponse.server.status === 'active' ? 'text-green-600 dark:text-green-400' : 
                                  serverResponse.server.status === 'deprecated' ? 'text-yellow-600 dark:text-yellow-400' : 
                                  'text-gray-600 dark:text-gray-400'
                                }`}>
                                  {serverResponse.server.status}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </LinkComponent>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
  );
}
