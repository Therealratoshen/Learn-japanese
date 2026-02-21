import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Learn-japanese",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
