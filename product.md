# ToolCatalog - MCP Server Catalog & Discovery Platform

## Overview

Teampark ToolCatalog is a comprehensive Model Context Protocol (MCP) server catalog and discovery platform that provides developers, AI practitioners, and organizations with a curated, searchable database of MCP servers. The platform automatically processes and validates MCP servers from the official Model Context Protocol repository, extracting metadata, configurations, and documentation to create a machine-readable catalog that can be embedded into applications or used as a standalone discovery tool.

ToolCatalog serves as the definitive discovery platform for the Model Context Protocol ecosystem, providing developers, AI practitioners, and organizations with a reliable, comprehensive, and user-friendly way to find, evaluate, and integrate MCP servers. By automating the discovery process and providing rich metadata, ToolCatalog accelerates the adoption of MCP servers and contributes to the growth of the broader AI ecosystem. 

## Key Features

### 🔍 **Intelligent Server Discovery**
- **Automated Processing**: Daily updates from the official `@modelcontextprotocol/servers` repository
- **Metadata Extraction**: Automatic extraction of server descriptions, repository information, and GitHub metadata
- **Configuration Parsing**: Intelligent parsing of MCP server configurations from README files
- **Icon Management**: Automatic download and processing of server icons for consistent display

### 🏷️ **Advanced Filtering & Search**
- **Multi-dimensional Search**: Search by server name, description, tags, and functionality
- **Tag-based Filtering**: Filter servers by categories like "official", "reference", "community", "archived"
- **Real-time Results**: Instant search results with live filtering
- **Smart Prioritization**: Configurations are prioritized based on deployment type (npx, docker, remote, etc.)

### 📊 **Rich Server Information**
- **Detailed Server Profiles**: Complete server information including descriptions, repository links, and metadata
- **Configuration Export**: One-click copy of server configurations for easy integration
- **Repository Analytics**: GitHub stars, last updated dates, and repository health indicators
- **Verification Badges**: Visual indicators for official and reference servers

### 🔧 **Developer-Friendly Features**
- **JSON Data Feed**: Machine-readable `servers.json` file for programmatic access
- **Local Icon Storage**: Downloaded and optimized icons to avoid CORS issues
- **Unique Server IDs**: Human-readable, persistent IDs for reliable referencing
- **Configuration Validation**: Automatic validation of MCP server configurations

### 🌐 **Web Interface**
- **Modern UI**: Clean, responsive interface built with Next.js and Tailwind CSS
- **Mobile Responsive**: Optimized for desktop, tablet, and mobile devices
- **Fast Performance**: Static site generation for optimal loading speeds
- **GitHub Pages Hosting**: Free hosting with automatic updates via GitHub Actions

## Benefits

### For Developers
- **Time Savings**: No need to manually research and validate MCP servers
- **Reliable Data**: Curated and validated server information from official sources
- **Easy Integration**: Simple JSON API for embedding catalog data into applications
- **Configuration Ready**: Pre-parsed configurations ready for immediate use

### For AI Practitioners
- **Server Discovery**: Find the right MCP servers for specific use cases
- **Quality Assurance**: Focus on verified and well-maintained servers
- **Quick Setup**: Copy-paste configurations for rapid server integration
- **Community Insights**: See which servers are popular and actively maintained

### For Organizations
- **Standardization**: Consistent server catalog across development teams
- **Risk Mitigation**: Avoid problematic or discontinued servers
- **Compliance**: Use of official and verified server sources
- **Scalability**: Machine-readable format supports automation and integration

### For the MCP Ecosystem
- **Discoverability**: Makes MCP servers more accessible to the broader community
- **Quality Improvement**: Encourages better documentation and maintenance
- **Standardization**: Promotes consistent server metadata and configuration formats
- **Growth**: Helps new users discover and adopt MCP servers

## Use Cases

### 1. **AI Application Development**
- **Use Case**: Developers building AI applications need to integrate various data sources and tools
- **Solution**: ToolCatalog provides a searchable database of MCP servers for databases, APIs, and tools
- **Benefit**: Rapid discovery and integration of relevant MCP servers

### 2. **Enterprise AI Platform Integration**
- **Use Case**: Organizations building internal AI platforms need reliable server catalogs
- **Solution**: Embed ToolCatalog's JSON feed into internal developer portals
- **Benefit**: Consistent, validated server information across the organization

### 3. **MCP Client Development**
- **Use Case**: Developers building MCP clients need to test with various servers
- **Solution**: ToolCatalog provides a comprehensive test suite of available servers
- **Benefit**: Easy access to diverse server types for testing and validation

### 4. **AI Tool Discovery**
- **Use Case**: AI practitioners need to find tools for specific tasks (database access, API integration, etc.)
- **Solution**: Search and filter servers by functionality and tags
- **Benefit**: Quick discovery of relevant tools for specific use cases

## Technical Architecture

### Data Pipeline
1. **Server Scraper**: Processes the official MCP servers README
2. **README Downloader**: Fetches documentation from GitHub repositories
3. **Config Processor**: Extracts MCP configurations from documentation
4. **Config Prioritizer**: Applies priority rules to select optimal configurations
5. **Icon Processor**: Downloads and optimizes server icons

### Data Outputs
- **servers.json**: Public JSON feed with remote icon URLs
- **servers-local.json**: Local JSON feed with local icon references
- **public/icons/**: Optimized icon files for web display
- **Web Interface**: Next.js static site for browsing and discovery

### Automation
- **Daily Updates**: GitHub Actions run daily to update the catalog
- **Smart Processing**: Only processes changed or new servers for efficiency
- **Error Handling**: Robust error handling and recovery mechanisms
- **Quality Validation**: Automatic validation of server configurations and metadata

## Getting Started

### For End Users
1. Visit the [ToolCatalog website](https://teamsparkai.github.io/ToolCatalog/)
2. Search and filter servers by your needs
3. Click on a server to view detailed information
4. Copy the configuration for use in your MCP client

### For Developers
1. Access the JSON feed: `https://teamsparkai.github.io/ToolCatalog/servers.json`
2. Parse the JSON data in your application
3. Use server configurations and metadata as needed
4. Optionally embed the web interface in your application

### For Contributors
1. Fork the [ToolCatalog repository](https://github.com/TeamSparkAI/ToolCatalog)
2. Run the catalog builder: `npm run catalog:build`
3. Submit improvements to the catalog processing logic
4. Help maintain and improve the web interface