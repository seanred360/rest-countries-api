import React from "react";
import BackButton from "../common/BackButton";
import ScaleText from "react-scale-text";

const SingleCountryStats = () => {
  return (
    <div className="single-country-page">
      <BackButton />

      <div className="page-container">
        <img
          className="country-flag"
          src="https://restcountries.eu/data/bel.svg"
          alt="Flag of the country"
        />

        <div className="country-stats-groups">
          <h2 className="grid-arena-1 country-name">Country name</h2>
          <div className="grid-area-2">
            <p>
              Native Name: <span>native name value</span>
            </p>
            <p>
              Population: <span>1,102,302,300</span>
            </p>
            <p>
              Region: <span>Region name</span>
            </p>
            <p>
              Sub Region: <span>Sub Region name</span>
            </p>
            <p>
              Capital: <span>capital name</span>
            </p>
          </div>

          <div className="grid-area-3">
            <p>
              Top Level Domain: <span>domain name name</span>
            </p>
            <p>
              Currencies: <span>currency name</span>
            </p>
            <p>
              Languages: <span>language names</span>
            </p>
          </div>

          <div className="grid-area-4">
            <p className="border-countries-label">Border Countries: </p>
            <div className="border-countries-btns">
              <button className="border-country-btn foreground-color">
                usaaaaaa
                {/* <ScaleText>the united states of america</ScaleText> */}
              </button>
              <button className="border-country-btn foreground-color">
                usaaaaa
                {/* <ScaleText>the united states of america</ScaleText> */}
              </button>
              <button className="border-country-btn foreground-color">
                usdasdas
                {/* <ScaleText>Germany</ScaleText> */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCountryStats;
