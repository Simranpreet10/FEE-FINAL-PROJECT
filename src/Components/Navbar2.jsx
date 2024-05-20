import React, { useState } from 'react';
import { AiOutlineSearch, AiOutlineShoppingCart, AiOutlineLock , AiOutlineUser} from 'react-icons/ai';
import { FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../assets/Images/logo.png'; 

const Navbar2 = () => {
  const [searchTerm, setSearchTerm] = useState(''); 
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <nav className="bg-sky-800 flex justify-between items-center h-20 px-4">
      {/* Logo */}
      <div>
        <img src={logo} alt="Logo" className="h-12 w-auto pl-5" />
      </div>

      {/* Search */}
      <div className="flex items-center max-w-[500px] h-10">
        <select className="bg-white text-black px-3 py-2 h-full focus:outline-none">
          <option value="all">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
          <option value="home">Home</option>
        </select>
        <input
          type="text"
          placeholder="Search entire store here..."
          className="bg-white text-black px-3 py-2 w-full focus:outline-none h-full" // Changed text color to black
          value={searchTerm}
          onChange={handleSearch}
        />
        <button type="button" className="bg-sky-400 px-2 py-2.5 hover:bg-gray-600 focus:outline-none h-full">
          <AiOutlineSearch className="text-black h-full w-5" />
        </button>
      </div>

      {/* Icons */}
      <ul className="flex space-x-10 text-white">
        <li>
          <a href="#" className="flex flex-col items-center hover:text-gray-400">
            <AiOutlineUser className="h-5 w-5" />
            <span className="text-xs">MY ACCOUNT</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex flex-col items-center hover:text-gray-400">
            <FaMapMarkerAlt className="h-5 w-5" />
            <span className="text-xs">TRACK ORDER</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex flex-col items-center hover:text-gray-400">
            <AiOutlineLock className="h-5 w-5" />
            <span className="text-xs">LOGIN</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex flex-col items-center hover:text-gray-400">
            <AiOutlineShoppingCart className="h-5 w-5" />
            <span className="text-xs">CART</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar2;



