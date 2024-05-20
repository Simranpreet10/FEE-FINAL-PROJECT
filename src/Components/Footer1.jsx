import React from 'react';
import { AiOutlineClockCircle, AiOutlineQuestionCircle } from 'react-icons/ai';
import { FaPlane } from "react-icons/fa";

const Footer1 = () => {
  return (
    <nav className="bg-gray-800 flex justify-center items-center h-16 px-4">
      {/* Information Panels */}
      <ul className="flex space-x-40">
        <li className="flex items-center space-x-2">
          <FaPlane className="text-2xl text-white mb-2" />
          <div className="flex flex-col">
            <span className="text-sm text-white">FREE SHIPPING</span>
            <span className="text-xs text-gray-400 text-white">On orders over $200</span>
          </div>
        </li>
        <li className="flex items-center space-x-2">
          <AiOutlineClockCircle className="text-2xl text-white mb-2" />
          <div className="flex flex-col">
            <span className="text-sm text-white">30 DAYS RETURNS</span>
            <span className="text-xs text-white">Money Back Guarantee</span>
          </div>
        </li>
        <li className="flex items-center space-x-2">
          <AiOutlineQuestionCircle className="text-2xl text-white mb-2" />
          <div className="flex flex-col">
            <span className="text-sm text-white">24/7 SUPPORT</span>
            <span className="text-xs text-white">Lifetime Support</span>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Footer1;



