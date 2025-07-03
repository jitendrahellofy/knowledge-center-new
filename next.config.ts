// next.config.ts
import type { NextConfig } from 'next';
import { createMDX } from 'fumadocs-mdx/next';
import path from "path";

const withMDX = createMDX();

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    config.resolve.alias["@"] = path.resolve("src");
    return config;
  },
};

export default withMDX(nextConfig);
