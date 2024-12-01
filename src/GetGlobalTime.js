// Gloabl Time Function

function getGlobalTime(timezoneOffset) {
  // Current time in UTC
  const now = new Date();

  // Get the current UTC time in milliseconds
  const utcMillis = now.getTime() + now.getTimezoneOffset() * 60000;

  // Adjust for the given timezone offset (convert seconds to milliseconds)
  const localTimeMillis = utcMillis + timezoneOffset * 1000;

  // Create a new Date object with the adjusted time
  const localTime = new Date(localTimeMillis);

  // Extract hours and minutes from the adjusted time
  const hours = localTime.getHours();
  const minutes = localTime.getMinutes();

  // Format the time to HH:MM
  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}`;

  return formattedTime;
}
export default getGlobalTime;
