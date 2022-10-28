import React from "react";

const RoomsLeft = ({ roomsRemaining }) => {
  if (roomsRemaining < 10) {
    return (
      <span className="hotel__rooms-remaining">
        Only {roomsRemaining} rooms left!
      </span>
    );
  } else {
    return null;
  }
};

export default RoomsLeft;
