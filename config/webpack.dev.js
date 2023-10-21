// Import of plugins
const ESLintPlugin = require('eslint-webpack-plugin');

// Import of webpack merge utility
const { merge } = require('webpack-merge');

// Import of paths
const paths = require('./paths');

// Import of common configuration
const common = require('./webpack.common');

module.exports = merge(common, {
  // Set the mode to development
  mode: 'development',

  // Where webpack outputs the assets and bundles in development mode
  output: {
    filename: '[name].bundle.js',
    path: paths.build,
    clean: true,
    assetModuleFilename: 'assets/[name][ext][query]',
  },

  // Controls how source maps are generated
  devtool: 'eval-source-map',

  // DevServer
  devServer: {
    historyApiFallback: true, // Uses history to serve instead of 404
    open: true, // Tells dev-server to open the browser after server had been started
    compress: true, // Enables gzip compression for everything served
    hot: true, // Enables webpack's Hot Module Replacement feature
    port: 7070, // Specifies a port number to listen for requests on
  },

  // Plugins
  plugins: [new ESLintPlugin()],

  // Style loaders
  module: {
    rules: [
      // Styles: Inject CSS into the head with source maps
      {
        test: /\.(sass|scss|css)$/,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          {
            loader: 'css-loader',
            options: { sourceMap: true, importLoaders: 1, modules: false },
          },
          // Compiles Sass to CSS
          {
            loader: 'sass-loader',
            options: { sourceMap: true },
          },
        ],
      },
    ],
  },
});
