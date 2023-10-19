import '@scss/main.scss';

import heroImage from './assets/images/bay.jpg';
import footerImage from './assets/images/city.png';

const heroText = document.createElement('p');
heroText.textContent = 'This is a jpg image';

const hero = document.createElement('img');
hero.src = heroImage;
hero.width = 400;

const footerText = document.createElement('p');
footerText.textContent = 'This is a png image';

const footer = document.createElement('img');
footer.src = footerImage;
footer.width = 400;

const app = document.querySelector('#root');
app.append(heroText, hero, footerText, footer);
