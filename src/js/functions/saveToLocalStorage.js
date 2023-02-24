
import { refs } from '../refs';

let readNews;
let fromLS = localStorage.getItem('read-news');
if (fromLS) {
  readNews = JSON.parse(fromLS);
} else readNews = [];
export { readNews };




export function toLS(e) {
  // console.log('lols', e.target.className);
  if (e.target.className !== 'gallery__link') {
    return;
  }


  const readObj = {
    alt: e.target.parentNode.parentNode.childNodes[1].children[1].alt,
    header: e.target.parentNode.parentNode.childNodes[3].textContent,
    src: e.target.parentNode.parentNode.childNodes[1].children[1].src,
    text: e.target.parentNode.parentNode.childNodes[5].textContent,
    link: e.target.href,
    readDate: getUserTime(),
  };

  // console.log('readObj', readObj);
  checkIfSaved(readObj);
  readNews.push(readObj);
  // console.log('readNews after push', readNews);
  const LSReadNewsJSON = JSON.stringify(readNews);

  localStorage.setItem('read-news', LSReadNewsJSON);

  function getUserTime(t = new Date()) {
    let Y = t.getFullYear();
    let M = addLeadingZero(t.getMonth() + 1);
    let D = addLeadingZero(t.getDate());
    return `${D}/${M}/${Y}`;
  }
  function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
  }

  function checkIfSaved(readObj) {
    readNews.map((el, currentIndex) => {
      if (readObj.src === el.src) {
        return readNews.splice(currentIndex, 1);
      }
      return;
    });
  }
}
