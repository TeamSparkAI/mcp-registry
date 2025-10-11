import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TeamSpark MCP Server Catalog',
  description: 'Discover and explore Model Context Protocol servers',
  icons: {
    icon: '/icon.png',
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
        <link rel="icon" href="./icon.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
