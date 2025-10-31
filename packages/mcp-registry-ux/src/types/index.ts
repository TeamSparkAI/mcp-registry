// Re-export types from the client package
export type {
  ServerResponse,
  ServerListResponse,
  ServerDetail,
  ServerWithMeta,
  Package,
  TransportRemote,
  TransportLocal,
  Icon,
  RegistryMeta
} from '@teamsparkai/mcp-registry-client';

// Import Input for use in FieldConfig
import type { Input } from '@teamsparkai/mcp-registry-client';

// UX-specific type: Flattened type combining all properties from Argument and KeyValueInput unions.
// Treats all properties as optional to avoid needing type guards in render functions.
export type FieldConfig = {
  name?: string;          // From NamedArgument and KeyValueInput
  value?: string;
  default?: string;
  placeholder?: string;
  isRequired?: boolean;
  isSecret?: boolean;
  description?: string;
  format?: 'string' | 'number' | 'boolean' | 'filepath';
  choices?: string[];
  variables?: Record<string, Input>;
  valueHint?: string;     // From Argument types
  isRepeated?: boolean;   // From Argument types
  type?: string;          // From Argument types
};
