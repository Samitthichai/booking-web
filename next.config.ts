import type { NextConfig } from "next";

// Proxy /api/* to booking-service so the browser sees one origin (httpOnly cookie, no CORS).
const apiUrl = process.env.API_URL;
if (!apiUrl) {
  throw new Error("API_URL is not set. Copy .env.example to .env.local.");
}
if (!/^https?:\/\/[^/]+/.test(apiUrl)) {
  throw new Error(
    `API_URL must be a full URL like http://localhost:8080 (got "${apiUrl}").`,
  );
}

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${apiUrl.replace(/\/+$/, "")}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
