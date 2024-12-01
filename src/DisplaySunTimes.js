// fn to manage suntime with current time for the whole world.

const displaySunTimes = (sunriseUnix, sunsetUnix, timezone) => {
  // confirm that we grab them correctly.
  console.log(sunsetUnix);
  // convert time zone to milliseconds to add it to sunriseDate ..etc
  const timezoneOffset = timezone * 1000;

  const sunriseDate = new Date(sunriseUnix * 1000 + timezoneOffset);
  const sunsetDate = new Date(sunsetUnix * 1000 + timezoneOffset);
  console.log(sunriseDate instanceof Date); // Should return true

  // Format to "HH:MM" (hours and minutes only)
  const sunriseTime = sunriseDate.toLocaleTimeString('en-Us', {
    timeZone: 'UTC',
    hour: '2-digit',
    minute: '2-digit',
  });
  const sunsetTime = sunsetDate.toLocaleTimeString('en-Us', {
    timeZone: 'UTC',
    hour: '2-digit',
    minute: '2-digit',
  });

  // Display the times
  console.log(`Sunrise: ${sunriseTime}`);
  console.log(`Sunset: ${sunsetTime}`);
  const weatherDetails = document.querySelector('.w-details');
  // The += means add to it (not Overwrite)
  weatherDetails.innerHTML += `
      <div class="w-detail">
        <span class="label item">Sunrise 🌅</span>
        <span class="value item">${sunriseTime}</span>
      </div>
      <div class="w-detail">
        <span class="label item">Sunset 🌇</span>
        <span class="value item">${sunsetTime}</span>
      </div>
    `;
};

export default displaySunTimes;
