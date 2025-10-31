// Types for the "generic" MCP Registry API (that the standard MCP Registry API implements also)
// Based on: registry-api-openapi.yaml (with some tweaks, it was missing package.transport)

// Base input interface with common properties
export interface Input {
  description?: string;
  isRequired?: boolean;
  format?: 'string' | 'number' | 'boolean' | 'filepath';
  value?: string;
  isSecret?: boolean;
  default?: string;
  placeholder?: string;
  choices?: string[];
}

// Input with variable substitution support
export interface InputWithVariables extends Input {
  variables?: Record<string, Input>;
}

// Positional argument (value inserted verbatim into command line)
export interface PositionalArgument extends InputWithVariables {
  type: 'positional';
  valueHint?: string;
  isRepeated?: boolean;
}

// Named argument (command-line --flag={value})
export interface NamedArgument extends InputWithVariables {
  type: 'named';
  name: string;
  valueHint?: string;
  isRepeated?: boolean;
}

// Union type for all argument types
export type Argument = PositionalArgument | NamedArgument;

// Key-value input for headers and environment variables
export interface KeyValueInput extends InputWithVariables {
  name: string;
}

export interface TransportLocal {
  type: 'stdio';
}
  
export interface TransportRemote {
  type: 'streamable-http' | 'sse';
  url: string;
  headers?: KeyValueInput[];
}
  
export type Transport = TransportLocal | TransportRemote;
  
export interface Package {
  registryType: string;
  registryBaseUrl?: string;
  identifier: string;
  version: string;
  fileSha256?: string;
  transport: Transport;
  runtimeHint?: string;
  runtimeArguments?: Argument[];
  packageArguments?: Argument[];
  environmentVariables?: KeyValueInput[];
}

export interface OfficialRegistryMetadata {
  serverId: string;
  versionId: string;
  publishedAt: string;
  updatedAt: string;
  isLatest: boolean;
}

export interface Repository {
  url: string;
  source: string;
  id: string;
  subfolder?: string;
}

export interface Icon {
  src: string;
  mimeType?: 'image/png' | 'image/jpeg' | 'image/jpg' | 'image/svg+xml' | 'image/webp';
  sizes?: string[]; // e.g., ["48x48", "96x96"] or ["any"]
  theme?: 'light' | 'dark';
}

// ServerDetail: Server data per server.schema.json (NO registry metadata)
export interface ServerDetail {
  $schema?: string;
  name: string;
  description: string;
  version: string;
  title?: string;
  icons?: Icon[];
  status?: 'active' | 'deprecated';
  repository?: Repository;
  websiteUrl?: string;
  packages?: Package[];
  remotes?: Transport[];
}

// Registry metadata (separate from server data per OpenAPI spec)
export interface RegistryMeta {
  'io.modelcontextprotocol.registry/official'?: OfficialRegistryMetadata;
  'io.modelcontextprotocol.registry/publisher-provided'?: Record<string, any>;
  [key: string]: any; // Allow additional extension namespaces
}

// ServerResponse: Wrapped format per OpenAPI spec (server + _meta separated)
export interface ServerResponse {
  server: ServerDetail;
  _meta: RegistryMeta;
}

// API response metadata
export interface ResponseMetadata {
  nextCursor?: string;
  count?: number;
  totalResults?: number;
}

// List response per OpenAPI spec
export interface ServerListResponse {
  servers: ServerResponse[];
  metadata?: ResponseMetadata;
}

// ServerDetail with _meta merged (used by detail views)
export type ServerWithMeta = ServerDetail & {
  _meta?: RegistryMeta;
};

