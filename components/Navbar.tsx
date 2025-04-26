import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { BiWine, BiCoffee } from 'react-icons/bi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-cream bg-opacity-95 shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container-custom flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-serif font-bold text-wine-red">Brittlestar</span>
          <div className="flex ml-2">
            <BiWine className="text-wine-red mr-1" />
            <BiCoffee className="text-coffee" />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {['Home', 'About', 'Menu', 'Events', 'Contact'].map((item) => (
            <Link 
              href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`} 
              key={item}
              className="nav-link font-medium"
            >
              {item}
            </Link>
          ))}
          <a 
            href="tel:01524956041" 
            className="btn btn-primary text-sm"
          >
            Reserve a Table
          </a>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-night p-2" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute top-full left-0 right-0 bg-cream shadow-lg"
        >
          <div className="container-custom py-4 flex flex-col space-y-4">
            {['Home', 'About', 'Menu', 'Events', 'Contact'].map((item) => (
              <Link 
                href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`} 
                key={item}
                className="nav-link text-lg py-2"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
            <a 
              href="tel:01524956041" 
              className="btn btn-primary text-center"
              onClick={() => setIsOpen(false)}
            >
              Reserve a Table
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar; 