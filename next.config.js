// next.config.js
const withTwin = require("./withTwin.js");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
};

module.exports = withTwin(nextConfig);
