import state from './app.js';

// set image from API as page background
function viewBgImage(data) {
  const html = document.querySelector('html');
  const src = data;
  const img = document.createElement("img");
  img.onload = () => {      
    html.style.backgroundImage = `url(${src})`;
  };
  img.src = src;
}

function randomInteger(min, max) {
  const rand = min + Math.random() * (max - min);
  return Math.round(rand);
}

// get image from flickr API for background
async function bgImage() {
  if(!localStorage.getItem('dataFilter')) {
    const url = `https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=0f15ff623f1198a1f7f52550f8c36057&gallery_id=72157715186109466&extras=url_h&format=json&nojsoncallback=1`;
    const res = await fetch(url);
    const data = await res.json();
    const dataFilter = data.photos.photo.filter(imgData => imgData.url_h && imgData.height_h === 1067 && imgData.width_h === 1600);
    localStorage.setItem('dataFilter', JSON.stringify(dataFilter));
  }
  const dataArr = JSON.parse(localStorage.getItem('dataFilter'));
  const imgNum = randomInteger(0, dataArr.length);
  viewBgImage(dataArr[imgNum].url_h);
}

document.addEventListener('DOMContentLoaded', () => {
  const reloadImage = document.querySelector('.reload-btn');
  reloadImage.addEventListener('click', bgImage);
});

export default bgImage;