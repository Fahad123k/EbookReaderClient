import React from 'react';
import { Link } from 'react-router-dom';
import { MdDashboard, MdAccountCircle, MdLibraryBooks } from 'react-icons/md';

const AdminSidebar = () => {
  return (
    <div className="bg-gray-800 text-white h-full p-4 min-h-[1000px] mt-16 fixed top-0 left-0 w-64">
      {/* fixed left-0 top-20 bottom-0" */}
      <h2 className="text-2xl font-semibold mb-6">Admin Panel</h2>
      <ul>
        <li className="mb-4">
          <Link to="/dashboard" className="flex items-center hover:text-gray-300">
            <MdDashboard className="text-xl mr-2" />
            Dashboard
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/profile" className="flex items-center hover:text-gray-300">
            <MdAccountCircle className="text-xl mr-2" />
            Profile
          </Link>
        </li>
        <li>
          <Link to="/books" className="flex items-center hover:text-gray-300">
            <MdLibraryBooks className="text-xl mr-2" />
            Books
          </Link>
        </li>
        {/* Add more links as needed */}
      </ul>
    </div>
  );
};

export default AdminSidebar;
