import React, { Component } from "react";
import axios from "axios";
import { paginate } from "../../utils/paginate";
import { sort } from "../../utils/sort";
import { toTitleCase } from "../../utils/toTitleCase";
import Spinner from "../common/Spinner";
import NotFound from "./NotFound";
import ExpandingSearchBar from "../common/ExpandingSearchBar";
import DropDownBox from "../common/DropDownBox";
import GridSquares from "../GridSquares";
import Pagination from "../common/Pagination";

class HomePage extends Component {
  state = {
    isLoaded: false,
    error: null,
    countries: [],
    regions: ["Africa", "Americas", "Asia", "Europe", "Oceania"],
    currentPage: 1,
    pageSize: 8,
    sortCategory: "",
    sortValue: "",
  };

  componentDidMount() {
    axios
      .get("https://restcountries.com/v2/all")
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

  handlePageChange = (pageNumber, totalPages) => {
    const { currentPage } = this.state;

    if (pageNumber !== "prev" && pageNumber !== "next")
      this.setState({ currentPage: pageNumber });
    else if (pageNumber === "prev" && currentPage > 1)
      this.setState({ currentPage: currentPage - 1 });
    else if (pageNumber === "next" && currentPage < totalPages)
      this.setState({ currentPage: currentPage + 1 });
  };

  handleSortCategorySelect = (sortCategory, sortValue) => {
    this.setState({
      sortCategory: sortCategory.toLowerCase(),
      sortValue: toTitleCase(sortValue),
      currentPage: 1,
    });
  };

  getPagedData = () => {
    const {
      countries: allCountries,
      pageSize,
      currentPage,
      sortCategory,
      sortValue,
    } = this.state;

    // grab the countries from the array that match the sort parameters
    // then order the filtered array of countries based on the category. Example: order the filtered countries by their name or region
    const sorted = sort(sortCategory, sortValue, allCountries);

    // return a single page of countries sliced from the total collection of countries
    const countries = paginate(sorted, currentPage, pageSize, currentPage);

    // return total number of countries that match the sort parameters,
    // and a single page of countries to be sent to a component for display
    return { totalCount: sorted.length, data: countries };
  };

  render() {
    const { regions, pageSize, currentPage, isLoaded, error } = this.state;
    const { totalCount, data: countries } = this.getPagedData();

    if (!isLoaded) return <Spinner />;
    if (error) return <NotFound />;
    if (isLoaded && !error)
      return (
        <main>
          <div className="container">
            <div className="search-and-dropdown-row">
              <ExpandingSearchBar
                handleSortCategorySelect={this.handleSortCategorySelect}
              />
              <DropDownBox
                dropdownTitle={"Filter by Region"}
                sortCategory={"region"}
                dropdownItems={regions}
                onItemSelect={this.handleSortCategorySelect}
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

export default HomePage;
