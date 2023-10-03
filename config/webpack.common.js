// Import of paths to files
const paths = require("./paths");

// Import plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: paths.src + "/index.js",
  },

  // Common plugins
  plugins: [
    // Generates an HTML file from a template
    new HtmlWebpackPlugin({
      // The title to use for the generated HTML document
      title: "Webpack-js",
      // Webpack relative or absolute path to the template
      template: paths.src + "/template.html",
      // The file to write the HTML to
      filename: "index.html",
    }),
  ],
};
