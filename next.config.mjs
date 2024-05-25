import createNextIntlPlugin from "next-intl/plugin";
/** @type {import('next').NextConfig} */
const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
  images: {
    domains: [],
  },
};

export default withNextIntl(nextConfig);
