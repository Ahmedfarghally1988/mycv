/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/mycv",
  assetPrefix: "/mycv/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
