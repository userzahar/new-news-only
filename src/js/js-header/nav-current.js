const currentPage = window.location.href;
console.log(currentPage);

document.querySelectorAll('#navbar a').forEach(elem => {
  if (elem.getAttribute('href').indexOf(currentPage) !== -1) {
    elem.classList.add('navbar__link--current');
  }
});
