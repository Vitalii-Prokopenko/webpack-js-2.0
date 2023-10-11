// Import plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// Import of paths to files
const paths = require('./paths');

module.exports = {
  entry: {
    app: `${paths.src}/index.js`, // Entry point of app
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json'], // Default extensions: no need to mention them
    alias: {
      // Replace relative paths to files
      '@data': `${paths.public}/data`,
      '@fonts': `${paths.public}/fonts`,
      '@images': `${paths.public}/images`,
      '@components': `${paths.src}/components`,
      '@js': `${paths.src}/js`,
      '@scss': `${paths.src}/scss`,
      '@': paths.src,
    },
  },

  // Common plugins
  plugins: [
    // Generates an HTML file from a template
    new HtmlWebpackPlugin({
      title: 'Webpack-js', // The title to use for the generated HTML document
      template: `${paths.src}/template.html`, // Webpack relative or absolute path to the template
      filename: 'index.html', // The file to write the HTML to
    }),
    // Cleans the dist folder before new run
    new CleanWebpackPlugin(),
    // Copies static files to the dist folder
    new CopyWebpackPlugin({
      patterns: [
        { from: `${paths.public}/images`, to: `${paths.static}/images` },
        { from: `${paths.public}/data`, to: `${paths.static}/data` },
        { from: `${paths.public}/fonts`, to: `${paths.static}/fonts` },
      ],
    }),
  ],

  module: {
  // Rules
    rules: [
      // JavaScript: Use Babel to transpile JavaScript files
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { targets: 'defaults' }]],
          },
        },
      },
      // Images: Copy image files to build folder
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },
      // Fonts and SVGs: Inline files
      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' },
      // XML data
      { test: /\.xml$/, use: ['xml-loader'] },
      // CSV data
      {
        test: /\.csv$/,
        loader: 'csv-loader',
        options: {
          dynamicTyping: true,
          header: true,
          skipEmptyLines: true,
        },
      },
      // Handlebars templates
      { test: /\.handlebars$/, loader: 'handlebars-loader' },
    ],
  },
  // Optimizes js code of installed libraries
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
