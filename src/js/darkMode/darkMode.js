import { refs } from '../refs/refs';

const changeThemeBtn = document.querySelectorAll('.switch-checkbox');
const bodyTheme = document.querySelector('body');
const themeDarkEl = document.querySelector('.theme__dark');
const themeLightEl = document.querySelector('.theme__light');

[...changeThemeBtn].map(btn => btn.addEventListener('click', changeTheme));

function changeTheme() {
  bodyTheme.classList.toggle('darkMode');
  themeDarkEl.classList.toggle('opacityForDark');
  themeLightEl.classList.toggle('opacityForDark');

  if (localStorage.getItem('theme') !== 'dark') {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.removeItem('theme');
  }
}

function addDarkClassToHTML() {
  try {
    if (localStorage.getItem('theme') === 'dark') {
      bodyTheme.classList.add('darkMode');
      changeThemeBtn.checked = true;
    }
  } catch (err) {}
}

addDarkClassToHTML();
