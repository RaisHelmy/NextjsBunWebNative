/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React Native Web support
  webpack: (config, { isServer }) => {
    // Alias react-native to react-native-web
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-native$': require.resolve('react-native-web'),
    };

    // Add web-specific extensions
    config.resolve.extensions = [
      '.web.js',
      '.web.jsx',
      '.web.ts',
      '.web.tsx',
      ...config.resolve.extensions,
    ];

    // Ensure react-native-web modules are transpiled
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
      };
    }

    return config;
  },
  // Enable transpiling of workspace packages
  transpilePackages: ['@my-monorepo/ui', '@my-monorepo/utils', 'react-native-web'],
};

module.exports = nextConfig;
