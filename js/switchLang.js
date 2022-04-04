import state from './app.js';
import showLocation from './showLocation.js';
import getWeather from './getWeather.js';
import getForecast from './getForecast.js';
import translate from './translate.js';
import {showTime, showDate, showForecastDate} from './time.js';

const langBtn = document.querySelector('.lang-btn select');

function switchLang() {  
  state.lang = langBtn.options[langBtn.selectedIndex].text;
}
langBtn.addEventListener('change', () => {
  switchLang();
  showLocation(state.location, state.lang);
  translate(state.lang);
  showTime(state.lang);
  showDate(state.lang);
  showForecastDate(state.lang);
  getWeather(state.location, state.lang);
  getForecast(state.location, state.lang);
});

// set language in localStorage
window.onbeforeunload = () => {
  localStorage.setItem('lang', state.lang);
};
 
// get language from localStorage
function getLocalStorageLang() {
  state.lang = localStorage.getItem('lang') || 'en';
  langBtn.value = state.lang;
}

export default getLocalStorageLang;