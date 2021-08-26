import React, { Component } from "react";
import { BiSearchAlt2 } from "react-icons/bi";

class SearchBar extends Component {
  state = {};
  render() {
    return (
      <form className="search-bar">
        <BiSearchAlt2 className="search-icon" />
        <input
          type="search"
          placeholder="Search for a country..."
        ></input>
      </form>
    );
  }
}

export default SearchBar;
