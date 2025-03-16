import createNextIntlPlugin from "next-intl/plugin";
/** @type {import('next').NextConfig} */
const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "15mb",
    },
  },
  images: {
    domains: [process.env.IMAGE_HOST || ""],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default withNextIntl(nextConfig);
