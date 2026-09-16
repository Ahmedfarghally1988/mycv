/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/mycvfd",
  assetPrefix: "/mycvfd/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
