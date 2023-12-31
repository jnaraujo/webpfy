const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Cross-Origin-Embedder-Policy",
            value: "require-corp",
          },
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },
        ],
      },
    ];
  },
  webpack: (config) => {
    // Ensure "require" has a higher priority when matching export conditions.
    // https://webpack.js.org/configuration/resolve/#resolveconditionnames
    config.resolve.conditionNames = ["require"];

    config.optimization.minimizer.push(
      new CssMinimizerPlugin({
        minify: CssMinimizerPlugin.lightningCssMinify,
      }),
    );

    return config;
  },
  compress: false,
};

module.exports = nextConfig;
