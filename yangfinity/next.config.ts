import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
    unoptimized: false,
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);

export const config = {
  matcher: ['/((?!_next|.*\..*).*)']
};
