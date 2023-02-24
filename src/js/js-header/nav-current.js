
function underlineCurrentPage() {
  let currentPageIsFound = false;

  const navLinks = document.querySelectorAll('.navbar__link');
  // console.log(navLinks);
  const pageURL = document.URL;
  // console.log(pageURL);

  navLinks.forEach(link => {
    const isCurrentPage = pageURL.includes(link.pathname);
    if (isCurrentPage) {
      link.classList.add('navbar__link--current');
      currentPageIsFound = true;
    }
  });

  !currentPageIsFound &&
    document
      .querySelector('.navbar__link[href*="/index.html"]')
      .classList.add('navbar__link--current');
}

underlineCurrentPage();
