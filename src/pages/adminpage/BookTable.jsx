import React, { useContext } from 'react';
import { BookContext } from '../../BookContext/BookProvider';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Pagination from '../../components/Pagination';

const BookTable = ({ books }) => {
  const { currentPage, setCurrentPage, totalPage } = useContext(BookContext);

  return (
    <div className=' rounded-lg shadow-md'>
        
    

      <div className='overflow-x-auto'>
      <table className='w-full table-auto border-collapse border border-gray-300'>
        <thead>
          <tr className='bg-gray-200'>
            <th className='border p-2'>No</th>
            <th className='border p-2'>Title</th>
            <th className='border p-2'>Description</th>
            <th className='border p-2'>Author</th>
            <th className='border p-2'>Publish Year</th>
            <th className='border p-2'>Rating</th>
            <th className='border p-2'>ISBNs</th>
            <th className='border p-2'>Genre</th>
            <th className='border p-2'>Publisher</th>
            <th className='border p-2'>Language</th>
            <th className='border p-2'>Pages</th>
            <th className='border p-2'>Operations</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={book._id} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
              <td className='border p-2 text-center'>{index + 1}</td>
              <td className='border p-2'>{book.title}</td>
              <td className='border p-2'>{book.description}</td>
              <td className='border p-2'>{book.author}</td>
              <td className='border p-2'>{book.publicationYear}</td>
              <td className='border p-2'>{book.rating || '-'}</td>
              <td className='border p-2'>{book.ISBNs}</td>
              <td className='border p-2'>{book.genre.join(', ')}</td>
              <td className='border p-2'>{book.publisher}</td>
              <td className='border p-2'>{book.language}</td>
              <td className='border p-2'>{book.pages}</td>
              <td className='border p-2'>
                <div className='flex space-x-4'>
                  <Link to={`/books/details/${book._id}`}>
                    <BsInfoCircle className='text-green-600 hover:text-green-800 text-2xl' />
                  </Link>
                  <Link to={`/books/edit/${book._id}`}>
                    <AiOutlineEdit className='text-yellow-600 hover:text-yellow-800 text-2xl' />
                  </Link>
                  <Link to={`/books/delete/${book._id}`}>
                    <MdOutlineDelete className='text-red-600 hover:text-red-800 text-2xl' />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default BookTable;
