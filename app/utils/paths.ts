/**
 * Get the correct path for resources, accounting for GitHub Pages base path
 * This uses NEXT_PUBLIC_BASE_PATH which is set at build time for static exports,
 * ensuring all paths are correct in the generated HTML without runtime detection.
 * 
 * @param path - The path to the resource (should start with /)
 * @returns The full path including base path if needed
 */
export function getResourcePath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return `${basePath}${path}`;
}

