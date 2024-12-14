import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,  // Disable ESLint checks during the build
  },
};


module.exports = {
  eslint: {
    ignoreDuringBuilds: true,  // Disable ESLint checks during the build
  },
};
export default nextConfig;
