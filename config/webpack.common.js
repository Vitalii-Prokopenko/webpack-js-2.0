// Import plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// Import of paths to files
const paths = require('./paths');

// const isDev = process.env.NODE_ENV === 'development';
// const isProd = !isDev;

module.exports = {
  entry: {
    app: `${paths.src}/index.js`,
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
    new HtmlWebpackPlugin({
      // Generates an HTML file from a template
      title: 'Webpack-js', // The title to use for the generated HTML document
      template: `${paths.src}/template.html`, // Webpack relative or absolute path to the template
      filename: 'index.html', // The file to write the HTML to
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { from: `${paths.public}/images`, to: `${paths.static}/images` },
        { from: `${paths.public}/data`, to: `${paths.static}/data` },
        { from: `${paths.public}/fonts`, to: `${paths.static}/fonts` },
      ],
    }),
  ],
  // Rules
  module: {
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
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
