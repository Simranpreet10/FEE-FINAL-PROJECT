import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import PhoneImage from '../assets/Images/phone.png'; 
import Fashion from '../assets/Images/fashion.png'; 
import Electronics from '../assets/Images/electronics.png'; 
import Activewears from '../assets/Images/active_wears.png'; 

const Offers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      text: "20% off on Mobiles & more .*",
      items: ["Apple mobiles", "Samsung mobile", "Micromax mobile", "Nokia mobile", "HTC mobile", "Sony mobile"],
      image: PhoneImage,
      color: "bg-white"
    },
    {
      text: "50% off on Fashion wear & more .*",
      items: ["Bags and wallets", "Belts", "Bootees", "Cold weather", "Jewelry", "Ties and hats"],
      image: Fashion,
      color: "bg-white"
    },
    {
      text: "20% off on Activewear & more .*",
      items: ["Bras", "Hair accessories", "Hats and gloves", "Lifestyle", "Scarves", "Small leathers"],
      image: Activewears,
      color: "bg-orange-500"
    },
    {
      text: "30% off on Electronics & more .*",
      items: ["Washing machines", "Refrigerators", "Air conditioners", "Stove hood", "Microwaves", "Ovens"],
      image: Electronics,
      color: "bg-white"
    }
  ];

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevIndex => prevIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < cards.length - 3) {
      setCurrentIndex(prevIndex => prevIndex + 1);
    }
  };

  return (
    <div className="bg-gray-200 p-12 mt-0 relative">
      <button
        className={`absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full ${currentIndex === 0 ? 'pointer-events-none' : ''}`}
        onClick={handlePrev}
      >
        <FontAwesomeIcon icon={faChevronLeft} className="text-blue-500" />
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full"
        onClick={handleNext}
      >
        <FontAwesomeIcon icon={faChevronRight} className="text-blue-500" />
      </button>
      <div className="flex justify-center space-x-4 overflow-x-auto">
        {cards.slice(currentIndex, currentIndex + 3).map((card, index) => (
          <div
            key={index}
            className={`w-1/3 h-80 overflow-hidden p-4 shadow-md ${card.color} relative`}
          >
            <h2 className="text-sky-500 font-bold text-2xl mb-4">{card.text}</h2>
            <ul className="list-disc pl-4">
              {card.items.map((item, idx) => (
                <li key={idx} className="text-gray-700">{item}</li>
              ))}
            </ul>
            <img src={card.image} alt="Deal Image" className="w-45 h-45 absolute top-9 right-4 hidden sm:block" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;




