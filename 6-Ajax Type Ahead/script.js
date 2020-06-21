let cities =[];
//Şehirlerin alınacağı url
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

//Fetch requesti bu url'e atılır ilk then içerisinde response beklenir ve response'un bodysi json'a convert edilir.
//2. then de ise en üstte tanımlanan cities arrayine arry desctruction assign edilir.
const promp = fetch(endpoint)
.then(response => response.json())
.then(last => cities = [...last]);

//cities array'i içerisinde city yada state stringlerinde eşleşme var mı bakılır
function findMatches(wordToMatch ,cities){
  return cities.filter(key=>{
    const regex = new RegExp(wordToMatch,'gi');
    return key.city.match(regex) || key.state.match(regex);
  });
}
//verilen integeri binlik basamaklarına virgülle ayraç ekler
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

const suggestions = document.querySelector('.suggestions');

//search elementi seçilir ve keyup eventına cities arrayinde arama function'u eklenir
// Bulunan sonuçlar suggestions olarak seçtiğimiz elementin html olarak atanır.
document.querySelector('.search').addEventListener('keyup',function () {
  const searchedArray = findMatches(this.value,cities);
  const html =  searchedArray.map(place => {
    const regex = new RegExp(this.value,'gi');
    const cityName = place.city.replace(regex,`<span class="hl">${this.value}</span>`)
    return `<li>
      <span class="name">${cityName}, ${place.state}</span>
      <span class="population">${numberWithCommas(place.population)}</span>
      </li>`;
  }).join();
  suggestions.innerHTML = html;
})
