/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/ziterz/**',
      },
      {
        protocol: 'https',
        hostname: 'nextui-docs-v2.vercel.app',
        port: '',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'app.requestly.io',
        port: '',
        pathname: '/delay/**',
      },
    ],
  },
};

export default nextConfig;
