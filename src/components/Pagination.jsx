import React, { useContext } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { BookContext } from '../BookContext/BookProvider';

const Pagination = () => {
  const { currentPage, setCurrentPage, totalPage } = useContext(BookContext);

  const generatePageNumbers = () => {
    const pageNumbers = [];
    const maxButtonsToShow = 5;

    for (let i = 1; i <= totalPage; i++) {
      if (
        i === 1 ||
        i === totalPage ||
        (i >= currentPage - Math.floor(maxButtonsToShow / 2) &&
          i <= currentPage + Math.floor(maxButtonsToShow / 2))
      ) {
        pageNumbers.push(i);
      } else if (
        (i === currentPage - Math.floor(maxButtonsToShow / 2) - 1 &&
          currentPage - Math.floor(maxButtonsToShow / 2) > 2) ||
        (i === currentPage + Math.floor(maxButtonsToShow / 2) + 1 &&
          currentPage + Math.floor(maxButtonsToShow / 2) < totalPage - 1)
      ) {
        pageNumbers.push('...');
      }
    }

    return pageNumbers;
  };

  return (
    <div className='p-4 flex items-center justify-between'>
      <span className='text-gray-600'>Page: {currentPage} of {totalPage}</span>
      <div className='flex items-center space-x-2'>
        <button
          className='px-3 py-2 bg-blue-500 text-white rounded-md transition duration-300 hover:bg-blue-700 disabled:opacity-50'
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <FaArrowLeft />
        </button>

        {generatePageNumbers().map((page, index) => (
          <div
            key={index}
            className={`px-3 py-2 rounded-md text-center ${
              page === currentPage
                ? 'bg-red-700 text-white'
                : 'bg-gray-200 hover:bg-red-700 hover:text-white cursor-pointer'
            } ${
              page === '...'
                ? 'opacity-50 cursor-not-allowed'
                : 'cursor-pointer'
            } disabled:opacity-50`}
            onClick={() => page !== '...' && setCurrentPage(page)}
            disabled={page === '...'}
          >
            {page}
          </div>
        ))}

        <button
          className='px-3 py-2 bg-red-500 text-white rounded-md transition duration-300 hover:bg-red-700 disabled:opacity-50'
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPage}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
