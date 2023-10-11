const btnMore = document.querySelector('#btMore');
const limit = 4;
let offset = 0;

function loadPokemonItems(offset, limit){
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons.map((pokemon)=>`
    <a href="pokemon_detail.html">
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${
              pokemon.id < 10 ? "00" : pokemon.id < 100 ? "0" : ""
            }${pokemon.id}</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
                <ol class="types">
                ${pokemon.types
                  .map((type) => `<li class="type ${type}">${type}</li>`)
                  .join("")}
                </ol>
                <img src="${pokemon.photo}" alt="${pokemon.name}">
            </div>
        </li>
      </a>`).join("");
    document.querySelector("#pokemons").innerHTML += newHtml 
  });
}

loadPokemonItems(offset, limit)

btnMore.addEventListener('click', ()=>{
  offset += limit;
  loadPokemonItems(offset, limit);
})


