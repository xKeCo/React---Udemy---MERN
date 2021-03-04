import { getImagen } from "../../base/11-async-await";

describe("Pruebas de 11-async-await", () => {
  test("Debe retornar una URL de la imagen", async () => {
    const url = await getImagen();
    console.log(url);
    expect(url.includes("https://")).toBe(true);
  });
});
