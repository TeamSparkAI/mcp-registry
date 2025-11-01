/**
 * Utility functions for converting server names in routes
 * Server names contain '/' (e.g., "ai.aliengiraffe/spotdb")
 * In URLs, we replace '/' with '--' to avoid encoding issues
 */

/**
 * Convert a server name for use in a URL path
 * Replaces '/' with '--'
 */
export function encodeServerNameForRoute(serverName: string): string {
  return serverName.replace(/\//g, '--');
}

/**
 * Convert a route parameter back to a server name
 * Replaces '--' with '/'
 */
export function decodeServerNameFromRoute(routeParam: string): string {
  return routeParam.replace(/--/g, '/');
}

