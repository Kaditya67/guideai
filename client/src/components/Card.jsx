import React from "react";

const Card = ({ title, value, description, color, icon: Icon }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 flex items-start border-l-4" style={{ borderColor: color }}>
      <div className="p-3 rounded-full bg-opacity-20" style={{ backgroundColor: color }}>
        {Icon && <Icon className="text-sm" style={{ color }} />}
      </div>
      <div className="ml-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-xl font-bold" style={{ color }}>{value}</p>
        <p className="text-gray-600 text-sm mt-2">{description}</p>
      </div>
    </div>
  );
};

export default Card;
