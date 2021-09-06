import React, { Component } from "react";
import BackButton from "../common/BackButton";
//import ScaleText from "react-scale-text";

class SingleCountryStats extends Component {
  getCurrencies = (selectedCountry) => {
    let result = "";
    for (let currency of selectedCountry.currencies) {
      result += currency.name + ", ";
    }
    return result;
  };

  getLanguages = (selectedCountry) => {
    let result = "";
    for (let language of selectedCountry.languages) {
      result += language.name + ", ";
    }
    return result;
  };

  render() {
    const { selectedCountry } = this.props;

    return (
      <div className="single-country-page">
        <BackButton />

        <div className="page-container">
          <img
            className="country-flag"
            src={selectedCountry.flag}
            alt="Flag of the country"
          />

          <div className="country-stats-groups">
            <h2 className="grid-arena-1 country-name">
              {selectedCountry.name}
            </h2>
            <div className="grid-area-2">
              <p>
                Native Name: <span>{selectedCountry.nativeName}</span>
              </p>
              <p>
                Population: <span>{selectedCountry.population}</span>
              </p>
              <p>
                Region: <span>{selectedCountry.region}</span>
              </p>
              <p>
                Sub Region: <span>{selectedCountry.subregion}</span>
              </p>
              <p>
                Capital: <span>{selectedCountry.capital}</span>
              </p>
            </div>

            <div className="grid-area-3">
              <p>
                Top Level Domain: <span>{selectedCountry.topLevelDomain}</span>
              </p>
              <p>
                Currencies: <span>{this.getCurrencies(selectedCountry)}</span>
              </p>
              <p>
                Languages: <span>{this.getLanguages(selectedCountry)}</span>
              </p>
            </div>

            <div className="grid-area-4">
              <p className="border-countries-label">Border Countries: </p>
              <div className="border-countries-btns">
                {selectedCountry.borders.map((country) => (
                  <button
                    key={country}
                    className="border-country-btn foreground-color"
                  >
                    {country}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleCountryStats;
