/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/accounting-homepage',
  output: 'export', // <=== enables static exports
  reactStrictMode: true,
};

module.exports = nextConfig;
