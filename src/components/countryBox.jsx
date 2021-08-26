import React from "react";

const CountryBox = ({ flag, name, population, region, capital }) => {
  return (
    <div className="country-box">
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

// class CountryBox extends Component {
//   // state = { error: null, isLoaded: false, items: [] };

//   // componentDidMount() {
//   //   axios
//   //     .get("https://restcountries.eu/rest/v2/all")
//   //     .then((response) => {
//   //       this.setState({ isLoaded: true, items: response.data });
//   //     })
//   //     .catch((error) => {
//   //       this.setState({
//   //         isLoaded: true,
//   //         error,
//   //       });
//   //     });
//   // }

//   //   componentDidMount() {
//   //     fetch("https://restcountries.eu/rest/v2/all")
//   //       .then((res) => res.json())
//   //       .then(
//   //         (result) => {
//   //           this.setState({
//   //             isLoaded: true,
//   //             items: result.items,
//   //           });
//   //         },
//   //         // Note: it's important to handle errors here
//   //         // instead of a catch() block so that we don't swallow
//   //         // exceptions from actual bugs in components.
//   //         (error) => {
//   //           this.setState({
//   //             isLoaded: true,
//   //             error,
//   //           });
//   //         }
//   //       );
//   //   }

//   render() {
//     // const { error, isLoaded, items } = this.state;

//     // if (error) {
//     //   return <div>Error: {error.message}</div>;
//     // } else if (!isLoaded) {
//     //   return <div>Loading...</div>;
//     // } else {
//     const { flag, name, population, region, capital } = this.props;

//     return (
//       <div className="country-box">
//         <img src={flag} alt="A country's flag" className="flag" />
//         <div className="country-stats">
//           <h2 className="country-name">{name}</h2>
//           <p className="country-population-label font-600">
//             Population:{" "}
//             <span className="population-value font-300">
//               {population.toLocaleString("en-US")}
//             </span>
//           </p>
//           <p className="region-label font-600">
//             Region: <span className="region-name font-300">{region}</span>
//           </p>
//           <p className="capital-label font-600">
//             Capital: <span className="capital-name font-300">{capital}</span>
//           </p>
//         </div>
//       </div>
//     );
//   }
// }
// //}

// export default CountryBox;
