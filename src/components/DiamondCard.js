import React, { useEffect, useRef, useState } from 'react';
// import 'animate.css';

const DiamondCard = ({ imageSrc, title }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger animation when visible
        } else {
          setIsVisible(false); // Reset visibility when not visible
        }
      },
      { threshold: 0.5 }
    );

    const currentCard = cardRef.current; // Store ref value in a variable
    if (currentCard) {
      observer.observe(currentCard);
    }

    return () => {
      if (currentCard) {
        observer.unobserve(currentCard); // Use the stored ref value in cleanup
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="flex flex-col items-center group relative mx-2 sm:mx-4"
    >
      {/* Card Container */}
      <div className="relative w-48 h-72 sm:w-56 sm:h-80 lg:w-72 lg:h-[28rem] overflow-hidden rounded-xl border-2 border-white flex flex-col">
        {/* Top Section: Image */}
        <div className="flex-1 relative">
          <img
            src={imageSrc}
            alt={title}
            className="absolute inset-0 w-full h-full object-contain rounded-t-xl"
          />
        </div>

        {/* Bottom Section: Text */}
        <div
          className={`flex items-center justify-center h-20 sm:h-24 lg:h-28 bg-forztek-blue text-white font-slab font-black uppercase text-center 
          text-xs sm:text-sm lg:text-base xl:text-base transition-opacity ${isVisible ? 'animate__animated animate__fadeInUp' : 'opacity-0'
            }`}
        >
          <span>{title}</span>
        </div>
      </div>
    </div>
  );
};

export default DiamondCard;
