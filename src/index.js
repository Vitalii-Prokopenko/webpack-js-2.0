import wallpaperImage from '@images/wallpaper.jpg';
import '@scss/main.scss';
import dataXml from "@data/data.xml";
import dataCsv from "@data/data.csv";

console.log('Hello world!');
console.log('Hello everybody!');
console.log(dataXml);
console.log(dataCsv);


// Create heading node
const heading = document.createElement('h1')
heading.textContent = 'Hello world! Hello everybody!'

// Create image
const wallpaper = document.createElement('img')
wallpaper.src = wallpaperImage;

// Append heading node to the DOM
const app = document.querySelector('#root')
app.append(heading, wallpaper)