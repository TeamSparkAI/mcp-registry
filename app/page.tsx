'use client';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-3">
              <img 
                src="./icon.png" 
                alt="TeamSpark" 
                className="w-16 h-16 object-contain"
              />
              <div>
                <h1 className="text-3xl font-bold text-gray-900">TeamSpark MCP Server Discovery</h1>
                <p className="text-gray-600 mt-1">Choose your discovery method</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Discover MCP Servers</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose between a curated catalog of verified servers or browse the complete official MCP registry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Catalog Option */}
          <div className="bg-white rounded-lg border shadow-sm hover:shadow-md transition-shadow">
            <div className="p-8">
              <div className="flex items-center space-x-4 mb-6">
                <img 
                  src="./mcp_black.png" 
                  alt="Catalog" 
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Server Catalog</h3>
                  <p className="text-gray-600">Curated & Verified</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">Curated from official MCP servers repository</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">Automatically validated and processed</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">Ready-to-use configurations</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">Updated daily from @modelcontextprotocol/servers</p>
                </div>
              </div>

              <a
                href="./catalog"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center block"
              >
                Browse Catalog
              </a>
            </div>
          </div>

          {/* Registry Option */}
          <div className="bg-white rounded-lg border shadow-sm hover:shadow-md transition-shadow">
            <div className="p-8">
              <div className="flex items-center space-x-4 mb-6">
                <img 
                  src="./mcp_black.png" 
                  alt="Registry" 
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">MCP Registry</h3>
                  <p className="text-gray-600">Complete & Official</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">Direct from official MCP registry</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">Complete server metadata and packages</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">Filter by Latest, Hosted, Installable</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">Updated daily from registry.modelcontextprotocol.io</p>
                </div>
              </div>

              <a
                href="./registry"
                className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-medium text-center block"
              >
                Browse Registry
              </a>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg border p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">About</h3>
            <p className="text-gray-600 mb-4">
              Model Context Protocol (MCP) servers provide AI agents with access to tools, data sources, and capabilities. 
              Choose the discovery method that best fits your needs.
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-500">
              <a 
                href="https://github.com/modelcontextprotocol/servers/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:text-blue-800"
              >
                Official Servers List
              </a>
              <span>•</span>
              <a 
                href="https://registry.modelcontextprotocol.io" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:text-blue-800"
              >
                MCP Registry
              </a>
              <span>•</span>
              <a 
                href="https://github.com/TeamSparkAI/ToolCatalog" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:text-blue-800"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}