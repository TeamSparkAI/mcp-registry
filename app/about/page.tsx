'use client';

import Link from 'next/link';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function AboutPage() {
  return (
    <div>
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Registry
            </Link>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <img 
                  src="/mcp_black.png" 
                  alt="MCP Registry" 
                  className="w-6 h-6 object-contain dark:hidden"
                />
                <img 
                  src="/mcp_white.png" 
                  alt="MCP Registry" 
                  className="w-6 h-6 object-contain hidden dark:block"
                />
                <span className="text-lg font-semibold text-gray-900 dark:text-white">MCP Server Registry</span>
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="space-y-8">
            {/* About Section */}
            <div className="bg-white dark:bg-gray-800 rounded-lg border dark:border-gray-700 p-8">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">About This Service</h1>
              <div className="prose prose-blue max-w-none dark:prose-invert">
                <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
                  This service provides three main features for working with the Model Context Protocol (MCP) ecosystem:
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    <Link href="/" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium">
                      Registry Website
                    </Link>
                    <span className="text-gray-600 dark:text-gray-400">- Browse and search all MCP servers</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    <a href="#api" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium">
                      Registry API
                    </a>
                    <span className="text-gray-600 dark:text-gray-400">- Programmatic access to registry data</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <Link href="/tester" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium">
                      Server Tester & Validator
                    </Link>
                    <span className="text-gray-600 dark:text-gray-400">- Test and validate server.json files</span>
                  </div>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-400 dark:border-blue-500 p-4 mb-6">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>About the Official Registry:</strong> The{' '}
                    <a href="https://registry.modelcontextprotocol.io" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                      official MCP Registry
                    </a>{' '}
                    is an open-source community effort that serves as the central repository for discovering and sharing MCP servers. 
                    This service mirrors that registry (updated daily) and provides additional tooling around it.
                  </p>
                </div>
              </div>
            </div>

            {/* Registry Website */}
            <div className="bg-white dark:bg-gray-800 rounded-lg border dark:border-gray-700 p-8">
              <div className="flex items-start space-x-3 mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Registry Website</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    A user-friendly web interface to browse, search, and explore all MCP servers from the official registry.
                  </p>
                </div>
              </div>
              <div className="ml-13 space-y-3 text-gray-600">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Search & Filter:</strong> Find servers by name or description, filter by type (hosted/installable) and version</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Server Details:</strong> View complete configuration including packages, remotes, environment variables, and arguments</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Interactive Configuration:</strong> Generate configured server settings through an intuitive interface for packages and remotes</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Version History:</strong> Browse all versions of each server with publish dates and status badges</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Repository Links:</strong> Direct links to source code, package registries (npm, PyPI), and documentation</span>
                </div>
              </div>
            </div>

            {/* API Documentation */}
            <div id="api" className="bg-white dark:bg-gray-800 rounded-lg border dark:border-gray-700 p-8">
              <div className="flex items-start space-x-3 mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Registry API</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    A REST API providing programmatic access to the registry data. This implements the{' '}
                    <a href="https://registry.modelcontextprotocol.io/docs/api" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                      official MCP Registry API
                    </a>{' '}
                    specification, making it compatible with any tools built for the official registry.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="px-2 py-1 text-xs font-mono font-semibold bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded">GET</span>
                    <code className="text-sm font-mono text-gray-900 dark:text-gray-100">/api/v0/servers</code>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 ml-12 mb-2">List all servers from the registry</p>
                  <div className="ml-12 text-sm text-gray-500 dark:text-gray-400">
                    <div className="font-medium mb-1">Query Parameters:</div>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li><code>limit</code> - Maximum number of results (default: 100)</li>
                      <li><code>cursor</code> - Pagination cursor</li>
                      <li><code>search</code> - Search term for name/description</li>
                      <li><code>version</code> - Filter by version (or "latest")</li>
                      <li><code>updated_since</code> - ISO 8601 date</li>
                    </ul>
                  </div>
                  <div className="ml-12 mt-2">
                    <a 
                      href="/api/v0/servers?limit=5"
                      target="_blank"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm"
                    >
                      Try it →
                    </a>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="px-2 py-1 text-xs font-mono font-semibold bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded">GET</span>
                    <code className="text-sm font-mono text-gray-900 dark:text-gray-100">/api/v0/servers/{'{serverName}'}/versions</code>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 ml-12">Get all versions of a specific server</p>
                  <div className="ml-12 mt-2">
                    <a 
                      href="/api/v0/servers/io.github.modelcontextprotocol--servers--src--filesystem/versions"
                      target="_blank"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm"
                    >
                      Try example →
                    </a>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="px-2 py-1 text-xs font-mono font-semibold bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded">GET</span>
                    <code className="text-sm font-mono text-gray-900 dark:text-gray-100">/api/v0/servers/{'{serverName}'}/versions/{'{version}'}</code>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 ml-12">Get a specific version of a server</p>
                  <div className="ml-12 mt-2">
                    <a 
                      href="/api/v0/servers/io.github.modelcontextprotocol--servers--src--filesystem/versions/0.6.2"
                      target="_blank"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm"
                    >
                      Try example →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Server Tester */}
            <div className="bg-white dark:bg-gray-800 rounded-lg border dark:border-gray-700 p-8">
              <div className="flex items-start space-x-3 mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Server Tester & Validator</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Test and validate your <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm text-gray-900 dark:text-gray-100">server.json</code> files before publishing to ensure they meet the MCP schema requirements.
                  </p>
                </div>
              </div>
              <div className="ml-13 space-y-3 text-gray-600 dark:text-gray-300">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Schema Validation:</strong> Validates against the official MCP server schema with detailed error reporting</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Linting Rules:</strong> Additional best-practice checks and warnings to help improve your server configuration</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Interactive Preview:</strong> See how your server configuration will appear in the registry</span>
                </div>
                <div className="mt-4">
                  <Link 
                    href="/tester"
                    className="inline-flex items-center px-4 py-2 bg-green-600 dark:bg-green-500 text-white rounded-lg hover:bg-green-700 dark:hover:bg-green-600 transition-colors"
                  >
                    Open Server Tester
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
              
              <div className="border-t mt-6 pt-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Validation API Endpoint</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="px-2 py-1 text-xs font-mono font-semibold bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded">POST</span>
                    <code className="text-sm font-mono text-gray-900 dark:text-gray-100">/api/validate</code>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Programmatically validate a server.json configuration. Returns detailed validation results including schema errors and linting warnings.
                  </p>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    <div className="font-medium mb-2">Request Body:</div>
                    <pre className="bg-gray-50 dark:bg-gray-900 p-3 rounded text-xs overflow-x-auto border dark:border-gray-700 text-gray-900 dark:text-gray-100">
{`{
  "serverJson": "{ ... server.json content ... }"
}`}
                    </pre>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    <div className="font-medium mb-2">Example Response:</div>
                    <pre className="bg-gray-50 dark:bg-gray-900 p-3 rounded text-xs overflow-x-auto border dark:border-gray-700 text-gray-900 dark:text-gray-100">
{`{
  "valid": true,
  "issues": []
}`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            {/* Resources */}
            <div className="bg-white dark:bg-gray-800 rounded-lg border dark:border-gray-700 p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Resources & Links</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a
                  href="https://registry.modelcontextprotocol.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-md transition-all bg-white dark:bg-gray-700"
                >
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Official Registry</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Visit the official MCP Registry</div>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>

                <a
                  href="https://modelcontextprotocol.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-md transition-all bg-white dark:bg-gray-700"
                >
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">MCP Documentation</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Learn about the MCP protocol</div>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>

                <a
                  href="https://github.com/TeamSparkAI/mcp-registry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-md transition-all bg-white dark:bg-gray-700"
                >
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">This Service on GitHub</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">View source code for this service</div>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-white dark:bg-gray-800 rounded-lg border dark:border-gray-700 p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Technology</h2>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium">Next.js 15</span>
                <span className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium">TypeScript</span>
                <span className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium">React</span>
                <span className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium">Tailwind CSS</span>
                <span className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium">JSON Schema</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

