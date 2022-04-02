import state from './app.js';

function getLocale(lang) {
  switch (lang) {
    case 'ru': return 'ru-Ru';
    case 'ua': return 'uk-UA';
    case 'en': return 'en-GB';
  }
}

function showTime(lang, timeZone) {
  const date = new Date();
  const optionsTime = { hour: 'numeric', minute: 'numeric', second: 'numeric', timeZone: timeZone};
  const locale = getLocale(lang);
  const currentTime = date.toLocaleString(locale, optionsTime);
  const locationTime = document.querySelector('.location-time');
  locationTime.textContent = currentTime;  
  setTimeout(() => showTime(), 1000);
}

function showDate(lang, timeZone) {
  const date = new Date();
  const locationDay = document.querySelector('.location-day');  
  const optionsDay = { weekday: 'long', day: 'numeric', month: 'long', timeZone };
  const locale = getLocale(lang);
  const currentDate = date.toLocaleString(locale, optionsDay);
  locationDay.textContent = currentDate;
}

function showForecastDate(lang, timeZone) {  
  const optionsDay = { weekday: 'long', timeZone };
  const locale = getLocale(lang);
  const msInDay = 86400000;
  const nextday = document.querySelectorAll('.nextday');
  nextday.forEach((day, index) => {
    const dayName = day.querySelector('.day');
    const date = new Date(Date.now() + msInDay * (index + 1));
    dayName.textContent = date.toLocaleString(locale, optionsDay);    
  });
}

export {showTime, showDate, showForecastDate}