import React from 'react';

const Navbar3 = () => {
  return (
    <nav className="bg-gray-800 flex justify-center items-center h-14 px-4 gap-10">
      <div className="flex items-center" >
         <select className="bg-red-500 text-white rounded px-3 py-2 ">
          <option value="all">Show Everything</option>
          </select>
      </div>

      <ul className="flex space-x-9 text-white">
        <li>
          <a href="#" className="hover:text-gray-400 hover:underline">FASHION STORE</a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-400 hover:underline">BOOKS & MEDIA</a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-400 hover:underline">CLEARANCE SALE</a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-400 hover:underline">MOBILE PHONES</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar3;
