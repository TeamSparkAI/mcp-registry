export function getJsonPath(basePath: string, ...segments: (string | number)[]): string {
  const parts = [basePath];
  for (const segment of segments) {
    if (typeof segment === 'number') {
      parts.push(`[${segment}]`);
    } else {
      parts.push(segment);
    }
  }
  return parts.join('');
}
