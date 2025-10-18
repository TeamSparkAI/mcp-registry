import { createRegistryHandler, FileDataSource } from 'mcp-registry-server';
import path from 'path';

const handler = createRegistryHandler({
  dataSource: new FileDataSource({
    registryPath: path.join(process.cwd(), 'public', 'server-registry.json')
  }),
  basePrefix: '/api/v0'
});

export { handler as GET, handler as POST };

