import getCity from './GetCity';

// list of cities
const cities = document.querySelector('.cities');
const citiesList = [];

// listen to input and pass it to api by getcity() fn
function handleCitySearch() {
  const searchBar = document.querySelector('.location');
  const searchBtn = document.querySelector('.btn-primary');

  searchBtn.addEventListener('click', () => {
    const input = searchBar.value.trim();
    setTimeout(() => {
      searchBar.value = '';
    }, 4000);
    if (input) getCity(input);
  });

  searchBar.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      const input = searchBar.value.trim();
      searchBar.value = '';
      if (input) {
        getCity(input);
        citiesList.push(input);
        console.log(citiesList);
      }
    }
  });
}
handleCitySearch();

export default handleCitySearch;
