function showMap(loc) {
  mapboxgl.accessToken = "pk.eyJ1IjoiaXJpbmEtcnNzIiwiYSI6ImNrM3p2Ym91azA3NzYzZ29yc2EwMWVvNnQifQ.SfINJgooBwhPHbD6tyUb2w";

  const map = new mapboxgl.Map({
    container: "map", // container id
    style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
    center: loc.split(',').map(Number).reverse(), // starting position [lng, lat]
    zoom: 12 // starting zoom
  });

  map.on("load", function() {
    map.setLayoutProperty("country-label", "text-field", [
      "format",
      ["get", `name_${ 'en' }`],
      { "font-scale": 1.2 },
      "\n",
      {},
      ["get", "name"],
      {
        "font-scale": 0.8,
        "text-font": [
          "literal",
          ["DIN Offc Pro Italic", "Arial Unicode MS Regular"]
        ]
      }
    ]);
  });
}

// convertation coordinates from decimal to degrees and minutes
function convertCoordinates(coordinate) {
  const absCoord = Math.abs(coordinate);
  const coordDeg = Math.floor(absCoord);
  const coordMin = (Math.floor((absCoord - coordDeg) * 60));
  const coordSign = ((coordinate > 0) ? '' : '-');
  
  return `${coordSign}${coordDeg}°${coordMin}'`;
}

// show current user coordinates 
function showCoordinates(loc) {
  const latValue = document.querySelector(".latitude-value");
  const lngValue = document.querySelector(".longitude-value");
  const [lat, lng] = loc.split(',').map(Number);
  const convertLat = convertCoordinates(lat);  
  const convertLng = convertCoordinates(lng);
  
  latValue.textContent = convertLat;
  lngValue.textContent = convertLng;
}

export {showMap, showCoordinates}