// Paths to files
const path = require('path');

module.exports = {
  // Where webpack should find source files to build bundle
  src: path.resolve(__dirname, '../src'),

  // Where webpack should emit bundle
  build: path.resolve(__dirname, '../dist'),

  // Where webpack should get static files copied to build folder
  assets: path.resolve(__dirname, '../src/assets'),

  // Where webpack should put static files copied from public folder
  buildAssets: path.resolve(__dirname, '../dist/assets'),
};
