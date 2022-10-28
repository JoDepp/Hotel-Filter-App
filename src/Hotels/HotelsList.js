import React from "react";
import Hotel from "./Hotel.js";
import { hotels } from "../data.js";

const HotelsList = ({ selectedFilters }) => {
  // Filter through the hotels first
  const filteredHotels = hotels.filter((hotel) => {
    return selectedFilters.every((filter) => hotel[filter]);
  });

  const hotelListElements = filteredHotels.map((hotel) => (
    <Hotel key={hotel.id} hotel={hotel} />
  ));
  // return a list of Hotels that match the selected filters
  // or show all hotels if no filters are selected
  return <ul className="hotels-list">{hotelListElements}</ul>;
};

export default HotelsList;
