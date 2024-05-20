import React from 'react';
import { FaCcDiscover, FaCcMastercard, FaCcPaypal, FaCcVisa, FaRegCopyright } from 'react-icons/fa';
import { RiMastercardLine } from 'react-icons/ri';

const Footer3 = () => {
  return (
    <footer className="bg-gray-800 py-4 text-center px-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center text-white">
        <p className="text-sm text-white ml-1">Copyright</p>
          <FaRegCopyright className="text-lg text-white" />
          <p className="text-sm text-white ml-1">2015 mocart.com All rights reserved</p>
        </div>
        <div className="flex items-center space-x-4">
          <FaCcDiscover className="text-2xl text-blue-500" />
          <FaCcMastercard className="text-2xl text-blue-500" />
          <FaCcPaypal className="text-2xl text-blue-500" />
          <FaCcVisa className="text-2xl text-blue-500" />
        </div>
        <div className="flex items-center">
          <p className="text-sm text-white">Design by:</p>
          <p className="text-sm text-white ml-1">PSDFreebies.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer3;
