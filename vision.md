# Publishing great server entries to the Official MCP Registry

My interest in the Official MCP Registry is from the standpoint of an MCP client. I have an MCP security solution called TeamSpark MCP ToolVault that discovers and converts in-use MCP servers from all agents/clients and secures them, but it also allows for the user to discover and install MCP servers from a catalog and deploy them to their agents. I initially implemented my own catalog derived from the "offical" list on the MCP servers page.  But as The Official MCP Registry has moved forward, I've been adapting my product to use it in addition (with the idea that we'd eventually transition away from our own catalog).

One exciting aspect of the Official MPC Registry is the configuration language available to MCP server publishers that allows clients to generate high quality user interfaces for MCP servers (almost as if each server has its own custom UX), and then allow users to configure servers through that UX to generate MCP server configurations. In theory the user finds a server, picks a package or remote, fills in the generated config UX, and deploys a properly configured MCP server (without having to go the server repo, read through the docs, and then probably end up copying and pasting some sample JSON and getting it to work through trial and error).

So I built an [MPC Server Registry browser](https://teamsparkai.github.io/ToolCatalog/registry), which included the UX code to configure servers, and much to my dismay, discovered that the vast majority of currently published servers either provide no configuration information at all, or they provide configuration information that either makes it impossible to configure the server via the UX or creates a misconfigured server.

In what follows, my goal is not to shame anyone or call anyone out about their published servers. I assume everyone wants to make great servers and create correct metadata, and to the extent that there are some challenges, we should work together to help get everyone up to speed (via evangelism, documentation, tooling, etc). FWIW, the [server.json Format Specification](https://github.com/modelcontextprotocol/registry/blob/main/docs/reference/server-json/generic-server-json.md) document is a pretty solid start.

## Schema

There is a [server.schema.json](https://github.com/modelcontextprotocol/registry/blob/main/docs/reference/server-json/server.schema.json) file that is the definitive schema for server.json data, but it is not automatically applied to servers when they are published. Here are some schema validation stats for the current set of published servers:

| Issue | Count |
|-------|-------|
| Servers with current schema version | 535 |
| Servers with older schema versions (fine) | 96 |
| Servers with empty repository URL (schema validation) | 88 |
| Package version "latest" (prohibited by schema) | 15 |
| Incorrect env var format (same server) | 4 |
| Invalid name | 1 |
| Invalid status | 1 |

That's actually not too bad, and would be easily remedied by just requiring servers to pass schema validation when published.

## Beyond Schema

But as I dove into testing servers against my UX, I noticed many other issues.

First off, as I said, around half of all packages and remotes have no configuration at all. So I suppose if a user wanted to install one of these they'd be back to digging through the README files and copy/pasting JSON. I was pretty disappointed that this many publishers didn't see the value in adding configuration information.  That's a total of 311 servers (packages/remotes) with no configuration at all.

Second, I found an error common to 128 remotes that makes them impossible to configure (an Authorization header with a fixed value containing a token, and no token variable to resolve it). The intent of this configuration is pretty clear and it would be an easy fix, and I'm assuming this is all the same publisher.

And then there were a grab bag of other issues.  There were 49 named arguments that didn't contain the -- prefix, but should have (according the the docs of the servers themselves).  There were 16 packages with sse or streamable transports with fixed ports in the URL that should have been variable based on package configuration. There were 4 instances of choice values that didn't match the format of the input element.  You get the general picture.

The bottom line of all of this is that about half of the servers have no configuration, and of the ones that do have configuraiton, only about a third of those produce a valid UX that in turn produces a valid configuration.

## How Can We help

I am not a server publisher and I can't fix this problem myself (as much as I'd selfishly appreciate more and better server configurations). But I wondered if there was some way the community could help show MCP server publishers the value of providing configuration, and help them easily validate their configurations. Below is what I came up with.

### Interactive Server Configuration Tester

ToolCatalog registry

Developers: Test your server.json

So server publishers could see how cool it would be to have valid configuration, and could test the configuration UX and validate that it produced the expected server configuration.

--Video-- Demonstrate how server configuration works, key concepts with examples, demo using servers in registry.  Server Configuration Tester demo.

One cool feature of the Server Configuration Tester is that you can validate your server.json before testing (or as you go), which will show you and JSON errors, schema errors, or other logical errors.

### Enhanced Validation with mcp-registry-validator

The validation feature in the Server Configuration Tester is provided by the [mcp-registry-validator](https://www.npmjs.com/package/mcp-registry-validator) package.  This is an open source library and package to help publishers validate their server.json configurations. It performs JSON validation, schema validation, and applies a set of linter rules. It is available as a CLI and an API.

It should be noted that while the schema validation is good first step, there are just too many issues (generally misconfigurations) that the schema is not capable of catching, which is where the server.json linter rules come in. The validator currently has 16 rules, 9 of which trigger in currently published servers.  Here are some stats (of just linter rules):

| Rule | Instances |
|------|-----------|
| prefer-config-for-remote | 160 |
| require-config-for-package | 151 |
| no-value-with-irrelevant-properties | 137 |
| no-template-variables-missing | 128 |
| no-secret-template | 128 |
| no-secret-static-value | 128 |
| require-args-leading-dashes | 49 |
| prefer-dynamic-port | 16 |
| require-valid-choices-format | 4 |

The full list of linter rules can be found [here](https://github.com/TeamSparkAI/ToolCatalog/blob/main/packages/mcp-registry-validator/linter.md)

Publishers can integrate [mcp-registry-validator](https://www.npmjs.com/package/mcp-registry-validator) into their dev environment or workflow however they like (the simplest way being just to run the validate command on your server.json before publishing). The CLI can validate a single server or an array of servers (including the entire registry).

The linter is highly modular, with each rule implemented in it's own file and containing it's own metadata, and the documentation generated automatically from the metadata. The linter rule metadata contains detailed rationale, examples, and guidance (the idea being that we trying to explain why the rule is important and exactly what to do about the issue). I think the current set of linter rules is fairly complete, but I'm certainly open to modifying them based on feedback.

# Where do we go from here

I'm open to feedback and encourage discussion on any of the above, including things I didn't cover or alternative paths to get to more and better server configurations.

Also, I'd happily transition any or all of this to the main registry project if there is interest (but would need some guidance). The ToolCatalog Registry viewer (and server configuration tester) app is a static Next.js website deployed via GHA to GitHub Pages. The validator library is in TypeScript.