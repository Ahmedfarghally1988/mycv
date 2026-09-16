/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/mycv",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
