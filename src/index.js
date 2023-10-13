import logoImage from '@images/logo/logo.png';
import webpackLogoImage from '@images/logo/webpack-logo.png';
import '@scss/main.scss';

// import dataXml from '@data/data.xml';
// import dataCsv from '@data/data.csv';

console.log('Hello world!');
console.log('Hello everybody!');
// console.log(dataXml);
// console.log(dataCsv);

// Create logo
const logo = document.createElement('img');
logo.src = logoImage;

// Create heading node
const heading = document.createElement('h1');
heading.textContent = 'Webpack 5 Boilerplate';

// Create webpack logo
const webpackLogo = document.createElement('img');
webpackLogo.src = webpackLogoImage;

// Append heading node to the DOM
const app = document.querySelector('#root');
app.append(logo, heading, webpackLogo);
