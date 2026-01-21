import type { NextConfig } from "next";

type NextConfigWithBuildIgnores = NextConfig & {
  eslint?: {
    ignoreDuringBuilds?: boolean;
  };
  typescript?: {
    ignoreBuildErrors?: boolean;
  };
};

const nextConfig: NextConfigWithBuildIgnores = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  }
};

export default nextConfig;
