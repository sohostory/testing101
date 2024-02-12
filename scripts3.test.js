const pokemon = require("./script3");

it("calls pokemon api to get types", () => {
  expect.assertions(2);

  return pokemon.getPokemonTypes(fetch).then((data) => {
    expect(data.count).toEqual(20);
    expect(data.results.length).toBeGreaterThan(3);
  });
});

it("mock testing", () => {
  mockFetch = jest.fn().mockReturnValue(
    Promise.resolve({
      json: () => Promise.resolve({ count: 20, results: [0, 1, 2, 3, 4, 5] }),
    })
  );

  expect.assertions(3);

  return pokemon.getPokemonTypes(mockFetch).then((data) => {
    expect(mockFetch.mock.calls.length).toBe(1);
    expect(mockFetch).toBeCalledWith("https://pokeapi.co/api/v2/type");
    expect(data.count).toEqual(20);
  });
});
