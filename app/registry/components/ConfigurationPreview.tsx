'use client';

import React from 'react';

interface ConfigurationPreviewProps {
  configuredServer: any;
}

export default function ConfigurationPreview({ configuredServer }: ConfigurationPreviewProps) {
  return (
    <div className="mt-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        MCP Client Configuration
      </label>
      <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm overflow-x-auto max-h-96">
        {JSON.stringify(configuredServer, null, 2)}
      </pre>
    </div>
  );
}
