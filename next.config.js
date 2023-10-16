/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "images.unsplash.com",
      "www.indianespace.in",
      "127.0.0.1",
      "indianespace.in/panel3/jawai/jawaibackend",
    ],
  },
  env: {
    ImagebaseUrl: "https://www.indianespace.in/panel3/jawai/jawaibackend/",
    baseUrl: "https://www.indianespace.in/panel3/jawai/",
  },
};

module.exports = nextConfig;
