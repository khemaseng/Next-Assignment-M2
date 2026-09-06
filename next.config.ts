import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.shadcnspace.com" },
      { protocol: "https", hostname: "sombobaeb.cheat.casa" },
    ],
  },
};

export default nextConfig;
