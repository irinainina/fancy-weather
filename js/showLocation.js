import state from './app.js';

async function showLocation(location, lang) {
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${location}&key=c6b6da0f80f24b299e08ee1075f81aa5&language=${lang}&pretty=1`;
  const res = await fetch(url);
  const data = await res.json();
  const city = data.results[0].components.city ||
      data.results[0].components.town || data.results[0].components.village || data.results[0].components.county || data.results[0].components.state;
  const country = data.results[0].components.country;
  locationPlaceView(city, country); 
}

function locationPlaceView(city, country) {
  const locationPlace = document.querySelector('.location-place');  
  locationPlace.textContent = `${city}, ${country}`;
}

export default showLocation;