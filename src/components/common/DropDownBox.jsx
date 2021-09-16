import React, { Component } from "react";
import { FiChevronDown } from "react-icons/fi";

class DropDownBox extends Component {
  state = {
    isOpen: false,
  };

  handleOnClick = (sortCategory, item) => {
    // send the sort values to the parent element
    this.props.onItemSelect(sortCategory, item);
    //open and close the menu
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { dropdownTitle, sortCategory, dropdownItems } = this.props;

    return (
      <div className="dropdown">
        <button
          className="dropdown-toggle foreground-color hover-color flex flex-ai-c flex-jc-sb" aria-label="Regions"
          onClick={() => {
            this.setState({ isOpen: !this.state.isOpen });
          }}
        >
          {dropdownTitle}
          <FiChevronDown className="chevron-icon" />
        </button>
        <ul
          className="dropdown-menu foreground-color hover-color"
          style={{ display: this.state.isOpen ? "block" : "none" }}
        >
          {dropdownItems.map((item) => (
            <li key={item}>
              <button
                className="dropdown-item foreground-color hover-color" aria-label={item}
                onClick={() => this.handleOnClick(sortCategory, item)}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default DropDownBox;
