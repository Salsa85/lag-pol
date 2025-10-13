/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove static export for Plesk deployment
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Remove GitHub Pages specific settings
}

module.exports = nextConfig
