# TeamSpark AI MCP Server Catalog

This repo uses a scheduled GitHub Action to do a daily processing of the [@modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers/) repo README.md file to get the list of MCP servers found there (extracting metadata, including tags based on the section each server is listed in).  It then validates the GitHub repo for each server hosted on GitHub (most of them), including getting repo metadata and parsing the repo README to extract sample configuration.  The result is the [servers.json](./public/servers.json) file that can be found in this repo.

For more technical details, see: [scrips/catalog/README.md](/scripts/catalog/README.md).

## servers.json

The servers.json file is intended to be embedded in websites or applications that wish to deliver a catalog of MCP servers for their users to choose from.

The servers.json file contains a list of servers in the following form:

```json
{
    "id": "agentql:bdfc4aff",
    "icon": "https://www.agentql.com/favicon/favicon.png",
    "name": "AgentQL",
    "description": "Enable AI agents to get structured data from unstructured web with AgentQL.",
    "repository": {
        "url": "https://github.com/tinyfish-io/agentql-mcp",
        "source": "github",
        "stars": 82,
        "lastUpdated": "2025-07-01T23:14:41Z"
    },
    "tags": [
        "official"
    ],
    "serverName": "agentql",
    "serverConfig": {
        "type": "stdio",
        "command": "npx",
        "args": [
            "-y",
            "agentql-mcp"
        ],
        "env": {
            "AGENTQL_API_KEY": "YOUR_API_KEY"
        }
    }
}
```

**Note on server id:** The id field is generated from the server name (lowercased and cleaned up) and the first 8 characters of the sha256 hash of the repo, separated by a colon.  This produces an ID that is human readable, unique, persistent, and safe to use in filesystem paths or URLs.

## TeamSpark MCP Server Catalog site

The [TeamSpark MCP Server Catalog](https://teamsparkai.github.io/ToolCatalog/) is a GitHub Pages site in this repo.  It is an implementation of the servers.json data that allows users to browser, search, and filter MCP servers, including links to their repos and sample server configs that can be easily copied.

![MCP Server Catalog Screenshot](./public/screenshot.png)

## FAQ

### Why did you choose [@modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers/)?

We reviewed many MCP catalogs and didn't find any that we liked and that met our needs.  Many of them are poorly curated grab bags of many thousands of MCP servers, the vast majority of which are problematic (obsolete, discontinued, vibe coded, insecure, and just generally creepy).  We found some catalogs that were maybe a little too curated (very high quality, but also a very small list missing many important MCP servers).

Even thought he list at `@modelcontextprotocol/servers` isn't really intented to be a machine consumable directory, we found it to be the best curated list (for our needs) with reference servers, a few hundred first-party (official) servers, and another 500 or so third-party servers of generally decent quality.  We decided that making that directory machine consumable (and augmenting it in automated way) would produce what we needed for our own apps (and others) and we're happy with the result.

### Do you know about [@modelcontextprotocol/registry](https://github.com/modelcontextprotocol/registry)?

Yes, we are aware of the standards effort in this area and we are particpating.  If this results in something that meets our needs, we'll glady adopt it (and adapt this repo to support it).  As of right now, it's still a little too raw, and it doesn't meed our needs, so we built something that does exactly what we need in the interim.

### What about the icons?

The icon URLs in the servers.json file are the exact URLs from the source.  That being said, you should not use these URLs directly in web pages or browser controls in your app, as many of them will have CORS or CORB issues.  Some of the icon paths are GitHub URLs that need to be adapted to the raw images.  In all cases, you should only uses the icon URLs to either proxy or download the images and you should host/serve them directly.  For example, this repo downloads the images and serves them directly (using a servers-local.json file with references to the local icon files).  Note that in the source page (at the original repo) these images are served by GitHub which proxies (and caches/optimizes) image access.