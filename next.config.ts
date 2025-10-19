import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Removed 'output: export' to support API routes
  compress: true, // Enable gzip compression for API responses
};

export default nextConfig;
