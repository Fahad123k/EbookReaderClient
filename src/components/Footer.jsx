// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white sm:justify-center">
    <div className="container mx-auto flex flex-wrap justify-around p-6">
        {/* ABOUT COMPANY */}
        <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
          <h2 className="text-xl  font-bold mb-2">ABOUT COMPANY</h2> 
          <ul>
            <li>
              <Link className="text-sm" to="/">Home</Link>
            </li>
            <li>
              <Link className="text-sm" to="/about">About Us</Link>
            </li>
            <li>
              <Link className="text-sm" to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link className="text-sm" to="/enquiry">Enquiry</Link>
            </li>
            <li>
              <Link className="text-sm" to="/support">Support</Link>
            </li>
          </ul>
        </div>

        {/* SOLUTIONS FOR EDUCATION */}
        <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
          <h2 className="text-xl font-bold mb-2">SOLUTIONS FOR EDUCATION</h2> 
          <ul>
            <li>
              <Link className="text-sm" to="/online-courses">Online Courses and Exams</Link>
            </li>
            <li>
              <Link className="text-sm" to="/language-lab">Digital Language Lab</Link>
            </li>
            <li>
              <Link className="text-sm" to="/digital-school">Digital School</Link>
            </li>
            <li>
              <Link className="text-sm"  to="/lecture-studio">Digital Lecture Studio</Link>
            </li>
            <li>
              <Link className="text-sm" to="/grievance-software">Grievance Redressal Software</Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
          <h2 className="text-xl font-bold mb-2">CONTACT</h2>
          <p>Bindapur, 40 feet Road, New Delhi-110035</p>
          <p>(+91) 9122812078</p>
          <p>ahmad.nishu08@gmail.com</p>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="bg-gray-700 text-gray-400 text-center py-3 mx-0"> 
        <p>&copy; E.BookReader Info Solution Pvt. Ltd. All rights reserved. Website: <Link className="text-sm" to="#" target="_blank" rel="noopener noreferrer">www.google.com</Link></p>
      </div>

   
    </footer>
  );
};

export default Footer;
