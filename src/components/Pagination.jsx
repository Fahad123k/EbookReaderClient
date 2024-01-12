import React, { useContext } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { BookContext } from '../BookContext/BookProvider';
const Pagination = () => {
    const {
        currentPage,
        setCurrentPage,
        totalPage } = useContext(BookContext);
    return (
        <div className='p-1 '>
            <span className='text-gray-600'> Page: {currentPage} of {totalPage} </span>
            <button
                className='m-4 bg-blue-500 text-white px-4 py-2 rounded-md transition duration-300 hover:bg-blue-700'
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
            >
                <FaArrowLeft />
            </button>

            <button
                className='btn border border-red px-4 py-2 rounded-md transition duration-300 hover:bg-red-700 hover:text-white'
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPage}
            >
                <FaArrowRight />
            </button>
        </div>
    )
}

export default Pagination