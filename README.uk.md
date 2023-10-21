# Шаблон Webpack 5

Шаблон Webpack 5 з використанням `Babel`, `Sass`, `Handlebars`.

## Особливості

- [Webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [Sass](https://sass-lang.com/)
- [Handlebars](https://handlebarsjs.com/)

## Залежності

### webpack

- [`webpack`](https://github.com/webpack/webpack) - Збиральник модульів та статичних файлів.
- [`webpack-cli`](https://github.com/webpack/webpack-cli) - Інтерфейс командного рядка `Webpack`
- [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) - Сервер розробки для `Webpack`
- [`webpack-merge`](https://github.com/survivejs/webpack-merge) - Спрощує конфігурацію для `development` і `production`
- [`cross-env`](https://github.com/kentcdodds/cross-env) - Кросплатформна конфігурація

### Babel

- [`@babel/core`](https://www.npmjs.com/package/@babel/core) - Транспіляція `ES6+` в старіші версії `JavaScript`
- [`@babel/plugin-proposal-class-properties`](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties) - Використовує властивості на класах (приклад конфігурації для `Babel`)
- [`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env) - Дефолтні налаштування для `Babel`

### Loaders (завантажувачі)

- [`babel-loader`](https://webpack.js.org/loaders/babel-loader/) - транспіляція файлів з `Babel` і `Webpack`
- [`sass-loader`](https://webpack.js.org/loaders/sass-loader/) - завантаження `SCSS` і компіляція в `CSS`
  - [`sass`](https://www.npmjs.com/package/sass) - Node Sass
- [`css-loader`](https://webpack.js.org/loaders/css-loader/) - реалізація імпортів `CSS`
- [`style-loader`](https://webpack.js.org/loaders/style-loader/) - додавання `CSS` в `DOM`
- [`handlebars-loader`](https://www.npmjs.com/package/handlebars-loader/) - завантаження шаблонів `Handlebars`

### Plugins (плагіни)

- [`clean-webpack-plugin`](https://github.com/johnagan/clean-webpack-plugin) - видаляє/очищує вміст дииректорії `build`
- [`copy-webpack-plugin`](https://github.com/webpack-contrib/copy-webpack-plugin) - копіює файли в директорію `build`
- [`html-webpack-plugin`](https://github.com/jantimon/html-webpack-plugin) - генерує `HTML`-файли з шаблонів
- [`mini-css-extract-plugin`](https://github.com/webpack-contrib/mini-css-extract-plugin) - виділяє `CSS` в окремі файли
- [`css-minimizer-webpack-plugin`](https://webpack.js.org/plugins/css-minimizer-webpack-plugin/) - оптимізує і мінімізує `CSS` файли
- [`terser-webpack-plugin`](https://webpack.js.org/plugins/terser-webpack-plugin/) - мінімізує `JS` код
- [`image-minimizer-webpack-plugin`](https://webpack.js.org/plugins/image-minimizer-webpack-plugin/) - мініфікує `jpg`, `png` файли
- [`imagemin-webp-webpack-plugin`](https://www.npmjs.com/package/imagemin-webp-webpack-plugin) - конвертує `jpg` та `png` файли у `webp` файли та переносить їх в `dist`

### Linters (лінтери)

- [`eslint`](https://github.com/eslint/eslint) - застосовує стилі у всьому додатку
- [`eslint-webpack-plugin`](https://www.npmjs.com/package/eslint-webpack-plugin) - використовує `Eslint` для знаходження та виправлення помилок в `JS` коді
- [`eslint-config-airbnb`](https://www.npmjs.com/package/eslint-config-airbnb) - запускає `Airbnb`'s `.eslintrc` як розширювану спільну конфігурацію налаштувань для перевірки коду
- [`eslint-plugin-import`](https://www.npmjs.com/package/eslint-plugin-import) - підтримує перевірку синтаксису імпортів/експортів для `ES2015+` (`ES6+`)
- [`eslint-import-resolver-webpack`](https://github.com/benmosher/eslint-plugin-import/tree/master/resolvers/webpack) - запускає виключення для імортів/експортів в `Webpack`

## Використання

1. Зклонуй цей репозиторій-шаблон на свій комп'ютер

```bash
git clone https://github.com/Vitalii-Prokopenko/webpack-js your-project-name
```

2. Створи новий пустий репозиторій в своєму аккаунті на `GitHub` з назвою `your-project-name`

3. В новому репозиторії перейди до налаштувань `Settings` і обери `Actions`, потім `General`. В секції `Workflow permissions` обери `Read and write permissions` та відміть чек-бокс `Allow GitHub Actions to approve pull requests`

4. Відкрий зклонований репозиторій-шаблон в `VSCode` на своєму комп'ютері та зв'яжи його з новим пустоим репозиторієм на `GitHub`

```bash
git remote -v
```
Повідомлення нижче означає, що локальний проект зв'язаний на даний момент з репозиторієм-шаблоном
```bash
origin  https://github.com/Vitalii-Prokopenko/webpack-js (fetch)
origin  https://github.com/Vitalii-Prokopenko/webpack-js (push) 
```

```bash
git remote set-url origin https://github.com/Vitalii-Prokopenko/test-webpack.git
```

Зроби повторну перевірку:

```bash
git remote -v
```

Якщо отримав повідомлення нижче, твій локальний репозиторій тепер пов'язаний з новим репозиторієм на `GitHub`:

```bash
origin  https://github.com/Vitalii-Prokopenko/your-project-name (fetch)
origin  https://github.com/Vitalii-Prokopenko/your-project-name (push) 
```

Далі закинь локальний репозиторій на `GitHub`:

```bash
git branch -M main
git push -u origin main
```

5. Встанови залежності `Webpack` на своєму комп'ютері

```bash
npm i
```

6. В `package.json` відредагуй `homepage`, замінивши `Vitalii-Prokopenko` на `Your-user-name` і `webpack-js` на `your-project-name`.
Далі запуш комміт на `GitHub` репозиторій.

8. В `GitHub` репозиторії перейди до налаштувань `Settings`, обери `Pages`. Перейди в секцію `Build and Deployment`, обери гілку `gh-pages` і `/(root)`, збережи налаштування.
Через декілька хвилин оновити сторінку в браузері і отримай посилання на деплой свого проекту.  

### Development server (сервер розробки)

```bash
npm start
```

Можеш переглянути сервер розробки в `localhost:7070`.

### Production build (побудова проекту в режимі продакшн)

```bash
npm run build
```

## Автор

- [Vitalii Prokopenko](https://www.linkedin.com/in/vitalii-prokopenko-51b012108/)
