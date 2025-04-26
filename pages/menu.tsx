import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import Menu from '../components/Menu';
import { BiCoffee, BiWine } from 'react-icons/bi';
import { FaCheese } from 'react-icons/fa';

const MenuPage = () => {
  const highlights = [
    {
      icon: <BiWine className="text-wine-red" size={32} />,
      title: "Wine Selection",
      description: "Carefully curated wines from around the world, perfect for any occasion."
    },
    {
      icon: <BiCoffee className="text-wine-red" size={32} />,
      title: "Specialty Coffee",
      description: "Premium coffee beans, expertly prepared by our trained baristas."
    },
    {
      icon: <FaCheese className="text-wine-red" size={32} />,
      title: "Artisanal Platters",
      description: "Local cheeses and charcuterie, perfect for sharing."
    }
  ];

  return (
    <Layout>
      <main>
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px]">
          <Image
            src="/images/hero/hero2.jpg"
            alt="Brittlestar Menu"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-night/60" />
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="container-custom">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
              >
                Our Menu
              </motion.h1>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-24 h-1 bg-cream mx-auto mb-6"
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-white text-lg md:text-xl max-w-2xl mx-auto"
              >
                From morning coffee to evening wine, discover our carefully crafted menu
              </motion.p>
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="py-16 bg-cream">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="text-center p-6"
                >
                  <div className="mb-4 flex justify-center">{highlight.icon}</div>
                  <h3 className="text-xl font-bold text-wine-dark mb-2">{highlight.title}</h3>
                  <p className="text-night opacity-80">{highlight.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Opening Hours Notice */}
        <section className="py-8 bg-wine-red text-white">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl font-bold mb-2">Opening Hours</h2>
              <p className="opacity-90">
                Breakfast Served: 9am - 11am<br />
                Lunch Menu: 11am - 5pm<br />
                Evening Menu: 5pm - Close<br />
                Last Orders: 30 minutes before closing
              </p>
            </motion.div>
          </div>
        </section>

        {/* Menu Component */}
        <Menu />

        {/* Booking CTA */}
        <section className="py-16 bg-ocean text-white text-center">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-4">Ready to Join Us?</h2>
              <p className="mb-8 opacity-90">
                Book a table for any occasion, from morning coffee to evening wine tasting
              </p>
              <div className="flex justify-center gap-4">
                <a href="tel:01524956041" className="btn bg-cream text-night hover:bg-white">
                  Call to Book
                </a>
                <a href="#menu" className="btn btn-outline-light">
                  View Full Menu
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default MenuPage; 