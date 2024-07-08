/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["ru", "uz"],
    defaultLocale: "ru",
  },
  images: {
    domains: ['213.230.91.55'],
  },
};

export default nextConfig;