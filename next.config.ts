import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ranisahab.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
