# Webpack 5 Boilerplate

Webpack 5 boilerplate using Babel, Sass and Handlebars.

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
- [`handlebars-loader`](https://www.npmjs.com/package/handlebars-loader/) - Load Handlebars template

### Plugins

- [`clean-webpack-plugin`](https://github.com/johnagan/clean-webpack-plugin) - Remove/clean build folders
- [`html-webpack-plugin`](https://github.com/jantimon/html-webpack-plugin) - Generate HTML files from template
- [`mini-css-extract-plugin`](https://github.com/webpack-contrib/mini-css-extract-plugin) - Extract CSS into separate files
- [`css-minimizer-webpack-plugin`](https://webpack.js.org/plugins/css-minimizer-webpack-plugin/) - Optimize and minimize CSS assets
- [`terser-webpack-plugin`](https://webpack.js.org/plugins/terser-webpack-plugin/) - Minify JS code
- [`image-minimizer-webpack-plugin`](https://webpack.js.org/plugins/image-minimizer-webpack-plugin/) - Minify jpg, png files
- [`imagemin-webp-webpack-plugin`](https://www.npmjs.com/package/imagemin-webp-webpack-plugin) - Converts jpg and png files to webp files

### Linters

- [`eslint`](https://github.com/eslint/eslint) - Enforce styleguide across application
- [`eslint-webpack-plugin`](https://www.npmjs.com/package/eslint-webpack-plugin) - Use eslint to find and fix problems in JS code
- [`eslint-config-airbnb`](https://www.npmjs.com/package/eslint-config-airbnb) - Provide Airbnb's .eslintrc as an extensible shared config
- [`eslint-plugin-import`](https://www.npmjs.com/package/eslint-plugin-import) - support linting of ES2015+ (ES6+) import/export syntax
- [`eslint-import-resolver-webpack`](https://github.com/benmosher/eslint-plugin-import/tree/master/resolvers/webpack) - Throw exceptions for import/export in webpack

## Usage

1. Clone this repo to your computer

```bash
git clone https://github.com/Vitalii-Prokopenko/webpack-js your-project-name
```

2. Create a new empty repo in your github account with `your-project-name`

3. In the new repo go to `Settings` and choose `Actions`, then `General`. In section `Workflow permissions` choose `Read and write permissions` and check the box `Allow GitHub Actions to approve pull requests`

4. Open cloned repo in `VSCode` on your computer and link it to the new repo

```bash
git remote -v
```
The meassage below means the local repo is linked to the `Boilerplate`
```bash
origin  https://github.com/Vitalii-Prokopenko/webpack-js (fetch)
origin  https://github.com/Vitalii-Prokopenko/webpack-js (push) 
```

```bash
git remote set-url origin https://github.com/Vitalii-Prokopenko/test-webpack.git
```

Check again:

```bash
git remote -v
```

If you get the message below, your local repo is now linked to the new empty repo on `GitHub`:

```bash
origin  https://github.com/Vitalii-Prokopenko/your-project-name (fetch)
origin  https://github.com/Vitalii-Prokopenko/your-project-name (push) 
```
Next you push local repo to `GitHub`:

```bash
git branch -M main
git push -u origin main
```

5. Install webpack dependencies on your computer

```bash
npm i
```

6. In `package.json` edit `homepage` by changing `Vitalii-Prokopenko` on `Your-user-name` and `webpack-js` on `your-project-name`.
Then edit script `build` by changing `webpack-js` on `your-project-name`.
Then push a commit to `GitHub` repo.

8. In `GitHub` repo go to `Settings`, choose `Pages`. Go to section `Build and Deployment`, choose branch `gh-pages` and `/(root)`, save.
In few minutes update the page with your repo and get link to the deploy of your project.  

### Development server

```bash
npm start
```

You can view the development server at `localhost:7070`.

### Production build

```bash
npm run build
```

## Author

- [Vitalii Prokopenko](https://www.linkedin.com/in/vitalii-prokopenko-51b012108/)

