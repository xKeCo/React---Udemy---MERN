import { getSaludo } from "../../base/02-template-string";

describe("Pruebas en 02-template-string.test.js", () => {
  test("getSaludo debe retornar Hola Kevin", () => {
    const nombre = "Kevin";

    const saludo = getSaludo(nombre);
    expect(saludo).toBe("Hola Kevin");
  });

  test("getSaludo debe retornar Hola Carlos si no hay argumentos en el nombre", () => {
    const saludo = getSaludo();
    expect(saludo).toBe("Hola Carlos");
  });
});
