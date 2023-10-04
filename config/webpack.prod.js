const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Import of paths
const paths = require('./paths');

// Import of common configuration
const common = require("./webpack.common");

// Import of webpack merge utility
const { merge } = require("webpack-merge");
const { NoEmitOnErrorsPlugin } = require('webpack');

module.exports = merge(common, {
  // Set the mode to production
    mode: "production",
    // Where webpack outputs the assets and bundles in production mode
    output: {
        filename: "[name].[contenthash].bundle.js",
        path: paths.build,
        clean: true,
        assetModuleFilename: "assets/[name].[contenthash][ext][query]"
      },
      // Controls how source maps are generated
  devtool: false,
  module: {
    rules: [
      {
        test: /\.(sass|scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            // options: {
            //   importLoaders: 2,
            //   sourceMap: false,
            //   modules: false,
            // },
          },          
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin()
  ]
})