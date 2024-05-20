import React from 'react';
import { AiOutlineClockCircle, AiOutlineQuestionCircle } from 'react-icons/ai';
import { FaPlane } from "react-icons/fa";

const Navbar4 = () => {
  return (
    <nav className="bg-white flex justify-center items-center h-12 px-4 ">
      {/* Information Panels */}
      <ul className="flex space-x-20">
        <li className="flex items-center space-x-2">
          <FaPlane className="text-2xl mb-2" />
          <div className="flex flex-col">
            <span className="text-sm">FREE SHIPPING</span>
            <span className="text-xs text-gray-400">On orders over $200</span>
          </div>
        </li>
        <li className="flex items-center space-x-2">
          <AiOutlineClockCircle className="text-2xl mb-2" />
          <div className="flex flex-col">
            <span className="text-sm">30 DAYS RETURNS</span>
            <span className="text-xs text-gray-400">Money Back Guarantee</span>
          </div>
        </li>
        <li className="flex items-center space-x-2">
          <AiOutlineQuestionCircle className="text-2xl mb-2" />
          <div className="flex flex-col">
            <span className="text-sm">24/7 SUPPORT</span>
            <span className="text-xs text-gray-400">Lifetime Support</span>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar4;


