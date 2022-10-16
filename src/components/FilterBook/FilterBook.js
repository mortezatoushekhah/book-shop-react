import React from "react";
import "./FilterBook.css";

const FilterBook = ({ onFilter }) => {
  return (
    <div className="search-bar">
      <input
        className="search"
        type="text"
        placeholder="Search Book..."
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
};

export default FilterBook;
