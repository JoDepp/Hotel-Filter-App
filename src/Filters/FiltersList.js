import React from "react";
import Filter from "./Filter.js";
import { filterOptions } from "../data.js";

const FiltersList = ({ selectedFilters, toggleFilter }) => {
  const filterListElements = filterOptions.map((filter) => (
    <Filter
      key={filter.key}
      filter={filter}
      isChecked={selectedFilters.includes(filter.key)}
      toggleFilter={toggleFilter}
    />
  ));

  return (
    <div className="filters">
      <h5 className="filters__header">Filter By:</h5>
      <hr />
      <ul className="filters-list">{filterListElements}</ul>
    </div>
  );
};

export default FiltersList;
