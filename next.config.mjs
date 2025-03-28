/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Replace 'portfolio_website' with your actual repository name
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio_website' : '',
  assetPrefix: process.env
};

export default nextConfig;