import React, { useState, useContext } from 'react';
import Spinner from '../../components/Spinner';
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import BookTable from './BookTable';
import BookCard from './BookCard';
import AdminSidebar from '../../components/admincomponents/AdminSiderbar';
import { BookContext } from '../../BookContext/BookProvider';
import Pagination from '../../components/Pagination';

const BookHome = () => {
  const { books, loading } = useContext(BookContext);
  const [showType, setShowType] = useState('table');

  const handleChangeType = () => {
    setShowType(prevType => prevType === 'table' ? 'card' : 'table');
  };

  return (
    <div className='flex flex-row justify-center p-2 '>
      <AdminSidebar />
      <div className='bg-white rounded-lg shadow-md ml-64 mt-16'>
        <div className='flex items-center justify-between mb-4'>
          <div className='flex p-2 '>
            <h3 className='text-3xl mx-4'>Book List</h3>
            <div className='flex items-center gap-x-4'>
              <button
                className='bg-sky-300 hover:bg-sky-600 text-white px-4 py-1 rounded-lg'
                onClick={handleChangeType}
              >
                Change Type
              </button>
              <Link to='/books/create'>
                <MdOutlineAddBox className='text-sky-800 text-4xl hover:text-sky-600' />
              </Link>
            </div>
          </div>
          <Pagination/>
        </div>

        {loading ? (
          <Spinner />
        ) : showType === "table" ? (
          <BookTable books={books} />
        ) : (
          <BookCard books={books} />
        )}
      </div>
    </div>
  );
};

export default BookHome;
