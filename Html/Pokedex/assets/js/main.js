
function convertPokemonToLi(pokemon, i) {
  return `
    <li class="pokemon">
        <span class="number">#001</span>
        <span class="name">${pokemon.name}</span>
        <div class="detail">
            <ol class="types">
                <li class="type">Grass</li>
                <li class="type">Poison</li>
            </ol>
            <img src="https://seeklogo.com/images/B/bulbasaur-logo-8A27924C02-seeklogo.com.png" alt="${
              pokemon.name
            }">
        </div>
    </li>
    `;
}

pokeApi.getPokemons().then((pokemonList = []) => {
    document.querySelector("#pokemons").innerHTML += pokemonList.map(convertPokemonToLi).join('')
});
