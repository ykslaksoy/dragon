import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "cdn.dsmcdn.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "productimages.hepsiburada.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.hepsiburada.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn-s3.pttavm.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.pttavm.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
