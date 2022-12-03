/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com']
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://gateway.pinata.cloud/ipfs/:path*',
      },
    ]
  },
};

module.exports = nextConfig;
