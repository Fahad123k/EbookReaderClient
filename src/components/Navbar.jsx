import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdHome, MdInfo, MdMailOutline, MdMenu, MdMenuOpen,MdInput ,MdAccountCircle} from 'react-icons/md';
import { FaSwatchbook } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 fixed w-full shadow-sm border-black border-b z-0"  style={{ height: '62px' }}>
      <div className="container mx-auto flex justify-between items-center ">
        <Link to="/" className="flex items-center text-white text-2xl font-bold">
          <FaSwatchbook className="text-3xl mr-2 text-sky-500" />E.BookReader
        </Link>
        {/* Mobile menu icon */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:text-gray-300"
          >
            {!isMenuOpen ? <MdMenu className='text-3xl' /> : <MdMenuOpen className='text-3xl' />}

          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden lg:flex space-x-4 ">
          
          <Link to="/" className="text-white flex items-center hover:text-gray-300">
            <MdHome className="mr-1" /> Home
          </Link>
          <Link to="/about" className="text-white flex items-center hover:text-gray-300">
            <MdInfo className="mr-1" /> About
          </Link>
          <Link to="/contact" className="text-white flex items-center hover:text-gray-300">
            <MdMailOutline className="mr-1" /> Contact
          </Link>

          <Link to="/login" className="text-white flex items-center hover:text-gray-300">
            <MdInput className="mr-1" /> Login
          </Link>
          <Link to="/books" className="text-white flex items-center hover:text-gray-300">
            <MdAccountCircle className="mr-1" /> AdminPanel
          </Link>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-gray-800">
            <div className="flex flex-col p-4">
              <Link to="/" className="text-white flex items-center py-2 hover:text-gray-300">
                <MdHome className="mr-1" /> Home
              </Link>
              <Link to="/about" className="text-white flex items-center py-2 hover:text-gray-300">
                <MdInfo className="mr-1" /> About
              </Link>
              <Link to="/contact" className="text-white flex items-center py-2 hover:text-gray-300">
                <MdMailOutline className="mr-1" /> Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
