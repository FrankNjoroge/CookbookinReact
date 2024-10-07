import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

const SearchBar = () => {
  return (
    <header>
      <input type="text" id="search-input" />
      <button id="search">
        {/* <i class="fa-solid fa-magnifying-glass"></i> */}
        <FaMagnifyingGlass />
      </button>
    </header>
  );
};

export default SearchBar;
