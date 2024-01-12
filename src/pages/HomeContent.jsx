// src/components/HomeContent.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaSwatchbook } from "react-icons/fa";
import bookImage from '../assets/book_lib.png'; // Replace with the actual path to your image

const HomeContent = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">

      <img src={bookImage} alt="Book" className="mb-4 w-60 h-100" />
      <div className="text-center">
        <div className="flex flex-col justify-start">

          <FaSwatchbook className="text-6xl text-sky-500 " />

          <h1 className="text-4xl font-bold text-gray-800 mb-2">E.BookReader</h1>
          <p className="text-lg text-gray-600 mb-6">Discover a world of knowledge at your fingertips.</p>
          <Link to="/book-categories" className="bg-sky-500 text-white py-2 px-4 rounded-full hover:bg-sky-600">
            Explore Now
          </Link>

          <br />

          <Link to="/books" className="bg-red-500 text-white py-2 px-4 rounded-full hover:bg-sky-600">
            Books Record
          </Link>
        </div>


      </div>
    </div>
  );
};

export default HomeContent;
