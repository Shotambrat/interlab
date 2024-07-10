/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["ru", "uz"],
    defaultLocale: "ru",
  },
  images: {
    domains: ['213.230.91.55'],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://213.230.91.55:8100/:path*' // Proxy to Backend
      }
    ]
  }
};

export default nextConfig;