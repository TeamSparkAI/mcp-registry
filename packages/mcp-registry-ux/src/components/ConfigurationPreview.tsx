import React, { useState } from 'react';

interface ConfigurationPreviewProps {
  configuredServer: any;
}

export function ConfigurationPreview({ configuredServer }: ConfigurationPreviewProps) {
  const [copiedMcpConfig, setCopiedMcpConfig] = useState(false);
  const [copiedRuntimeConfig, setCopiedRuntimeConfig] = useState(false);

  const copyToClipboard = async (text: string, setStateFn: (value: boolean) => void) => {
    try {
      await navigator.clipboard.writeText(text);
      setStateFn(true);
      setTimeout(() => setStateFn(false), 2000);
    } catch (err) {
      console.error('Failed to copy to clipboard:', err);
    }
  };

  return (
    <div className="mt-6 space-y-6">
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="block text-sm font-medium text-gray-700">
            MCP Server Configuration (for use in clients)
          </label>
          <button
            onClick={() => copyToClipboard(
              JSON.stringify({ mcpServers: configuredServer.mcpServerConfig }, null, 2),
              setCopiedMcpConfig
            )}
            className={`flex items-center space-x-1 px-2 py-1 text-xs rounded transition-colors ${
              copiedMcpConfig 
                ? 'bg-green-100 text-green-700' 
                : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
            }`}
          >
            {copiedMcpConfig ? (
              <>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Copied!</span>
              </>
            ) : (
              <>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span>Copy Config</span>
              </>
            )}
          </button>
        </div>
        <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm overflow-x-auto max-h-96">
          {JSON.stringify({ mcpServers: configuredServer.mcpServerConfig }, null, 2)}
        </pre>
      </div>
      
      {configuredServer.runtimeConfig && (
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Transport Runner Configuration
            </label>
            <button
              onClick={() => copyToClipboard(
                JSON.stringify(configuredServer.runtimeConfig, null, 2),
                setCopiedRuntimeConfig
              )}
              className={`flex items-center space-x-1 px-2 py-1 text-xs rounded transition-colors ${
                copiedRuntimeConfig 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
              }`}
            >
              {copiedRuntimeConfig ? (
                <>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span>Copy Config</span>
                </>
              )}
            </button>
          </div>
          <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm overflow-x-auto max-h-96">
            {JSON.stringify(configuredServer.runtimeConfig, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}



