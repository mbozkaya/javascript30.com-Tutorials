let cities =[];
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const promp = fetch(endpoint)
.then(response => response.json())
.then(last => cities = [...last]);

function findMatches(wordToMatch ,cities){
  return cities.filter(key=>{
    const regex = new RegExp(wordToMatch,'gi');
    return key.city.match(regex) || key.state.match(regex);
  });
}

const suggestions = document.querySelector('.suggestions');

document.querySelector('.search').addEventListener('keyup',function () {
  const searchedArray = findMatches(this.value,cities);
  const html =  searchedArray.map(place => {
    const regex = new RegExp(this.value,'gi');
    const cityName = place.city.replace(regex,`<span class="hl">${this.value}</span>`)
    return `<li>
      <span class="name">${cityName}, ${place.state}</span>
      <span class="population">${place.population}</span>
      </li>`;
  }).join();
  suggestions.innerHTML = html;
})
