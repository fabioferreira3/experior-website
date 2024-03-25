/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'secure.gravatar.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: '1.gravatar.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: '2.gravatar.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'thumbor.forbes.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
