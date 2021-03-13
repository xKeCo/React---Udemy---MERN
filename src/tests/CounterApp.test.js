import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe("Pruebas para CounterApp", () => {
  let wrapper = shallow(<CounterApp />);

  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  test("Debe mostrar el valor por defecto de CounterApp", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe mostrar el valor por defecto de que se le mande", () => {
    const value = 100;
    const wrapper = shallow(<CounterApp value={value} />);

    const counterText = wrapper.find("#counter").text().trim();

    expect(counterText).toBe(`${value}`);
  });

  test("Debe de incrementar con el boton de +1", () => {
    wrapper.find("button").at(0).simulate("click");
    const counterText = wrapper.find("#counter").text().trim();

    expect(counterText).toBe("101");
  });

  test("Debe de reducir con el boton de -1", () => {
    wrapper.find("button").at(1).simulate("click");
    const counterText = wrapper.find("#counter").text().trim();

    expect(counterText).toBe("99");
  });

  test("Debe de colocar el valor por defecto con el boton de reset", () => {
    const value = 105;
    const wrapper = shallow(<CounterApp value={value} />);

    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(2).simulate("click");

    const counterText = wrapper.find("#counter").text().trim();

    expect(counterText).toBe(`${value}`);
  });
});
