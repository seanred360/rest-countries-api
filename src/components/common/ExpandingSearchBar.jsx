import React, { Component } from "react";
import { BiSearchAlt2 } from "react-icons/bi";

class ExpandingSearchBar extends Component {
  state = { active: "", searchInput: "" };

  handleOnClick = () => {
    const setActive = !this.state.active ? "active" : "";
    this.setState({ active: setActive });
  };

  handleKeyPress = () => {
    this.props.handleSortCategorySelect("name", this.state.searchInput);
  };

  handleOnChange = (event) => {
    this.setState({ searchInput: event.target.value });
    this.props.handleSortCategorySelect("name", event.target.value);
  };

  render() {
    return (
      <div className={"search " + this.state.active}>
        <input
          type="search"
          className="input"
          placeholder="Search for a country..."
          // onChange={(e) => {
          //   this.setState({ searchInput: e.target.value });
          // }}
          onChange={(e) => {
            this.handleOnChange(e);
          }}
          onKeyPress={(event) => event.key === "Enter" && this.handleKeyPress()}
        ></input>
        <button className="search-btn">
          <BiSearchAlt2 className="search-icon" onClick={this.handleOnClick} />
        </button>
      </div>
    );
  }
}

export default ExpandingSearchBar;
