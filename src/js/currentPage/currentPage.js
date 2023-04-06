function highlightCurrentPage() {
  let currentPageIsFound = false;

  const navLinks = document.querySelectorAll('.nav__link');
  const pageURL = document.URL;

  navLinks.forEach(link => {
    const isCurrentPage = pageURL.includes(link.pathname);
    if (isCurrentPage) {
      link.classList.add('nav__link--current');
      currentPageIsFound = true;
    }
  });

  !currentPageIsFound &&
    document
      .querySelector('.nav__link[href*="/index.html"]')
      .classList.add('nav__link--current');
}

highlightCurrentPage();
