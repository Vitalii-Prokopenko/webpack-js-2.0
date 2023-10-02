// Import of paths to files
const paths = require("./paths");

module.exports = {
  entry: {
    app: paths.src + "/index.js",
  },

  output: {
    filename: "[name].[contenthash].bundle.js",
    path: paths.build,
    clean: true,
  },
};
