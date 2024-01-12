// FeatureCard.jsx
import React from 'react';


const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="border-2 h-80  w-50 border-gray-300 rounded-lg overflow-hidden m-4 relative transition-transform duration-300 hover:shadow-xl transform hover:scale-105">
      <div className="bg-sky-500 text-white py-4 px-6 flex flex-col items-center">
        <div className="mb-2 flex justify-center">
          {icon}
        </div>
        <h6 className="md:text-xl lg:text-2xl font-semibold">{title}</h6>
      </div>
      <div className="p-6 overflow-hidden">
        <p className="text-gray-700 ">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
