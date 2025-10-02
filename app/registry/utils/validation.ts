import { 
  validateServerJson as validateServerJsonCore, 
  lintServerData, 
  substituteTransportUrl,
  type ValidationIssue, 
  type ValidationResult 
} from 'mcp-registry-validator/dist/browser';

// Wrapper function to handle GitHub Pages resource path loading
export async function validateServerJson(serverJson: string, getResourcePath?: (path: string) => string): Promise<ValidationResult> {
  // For GitHub Pages, we need to load the schema from the public directory
  if (getResourcePath) {
    // Create a temporary schema file path for the validator
    const schemaPath = getResourcePath('/server.schema.json');
    return await validateServerJsonCore(serverJson, schemaPath);
  }
  
  // For local development or when no resource path is needed
  return await validateServerJsonCore(serverJson);
}

// Re-export types and functions from the validator package
export type { ValidationIssue, ValidationResult } from 'mcp-registry-validator/dist/browser';
export { lintServerData, substituteTransportUrl } from 'mcp-registry-validator/dist/browser';