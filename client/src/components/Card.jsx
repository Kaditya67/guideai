import React from "react";

const Card = ({ title, value, color }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 border-l-4" style={{ borderColor: color }}>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-2xl font-bold" style={{ color }}>{value}</p>
    </div>
  );
};

export default Card;
