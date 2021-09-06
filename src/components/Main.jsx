import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import RestCountriesApp from "./pages/RestCountriesApp";
import SingleCountryStats from "./pages/SingleCountryStats";

class Main extends Component {
  state = { error: null, isLoaded: false, countries: [], selectedCountry: '' };

  componentDidMount() {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        this.setState({ isLoaded: true, countries: response.data });
      })
      .catch((error) => {
        this.setState({
          isLoaded: true,
          error,
        });
      });
  }

  handleSelectCountry = (selectedCountry) => {
    this.setState({selectedCountry: selectedCountry});
  };

  render() {
    const { countries, selectedCountry } = this.state;

    if (this.state.isLoaded && this.state.error)
      return <p>ERROR: CANNOT CONNECT TO API</p>;
    return (
      <Switch>
        {" "}
        {/* The Switch decides which component to show based on the current URL.*/}
        <Route
          exact
          path="/"
          component={() => (
            <RestCountriesApp
              countries={countries}
              onSelectCountry={this.handleSelectCountry}
            />
          )}
        ></Route>
        <Route
          exact
          path="/Single"
          component={() => (
            <SingleCountryStats selectedCountry={selectedCountry} />
          )}
        ></Route>
      </Switch>
    );
  }
}

export default Main;
