import React, { Component } from "react";
import { BiSearchAlt2 } from "react-icons/bi";

class ExpandingSearchBar extends Component {
  handleKeyPress = () => {
    this.props.handleSortCategorySelect("name", this.state.searchInput);
  };

  handleOnChange = (event) => {
    this.setState({ searchInput: event.target.value });
    this.props.handleSortCategorySelect("name", event.target.value);
  };

  render() {
    return (
      <div className="search hover-color">
        <input
          type="search"
          className="search-input foreground-color"
          placeholder="Search for a country..."
          onChange={(e) => {
            this.handleOnChange(e);
          }}
          onKeyPress={(event) => event.key === "Enter" && this.handleKeyPress()}
        ></input>
        <button className="search-btn hover-color" aria-label="Open Search">
          <BiSearchAlt2 className="search-icon" />
        </button>
      </div>
    );
  }
}

export default ExpandingSearchBar;
