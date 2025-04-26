import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaFacebookF, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';

const Contact = () => {
  const openingHours = [
    { day: 'Monday', hours: '9 am–6 pm' },
    { day: 'Tuesday', hours: '9 am–6 pm' },
    { day: 'Wednesday', hours: '9 am–6 pm' },
    { day: 'Thursday', hours: '9 am–6 pm' },
    { day: 'Friday', hours: '9 am–12 am' },
    { day: 'Saturday', hours: '9 am–12 am' },
    { day: 'Sunday', hours: '9 am–9 pm' },
  ];

  const socialLinks = [
    { platform: 'Facebook', icon: <FaFacebookF />, url: 'https://www.facebook.com/Brittlestarwine/' },
    { platform: 'Instagram', icon: <FaInstagram />, url: 'https://www.instagram.com/brittlestarwine' },
  ];

  return (
    <section id="contact" className="py-20 bg-cream">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-wine-red">Contact Us</h2>
          <div className="w-24 h-1 bg-wine-red mx-auto mb-6"></div>
          <p className="text-night max-w-3xl mx-auto text-lg opacity-80">
            We'd love to hear from you. Get in touch or visit us at Brittlestar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-wine-dark mb-6">Get In Touch</h3>
              
              <div className="space-y-5">
                <div className="flex items-start">
                  <div className="bg-wine-red p-3 rounded-full text-white mr-4">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Email</h4>
                    <a href="mailto:brittlestarltd@gmail.com" className="text-night hover:text-wine-red transition-colors">
                      brittlestarltd@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-wine-red p-3 rounded-full text-white mr-4">
                    <FaPhone />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Phone</h4>
                    <a href="tel:01524956041" className="text-night hover:text-wine-red transition-colors">
                      01524 956041
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-wine-red p-3 rounded-full text-white mr-4">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Address</h4>
                    <a 
                      href="https://maps.google.com/?q=269+Marine+Rd+Central,+Morecambe+LA4+5BX" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-night hover:text-wine-red transition-colors"
                    >
                      269 Marine Rd Central,<br />
                      Morecambe LA4 5BX
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-wine-red p-3 rounded-full text-white mr-4">
                    <FaClock />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Opening Hours</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {openingHours.map((item, index) => (
                        <div key={index} className="flex flex-col md:flex-row md:items-center">
                          <span className="font-medium mr-2">{item.day}:</span>
                          <span className="text-night">{item.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Media Links */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-wine-dark mb-6">Follow Us</h3>
              <div className="flex flex-col space-y-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-night hover:text-wine-red transition-colors"
                  >
                    <div className="bg-wine-red p-3 rounded-full text-white mr-4">
                      {social.icon}
                    </div>
                    <span className="font-medium">{social.platform}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Map and Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Map */}
            <div className="bg-white p-4 rounded-lg shadow-md h-[400px] overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2319.271245895366!2d-2.869770684158837!3d54.07543128013196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b61a91d457d05%3A0x17cd88fa1bb4beba!2s269%20Marine%20Rd%20Central%2C%20Morecambe%20LA4%205BX!5e0!3m2!1sen!2suk!4v1679431753739!5m2!1sen!2suk" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Brittlestar location"
              ></iframe>
            </div>
            
            {/* Image */}
            <div className="relative h-[300px] rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/hero/hero1.jpg"
                alt="Brittlestar"
                fill
                style={{ objectFit: 'cover' }}
                className="hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* CTA */}
            <div className="bg-wine-dark p-8 rounded-lg shadow-md text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Visit Us Today</h3>
              <p className="mb-6 opacity-90">
                Whether you're looking for a relaxing coffee, a light lunch, or evening drinks, 
                we're here to welcome you to Brittlestar.
              </p>
              <a 
                href="tel:01524956041" 
                className="inline-block px-8 py-3 bg-white text-wine-dark rounded-full font-medium hover:bg-cream transition-colors"
              >
                Call to Book
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 