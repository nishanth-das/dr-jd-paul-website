import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",         // Static export for Cloudflare Pages
  trailingSlash: true,      // Cloudflare Pages prefers trailing slashes
  images: {
    unoptimized: true,      // Required for static export
  },
};

export default nextConfig;
