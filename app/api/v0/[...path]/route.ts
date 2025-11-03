import { NextRequest, NextResponse } from 'next/server';
import { RegistryService } from '@teamsparkai/mcp-registry-server';
import { FileDataSource } from '@teamsparkai/mcp-registry-server';
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
  const headers = new Headers();
  headers.set('Access-Control-Allow-Origin', '*');
  headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  headers.set('Access-Control-Allow-Headers', 'Content-Type');
  
  if (result.ok) {
    return NextResponse.json(result.data, { status: result.status, headers });
  } else {
    return NextResponse.json({ error: result.error }, { status: result.status, headers });
  }
}

export { handler as GET, handler as POST };

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
