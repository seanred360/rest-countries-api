import React from "react";

const CountryBox = ({ flag, name, population, region, capital }) => {
  return (
    <div className="country-box foreground-color">
      <img className="flag" src={flag} alt="A country's flag" />
      <div className="country-stats">
        <h2 className="country-name">{name}</h2>
        <p>
          Population: <span>{population.toLocaleString("en-US")}</span>
        </p>
        <p>
          Region: <span>{region}</span>
        </p>
        <p>
          Capital: <span>{capital}</span>
        </p>
      </div>
    </div>
  );
};

export default CountryBox;
