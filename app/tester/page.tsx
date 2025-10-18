'use client';

import { useState, useEffect, useRef } from 'react';
import { ServerJSON } from '@/types/mcp-registry';
import { generateConfiguredServer } from '@/app/registry-utils/configGenerator';
import { getResourcePath } from '@/app/utils/paths';
import ServerDetailView from '@/app/components/ServerDetailView';
import ValidationIssues from '@/app/components/ValidationIssues';
import type { ValidationIssue, ValidationResult } from 'mcp-registry-validator';

export default function TesterPage() {
  const [testServerJson, setTestServerJson] = useState('');
  const [testServer, setTestServer] = useState<ServerJSON | null>(null);
  const [isEditingTestServer, setIsEditingTestServer] = useState(true);
  const [validationResult, setValidationResult] = useState<ValidationResult | null>(null);
  const [isValidating, setIsValidating] = useState(false);
  const [selectedServer, setSelectedServer] = useState<ServerJSON | null>(null);
  const [configuringPackage, setConfiguringPackage] = useState<{ pkg: any; index: number } | null>(null);
  const [configuringRemote, setConfiguringRemote] = useState<{ remote: any; index: number } | null>(null);
  const [packageConfig, setPackageConfig] = useState<Record<string, any>>({});
  const [remoteConfig, setRemoteConfig] = useState<Record<string, any>>({});
  const [showRawModal, setShowRawModal] = useState(false);
  const [visibleFields, setVisibleFields] = useState<Set<string>>(new Set());
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea based on content
  useEffect(() => {
    if (textareaRef.current && testServerJson) {
      const textarea = textareaRef.current;
      textarea.style.height = 'auto';
      textarea.style.height = Math.min(textarea.scrollHeight, window.innerHeight - 300) + 'px';
    }
  }, [testServerJson]);

  // Auto-size textarea when entering edit mode
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
      // Call the server-side validation API
      const response = await fetch('/api/validate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ serverJson: testServerJson }),
      });

      if (!response.ok) {
        throw new Error(`Validation API error: ${response.status}`);
      }

      const result: ValidationResult = await response.json();
      setValidationResult(result);
      
      // Scroll to validation results after they appear
      setTimeout(() => {
        const resultsElement = document.getElementById('validation-results');
        if (resultsElement) {
          resultsElement.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
        }
      }, 100);
    } catch (error) {
      console.error('Validation error:', error);
      setValidationResult({
        valid: false,
        issues: [{
          source: 'schema',
          severity: 'error',
          path: '/',
          message: `Validation failed: ${error instanceof Error ? error.message : 'Unknown error'}`,
          rule: 'validation-error'
        }]
      });
      
      setTimeout(() => {
        const resultsElement = document.getElementById('validation-results');
        if (resultsElement) {
          resultsElement.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
        }
      }, 100);
    } finally {
      setIsValidating(false);
    }
  };

  const handleSubmitTestServerJson = async () => {
    if (!testServerJson.trim()) {
      return;
    }

    setIsValidating(true);
    try {
      // Call the server-side validation API
      const response = await fetch('/api/validate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ serverJson: testServerJson }),
      });

      if (!response.ok) {
        throw new Error(`Validation API error: ${response.status}`);
      }

      const result: ValidationResult = await response.json();
      
      const parseErrors = result.issues.filter(issue => issue.source === 'parse');
      
      if (parseErrors.length > 0) {
        setValidationResult({
          valid: false,
          issues: parseErrors
        });
        setIsValidating(false);
        
        setTimeout(() => {
          const resultsElement = document.getElementById('validation-results');
          if (resultsElement) {
            resultsElement.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'start' 
            });
          }
        }, 100);
        return;
      }
      
      const parsedServer = JSON.parse(testServerJson);
      setTestServer(parsedServer);
      setSelectedServer(parsedServer);
      setIsEditingTestServer(false);
      setValidationResult(null);
      
    } catch (error) {
      console.error('Parse validation error:', error);
      setValidationResult({
        valid: false,
        issues: [{
          source: 'parse',
          severity: 'error',
          path: '/',
          message: `Failed to process server data: ${error instanceof Error ? error.message : 'Unknown error'}`,
          rule: 'json-parse'
        }]
      });
    } finally {
      setIsValidating(false);
    }
  };

  const handleUpdateTestServerJson = (newJson: string) => {
    setTestServerJson(newJson);
  };

  const handleApplyTestServerJson = (newJson: string) => {
    try {
      const parsedServer = JSON.parse(newJson);
      const oldServer = selectedServer;
      
      setTestServer(parsedServer);
      setSelectedServer(parsedServer);
      setTestServerJson(newJson);
      
      if (configuringPackage && oldServer && parsedServer) {
        if (!parsedServer.packages || parsedServer.packages.length <= configuringPackage.index) {
          setConfiguringPackage(null);
          setPackageConfig({});
        }
      }
      
      if (configuringRemote && oldServer && parsedServer) {
        if (!parsedServer.remotes || parsedServer.remotes.length <= configuringRemote.index) {
          setConfiguringRemote(null);
          setRemoteConfig({});
        }
      }
    } catch (error) {
      console.error('Error applying server JSON:', error);
    }
  };

  const handleBackToEdit = () => {
    setIsEditingTestServer(true);
    setSelectedServer(null);
    setConfiguringPackage(null);
    setConfiguringRemote(null);
    setPackageConfig({});
    setRemoteConfig({});
    setVisibleFields(new Set());
    setValidationResult(null);
    setIsValidating(false);
  };

  const handleEditTestServerJson = () => {
    if (testServer) {
      setTestServerJson(JSON.stringify(testServer, null, 2));
      setSelectedServer(null);
      setConfiguringPackage(null);
      setConfiguringRemote(null);
      setPackageConfig({});
      setRemoteConfig({});
      setVisibleFields(new Set());
      setValidationResult(null);
      setIsValidating(false);
      setIsEditingTestServer(true);
    }
  };

  const handleConfigurePackage = (pkg: any, index: number) => {
    setConfiguringPackage({ pkg, index });
    setConfiguringRemote(null);
    setRemoteConfig({});
  };

  const handleConfigureRemote = (remote: any, index: number) => {
    setConfiguringRemote({ remote, index });
    setConfiguringPackage(null);
    setPackageConfig({});
  };

  const handleCloseConfiguration = () => {
    setConfiguringPackage(null);
    setConfiguringRemote(null);
    setPackageConfig({});
    setRemoteConfig({});
    setVisibleFields(new Set());
  };

  const handlePackageConfigChange = (config: Record<string, any>) => {
    setPackageConfig(config);
  };

  const handleRemoteConfigChange = (config: Record<string, any>) => {
    setRemoteConfig(config);
  };

  const handleToggleFieldVisibility = (fieldId: string) => {
    setVisibleFields(prev => {
      const next = new Set(prev);
      if (next.has(fieldId)) {
        next.delete(fieldId);
      } else {
        next.add(fieldId);
      }
      return next;
    });
  };

  // Show test mode input (when editing JSON)
  if (isEditingTestServer) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center space-x-3">
              <img 
                src={getResourcePath('/mcp_black.png')} 
                alt="MCP Registry" 
                className="w-8 h-8 object-contain"
              />
              <h1 className="text-xl font-semibold text-gray-900">MCP Registry server.json Tester</h1>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="space-y-6">
            <div className="bg-white rounded-lg border p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Test Your Server Configuration</h2>
              <p className="text-gray-600 mb-4">
                Paste your server.json below to test it using our configuration interface.
              </p>
              <textarea
                ref={textareaRef}
                value={testServerJson}
                onChange={(e) => setTestServerJson(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg font-mono text-sm resize-none"
                style={{
                  minHeight: '200px',
                  maxHeight: 'calc(100vh - 300px)',
                  height: 'auto'
                }}
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
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center"
                >
                  {isValidating ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
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
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {isValidating ? 'Testing...' : 'Test Configuration'}
                </button>
              </div>
            </div>

            {/* Validation Results */}
            {validationResult && (
              <div id="validation-results" className="bg-white rounded-lg border p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Validation Results</h3>
                <ValidationIssues issues={validationResult.issues} />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Show server detail view when server has been loaded
  if (testServer) {
    return (
      <div>
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img 
                  src={getResourcePath('/mcp_black.png')} 
                  alt="MCP Registry" 
                  className="w-8 h-8 object-contain"
                />
                <h1 className="text-xl font-semibold text-gray-900">MCP Registry server.json Tester</h1>
              </div>
              <button
                onClick={handleEditTestServerJson}
                className="flex items-center text-blue-600 hover:text-blue-800"
              >
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                Edit server.json
              </button>
            </div>
          </div>
        </header>
        
        <ServerDetailView
        server={testServer}
        configuringPackage={configuringPackage}
        configuringRemote={configuringRemote}
        packageConfig={packageConfig}
        remoteConfig={remoteConfig}
        visibleFields={visibleFields}
        showRawModal={showRawModal}
        configuredServer={generateConfiguredServer(testServer, configuringPackage, configuringRemote, packageConfig, remoteConfig)}
        onPackageConfigChange={handlePackageConfigChange}
        onRemoteConfigChange={handleRemoteConfigChange}
        onToggleFieldVisibility={handleToggleFieldVisibility}
        onCloseConfiguration={handleCloseConfiguration}
        onShowRawModal={setShowRawModal}
        onConfigurePackage={handleConfigurePackage}
        onConfigureRemote={handleConfigureRemote}
        getResourcePath={getResourcePath}
        isTestMode={true}
        testServerJson={testServerJson}
        onUpdateTestServerJson={handleUpdateTestServerJson}
        onApplyTestServerJson={handleApplyTestServerJson}
        onEditTestServerJson={handleEditTestServerJson}
        />
      </div>
    );
  }

  // Default: show the input form
  return null;
}

