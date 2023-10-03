// Import of paths
const paths = require('./paths');

// Import of common configuration
const common = require("./webpack.common");

// Import of webpack merge utility
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  // Set the mode to development  
  mode: 'development',
  // Where webpack outputs the assets and bundles in development mode
    output: {
        filename: "[name].bundle.js",
        path: paths.build,
        clean: true,
      },
      // Control how source maps are generated
  devtool: 'eval-source-map',
  devServer: {
    // Uses history to serve instead of 404
    historyApiFallback: true,
    // Tells dev-server to open the browser after server had been started
    open: true,
    // Enables gzip compression for everything served
    compress: true,
    // Enables webpack's Hot Module Replacement feature
    hot: true,
    // Specifies a port number to listen for requests on
    port: 7070,
  }
})