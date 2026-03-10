import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    resolveAlias: {
      "@": "./src",
      "@public": "./public",
    },
  },
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
