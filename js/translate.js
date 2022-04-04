const dictionary = [ 
  { 
    en : 'Search City',
    ru : 'Поиск по городу',
    uk : 'Пошук по місту'
  },
  { 
    en : 'Search',
    ru : 'Поиск',
    uk : 'Пошук'
  },
  { 
    en : 'Feels like:',
    ru : 'Ощущается как:',
    uk : 'Відчувається як:'
  },
  { 
    en : 'Wind:',
    ru : 'Ветер',
    uk : 'Вітер'
  },
  { 
    en : 'm/s',
    ru : 'м/с',
    uk : 'м/с'
  },
  { 
    en : 'Humidity',
    ru : 'Влажность',
    uk : 'Вологість'
  },
  { 
    en : 'Latitude:',
    ru : 'Широта:',
    uk : 'Широта:'
  },
  { 
    en : 'Longitude:',
    ru : 'Долгота:',
    uk : 'Довгота:'
  }
];

export default function translate(lang) { 
  const searchInput = document.querySelector('.search-input');
  const searchButton = document.querySelector('.search-button');
  const apparentText = document.querySelector('.apparent-text');
  const windText = document.querySelector('.wind-text');
  const windUnits = document.querySelector('.wind-units');
  const humidityText = document.querySelector('.humidity-text');
  const latitudeText = document.querySelector('.latitude-text');
  const longitudeText = document.querySelector('.longitude-text');  
  
  searchInput.placeholder= `${dictionary[0][lang]}`;
  searchButton.innerHTML = `${dictionary[1][lang]}<i></i>`;
  apparentText.textContent = dictionary[2][lang];
  windText.textContent = dictionary[3][lang];
  windUnits.textContent = dictionary[4][lang];
  humidityText.textContent = dictionary[5][lang];
  latitudeText.textContent = dictionary[6][lang];
  longitudeText.textContent = dictionary[7][lang];
}