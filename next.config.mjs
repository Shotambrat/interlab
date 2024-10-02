import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['213.230.91.55', 'cdn.sanity.io'], // Add 'cdn.sanity.io' to allowed image domains
  },
};

export default withNextIntl(nextConfig);
