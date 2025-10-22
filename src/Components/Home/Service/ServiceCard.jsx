import React from "react";

const ServiceCard = ({ service }) => {
  const { icon, title, description } = service;
  return (
    <div
      className="bg-white p-6 border border-transparent hover:border-green-600 hover:bg-green-50 shadow-md rounded-lg
     hover:shadow-lg transition duration-300 text-center group cursor-pointer"
    >
      <div className="flex justify-center mb-4 text-lime-500 group-hover:text-green-700 transition duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-green-700 transition duration-300">
        {title}
      </h3>
      <p className="text-gray-600 text-sm group-hover:text-gray-700 transition duration-300">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
