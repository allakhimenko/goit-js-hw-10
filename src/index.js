import items from './menu.json';
import markup from './template/markup.hbs';
import  './sass/main.scss';


const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

const bodyBg = document.querySelector('body');
const listMenu = document.querySelector('.js-menu');
const btnTheme = document.querySelector('#theme-switch-toggle');

const createCardsMarkUp = items.map(markup).join('')

listMenu.insertAdjacentHTML('afterBegin', createCardsMarkUp);

const currentBodyBg = localStorage.getItem('currentTheme');

if (currentBodyBg === Theme.DARK) {
    btnTheme.checked = true
    bodyBg.classList.add(Theme.DARK)
}
else {
    btnTheme.checked = false
    bodyBg.classList.add(Theme.LIGHT)
}

btnTheme.addEventListener('change', onBtnThemeClick);

function onBtnThemeClick() {
    if (bodyBg.classList.value === Theme.LIGHT) {
        bodyBg.classList.toggle(Theme.DARK)
        bodyBg.classList.toggle(Theme.LIGHT)

        localStorage.setItem('currentTheme', bodyBg.classList.value)
    } else {
        bodyBg.classList.toggle(Theme.DARK)
        bodyBg.classList.toggle(Theme.LIGHT)

        localStorage.setItem('currentTheme', bodyBg.classList.value)
    }
}