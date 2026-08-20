import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow dev assets to be served through the Cloudflare quick tunnel
  allowedDevOrigins: ["*.trycloudflare.com"],
};

export default nextConfig;
