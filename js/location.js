import state from './app.js';
import showLocation from './showLocation.js';
import getWeather from './getWeather.js';
import getForecast from './getForecast.js';
import translate from './translate.js';
import {showTime, showDate, showForecastDate} from './time.js';
import bgImage from './bgImage.js';
import {showMap, showCoordinates} from './map.js'

async function getCurrentLocation() {
  const url = 'https://ipinfo.io/json?token=2699d346d0bdb9';
  const res = await fetch(url);
  const data = await res.json();
  state.loc = data.loc;
  state.location = data.city;
  state.timeZone = data.timezone;
  bgImage();
  showLocation(state.location, state.lang);
  translate(state.lang);
  showTime(state.lang);
  showDate(state.lang);
  showForecastDate(state.lang);
  getWeather(state.location, state.lang);
  getForecast(state.location, state.lang);
  showMap(state.loc);
  showCoordinates(state.loc);
}

export default getCurrentLocation;