import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{
      hostname: "images.pexels.com"
    }, 
    {
      hostname: "github.com"
    }],
  },
};

export default nextConfig;
