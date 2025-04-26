import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Array of hero images - these should be placed in the public/images/hero folder
const heroImages = [
  '/images/hero/hero1.jpg',
  '/images/hero/hero2.jpg',
  '/images/hero/hero3.jpg',
  '/images/hero/hero4.jpg',
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance to next slide
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % heroImages.length);
    }, 6000);

    return () => clearInterval(slideInterval);
  }, []);

  // Handle manual navigation
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? heroImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === heroImages.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Slides container */}
      <div 
        className="absolute h-full w-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {/* Map all images side-by-side */}
        <div className="flex h-full">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className="min-w-full h-full flex-shrink-0 relative"
            >
              <Image
                src={image}
                alt={`Brittlestar ${index + 1}`}
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                priority={index <= 2} // Prioritize loading first 3 images
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation controls */}
      <div className="absolute top-1/2 transform -translate-y-1/2 w-full z-20 flex justify-between px-4">
        <button 
          onClick={goToPrevious}
          className="bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-colors duration-300"
          aria-label="Previous image"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={goToNext}
          className="bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-colors duration-300"
          aria-label="Next image"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Hero Content */}
      <div className="container-custom relative z-10 h-full flex flex-col justify-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Brittlestar</h1>
          <h2 className="text-2xl md:text-3xl mb-6 font-light text-cream opacity-90">
            Wine Bar & Coffee House
          </h2>
          <p className="text-lg md:text-xl mb-8 text-cream opacity-80">
            A peaceful retreat by the sea. Indulge in fine wines, artisanal coffees, and light cuisine while enjoying the beautiful views of Morecambe Bay.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#menu" 
              className="btn btn-primary w-full sm:w-auto text-center"
            >
              View Our Menu
            </a>
            <a 
              href="tel:01524956041" 
              className="btn bg-white text-night hover:bg-cream w-full sm:w-auto text-center"
            >
              Make a Reservation
            </a>
          </div>
        </motion.div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-white w-4' : 'bg-white/50'
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero; 