cat > next.config.mjs << EOF
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Force SWC to use JavaScript fallback/Node.js-compatible version
  // This is required for environments like Termux where the native SWC binary is unavailable.
  swcMinify: true,
  compiler: {
    // Disable native SWC downloads
    emotion: false,
    styledComponents: false,
  },
  webpack: (config, { isServer }) => {
    // Ensure Node-style resolution for dependencies that might cause issues in Termux
    if (!isServer) {
        config.resolve.fallback = { fs: false, path: false };
    }
    return config;
  },
};

export default nextConfig;
EOF
