const pokemon = require("./script2");

// it("calls pokemon api to get pokemon", (done) => {
//   expect.assertions(1); // always do this with async
//   pokemon.getPokemon(fetch).then((data) => {
//     expect(data.count).toEqual(1302);
//     done();
//   });
// });

it("calls pokemon api to get pokemon", () => {
  expect.assertions(1);
  return pokemon.getPokemon(fetch).then((data) => {
    expect(data.count).toEqual(1302);
  });
});

it("calls pokemon api to get pokemon with a promise", () => {
  expect.assertions(2);
  return pokemon.getPokemonPromise(fetch).then((data) => {
    expect(data.count).toEqual(1302);
    expect(data.results.length).toBeGreaterThan(5);
  });
});

it("getPokemon returns count and results", () => {
  mockFetch = jest.fn().mockReturnValue(
    Promise.resolve({
      json: () =>
        Promise.resolve({
          count: 1302,
          results: [0, 1, 2, 3, 4, 5],
        }),
    })
  );

  expect.assertions(4);
  return pokemon.getPokemonPromise(mockFetch).then((data) => {
    expect(mockFetch.mock.calls.length).toBe(1);
    expect(mockFetch).toBeCalledWith("https://pokeapi.co/api/v2/pokemon/");
    expect(data.count).toEqual(1302);
    expect(data.results.length).toBeGreaterThan(5);
  });
});
