/** @type {import('next').NextConfig} */
const nextConfig = {
  // CRITICAL FIX FOR TERMUX/ANDROID ARM64:
  // FORCE Next.js to use the pure JavaScript transformer fallback, 
  // skipping the attempt to load the native ARM64 binary entirely.
  experimental: {
    forceSwcTransforms: true,
  },
  
  swcMinify: true,
  compiler: {
    styledComponents: false,
    emotion: false,
  },

  webpack: (config, { isServer }) => {
    if (!isServer) {
        config.resolve.fallback = { fs: false, path: false };
    }
    return config;
  },
};

export default nextConfig;
