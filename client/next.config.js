/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'localhost',
      'source.unsplash.com',
      'images.unsplash.com',
      'images.pexels.com',
      'res.cloudinary.com'
    ]
  },
  i18n: {
    locales: ['de', 'it'],
    defaultLocale: 'de'
  }
};

module.exports = nextConfig;
