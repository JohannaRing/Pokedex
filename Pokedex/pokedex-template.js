function templateShowPokemon(currentPokemon, type, i) {
    return `
  <div class="cardPokemons ${type} " id="cardOfPokemon" onclick="openBigCard(${i})">
      <div class="namePokemon">
         <b>${currentPokemon['name']}</b>   
         <span>#${currentPokemon['id']}</span>
      </div>
    
      <img class="pokemonImg" id="pokemonImage"  src="${
        currentPokemon['sprites']['other']['home']['front_default']
      }" />
      <div class="typePokemonBg">
      ${typeOfPokemon(currentPokemon)}
      </div>
  </div>
  
     `;
  }
  
  function templateInfoCard(index, type) {
    return `
  
    <div class="pokemons-detail ${type}">
    
       <button onclick="closeBigCard()"></button>
       <div class="namePokemon">
           <b>${allPokemons[index]['name']}</b>   
       </div>
       <div class="type-containerBg">
         <span class="border-radiusId">#${allPokemons[index]['id']}</span>
          <span class="type-container">${typePokemonDetail(index)}</span>
          <span class="border-radius"> height:${
            allPokemons[index]['height']
          }</span>
        <span class="border-radius">weight:${allPokemons[index]['weight']}</span>
       </div>
   
       <img class="pokemonImgDetail  " id="pokemonImage"  src="${
         allPokemons[index]['sprites']['other']['home']['front_default']
       }" />
   
       <div class="powerOfPokedexBg"">
        <div class="powerNameBg">
           <span>${allPokemons[index]['stats'][0]['stat']['name']}</span><br/>
           <span>${allPokemons[index]['stats'][1]['stat']['name']}</span><br/>
           <span>${allPokemons[index]['stats'][2]['stat']['name']}</span><br/>
           <span>${allPokemons[index]['stats'][3]['stat']['name']}</span><br/>
           <span>${allPokemons[index]['stats'][4]['stat']['name']}</span><br/>
           <span>${allPokemons[index]['stats'][5]['stat']['name']}</span><br/>
        </div>
        <div class="powerNamberBG">
          <span>${allPokemons[index]['stats'][0]['base_stat']}</span><br/>
          <span>${allPokemons[index]['stats'][1]['base_stat']}</span><br/>
          <span>${allPokemons[index]['stats'][2]['base_stat']}</span><br/>
          <span>${allPokemons[index]['stats'][3]['base_stat']}</span><br/>
          <span>${allPokemons[index]['stats'][4]['base_stat']}</span><br/>
          <span>${allPokemons[index]['stats'][5]['base_stat']}</span><br/>
        </div>
        <div >
          <progress max="100" value="${
            allPokemons[index]['stats'][0]['base_stat']
          }"></progress><br/>
          <progress max="100" value="${
            allPokemons[index]['stats'][1]['base_stat']
          }"></progress><br/>
          <progress max="100" value="${
            allPokemons[index]['stats'][2]['base_stat']
          }"></progress><br/>
          <progress max="100" value="${
            allPokemons[index]['stats'][3]['base_stat']
          }"></progress><br/>
          <progress max="100" value="${
            allPokemons[index]['stats'][4]['base_stat']
          }"></progress><br/>
          <progress max="100" value="${
            allPokemons[index]['stats'][5]['base_stat']
          }"></progress><br/>
        </div>
       
     </div>  
    `;
  }