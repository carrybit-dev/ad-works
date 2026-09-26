import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Built-in optimization is on (Vercel supports it natively).
    // Remote pattern covers YouTube thumbnails used by the video scanner.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        pathname: "/vi/**",
      },
    ],
  },
};

export default nextConfig;
