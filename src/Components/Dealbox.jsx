import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import dealImage from '../assets/Images/3mobiles.png';
import first from  '../assets/Images/first.jpg';

const DealBox = () => {
  return (
    <div className="bg-gray-200 pb-0 pl-12 pr-12 pt-12">
      <div className="flex flex-row space-x-4 mb-4">
        <div className="w-2/3 bg-white p-4 shadow-md relative">
          <img src={first} className="absolute inset-0 w-full h-full " alt="First Image" />
        </div>
        <div className="w-1/3 bg-white p-4 shadow-md">
          <h2 className="text-sky-500 font-bold text-3xl mb-1 text-center">TODAY'S DEAL</h2>
          <p className="text-black text-sm font-bold text-center">END IN:</p>
          <p className="flex justify-center items-center text-red-500 font-bold">
            01:
            <span className="text-red-500 font-bold">15:41</span>
          </p>
          <img src={dealImage} alt="Deal Image" className="w-2/4 h-auto mx-auto mb-2" />
          <p className="text-gray-700 font-bold text-center">Samsung 16Gb microSD Class 6</p>
          <div className="flex justify-between items-center mt-2">
            <div>
              <p className="text-gray-700 line-through inline">Rs. 499</p>
              <span className="text-green-500 font-medium ml-2">[30% off]</span>
            </div>
            <p className="text-sky-500 font-bold text-2xl">Rs. 350</p>
          </div>
        </div>
      </div>
      <div className="bg-white p-3 shadow-md flex justify-center items-center space-x-2">
        <p className="text-gray-700 font-medium">Go quickly to</p>
        <i className="fas fa-arrow-circle-right text-sky-500"></i>
        <span className="text-gray-700 font-medium">Mobiles : Sports : Tablets : Bath Towels : LED Bulbs : TV : Washing Machines : Laptops : Headphones : Fans : Travel : Books</span>
      </div>
    </div>
  );
};

export default DealBox;

