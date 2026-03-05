'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ServerDetail, generateConfiguredServer, ValidationIssues, ServerDetailView as ServerDetailViewComponent, createTrimmedServer } from '@teamsparkai/mcp-registry-ux';
import type { ValidationResult } from '@teamsparkai/mcp-registry-validator';
import { ThemeToggle } from '@/components/ThemeToggle';

export interface TesterContentProps {
  /** Pre-fill JSON and run validation on mount (e.g. when opened via /tester/name/version) */
  initialJson?: string;
  autoValidate?: boolean;
  /** When set, show a link to test another server (go to /tester) */
  serverBreadcrumb?: { name: string; version: string };
}

export function TesterContent({ initialJson = '', autoValidate = false, serverBreadcrumb }: TesterContentProps) {
  const [testServerJson, setTestServerJson] = useState(initialJson);
  const [testServer, setTestServer] = useState<ServerDetail | null>(null);
  const [isEditingTestServer, setIsEditingTestServer] = useState(true);
  const [validationResult, setValidationResult] = useState<ValidationResult | null>(null);
  const [isValidating, setIsValidating] = useState(false);
  const [selectedServer, setSelectedServer] = useState<ServerDetail | null>(null);
  const [configuringServer, setConfiguringServer] = useState<ServerDetail | null>(null);
  const [packageConfig, setPackageConfig] = useState<Record<string, any>>({});
  const [remoteConfig, setRemoteConfig] = useState<Record<string, any>>({});
  const [showRawModal, setShowRawModal] = useState(false);
  const [visibleFields, setVisibleFields] = useState<Set<string>>(new Set());
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const mountedRef = useRef(true);
  const autoValidatedRef = useRef(false);

  // When opened with initialJson + autoValidate (e.g. /tester/name/version), run validation once on mount
  useEffect(() => {
    mountedRef.current = true;
    if (!autoValidate || !initialJson.trim() || autoValidatedRef.current) return;
    autoValidatedRef.current = true;
    setIsValidating(true);
    fetch('/api/validate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ serverJson: initialJson }),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error(res.statusText))))
      .then((result: ValidationResult) => {
        if (mountedRef.current) setValidationResult(result);
      })
      .catch((err) => {
        if (mountedRef.current) {
          setValidationResult({
            valid: false,
            issues: [{
              source: 'schema',
              severity: 'error',
              path: '/',
              message: `Validation failed: ${err instanceof Error ? err.message : 'Unknown error'}`,
              rule: 'validation-error',
            }],
          });
        }
      })
      .finally(() => {
        if (mountedRef.current) setIsValidating(false);
      });
    setTimeout(() => {
      if (mountedRef.current) {
        const el = document.getElementById('validation-results');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 150);
    return () => { mountedRef.current = false; };
  }, [autoValidate, initialJson]);

  // Auto-resize textarea based on content
  useEffect(() => {
    if (textareaRef.current && testServerJson) {
      const textarea = textareaRef.current;
      textarea.style.height = 'auto';
      textarea.style.height = Math.min(textarea.scrollHeight, window.innerHeight - 300) + 'px';
    }
  }, [testServerJson]);

  useEffect(() => {
    if (isEditingTestServer && textareaRef.current) {
      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.style.height = 'auto';
          const newHeight = Math.min(textareaRef.current.scrollHeight, window.innerHeight - 300);
          textareaRef.current.style.height = newHeight + 'px';
        }
      }, 50);
    }
  }, [isEditingTestServer]);

  const handleValidateJson = async () => {
    if (!testServerJson.trim()) {
      setValidationResult(null);
      return;
    }
    setIsValidating(true);
    try {
      const response = await fetch('/api/validate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ serverJson: testServerJson }),
      });
      if (!response.ok) throw new Error(`Validation API error: ${response.status}`);
      const result: ValidationResult = await response.json();
      setValidationResult(result);
      setTimeout(() => {
        const resultsElement = document.getElementById('validation-results');
        if (resultsElement) resultsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } catch (error) {
      setValidationResult({
        valid: false,
        issues: [{
          source: 'schema',
          severity: 'error',
          path: '/',
          message: `Validation failed: ${error instanceof Error ? error.message : 'Unknown error'}`,
          rule: 'validation-error',
        }],
      });
      setTimeout(() => {
        const resultsElement = document.getElementById('validation-results');
        if (resultsElement) resultsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } finally {
      setIsValidating(false);
    }
  };

  const handleSubmitTestServerJson = async () => {
    if (!testServerJson.trim()) return;
    setIsValidating(true);
    try {
      const response = await fetch('/api/validate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ serverJson: testServerJson }),
      });
      if (!response.ok) throw new Error(`Validation API error: ${response.status}`);
      const result: ValidationResult = await response.json();
      const parseErrors = result.issues.filter((issue) => issue.source === 'parse');
      if (parseErrors.length > 0) {
        setValidationResult({ valid: false, issues: parseErrors });
        setIsValidating(false);
        setTimeout(() => {
          const resultsElement = document.getElementById('validation-results');
          if (resultsElement) resultsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
        return;
      }
      const parsedServer = JSON.parse(testServerJson);
      setTestServer(parsedServer);
      setSelectedServer(parsedServer);
      setIsEditingTestServer(false);
      setValidationResult(null);
    } catch (error) {
      setValidationResult({
        valid: false,
        issues: [{
          source: 'parse',
          severity: 'error',
          path: '/',
          message: `Failed to process server data: ${error instanceof Error ? error.message : 'Unknown error'}`,
          rule: 'json-parse',
        }],
      });
    } finally {
      setIsValidating(false);
    }
  };

  const handleApplyTestServerJson = (newJson: string) => {
    try {
      const parsedServer = JSON.parse(newJson);
      const oldServer = selectedServer;
      setTestServer(parsedServer);
      setSelectedServer(parsedServer);
      setTestServerJson(newJson);
      if (configuringServer && oldServer && parsedServer) {
        let packageIndex: number | undefined;
        let remoteIndex: number | undefined;
        if (configuringServer.packages?.length && oldServer.packages) {
          packageIndex = oldServer.packages.findIndex((p: any) => p === configuringServer.packages?.[0]);
        }
        if (configuringServer.remotes?.length && oldServer.remotes) {
          remoteIndex = oldServer.remotes.findIndex((r: any) => r === configuringServer.remotes?.[0]);
        }
        const trimmedServer = createTrimmedServer(parsedServer, packageIndex, remoteIndex);
        if (!trimmedServer) {
          setConfiguringServer(null);
          setPackageConfig({});
          setRemoteConfig({});
        } else {
          setConfiguringServer(trimmedServer);
        }
      }
    } catch {
      // ignore
    }
  };

  const handleEditTestServerJson = () => {
    if (testServer) {
      setTestServerJson(JSON.stringify(testServer, null, 2));
      setSelectedServer(null);
      setConfiguringServer(null);
      setPackageConfig({});
      setRemoteConfig({});
      setVisibleFields(new Set());
      setValidationResult(null);
      setIsValidating(false);
      setIsEditingTestServer(true);
    }
  };

  const handleConfigurePackage = (pkg: any, index: number) => {
    if (testServer) {
      setConfiguringServer(createTrimmedServer(testServer, index));
      setRemoteConfig({});
    }
  };

  const handleConfigureRemote = (remote: any, index: number) => {
    if (testServer) {
      setConfiguringServer(createTrimmedServer(testServer, undefined, index));
      setPackageConfig({});
    }
  };

  const handleCloseConfiguration = () => {
    setConfiguringServer(null);
    setPackageConfig({});
    setRemoteConfig({});
    setVisibleFields(new Set());
  };

  const handlePackageConfigChange = (config: Record<string, any>) => setPackageConfig(config);
  const handleRemoteConfigChange = (config: Record<string, any>) => setRemoteConfig(config);
  const handleToggleFieldVisibility = (fieldId: string) => {
    setVisibleFields((prev) => {
      const next = new Set(prev);
      if (next.has(fieldId)) next.delete(fieldId);
      else next.add(fieldId);
      return next;
    });
  };

  const headerLeft = (
    <div className="flex items-center space-x-3">
      <img src="/mcp_black.png" alt="MCP Registry" className="w-8 h-8 object-contain dark:hidden" />
      <img src="/mcp_white.png" alt="MCP Registry" className="w-8 h-8 object-contain hidden dark:block" />
      <div className="flex items-center gap-2">
        <h1 className="text-xl font-semibold text-gray-900 dark:text-white">MCP Registry server.json Tester</h1>
        {serverBreadcrumb && (
          <span className="text-sm text-gray-500 dark:text-gray-400">
            (<Link href="/tester" className="text-blue-600 dark:text-blue-400 hover:underline">paste JSON</Link>)
          </span>
        )}
      </div>
    </div>
  );

  if (isEditingTestServer) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              {headerLeft}
              <ThemeToggle />
            </div>
          </div>
        </header>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg border dark:border-gray-700 p-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Test Your Server Configuration</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Paste your server.json below to test it using our configuration interface.
              </p>
              <textarea
                ref={textareaRef}
                value={testServerJson}
                onChange={(e) => setTestServerJson(e.target.value)}
                className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg font-mono text-sm resize-none bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                style={{ minHeight: '200px', maxHeight: 'calc(100vh - 300px)', height: 'auto' }}
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
                  className="bg-blue-600 dark:bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors text-sm font-medium disabled:bg-gray-400 dark:disabled:bg-gray-600 disabled:cursor-not-allowed flex items-center"
                >
                  {isValidating ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Validating...
                    </>
                  ) : (
                    'Validate'
                  )}
                </button>
                <button
                  onClick={handleSubmitTestServerJson}
                  disabled={!testServerJson.trim() || isValidating}
                  className="bg-green-600 dark:bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700 dark:hover:bg-green-600 transition-colors text-sm font-medium disabled:bg-gray-400 dark:disabled:bg-gray-600 disabled:cursor-not-allowed"
                >
                  {isValidating ? 'Testing...' : 'Test Configuration'}
                </button>
              </div>
            </div>
            {validationResult && (
              <div id="validation-results" className="bg-white dark:bg-gray-800 rounded-lg border dark:border-gray-700 p-6">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Validation Results</h3>
                  <Link href="/linter-docs" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                    View linter rules
                  </Link>
                </div>
                <ValidationIssues issues={validationResult.issues} />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (testServer) {
    return (
      <div>
        <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              {headerLeft}
              <div className="flex items-center space-x-4">
                <ThemeToggle />
                <button
                  onClick={handleEditTestServerJson}
                  className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                >
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  Edit server.json
                </button>
              </div>
            </div>
          </div>
        </header>
        <ServerDetailViewComponent
          server={testServer}
          configuringServer={configuringServer}
          packageConfig={packageConfig}
          remoteConfig={remoteConfig}
          navigationAdapter={{ goToServer: () => '/', goToServerVersions: () => '/' }}
          visibleFields={visibleFields}
          showRawModal={showRawModal}
          configuredServer={generateConfiguredServer(configuringServer, packageConfig, remoteConfig)}
          onPackageConfigChange={handlePackageConfigChange}
          onRemoteConfigChange={handleRemoteConfigChange}
          onToggleFieldVisibility={handleToggleFieldVisibility}
          onCloseConfiguration={handleCloseConfiguration}
          onShowRawModal={setShowRawModal}
          onConfigurePackage={handleConfigurePackage}
          onConfigureRemote={handleConfigureRemote}
        />
      </div>
    );
  }

  return null;
}
