import React from 'react';

const Sorting = () => {


  return (
    <div className="flex items-center space-x-4 m-4">
      <label htmlFor="sortOption" className="text-gray-700"
      >Sort By:</label>
      <select id="sortOption" className="p-2 border rounded-md">
        <option className='p-2 bg-white text-gray-800'>Popularity</option>
        <option className='p-2 bg-white text-gray-800'>Price: Low To High</option>
        <option className='p-2 bg-white text-gray-800'>Price: High To Low</option>
        <option className='p-2 bg-white text-gray-800'>Newest First</option>
      </select>
    </div>
  );
};

export default Sorting;
