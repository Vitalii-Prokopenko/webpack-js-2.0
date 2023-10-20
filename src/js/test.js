import heroImage from '../assets/images/bay.jpg';
import footerImage from '../assets/images/city.png';
import icon from '../assets/icons/icons.svg';

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

const markup = `<h3 class="title">This is a background-image</h3><a href="#" class="social-link"><svg class="link-icon" width="20" height="20"><use href="${icon}#icon-instagram"></use></svg>This is an svg icon</a>`;

app.insertAdjacentHTML('beforeend', markup);
