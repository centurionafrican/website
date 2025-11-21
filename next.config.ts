import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
    i18n: {
    locales: ["en", "pt", "fr", "es"],
    defaultLocale: "en",
  },
};

export default nextConfig;
