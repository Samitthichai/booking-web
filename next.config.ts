import type { NextConfig } from "next";

const apiUrl = process.env.API_URL;
if (!apiUrl) {
  throw new Error("API_URL is not set. Copy .env.example to .env.local.");
}

const nextConfig: NextConfig = {
  async rewrites() {
    return [{ source: "/api/:path*", destination: `${apiUrl}/api/:path*` }];
  },
};

export default nextConfig;
