# Webpack 5 Boilerplate

Webpack 5 boilerplate using Babel, Sass and Handlebars and processing xml, csv downloads.

## Installation

Clone this repo and npm install.

```bash
npm i
```

## Usage

### Development server

```bash
npm start
```

You can view the development server at `localhost:7070`.

### Production build

```bash
npm run build
```

## Features

- [Webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [Sass](https://sass-lang.com/)
- [Handlebars](https://handlebarsjs.com/)

## Dependencies

### webpack

- [`webpack`](https://github.com/webpack/webpack) - Module and asset bundler.
- [`webpack-cli`](https://github.com/webpack/webpack-cli) - Command line interface for webpack
- [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) - Development server for webpack
- [`webpack-merge`](https://github.com/survivejs/webpack-merge) - Simplify development/production configuration
- [`cross-env`](https://github.com/kentcdodds/cross-env) - Cross platform configuration

### Babel

- [`@babel/core`](https://www.npmjs.com/package/@babel/core) - Transpile ES6+ to backwards compatible JavaScript
- [`@babel/plugin-proposal-class-properties`](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties) - Use properties directly on a class (an example Babel config)
- [`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env) - Smart defaults for Babel

### Loaders

- [`babel-loader`](https://webpack.js.org/loaders/babel-loader/) - Transpile files with Babel and webpack
- [`sass-loader`](https://webpack.js.org/loaders/sass-loader/) - Load SCSS and compile to CSS
  - [`sass`](https://www.npmjs.com/package/sass) - Node Sass
- [`css-loader`](https://webpack.js.org/loaders/css-loader/) - Resolve CSS imports
- [`style-loader`](https://webpack.js.org/loaders/style-loader/) - Inject CSS into the DOM
- [`csv-loader`](https://www.npmjs.com/package/csv-loader/) - Allow downloading csv-files
- [`xml-loader`](https://www.npmjs.com/package/xml-loader/) - Allow downloading xml-files
- [`handlebars-loader`](https://www.npmjs.com/package/handlebars-loader/) - Load Handlebars template

### Plugins

- [`clean-webpack-plugin`](https://github.com/johnagan/clean-webpack-plugin) - Remove/clean build folders
- [`copy-webpack-plugin`](https://github.com/webpack-contrib/copy-webpack-plugin) - Copy files to build directory
- [`html-webpack-plugin`](https://github.com/jantimon/html-webpack-plugin) - Generate HTML files from template
- [`mini-css-extract-plugin`](https://github.com/webpack-contrib/mini-css-extract-plugin) - Extract CSS into separate files
- [`css-minimizer-webpack-plugin`](https://webpack.js.org/plugins/css-minimizer-webpack-plugin/) - Optimize and minimize CSS assets
- [`terser-webpack-plugin`](https://webpack.js.org/plugins/terser-webpack-plugin/) - Minify JS code

### Linters

- [`eslint`](https://github.com/eslint/eslint) - Enforce styleguide across application
- [`eslint-webpack-plugin`](https://www.npmjs.com/package/eslint-webpack-plugin) - Use eslint to find and fix problems in JS code
- [`eslint-config-airbnb`](https://www.npmjs.com/package/eslint-config-airbnb) - Provide Airbnb's .eslintrc as an extensible shared config
- [`eslint-plugin-import`](https://www.npmjs.com/package/eslint-plugin-import) - support linting of ES2015+ (ES6+) import/export syntax
- [`eslint-import-resolver-webpack`](https://github.com/benmosher/eslint-plugin-import/tree/master/resolvers/webpack) - Throw exceptions for import/export in webpack

## Author

- [Vitalii Prokopenko](https://www.linkedin.com/in/vitalii-prokopenko-51b012108/)

