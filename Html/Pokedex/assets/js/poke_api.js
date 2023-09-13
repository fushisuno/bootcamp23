const pokeApi = {};

pokeApi.getPokemonDetail = (pokemon) => {
    // Então pegamos um novo fetch da url do pokemon que quero acessar e converto a resposta num novo json dos detalhes
  return fetch(pokemon.url).then((response) => response.json());
};

pokeApi.getPokemons = (ofset = 0, limit = 10) => {
  const url = `https://pokeapi.co/api/v2/pokemon?ofset=${ofset}&limit=${limit}`;

  // Retorna uma Promise - 'Promessa de uma resposta'
  // Processamento assincrono - não obtem resposta imediata
  return fetch(url)
    // Trás uma resposta que é transformada em json
    .then((response) => response.json())

    // Dentro do json, buscamos apenas o 'Body'/corpo dos resultados
    .then((jsonBody) => jsonBody.results)

    // Pegamos a lista de pokemons e mapeamos em uma lista de requisições do detalhe do pokemon
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))

    // Entçao esperamos que todas as requisições terminem
    .then((requestDetails) => Promise.all(requestDetails))
    .then((pokemonsDetails) => {
      debugger;
      console.log(pokemonsDetails);
    })
    .catch((error) => console.log(error));
};

//const op = {};
//op.getOPConsole = ()=> console.log("Success");
//op - Variavel  | getOPConsole - funcão que recebe = ()=> - Arrow Function