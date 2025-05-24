/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/Elite8-Digital-' : '',
  images: {
    unoptimized: true,
  },
}

export default nextConfig

export default nextConfig
