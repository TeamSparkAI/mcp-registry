import type { Metadata } from 'next';
import './globals.css';
import { getResourcePath } from './utils/paths';

export const metadata: Metadata = {
  title: 'TeamSpark MCP Server Catalog',
  description: 'Discover and explore Model Context Protocol servers',
  icons: {
    icon: getResourcePath('/icon.png'),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={getResourcePath('/icon.png')} />
      </head>
      <body>{children}</body>
    </html>
  );
}
