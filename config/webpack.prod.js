// Import of plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

// Import of webpack merge utility
const { merge } = require('webpack-merge');

// Import of paths
const paths = require('./paths');

// Import of common configuration
const common = require('./webpack.common');

module.exports = merge(common, {
  // Set the mode to production
  mode: 'production',

  // Where webpack outputs the assets and bundles in production mode
  output: {
    path: paths.build,
    filename: '[name].[contenthash].bundle.js',
    assetModuleFilename: 'assets/[name].[contenthash][ext][query]',
    clean: true,
  },

  // Controls how source maps are generated
  devtool: false,

  // Style rules
  module: {
    rules: [
      {
        test: /\.(sass|scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { importLoaders: 2, sourceMap: false, modules: false },
          },
          'sass-loader',
        ],
      },
    ],
  },

  // Plugins
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash].css',
    }),
  ],

  // Minifies css in production mode
  optimization: {
    // Tells webpack to minimize the bundle using the plugin specified in minimizer
    minimize: true,
    minimizer: [
      // Minimizes css
      new CssMinimizerPlugin(),
      // Minimizes js code
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
      }),
    ],
  },

  // Performance
  performance: {
    hints: false,
    maxAssetSize: 900000,
    maxEntrypointSize: 900000,
  },
});
