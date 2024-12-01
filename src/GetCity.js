//  change city name to lat,lon
function getCity(e) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=5371088f19d3b076e41654c9882503dc&units=metric`
  )
    .then((res) => {
      if (!res.ok) alert('City Not Found');
      return res.json();
    })
    .then((data) => {
      if (data) {
        const lat = data.coord.lat;
        const lon = data.coord.lon;
        // console.log(data.coord);
        fetchWeather(lat, lon);
      } else {
        console.error('No results found');
        // console.log(data.coord.lon);
      }
    })
    .catch((error) => {
      console.error('Error fetching weather', error);
    });
}

export default getCity;
