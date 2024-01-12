import React from 'react';

const Sorting = () => {
  return (
    <div className="flex items-center space-x-4 m-4">
        <div className="flex items-center">
        <input
          type="checkbox"
          id="changeOrder"
          className=" w-6 h-6  border-2 border-gray-300 rounded-md checked:bg-sky-500 checked:border-transparent focus:outline-none focus:border-sky-500 focus:ring focus:ring-sky-200"
        />
        <label htmlFor="changeOrder" className="ml-2 text-gray-700">
          Change Order
        </label>
      </div>

      <select id="sortOption" className="p-2 border rounded-md">
        <option>Popularity</option>
        <option>Price: Low To High</option>
        <option>Price: High To Low</option>
        <option>Newest First</option>
      </select>
    </div>
  );
};

export default Sorting;
