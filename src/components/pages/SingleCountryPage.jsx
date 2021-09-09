import React from "react";
import { useState, useEffect } from "react";
import { useRouteMatch, useHistory, Link } from "react-router-dom";
import axios from "axios";
import BackButton from "../common/BackButton";

const SingleCountryPage = () => {
  const [country, setCountry] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const routeMatch = useRouteMatch();
  const history = useHistory();
  // `https://restcountries.eu/rest/v2/name/${routeMatch.params.id}`

  useEffect(() => {
    setIsLoaded(false);
    axios
      .get(
        `https://restcountries.eu/rest/v2/alpha?codes=${routeMatch.params.id};`
      )
      .then((response) => {
        setCountry(response.data[0]);
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
  if (error) return <h1>error</h1>;
  // API request returns an error object. Must check to make sure the object is valid with something like name or flag.
  if (isLoaded && !error && country.name)
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
              <p>
                {/* Languages: <span>{this.getLanguages(country)}</span> */}
              </p>
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

//import React, { Component } from "react";
//import BackButton from "../common/BackButton";

// class SingleCountryPage extends Component {
//   getCurrencies = (country) => {
//     let result = "";
//     for (let currency of country.currencies) {
//       result += currency.name + ", ";
//     }
//     return result;
//   };

//   getLanguages = (country) => {
//     let result = "";
//     for (let language of country.languages) {
//       result += language.name + ", ";
//     }
//     return result;
//   };

//   render() {
//     const { country } = this.props;

//     return (
//       <div className="single-country-page">
//         <BackButton />

//         <div className="page-container">
//           <img
//             className="country-flag"
//             src={country.flag}
//             alt="Flag of the country"
//           />

//           <div className="country-stats-groups">
//             <h2 className="grid-arena-1 country-name">
//               {country.name}
//             </h2>
//             <div className="grid-area-2">
//               <p>
//                 Native Name: <span>{country.nativeName}</span>
//               </p>
//               <p>
//                 Population: <span>{country.population}</span>
//               </p>
//               <p>
//                 Region: <span>{country.region}</span>
//               </p>
//               <p>
//                 Sub Region: <span>{country.subregion}</span>
//               </p>
//               <p>
//                 Capital: <span>{country.capital}</span>
//               </p>
//             </div>

//             <div className="grid-area-3">
//               <p>
//                 Top Level Domain: <span>{country.topLevelDomain}</span>
//               </p>
//               <p>
//                 Currencies: <span>{this.getCurrencies(country)}</span>
//               </p>
//               <p>
//                 Languages: <span>{this.getLanguages(country)}</span>
//               </p>
//             </div>

//             <div className="grid-area-4">
//               <p className="border-countries-label">Border Countries: </p>
//               <div className="border-countries-btns">
//                 {country.borders.map((country) => (
//                   <button
//                     key={country}
//                     className="border-country-btn foreground-color"
//                   >
//                     {country}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default SingleCountryPage;
