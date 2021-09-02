import React from "react";

const CountryBox = ({ flag, name, population, region, capital }) => {
  return (
    <div className="country-box foreground-color">
      <img src={flag} alt="A country's flag" className="flag" />
      <div className="country-stats">
        <h2 className="country-name">{name}</h2>
        <p className="country-population-label font-600">
          Population:{" "}
          <span className="population-value font-300">
            {population.toLocaleString("en-US")}
          </span>
        </p>
        <p className="region-label font-600">
          Region: <span className="region-name font-300">{region}</span>
        </p>
        <p className="capital-label font-600">
          Capital: <span className="capital-name font-300">{capital}</span>
        </p>
      </div>
    </div>
  );
};

export default CountryBox;
