import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "puppy.instabizweb.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
