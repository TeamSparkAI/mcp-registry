import { NextRequest, NextResponse } from 'next/server';
import { RegistryService } from 'mcp-registry-server';
import { FileDataSource } from 'mcp-registry-server';
import path from 'path';

const service = new RegistryService({
  dataSource: new FileDataSource({
    registryPath: path.join(process.cwd(), 'public', 'server-registry.json')
  }),
  basePrefix: '/api/v0'
});

async function handler(request: NextRequest) {
  const url = new URL(request.url);
  const urlPath = url.pathname;
  const method = request.method;

  // Extract query parameters
  const query: Record<string, string> = {};
  url.searchParams.forEach((value, key) => {
    query[key] = value;
  });

  // Get protocol-agnostic result from service
  const result = await service.handleRequest(method, urlPath, query);

  // Convert to NextResponse (enables compression and Next.js features)
  if (result.ok) {
    return NextResponse.json(result.data, { status: result.status });
  } else {
    return NextResponse.json({ error: result.error }, { status: result.status });
  }
}

export { handler as GET, handler as POST };
