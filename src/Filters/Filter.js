import React from "react";
import { hotels } from "../data.js";

const getMatchCount = (filterKey) =>
  hotels.filter((hotel) => hotel[filterKey]).length;

const Filter = ({ filter, isChecked, toggleFilter }) => {
  // Run through the hotels to find which ones have this option
  // and calculate the length of the filtered array
  const option = filter.key;
  const matchCount = hotels.filter((hotel) => hotel[option]).length;

  return (
    <li className="filter">
      <span>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => toggleFilter(filter.key)}
          className="filter__checkbox"
        />
        {filter.display}
      </span>
      <span className="filter__match-count">{matchCount}</span>
    </li>
  );
};

export default Filter;
