"use client"
// app.js
import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';

const testimonials = [
  {
    name: 'John Doe',
    review: 'SnabbDeal is fantastic! They made my selling experience so much easier and hassle-free.',
    profileImage: 'https://via.placeholder.com/150',
  },
  {
    name: 'Jane Smith',
    review: 'I love how quick and reliable SnabbDeal is. They took care of everything!',
    profileImage: 'https://via.placeholder.com/150',
  },
  {
    name: 'Samuel Green',
    review: 'Great service, highly recommended! I will definitely use SnabbDeal again.',
    profileImage: 'https://via.placeholder.com/150',
  },
];

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="px-4 py-8">
      {/* Other sections */}

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-center">What People Say</h2>
        <div className="relative mt-4">
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-lg p-4">
              <div className="flex justify-center mb-4">
                {/* <img
                  src={testimonials[currentIndex].profileImage}
                  alt={`${testimonials[currentIndex].name} profile`}
                  className="w-24 h-24 rounded-full object-cover"
                /> */}
              </div>
              <p className="text-lg italic text-center">"{testimonials[currentIndex].review}"</p>
              <p className="mt-4 text-center font-bold">- {testimonials[currentIndex].name}</p>
            </div>
          </div>
          <button
            onClick={handlePrevClick}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#023e8a] text-white p-2 rounded-sm shadow-md hover:bg-gray-800 focus:outline-none"
          >
            &#8249;
          </button>
          <button
            onClick={handleNextClick}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#023e8a] text-white p-2 rounded-sm shadow-md hover:bg-gray-800 focus:outline-none"
          >
            &#8250;
          </button>
        </div>
      </div>

      {/* Other sections */}
    </div>
  );
};

export default App;
