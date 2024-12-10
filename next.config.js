/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: ["image.tmdb.org"],
  },
  env: {
    MOVIE_API_KEY: process.env.MOVIE_API_KEY
  }
};
