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
      },
      // Controls how source maps are generated
  devtool: false,
})