import {
  openMenuBtn,
  mobileMenu,
  closeMenuBtn,
  themeContainer,
  seachBtn,
} from './refs-header';

function toggleMenu() {
  mobileMenu.classList.toggle('open-menu');
  const isMenuOpen =
    openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
  openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);

  const scrollLockMethod = !isMenuOpen
    ? 'disableBodyScroll'
    : 'enableBodyScroll';
  bodyScrollLock[scrollLockMethod](document.body);
}

openMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);
