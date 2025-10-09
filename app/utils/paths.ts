/**
 * Get the correct path for resources, accounting for GitHub Pages base path
 * @param path - The path to the resource (should start with /)
 * @returns The full path including base path if needed
 */
export function getResourcePath(path: string): string {
  const basePath = typeof window !== 'undefined' && window.location.pathname.includes('/ToolCatalog') ? '/ToolCatalog' : '';
  return `${basePath}${path}`;
}

