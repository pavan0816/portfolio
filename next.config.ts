import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import path from 'path';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
    reactStrictMode: true,
    transpilePackages: ['three'],
    turbopack: {
        root: path.resolve(__dirname),
    },
    images: {
        remotePatterns: [
            { protocol: 'https', hostname: 'cdn.jsdelivr.net' },
            { protocol: 'https', hostname: 'images.unsplash.com' },
            { protocol: 'https', hostname: 'assets.aceternity.com' },
            { protocol: 'https', hostname: 'res.cloudinary.com' },
            { protocol: 'https', hostname: 'img.youtube.com' }
        ],
        formats: ['image/avif', 'image/webp'],
    },
};

export default withNextIntl(nextConfig);
