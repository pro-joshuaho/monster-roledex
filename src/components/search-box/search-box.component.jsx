import React from "react";
import "./search-box.styles.css";

export const SearchBox = ({ handleSearch, placeholder }) => {
  return (
    <input
      className="search"
      onChange={handleSearch}
      type="search"
      placeholder={placeholder}
    />
  );
};
