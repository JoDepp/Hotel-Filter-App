import React, { useState } from "react";
import Hotels from "./Hotels/HotelsList";
import Filters from "./Filters/FiltersList";

const App = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  //toggleFilter function will be triggered as a response to onChange for every checkbox
  const toggleFilter = (clickedFilterKey) => {
    // is it already in the selected Filters array?
    const alreadySelected = selectedFilters.includes(clickedFilterKey);
    // If so, let's remove it
    if (alreadySelected) {
      setSelectedFilters((prevFilters) =>
        prevFilters.filter((filter) => filter !== clickedFilterKey)
      );
    } else {
      // otherwise let's add it
      setSelectedFilters([...selectedFilters, clickedFilterKey]);
    }
  };

  return (
    <div className="App">
      <Filters selectedFilters={selectedFilters} toggleFilter={toggleFilter} />
      <Hotels selectedFilters={selectedFilters} />
    </div>
  );
};

export default App;
