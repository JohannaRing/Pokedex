let allPokemons = [];
let offset = 0;
let currentPokemon;

/* 
function loads 200 pokemons
iterate them
load each pokemons one by one
and trigger rendering of each pokemon
**/
async function loadPokemon() {
  let url = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=200`;// fixed offset, was typo just
  let response = await fetch(url);
  let resultPokemons = await response.json();
  offset = offset + 200;
  for (let i = 0; i < resultPokemons['results'].length; i++) {
    let pokemonUrl = resultPokemons['results'][i]['url'];
    let pokemonResponse = await fetch(pokemonUrl);
    let currentPokemon = await pokemonResponse.json();
    renderPokemon(currentPokemon, allPokemons.length);
    allPokemons.push(currentPokemon);
  }
  
}
//with let type we change the background-color from Pokemon
function renderPokemon(currentPokemon, i) {
  let type = currentPokemon['types']['0']['type']['name'];
  document.getElementById('pokemons-container').innerHTML +=
    templateShowPokemon(currentPokemon, type, i);
}

function openBigCard(index) {
  let type = allPokemons[index]['types']['0']['type']['name'];
  document.getElementById('pokemon-card').innerHTML = templateInfoCard(
    index,
    type
  );
  document.getElementById('body').classList.add('overlay');
  document.getElementById('pokemons-container').classList.add('opacity');
}

//close the card of current pokemon and remove overlay
function closeBigCard() {
  document.getElementById('pokemon-card').innerHTML = '';
  document.getElementById('body').classList.remove('overlay');
  document.getElementById('pokemons-container').classList.remove('opacity');
}

// when currentPokemon of length is 2 we show the position 0 and 1 from Array if no only 0
function typeOfPokemon(currentPokemon) {
  if (currentPokemon['types'].length == 2) {
    return `
    <span>${currentPokemon['types'][0]['type']['name']}</span>
    <span>${currentPokemon['types'][1]['type']['name']}</span>
  
  `;
  } else {
    return `
    <span>${currentPokemon['types'][0]['type']['name']}</span>
    `;
  }
}

// when allPokemons of length is 2 we show the position 0 and 1 from Array if no only 0
function typePokemonDetail(index) {
  if (allPokemons[index]['types'].length == 2) {
    return `
    <span>${allPokemons[index]['types'][0]['type']['name']}</span>
    <span>${allPokemons[index]['types'][1]['type']['name']}</span>
  `;
  } else {
    return `
    <span>${allPokemons[index]['types'][0]['type']['name']}</span>
    `;
  }
}

// with this function we can search the pokemons in input
function filterPokemon() {
  let search = document.getElementById('search').value;
  search = search.toLowerCase();
  let content = document.getElementById('pokemons-container');
  content.innerHTML = '';
  for (let i = 0; i < allPokemons.length; i++) {
    const name = allPokemons[i]['name'];
    if (name.toLowerCase().includes(search)) {
      currentPokemon = allPokemons[i];
      renderPokemon(currentPokemon, i);
    }
  }
}

// when we are in the bottom of the page then load 30 pokemons more
window.onscroll = function () {
  if (window.scrollY + window.innerHeight >= document.body.clientHeight) {
    loadPokemon();
  }
};