import React, { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

const SearchBar = ({ handleSubmit }) => {
  const [input, setInput] = useState(null);
  return (
    <header>
      <input
        type="text"
        id="search-input"
        onChange={(e) => setInput(e.target.value)}
      />
      <button id="search" onClick={() => handleSubmit(input)}>
        <FaMagnifyingGlass />
      </button>
    </header>
  );
};

export default SearchBar;
