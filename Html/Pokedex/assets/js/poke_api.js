const pokeApi = {};

function convertPokeApiDetailToPokemon(pokeDetail) {
  const pokemon = new Pokemon();

  pokemon.id = pokeDetail.order;
  pokemon.name = pokeDetail.name;

  const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
  const [type] = types;

  pokemon.types = types;
  pokemon.type = type;
  pokemon.photo = pokeDetail.sprites.other.dream_world.front_default;

  return pokemon;
}

pokeApi.getPokemonDetail = (pokemon) => {
  // Então pegamos um novo fetch da url do pokemon que quero acessar e converto a resposta num novo json dos detalhes
  return fetch(pokemon.url)
    .then((response) => response.json())
    .then(convertPokeApiDetailToPokemon);
};

pokeApi.getPokemons = (ofset = 0, limit = 200) => {
  const url = `https://pokeapi.co/api/v2/pokemon?ofset=${ofset}&limit=${limit}`;

  // Retorna uma Promise - 'Promessa de uma resposta'
  // Processamento assincrono - não obtem resposta imediata
  return (
    fetch(url)
      // Trás uma resposta que é transformada em json
      .then((response) => response.json())

      // Dentro do json, buscamos apenas o 'Body'/corpo dos resultados
      .then((jsonBody) => jsonBody.results)

      // Pegamos a lista de pokemons e mapeamos em uma lista de requisições do detalhe do pokemon
      .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))

      // Então esperamos que todas as requisições terminem
      .then((requestDetails) => Promise.all(requestDetails))

      // Cria uma lista de detalhes dos pokemons
      .then((pokemonsDetails) => pokemonsDetails)
      .catch((error) => console.log(error))
  );
};

//const op = {};
//op.getOPConsole = ()=> console.log("Success");
//op - Variavel  | getOPConsole - funcão que recebe = ()=> - Arrow Function
