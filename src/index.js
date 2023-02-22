const li = document.querySelector('.pag__child');

async function getData(page = 1) {
  const response = await fetch(
    `https://pixabay.com/api/?key=33289628-97fffc14136600725dd3f07c9&q=dog&page=${page}`
  );
  const data = await response.json();

  return data;
}

async function pagination(dataObj) {
  const data = await dataObj;
  const { totalHits, hits } = await data;
  const totalPages = (await totalHits) / (await hits.length);

  function renderLi(totalPges) {
    console.log('🚀 ~ totalPages', totalPages);

    for (let i = 1; i <= totalPages; i += 1) {
      li.insertAdjacentHTML('afterend', `<li>${i}</li>`);
    }
  }
  renderLi(totalPages);
  // function activeButton() {}
  // function changePage() {}
}
pagination(getData());
