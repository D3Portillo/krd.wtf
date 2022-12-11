/** @type { import('next').NextConfig } */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        net: false,
        fs: false,
        tls: false,
        console: require.resolve("./lib/mock/console.ts"),
      }
    }
    return config
  },
}

module.exports = nextConfig
