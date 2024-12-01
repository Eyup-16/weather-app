import getGlobalTime from './GetGlobalTime';
// The main function to display the weather (make the html dynamically)
function displayWeather(city, timezone) {
  const Time = new Date();
  const weatherDetails = document.querySelector('.w-details');
  const weather = document.querySelector('.weather');
  console.log(weatherDetails);

  // Weather Details Change
  weatherDetails.innerHTML = ` <h2 class="heading">Weather Details</h2>
              <div class="w-detail">
                <span class="label item">Temperature</span>
                <span class="value item">${Math.trunc(
                  city.list[1].main.temp
                )}°C (High: ${Math.trunc(
    city.list[1].main.temp_max
  )}°C, Low: ${Math.trunc(city.list[1].main.temp_min)}°C)</span>
              </div>
              <div class="w-detail">
                <span class="label item">Condition</span>
                <span class="value item">${
                  city.list[1].weather[0].description
                }</span>
              </div>
              <div class="w-detail">
                <span class="label item">Humidity</span>
                <span class="value item">${city.list[1].main.humidity}%</span>
              </div>
              <div class="w-detail">
                <span class="label item">Wind</span>
                <span class="value item">${city.list[1].wind.speed} Km/h</span>
              </div>
              <div class="w-detail">
                <span class="label item">Visibility</span>
                <span class="value item">${
                  // checking  if number is intiger to remove fractional numbers.
                  Number.isInteger((city.list[1].visibility / 1000).toFixed(2))
                    ? (city.list[1].visibility / 1000).toFixed(2)
                    : (city.list[1].visibility / 1000).toFixed(0)
                } km</span>
              </div>`;
  // temp stands for Temperature
  const temp = Math.trunc(city.list[1].main.temp);
  // date stands for the hours of day
  //   const hour = Time.getHours();
  //   const minute = Time.getMinutes();
  //   //! New modifying
  //   let timezoneOffset = Time.getTimezoneOffset();
  //   let utcOffset = timezone;
  //   console.log(timezoneOffset);

  // temp<10? ... means that if temp less than 10 it will add a 0 to number
  // meaning => in case of 9 it's gonna be 09 .
  weather.innerHTML = `
                
              <span class="w-degree">${temp < 10 ? '0' + temp : temp}°</span>
            <div class="city-date">
              <span class="city-Targeted">${city.city.name}</span>
              <span class="full-date"> ${getGlobalTime(timezone)} - ${
    days[Time.getDay()]
  }, ${Time.getDate()} ${months[Time.getMonth()]} '${
    Time.getFullYear() % 100
  }</span>
    </div>
            <div class="icon-atmo">
              <i class="fa-solid fa-cloud fa-2x"></i>
              <span>${city.list[1].weather[0].main}</span>
            </div>
              
              `;
}

export default displayWeather;
