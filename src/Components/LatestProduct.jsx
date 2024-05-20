import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import laptop from '../assets/Images/laptop.jpg'; 
import camera from '../assets/Images/camera.jpg'; 
import lamp from '../assets/Images/lamp.jpg'; 
import watch from '../assets/Images/watch.webp'; 
import redmi from '../assets/Images/Redmi.webp'; 
import oven from '../assets/Images/oven.jpeg'; 

const LatestProduct = ({name}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      image: laptop,
      title: 'HP 15s Laptop',
      rating: 4.5,
      price: 68223,
      discountedPrice: 54990,
      discount: '27% OFF'
    },
    {
      image: camera,
      title: 'Canon EOS R6 Body Digital Camera [Black]',
      rating: 4.5,
      price: 215995,
      discountedPrice: 211300,
      discount: '2% OFF'
    },
    {
      image: lamp,
      title: 'Wipro Garnet 6W LED Table Lamp',
      rating: 4.5,
      price: 1500,
      discountedPrice: 1198,
      discount: '20% OFF'
    },
    {
      image: watch,
      title: 'Noise Pulse 2 Max 1.85" Display, Bluetooth Calling Smart Watch',
      rating: 4.5,
      price: 5999,
      discountedPrice: 1299,
      discount: '78% OFF'
    },
    {
      image: redmi,
      title: 'Redmi 12 5G Jade Black 6GB RAM 128GB ROM',
      rating: 4.5,
      price: 17999,
      discountedPrice: 12499,
      discount: '31% OFF'
    },
    {
      image: oven,
      title: 'LG 32 L Convection Microwave Oven',
      rating: 4.5,
      price: 23999,
      discountedPrice: 17990,
      discount: '25% OFF'
    }
  ];

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevIndex => prevIndex - 1);
    }
  };  

  const handleNext = () => {
    if (currentIndex < products.length - 5) {
      setCurrentIndex(prevIndex => prevIndex + 1);
    }
  };

  return (
    <div className="bg-gray-200 p-12 mt-0 relative">
      <h1 className="text-3xl font-semibold mb-4 ">{name}</h1>
      <div className="relative flex space-x-0 overflow-x-auto">
        {products.slice(currentIndex, currentIndex + 5).map((product, index) => (
          <div key={index} className="w-72 bg-white p-4 shadow-md flex-shrink-0 text-center">
            <img src={product.image} alt={product.title} className="w-full h-32 object-contain mb-2" />
            <p className="text-lg font-semibold mb-1">{product.title}</p>
            <div className="flex justify-center items-center mb-1">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon 
                    key={i} 
                    icon={i < Math.floor(product.rating) ? faStar : faStarHalfAlt} 
                    className="h-4 w-4"
                  />
                ))}
              </div>
              <span className="text-gray-500 ml-1">{product.rating}</span>
            </div>
            <div className="flex justify-center items-center mb-2">
              <p className="text-gray-500 line-through mr-2">{`Rs. ${product.price.toLocaleString()}`}</p>
              <p className="text-sm text-red-500 font-semibold">{product.discount}</p>
            </div>
            <p className="text-2xl text-sky-500 font-semibold">{`Rs. ${product.discountedPrice.toLocaleString()}`}</p>
          </div>
        ))}
      </div>
      <button
        className={`absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full ${currentIndex === 0 ? 'pointer-events-none' : ''}`}
        onClick={handlePrev}
      >
        <FontAwesomeIcon icon={faChevronLeft} className="text-blue-500" />
      </button>
      <button
        className={`absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full ${currentIndex >= products.length - 5 ? 'pointer-events-none' : ''}`}
        onClick={handleNext}
      >
        <FontAwesomeIcon icon={faChevronRight} className="text-blue-500" />
      </button>
    </div>
  );
};

export default LatestProduct;



