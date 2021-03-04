import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe("Pruebas en 08-imp-exp", () => {
  test("Debe de retornar un heroe por ID", () => {
    const id = 1;

    const heroe = getHeroeById(id);

    const heroeData = heroes.find((h) => h.id === id);

    expect(heroe).toEqual(heroeData);
  });

  test("Debe de retornar undefined si heroe no existe", () => {
    const id = 15;

    const heroe = getHeroeById(id);

    expect(heroe).toBe(undefined);
  });

  test("Debe de retornar un arreglo con los heroes de DC", () => {
    const owner = "DC";

    const heroe = getHeroesByOwner(owner);

    const heroesData = heroes.filter((h) => h.owner === owner);

    expect(heroe).toEqual(heroesData);
  });

  test("Debe de retornar un arreglo con los heroes de Marvel", () => {
    const owner = "Marvel";

    const heroes = getHeroesByOwner(owner);

    expect(heroes.length).toBe(2);
  });
});
