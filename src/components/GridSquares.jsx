import React, { Component } from "react";
import CountryBox from "./CountryBox";
import { Link } from "react-router-dom";

class GridSquares extends Component {
  render() {
    const { paginatedItems } = this.props;

    return (
      <div className="grid-squares flex flex-jc-c flex-ai-c">
        {paginatedItems.map((item) => (
          <Link
            key={item.name + "link"}
            style={{ color: "inherit" }}
            to={`/${item.alpha2Code}`}
          >
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
  }
}

export default GridSquares;
