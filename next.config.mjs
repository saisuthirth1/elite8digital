/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/elite8digital' : '',
  images: {
    unoptimized: true,
  },
}

export default nextConfig