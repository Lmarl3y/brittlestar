import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaUmbrellaBeach, FaMusic, FaUtensils } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-20 bg-cream">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-wine-red">Our Story</h2>
          <div className="w-24 h-1 bg-wine-red mx-auto mb-6"></div>
          <p className="text-night max-w-3xl mx-auto text-lg opacity-80">
            A place where fine wine meets specialty coffee, nestled along the beautiful Morecambe Bay.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-lg overflow-hidden shadow-xl"
          >
            <Image 
              src="/images/logo.png" 
              alt="Brittlestar Wine Bar Logo" 
              width={600} 
              height={500}
              className="w-full h-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-serif font-bold mb-6 text-wine-dark">Welcome to Brittlestar</h3>
            <p className="mb-4 text-night opacity-80">
              Established in 2020, Brittlestar is a unique destination that brings together our passion for exceptional wines 
              and specialty coffee. Named after the starfish commonly found along the bay, our space is designed to be a 
              sanctuary of relaxation and indulgence.
            </p>
            <p className="mb-4 text-night opacity-80">
              During the day, we serve carefully sourced and expertly prepared coffee alongside light breakfast and lunch options. 
              As the sun begins to set, we transform into a sophisticated wine bar offering a curated selection of wines from 
              around the world, complemented by artisanal cheese boards and small plates.
            </p>
            <p className="mb-8 text-night opacity-80">
              With floor-to-ceiling windows overlooking the promenade and bay beyond, Brittlestar offers the perfect backdrop 
              for intimate gatherings, casual business meetings, or simply unwinding after a day of exploring the coast.
            </p>
            
            {/* Features */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center">
                <FaUmbrellaBeach className="text-wine-red mr-2" size={18} />
                <span className="text-night">Outdoor Seating</span>
              </div>
              <div className="flex items-center">
                <FaMusic className="text-wine-red mr-2" size={18} />
                <span className="text-night">Live Performances</span>
              </div>
              <div className="flex items-center">
                <FaUtensils className="text-wine-red mr-2" size={18} />
                <span className="text-night">Food Served at Bar</span>
              </div>
            </div>
            
            <a href="#menu" className="btn btn-primary">Explore Our Menu</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 