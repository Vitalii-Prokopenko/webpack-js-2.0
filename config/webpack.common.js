// Import plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

// Import of paths to files
const paths = require('./paths');

module.exports = {
  // Entry point
  entry: {
    app: `${paths.src}/index.js`,
  },

  // Module resolution
  resolve: {
    // Default extensions: no need to mention them
    extensions: ['.js', '.jsx', '.json'],

    // Replace relative paths to files
    alias: {
      '@': paths.src,
      '@js': `${paths.src}/js`,
      '@scss': `${paths.src}/scss`,
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
    // new CopyWebpackPlugin({
    //   patterns: [
    //     { from: `${paths.public}/images`, to: `${paths.static}/images` },
    //     { from: `${paths.public}/data`, to: `${paths.static}/data` },
    //     { from: `${paths.public}/fonts`, to: `${paths.static}/fonts` },
    //   ],
    // }),
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
      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/resource' },

      // Handlebars templates
      { test: /\.handlebars$/, loader: 'handlebars-loader' },
    ],
  },

  // Optimizes js code of installed libraries
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    minimize: true,
    minimizer: [
      // Optimizes assets
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              ['gifsicle', { interlaced: true }],
              ['jpegtran', { progressive: true }],
              ['optipng', { optimizationLevel: 5 }],
              [
                'svgo',
                {
                  plugins: [
                    {
                      name: 'preset-default',
                      params: {
                        overrides: {
                          removeViewBox: false,
                          addAttributesToSVGElement: {
                            params: {
                              attributes: [
                                { xmlns: 'http://www.w3.org/2000/svg' },
                              ],
                            },
                          },
                        },
                      },
                    },
                  ],
                },
              ],
            ],
          },
        },
      }),

      // Transform jpg, png to webp and put 'em to dist
      new ImageminWebpWebpackPlugin(),
    ],
  },

  // Performance
  performance: {
    assetFilter(assetFilename) {
      return assetFilename.endsWith('.ttf');
    },
    hints: 'warning',
    maxAssetSize: 300000,
    maxEntrypointSize: 250000,
  },
};
