import state from './app.js';
import showLocation from './showLocation.js';
import getWeather from './getWeather.js';
import getForecast from './getForecast.js';
import {showTime, showDate, showForecastDate} from './time.js';
import bgImage from './bgImage.js';
import {showMap, showCoordinates} from './map.js'

const searchInput = document.querySelector('.search-input');
let searchValue;
searchInput.addEventListener('change', () => {
  searchValue = searchInput.value.trim();
  searchLocation();
});

async function searchLocation() {
  if(!searchValue) return;
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${searchValue}&key=c6b6da0f80f24b299e08ee1075f81aa5&pretty=1`;
  const res = await fetch(url);
  const data = await res.json();
  if(!data.results[0]) return;
  const coordsArr = data.results[0].geometry;
  const coordsStr = `${coordsArr.lat},${coordsArr.lng}`;
  state.loc = coordsStr;
  state.location = searchValue;
  state.timeZone = data.results[0].annotations.timezone.name;
  bgImage();
  showLocation(state.location, state.lang);
  showTime(state.lang, state.timeZone);
  showDate(state.lang, state.timeZone);
  showForecastDate(state.lang, state.timeZone);
  getWeather(state.location, state.lang);
  getForecast(state.location, state.lang);
  showMap(state.loc);
  showCoordinates(state.loc);
}

export default searchLocation();