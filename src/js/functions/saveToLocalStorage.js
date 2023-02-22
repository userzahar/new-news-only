
let readNews;
let fromLS = localStorage.getItem('read-news');
if (fromLS) {
  readNews = JSON.parse(fromLS);
} else readNews = [];
export {readNews}




export function toLS(e) {
  
  if (e.target.nodeName !== 'A') {
    return;
  }
  
  const readObj = {
    alt: e.target.parentNode.parentNode.childNodes[1].children[1].alt,
    header: e.target.parentNode.parentNode.childNodes[3].textContent,
    src: e.target.parentNode.parentNode.childNodes[1].children[1].src,
    text: e.target.parentNode.parentNode.childNodes[5].textContent,
    readDate: getUserTime(),
  };
  console.log(
    'ALT',
    e.target.parentNode.parentNode.childNodes[1].children[1].alt
  );
  console.log('readObj', readObj);
  checkIfSaved(readObj);
  readNews.push(readObj);
  console.log('readNews after push', readNews);
  const LSReadNewsJSON = JSON.stringify(readNews);

  localStorage.setItem('read-news', LSReadNewsJSON);
}
function getUserTime(t = new Date()) {
    let Y = t.getFullYear();
    let M = addLeadingZero(t.getMonth() + 1);
    let D = addLeadingZero(t.getDate());
    return `${D}/${M}/${Y}`
};
  function addLeadingZero(value) {
   return value.toString().padStart(2, '0');
    
   }; 

function checkIfSaved(readObj) {
  readNews.map((el, currentIndex) => {
    if (readObj.src === el.src) {
         return readNews.splice(currentIndex, 1)
    } return;
     })
   }