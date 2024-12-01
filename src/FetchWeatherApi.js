import displaySunTimes from './DisplaySunTimes';
import displayWeather from './DisplayWeather';

// Fetch the weather data from api
async function fetchWeather(lat, lon) {
  await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=5371088f19d3b076e41654c9882503dc&units=metric`
  )
    .then((response) => {
      if (!response.ok) throw new Error(`The Network does't respond`);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      displayWeather(data, data.city.timezone);
      displaySunTimes(data.city.sunrise, data.city.sunset, data.city.timezone);
      //   getGlobalTime(data.city.timezone);
    })
    // If there is any error
    .catch((error) => console.error('Fetch Error', error));
}

export default fetchWeather;
