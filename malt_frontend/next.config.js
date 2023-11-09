/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/photo-1619410283995-43d9134e7656',
      },
    ],
  },
};

module.exports = nextConfig;
