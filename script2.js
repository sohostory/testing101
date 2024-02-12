const URL = "https://pokeapi.co/api/v2/pokemon/";

const getPokemonPromise = (fetch) => {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      return {
        count: data.count,
        results: data.results,
      };
    });
};

const getPokemon = async (fetch) => {
  const getRequest = await fetch(URL);
  const data = await getRequest.json();

  return {
    count: data.count,
    results: data.results,
  };
};

module.exports = {
  getPokemonPromise,
  getPokemon,
};
