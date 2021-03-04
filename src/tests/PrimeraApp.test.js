import React from "react";
import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";

describe("Pruebas en el componente de PrimeraApp", () => {
  test('Debe mostrar el mensaje "Hi,I\'m Kevin"', () => {
    const saludo = "Hi,I'm Kevin";

    const { getByText } = render(<PrimeraApp saludo="Hi,I'm Kevin" />);

    expect(getByText(saludo)).toBeInTheDocument();
  });
});
