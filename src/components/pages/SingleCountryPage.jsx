import React from "react";
import { useState, useEffect } from "react";
import { useRouteMatch, useHistory, Link } from "react-router-dom";
import axios from "axios";
import BackButton from "../common/BackButton";

const SingleCountryPage = () => {
  const [country, setCountry] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const routeMatch = useRouteMatch();
  const history = useHistory();

  useEffect(() => {
    setIsLoaded(false);
    axios
      .get(`https://restcountries.eu/rest/v2/alpha/${routeMatch.params.id}`)
      .then((response) => {
        setCountry(response.data);
        setIsLoaded(true);
      })
      .catch((error) => {
        setError(error);
        setIsLoaded(true);
        // redirect the user to the not found page
        history.replace("/not-found");
      });
  }, [history, routeMatch.params.id]);

  if (!isLoaded) return <h1>Loading Data.........</h1>;
  else if (isLoaded && error) return <h1>error</h1>;

  return (
    <div className="single-country-page">
      <BackButton />

      <div className="page-container">
        <img
          className="country-flag"
          src={country.flag}
          alt="Flag of the country"
        />

        <div className="country-stats-groups">
          <h2 className="grid-arena-1 country-name">{country.name}</h2>
          <div className="grid-area-2">
            <p>
              Native Name: <span>{country.nativeName}</span>
            </p>
            <p>
              Population: <span>{country.population}</span>
            </p>
            <p>
              Region: <span>{country.region}</span>
            </p>
            <p>
              Sub Region: <span>{country.subregion}</span>
            </p>
            <p>
              Capital: <span>{country.capital}</span>
            </p>
          </div>

          <div className="grid-area-3">
            <p>
              Top Level Domain: <span>{country.topLevelDomain}</span>
            </p>
            <p>
              {/* Currencies: <span>{this.getCurrencies(country)}</span> */}
            </p>
            <p>{/* Languages: <span>{this.getLanguages(country)}</span> */}</p>
          </div>

          <div className="grid-area-4">
            <p className="border-countries-label">Border Countries: </p>
            <div className="border-countries-btns">
              {country.borders.map((border) => (
                <Link
                  to={`${border}`}
                  key={border}
                  className="border-country-btn foreground-color"
                >
                  {border}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCountryPage;
