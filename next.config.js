/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  publicRuntimeConfig: {
    staticFolder: '/public',
  },
};

const withImages = require('next-images');

module.exports = withImages(nextConfig);