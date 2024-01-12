import React, { useContext } from 'react';
import { FaSearch } from 'react-icons/fa';
import { BookContext } from '../../BookContext/BookProvider';

const SearchComponent = () => {
  const { searchTerm, setSearchTerm, handleSearch } = useContext(BookContext);

  return (
    <div className="mt-24 flex text-center "> {/* Adjust margin as needed */}
      <input
        type="text"
        placeholder="Search by title, author, Publication year etc."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 border rounded-md w-80"
      />
      <button onClick={handleSearch} className="ml-2 p-2 bg-sky-500 text-white flex items-center rounded-md w-16 justify-center hover:bg-sky-400">
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchComponent;
