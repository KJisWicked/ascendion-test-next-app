import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

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

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
