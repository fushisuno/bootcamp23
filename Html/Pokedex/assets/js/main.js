function convertPokemonToLi(pokemon) {
  return `
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
    `;
}

pokeApi.getPokemons().then((pokemonList = []) => {
  console.log(pokemonList);
  document.querySelector("#pokemons").innerHTML += pokemonList
    .map(convertPokemonToLi)
    .join("");
});
  