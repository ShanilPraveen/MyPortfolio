import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**", // allow all paths under Cloudinary
      },
    ],
    // For older Next.js versions you can use:
    // domains: ["res.cloudinary.com"],
  },
};

export default nextConfig;
