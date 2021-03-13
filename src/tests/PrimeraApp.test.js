import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import PrimeraApp from "../PrimeraApp";
// import { render } from "@testing-library/react";

describe("Pruebas en el componente de PrimeraApp", () => {
  // test('Debe mostrar el mensaje "Hi,I\'m Kevin"', () => {
  //   const saludo = "Hi,I'm Kevin";
  //   const { getByText } = render(<PrimeraApp saludo="Hi,I'm Kevin" />);
  //   expect(getByText(saludo)).toBeInTheDocument();
  // });

  test("debe de mostrar PrimeraApp correctamente", () => {
    const saludo = "Hi,I'm Kevin";
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);

    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar la plataforma enviada por props", () => {
    const saludo = "Hi,I'm Kevin";
    const plataforma = "Udemy.com";
    const profesor = "Fernando Herrrera";

    const wrapper = shallow(
      <PrimeraApp saludo={saludo} plataforma={plataforma} profesor={profesor} />
    );

    const textoParrafo = wrapper.find("h3").text();

    expect(textoParrafo).toBe(
      `I'm improving my skills on React.js in ${plataforma} with ${profesor}`
    );
  });
});
