# Tool Vault Server Catalog Builder

This is a unified script that builds our server registry by processing the "official" MCP servers catalog: https://github.com/modelcontextprotocol/servers/.

## Architecture

The catalog builder uses a streaming pipeline architecture that processes servers one at a time:

1. **ServerScraper** - Scrapes the MCP servers README and creates initial server entries, gets metadata for all project GitHub repos
2. **ReadmeDownloader** - Downloads README files from GitHub repositories
3. **ConfigProcessor** - Extracts JSON MCP configuration blocks from repo README files
4. **ConfigPrioritizer** - Applies priority rules to select the best MCP configuration
5. **IconProcessor** - Downloads and processes server icons, creates local servers file that refers to local icons (optional)

Note: For each server we create a URL-safe, persistent, durable, and unique id from the server name and the sha256 hash of the repo.

## Usage

### Basic Usage
```bash
# Run the full pipeline
npm run catalog:build

# Or run directly
npx ts-node scripts/catalog/index.ts
```

### Debug Mode
```bash
# Run with debug mode to preserve intermediate files
npm run catalog:build:deug

# Or run directly
npx ts-node scripts/catalog/index.ts --debug
```

### Command Line Options
- `--debug` - Enable debug mode (saves intermediate files to `data/` directory)

## Configuration Priority

The system applies the following priority rules to select the best configuration:

1. **Priority 1**: `command: "npx"` (without mcp-remote) or `command: "uvx"`
2. **Priority 2**: `url` attribute with non-local address
3. **Priority 3**: `command: "docker"`
4. **Priority 4**: `command: "npx"` with mcp-remote and non-local address
5. **Priority 5**: Everything else

## Project File Structure

```
scripts/catalog/
├── index.ts                 # Main entry point
├── CatalogBuilder.ts        # Main orchestrator
├── services/               # Individual service classes
│   ├── ServerScraper.ts
│   ├── ReadmeDownloader.ts
│   ├── ConfigProcessor.ts
│   ├── ConfigPrioritizer.ts
│   └── IconProcessor.ts
├── types/                  # Type definitions
│   ├── BuildConfig.ts
│   └── ServerEntry.ts
├── data/                   # Debug output (when enabled)
│   ├── readmes/           # Downloaded README files
│   └── configs/           # Extracted configurations
└── config-overrides.json  # Manual configuration overrides
```

## Future Enhancements

- GitHub Actions automation for daily updates
- Static site generation for catalog browsing
- Enhanced error reporting and recovery
- Parallel processing for improved performance

Replace this whole thing with what results from: https://github.com/modelcontextprotocol/registry

## Misc

Note on parsing config
- Multiple servers in config and/or repo (right now we only grab the first one)
  - Adfin has it's own server config and then a filesystem config to the adfin local directory
  - AWS has like a dozen servers in the repo
  - Browserbase just refers to two actual MCP server repos
  - Cloudflare has two servers at repo

Processing main readme
- Github - download readme for https://github.com/modelcontextprotocol/servers
- Process section ## .* Reference Servers, tag as "reference"
- Process section ### .* Archived, tag as "reference" and "archived"
- Process section ### .* Official Integrations, tag as "official"
- Process section ### .* Community Servers, tag as "community"

## GitHub Automation

Set up public repo that is a Next.js static site outputting to GitHub Pages (based on: https://github.com/nextjs/deploy-github-pages ???)
- Catalog page
- Item page
- public/teamspark.png
- public/servers-local.json (~500Kb) - local icon URLs
- public/icons (~300 files, 6Mb total)
- servers.json (~500Kb) - raw/public icon URLs

GHA to
- Run scripts to create servers.json and populate public/icons (with new/updated items only)
- Publish the site (including the data file updates generated above)

Run daily (optimization: only run if main target page has been updated since last servers.json generation)

In Tool Vault, we can pull the repo