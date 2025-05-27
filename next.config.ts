import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // !! Dangerously allow production builds to successfully complete even if your project has type errors.
  // !! Enable to true, if want to bypass for production builds
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  serverExternalPackages: ["pino", "pino-pretty"],
};

export default nextConfig;
