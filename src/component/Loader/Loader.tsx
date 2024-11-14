import React, { useState, useEffect } from "react";

const LoadingScreen: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFlipped(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFlipped(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [isFlipped]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200 font-sans">
      <div className="text-center">
        <div
          className={`book w-50 h-75 relative perspective-1000 mb-5 ${
            isFlipped ? "flip" : ""
          }`}
        >
          <div className="cover absolute w-full h-full bg-gray-500 rounded-md shadow-md transform-style-preserve-3d transition-transform duration-500"></div>
          <div className="pages absolute w-full h-full bg-gray-100 rounded-md shadow-md transform-style-preserve-3d transition-transform duration-500"></div>
        </div>
        <div className="loading-text text-gray-600 text-lg">
          It takes a few minutes
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
