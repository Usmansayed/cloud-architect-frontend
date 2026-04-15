/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    NEXT_PROJECT_URL: process.env.NEXT_PROJECT_URL,
    NEXT_PUBLIC_KEY: process.env.NEXT_PUBLIC_KEY,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
