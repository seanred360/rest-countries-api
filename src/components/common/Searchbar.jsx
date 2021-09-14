import { BiSearchAlt2 } from "react-icons/bi";

const SearchBar = () => {
  return (
    <form className="search-bar flex flex-ai-c flex">
      <BiSearchAlt2 className="search-icon" />
      <input type="search" placeholder="Search for a country..."></input>
    </form>
  );
};

export default SearchBar;
