import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs/config";
import { getSecurityHeaders } from "./src/lib/security/headers";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  allowedDevOrigins: ["127.0.0.1"],
  async headers() {
    const productionHttps = process.env.NODE_ENV === "production" && process.env.VERCEL === "1";
    return [{ source: "/:path*", headers: getSecurityHeaders(productionHttps) }];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default withSentryConfig(nextConfig, { silent: true });
