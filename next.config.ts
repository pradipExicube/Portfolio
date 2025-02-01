import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // trailingSlash:true,
  async rewrites() {
    return [
      {
        source: '/home',          // The URL you want to access
        destination: '/',  // The file location in the pages directory
      },
      {
        source: '/homepage',          // The URL you want to access
        destination: '/pages/homepage',  // The file location in the pages directory
      },
      {
        source: '/project',          // The URL you want to access
        destination: '/pages/project',  // The file location in the pages directory
      },
      
    ];
  },
  images: {
    domains: ["drive.usercontent.google.com","upload.wikimedia.org"], // Add external image domains here
  },
};

export default nextConfig;
