import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import RestCountriesApp from "./pages/RestCountriesApp";
import SingleCountryStats from "./pages/SingleCountryStats";

class Main extends Component {
  state = {};
  render() {
    return (
      <Switch>
        {" "}
        {/* The Switch decides which component to show based on the current URL.*/}
        <Route exact path="/" component={RestCountriesApp}></Route>
        <Route exact path="/Single" component={SingleCountryStats}></Route>
      </Switch>
    );
  }
}

export default Main;
