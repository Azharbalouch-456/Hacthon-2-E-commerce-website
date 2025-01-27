



"use client";

import { useState } from "react";

export default function RoomInspiration() {
  const images = [
    { src: "/01.webp", },
    { src: "/image8.webp", title:"Modern Vibes", subtitle: "02 — Living Room" },
    { src: "/image6.webp" ,title: "Cozy Comfort", subtitle: "03 — Study Room" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const currentImage = images[currentIndex];

  return (
    <div className="bg-[#FCF8F3] min-h-screen flex items-center justify-center mt-7">
      <div className="container mx-auto p-6 flex flex-col lg:flex-row items-center gap-6">
        {/* Text Section */}
        <div className="text-center lg:text-left flex-1">
          <h1 className="text-4xl font-bold text-gray-800">
            50+ Beautiful rooms inspiration
          </h1>
          <p className="mt-4 text-gray-600">
            Our designer already made a lot of beautiful prototypes of rooms
            that inspire you.
          </p>
          <button className="mt-6 px-6 py-3 bg-yellow-600 text-white font-medium rounded-lg hover:bg-yellow-700">
            Explore More
          </button>
        </div>

        {/* Image Section */}
        <div className="relative flex-1 max-w-md lg:max-w-none">
          <img
            src={currentImage.src}
            alt=""
            className="rounded-lg shadow-md transition-all duration-500 ease-in-out"
          /> 
          {/* <div className="absolute bottom-4 left-4 bg-white bg-opacity-80 p-4 rounded-lg shadow-lg">
            <p className="text-sm text-gray-500">{currentImage.subtitle}</p>
            <h2 className="text-lg font-semibold text-gray-800">
              {currentImage.title}
            </h2>
          </div> */}

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
     </div>
  );
}


