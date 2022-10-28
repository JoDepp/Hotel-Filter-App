import React from "react";
import Perk from "./Perk.js";
import RoomsLeft from "./RoomsLeft.js";
import BestsellerFlag from "./BestsellerFlag.js";

const Hotel = ({
  hotel: {
    name,
    imageSrc,
    rating,
    reviewCount,
    hasFreeCancellation,
    includesBreakfast,
    hasParking,
    allowsPets,
    hasRoomService,
    hasFitnessCenter,
    pricePerNight,
    roomsRemaining,
    isBestSeller
  }
}) => (
  <li className="hotel">
    <img src={imageSrc} alt="hotel main entrance" className="hotel__image" />
    <div className="hotel__text">
      <div className="hotel__header">
        <h3 className="hotel__name">{name}</h3>
        <span className="hotel__rating">{rating}</span>
      </div>
      <div className="hotel__main">
        <div>
          <span>{reviewCount} reviews</span>
          <Perk perk="Free cancellation" hasPerk={hasFreeCancellation} />
          <Perk perk="Breakfast included" hasPerk={includesBreakfast} />
          <Perk perk="Onsite parking" hasPerk={hasParking} />
          <Perk perk="Pet friendly building" hasPerk={allowsPets} />
          <Perk perk="Order food to your room" hasPerk={hasRoomService} />
          <Perk perk="Fitness center access" hasPerk={hasFitnessCenter} />
          <RoomsLeft roomsRemaining={roomsRemaining} />
        </div>
        <div className="hotel__main--right">
          <span>
            <span className="hotel__price">${pricePerNight}</span> per night
          </span>
          <span>Includes taxes and charges</span>
          <button className="hotel__see-rooms">
            See our last available rooms >
          </button>
        </div>
      </div>
    </div>
    <BestsellerFlag isBestseller={isBestSeller} />
  </li>
);

export default Hotel;
