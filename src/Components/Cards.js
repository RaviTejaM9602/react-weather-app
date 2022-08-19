import React from "react";

const Cards = ({ data, label, unit }) => {
  return (
    <div className="item-card">
      {data} {unit}
      <div className="label">{label}</div>
    </div>
  );
};

export default Cards;
