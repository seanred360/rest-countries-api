import React from "react";
import CountryBox from "./countryBox";

const GridSquares = ({ paginatedItems }) => {
  return (
    <div className="grid-squares flex flex-jc-c flex-ai-c">
      {paginatedItems.map((item) => (
        <CountryBox
          key={item.name}
          flag={item.flag}
          name={item.name}
          population={item.population}
          region={item.region}
          capital={item.capital}
        />
      ))}
    </div>
  );
};

export default GridSquares;
