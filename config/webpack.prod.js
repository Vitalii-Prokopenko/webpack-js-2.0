const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

// Import of paths
const paths = require("./paths");

// Import of common configuration
const common = require("./webpack.common");

// Import of webpack merge utility
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  // Set the mode to production
  mode: "production",
  // Where webpack outputs the assets and bundles in production mode
  output: {
    filename: "[name].[contenthash].bundle.js",
    path: paths.build,
    clean: true,
    assetModuleFilename: "assets/[name].[contenthash][ext][query]",
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
            loader: "css-loader",
            // options: {
            //   importLoaders: 2,
            //   sourceMap: false,
            //   modules: false,
            // },
          },
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles/[name].[contenthash].css",
    }),
  ],
  // Minifies css in production mode
  optimization: {
    minimize: true, // Tells webpack to minimize the bundle using the plugin specified in minimizer
    minimizer: [
      new CssMinimizerPlugin(), // Allows to override the default minimizer by providing a different one or more customized TerserPlugin instances
      // Minimizes js code
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
      }),
    ],
  },
});
