// Import of paths
const paths = require('./paths');

// Import of common configuration
const common = require("./webpack.common");

// Import of webpack merge utility
const { merge } = require("webpack-merge");

module.exports = merge(common, {
    mode: 'development',
    output: {
        filename: "[name].bundle.js",
        path: paths.build,
        clean: true,
      },
})