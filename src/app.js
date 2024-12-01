import './css/index.css';
import handleCitySearch from './HandleCitySearch';
import fetchWeather from './FetchWeatherApi';

// Set The Default Setting
document.addEventListener('DOMContentLoaded', () => {
  // Default settings

  fetchWeather('40.41', '-3.70');
});

// ! IT COULD BE WITHOUT MEANING !

// function citySearch(cityName) {
//   fetch(
//     `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=5371088f19d3b076e41654c9882503dc`
//   )
//     .then((response) => {
//       if (!response.ok) throw new Error(`The Network does't respond`);
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//     });
// }

// citySearch('madrid');
