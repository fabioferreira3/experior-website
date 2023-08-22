/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      // "[yourapp].wpengine.com" (Update this to be your Wordpress application name in order to load images connected to your posts)
      "localhost",
      "secure.gravatar.com",
      "1.gravatar.com",
      "2.gravatar.com",
      "thumbor.forbes.com",
      "media.licdn.com",
    ],
  },
};

module.exports = nextConfig;
