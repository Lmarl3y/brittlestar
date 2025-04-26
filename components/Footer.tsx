import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer className="bg-night text-cream pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Brittlestar</h3>
            <p className="mb-4 opacity-80">
              A chilled wine bar and coffee house by the bay in Morecambe. The perfect place to relax with a glass of wine, 
              craft coffee, and enjoy stunning views of the bay.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://www.facebook.com/Brittlestarwine/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-cream hover:text-sunset transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.instagram.com/brittlestarwine" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-cream hover:text-sunset transition-colors">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Opening Hours</h3>
            <ul className="space-y-3 opacity-80">
              <li className="flex justify-between">
                <span>Monday - Thursday</span>
                <span>9:00 am - 6:00 pm</span>
              </li>
              <li className="flex justify-between">
                <span>Friday - Saturday</span>
                <span>9:00 am - 12:00 am</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>9:00 am - 9:00 pm</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <HiOutlineLocationMarker className="mt-1 mr-3 flex-shrink-0 text-wine-red" size={20} />
                <span className="opacity-80">269 Marine Rd Central, Morecambe, Lancashire, LA4 5BX</span>
              </li>
              <li className="flex items-center">
                <HiOutlinePhone className="mr-3 flex-shrink-0 text-wine-red" size={20} />
                <a href="tel:01524956041" className="opacity-80 hover:opacity-100">01524 956041</a>
              </li>
              <li className="flex items-center">
                <HiOutlineMail className="mr-3 flex-shrink-0 text-wine-red" size={20} />
                <a href="mailto:brittlestarltd@gmail.com" className="opacity-80 hover:opacity-100">brittlestarltd@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 mt-8 text-center md:flex md:justify-between md:text-left">
          <p className="opacity-60 mb-4 md:mb-0">&copy; {new Date().getFullYear()} Brittlestar. All rights reserved.</p>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 justify-center">
            <Link href="/privacy" className="opacity-60 hover:opacity-100 transition-opacity">
              Privacy Policy
            </Link>
            <Link href="/terms" className="opacity-60 hover:opacity-100 transition-opacity">
              Terms of Service
            </Link>
            <Link href="/contact" className="opacity-60 hover:opacity-100 transition-opacity">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 