import React, { Component } from "react";
import axios from "axios";
import _ from "lodash";
import NavBar from "./common/navBar";
import SearchBar from "./common/searchbar";
import DropDownBox from "./common/dropDownBox";
import GridSquares from "./gridSquares";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";

class RestCountriesApp extends Component {
  state = {
    error: null,
    isLoaded: false,
    countries: [],
    regions: ["Africa", "Americas", "Asia", "Europe", "Oceania"],
    currentPage: 1,
    pageSize: 8,
    sortCategory: "",
    sortValue: "",
  };

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

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handlesortCategorySelect = (sortCategory, sortValue) => {
    this.setState({
      sortCategory: sortCategory.toLowerCase(),
      sortValue,
      currentPage: 1,
    });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortCategory,
      sortValue,
      countries: allCountries,
    } = this.state;

    const filtered =
      sortCategory && sortValue
        ? allCountries.filter((country) => country[sortCategory] === sortValue)
        : allCountries;

    const sorted = _.orderBy(filtered, sortCategory, "asc");

    const countries = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: countries };
  };

  render() {
    const { regions, pageSize, currentPage } = this.state;

    const { totalCount, data: countries } = this.getPagedData();

    return (
      <main>
        <NavBar />
        <div className="container">
          <div className="search-and-dropdown-row">
            <SearchBar />
            <DropDownBox
              dropdownTitle={"Filter by Region"}
              sortCategory={"region"}
              dropdownItems={regions}
              onItemSelect={this.handlesortCategorySelect}
            />
          </div>

          {/* this has a different level of abstraction it should be raised to a higher component */}
          <GridSquares paginatedItems={countries} />

          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </main>
    );
  }
}

export default RestCountriesApp;
