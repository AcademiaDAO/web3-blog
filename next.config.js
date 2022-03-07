/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";
const withOptimizedImages = require("next-optimized-images");

const nextConfig = withOptimizedImages({
  reactStrictMode: true,
  assetPrefix: isProd ? "/web3-blog/" : "",
})

module.exports = nextConfig
