import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "cdn.thewirecutter.com",
      "zshop.vn",
      "m.media-amazon.com",
      "seve7.vn",
      "www.energysistem.com",
      "dlcdnwebimgs.asus.com",
      "arcticfox.com",
      "image.made-in-china.com",
      "hanoicomputercdn.com",
    ], // 👈 add image domains
  },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
