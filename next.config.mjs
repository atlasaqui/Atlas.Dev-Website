/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [{
      source: '/demos/caderno-ambar/:path*',
      destination: 'https://caderno-ambar.vercel.app/:path*',
      permanent: true,
    }];
  },
};

export default nextConfig;
