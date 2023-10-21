// Paths to files
const path = require('path');

module.exports = {
  // Where webpack should find source files to build bundle
  src: path.resolve(__dirname, '../src'),

  // Where webpack should emit bundle
  build: path.resolve(__dirname, '../dist'),
};
