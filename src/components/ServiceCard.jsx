import React from "react";

const ServiceCard = ({ image, name, description }) => {
  return (
    <div className="w-full h-full bg-gray-600 rounded-2xl text-white flex flex-col overflow-hidden shadow-xl">
      <img className="rounded" src={image} alt="" />
      <div className="p-4 flex flex-col gap-4">
        <h1 className="text-center uppercase text-2xl">{name}</h1>
        <p className="text-center">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
