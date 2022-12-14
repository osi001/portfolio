/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

module.exports = {
  images: {
    domains: [
      "content.api.news",
      "i.pinimg.com",
      "www.clipartmax.com",
      "logospng.org",
      "upload.wikimedia.org",
      "cdn.sanity.io",
    ],
  },
};
