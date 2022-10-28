import React from "react";

const Perk = ({ hasPerk, perk }) => {
  if (hasPerk) {
    return <span className="hotel__perks">{perk}</span>;
  } else {
    return null;
  }
};

export default Perk;
