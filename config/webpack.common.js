// Import of paths to files
const paths = require("./paths");

// Import plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const Papaparse = require("papaparse");

module.exports = {
  entry: {
    app: paths.src + "/index.js",
  },

  // Common plugins
  plugins: [
    // Generates an HTML file from a template
    new HtmlWebpackPlugin({
      title: "Webpack-js", // The title to use for the generated HTML document
      template: paths.src + "/template.html", // Webpack relative or absolute path to the template
      filename: "index.html", // The file to write the HTML to
    }),
    new CleanWebpackPlugin(),
  ],
  // Rules
  module: {
    rules: [
      // JavaScript: Use Babel to transpile JavaScript files
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
      // Images: Copy image files to build folder
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: "asset/resource" },

      // Fonts and SVGs: Inline files
      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: "asset/inline" },
      // XML data
      { test: /\.xml$/, use: ["xml-loader"] },
      // CSV data
      {
        test: /\.csv$/,
        loader: "csv-loader",
        options: {
          dynamicTyping: true,
          header: true,
          skipEmptyLines: true,
        },
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
