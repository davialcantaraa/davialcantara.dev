/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'i.pinimg.com',
      'backend.mintables.club',
      'ipfs.io',
      'res.cloudinary.com',
    ],
  },
};

module.exports = nextConfig;
