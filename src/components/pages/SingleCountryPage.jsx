import { useState, useEffect } from "react";
import { useRouteMatch, Link } from "react-router-dom";
import axios from "axios";
import BackButton from "../common/BackButton";
import Spinner from "../common/Spinner";
import NotFound from "./NotFound";
import getLanguages from "../../utils/getLanguages";
import getCurrencies from "../../utils/getCurrencies";

const SingleCountryPage = () => {
  const [country, setCountry] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const routeMatch = useRouteMatch();

  useEffect(() => {
    let controller = new AbortController();
    axios
      .get(`https://restcountries.com/v2/alpha/${routeMatch.params.id}`, {
        signal: controller.signal,
      })
      .then((response) => {
        if (response.data["status"]) {
          setError(true);
        } else {
          setCountry(response.data);
        }
        setIsLoaded(true);
      })
      .catch((error) => {
        setError(error);
        setIsLoaded(true);
      });

    return () => controller?.abort();
  }, [routeMatch.params.id]);

  if (!isLoaded) return <Spinner />;
  if (isLoaded && error) return <NotFound />;
  else
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
                Population: <span>{country.population.toLocaleString()}</span>
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
                Currencies: <span>{getCurrencies(country)}</span>
              </p>
              <p>
                Languages: <span>{getLanguages(country)}</span>
              </p>
            </div>

            <div className="grid-area-4">
              <p className="border-countries-label">Border Countries: </p>
              <div className="border-countries-btns">
                {country.borders ? (
                  country.borders.map((border) => (
                    <Link
                      to={`${border}`}
                      key={border}
                      className="border-country-btn foreground-color hover-color"
                    >
                      {border}
                    </Link>
                  ))
                ) : (
                  <span>None</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SingleCountryPage;
