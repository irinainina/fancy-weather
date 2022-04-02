import state from './app.js';

// set image from API as page background
function viewBgImage(data) {
  const html = document.querySelector('html');
  const src = data;
  const img = document.createElement("img");
  img.onload = () => {      
    html.style.background = `url(${src}) center center / cover no-repeat, linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.55))`;
  };
  img.src = src;
}

function randomInteger(min, max) {
  const rand = min + Math.random() * (max - min);
  return Math.round(rand);
}

// get image from flickr API for background
async function bgImage(weather) {
  const url = `https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=0f15ff623f1198a1f7f52550f8c36057&gallery_id=72157715186109466&extras=url_h&format=json&nojsoncallback=1`;
  const res = await fetch(url);
  const data = await res.json();
  const dataFilter = data.photos.photo.filter(imgData => imgData.url_h);
  const imgNum = randomInteger(0, dataFilter.length);
  viewBgImage(dataFilter[imgNum].url_h);
}

document.addEventListener('DOMContentLoaded', () => {
  const reloadImage = document.querySelector('.reload-btn');
  reloadImage.addEventListener('click', bgImage);
});

export default bgImage;