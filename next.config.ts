import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me',
      },
      {
        protocol: 'https',
        hostname: 'hostnin.com',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
      },
      
    ],
  },
  async rewrites() {
    return [
      {
        source: '/web-hosting',
        destination: '/web-hosting', 
      },
      {
        source: '/contact',
        destination: '/about/contact', 
      },
    ];
  },
};

export default nextConfig;
