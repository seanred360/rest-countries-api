import React from "react";

const CountryBox = ({ flag, name, population, region, capital }) => {
  return (
    <div className="country-box foreground-color hover-color">
      <img src="" className="screen-reader-only" alt="A country's flag" />
      <div
        className="flag"
        style={{
          background: `url(${flag})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
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
