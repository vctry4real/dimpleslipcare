import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "standalone",
  // Include files from the monorepo root (packages/types etc.) in the trace
  outputFileTracingRoot: path.join(__dirname, "../../"),
};

export default nextConfig;
