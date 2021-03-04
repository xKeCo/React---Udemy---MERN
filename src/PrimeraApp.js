import React from "react";
import PropTypes from "prop-types";

const PrimeraApp = ({ saludo, profesor, plataforma }) => {
  return (
    <>
      <h2>{saludo}</h2>
      <h3>
        I'm improving my skills on React.js in {plataforma} with {profesor}
      </h3>
    </>
  );
};

PrimeraApp.propTypes = {
  profesor: PropTypes.string.isRequired,
  plataforma: PropTypes.string.isRequired,
};

PrimeraApp.defaultProps = {
  profesor: "Fernando Herrrera",
  plataforma: "Udemy.com",
};

export default PrimeraApp;
