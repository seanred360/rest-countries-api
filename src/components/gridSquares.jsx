import React from "react";
import CountryBox from "./CountryBox";
import { Link } from "react-router-dom";

const GridSquares = ({ paginatedItems }) => {
  return (
    <div className="grid-squares flex flex-jc-c flex-ai-c">
      {paginatedItems.map((item) => (
        <Link key={item.name + item.name} to="/single">
          <CountryBox
            key={item.name}
            flag={item.flag}
            name={item.name}
            population={item.population}
            region={item.region}
            capital={item.capital}
          />
        </Link>
      ))}
    </div>
  );
};

export default GridSquares;
