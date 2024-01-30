import React, { useContext } from 'react';
import { BookContext } from '../../BookContext/BookProvider';
import Spinner from '../../components/Spinner';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import SearchComponent from './SearchBar';
import Pagination from '../../components/Pagination';
import Sorting from '../../components/Sorting';


const Ebooks = () => {
  const { books,
    loading,
    currentPage,
    setCurrentPage,
    noMoreData,
    setNoMoreData,
    totalPage } = useContext(BookContext);
  const img = `https://images.unsplash.com/photo-1587449156852-c191c00da9b3?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`;

  return (
    <div className='m-4'>
      {noMoreData && <p className="text-red-500 mt-2">No results found.</p>}
      {!loading ? (
         (
          <div>
            <div className="flex flex-col">

            <SearchComponent />
            <Sorting/>
            </div>
            <h2 className="m-4 text-gray-700 text-2xl font-bold">Book List</h2>

            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {books.map((book) => (
                <div key={book._id} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="mb-4">
                    <img src={img} alt={book.coverImageUrl} className="h-64 w-full object-cover rounded-md" />
                  </div>
                  <h2 className="text-xl font-bold">{book.title}</h2>
                  <h4 className="text-gray-600 mb-2">{book.author}</h4>
                  <hr className="my-2" />
                  <p className="text-gray-700 mb-2">{book.description}</p>
                  <p className="text-gray-700 mb-2">Language: {book.language}</p>
                  <p className="text-gray-700 mb-2">Pages: {book.pages}</p>
                  <p className="text-gray-700 mb-2">Publication Year: {book.publicationYear}</p>
                  <p className="text-gray-700 mb-2">Rating: {book.rating}</p>
                  <p className="text-gray-700 mb-2">ISBNs No: {book.ISBNs}</p>
                  <div className="flex flex-wrap">
                    {book.genre.map((item, index) => (
                      <span key={index} className="mr-2 mb-2 bg-gray-200 rounded-full px-3 py-1 text-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </ul>
           <Pagination/>  

          </div>

        )
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Ebooks;
