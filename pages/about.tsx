import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaUmbrellaBeach, FaMusic, FaUtensils, FaWineGlass, FaCoffee, FaHeart } from 'react-icons/fa';
import Layout from '../components/Layout';

const AboutPage = () => {
  const features = [
    {
      icon: <FaWineGlass className="text-wine-red" size={24} />,
      title: "Curated Wine Selection",
      description: "Hand-picked wines from renowned vineyards worldwide, offering both familiar favorites and exciting discoveries."
    },
    {
      icon: <FaCoffee className="text-wine-red" size={24} />,
      title: "speciality Coffee",
      description: "Premium coffee beans, expertly roasted and prepared by our trained baristas for the perfect cup every time."
    },
    {
      icon: <FaUtensils className="text-wine-red" size={24} />,
      title: "Artisanal Food",
      description: "Carefully crafted platters featuring local cheeses, charcuterie, and fresh seasonal ingredients."
    },
    {
      icon: <FaMusic className="text-wine-red" size={24} />,
      title: "Live Entertainment",
      description: "Regular live music events featuring local artists, creating the perfect atmosphere for your evening."
    },
    {
      icon: <FaUmbrellaBeach className="text-wine-red" size={24} />,
      title: "Bay Views",
      description: "Stunning views of Morecambe Bay from our floor-to-ceiling windows and outdoor seating area."
    },
    {
      icon: <FaHeart className="text-wine-red" size={24} />,
      title: "Community Focus",
      description: "Proud to be part of the Morecambe community, supporting local suppliers and artists."
    }
  ];

  return (
    <Layout>
      <main>
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px]">
          <Image
            src="/images/hero/hero1.jpg"
            alt="Brittlestar"
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
                Our Story
              </motion.h1>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-24 h-1 bg-cream mx-auto"
              />
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-cream">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-wine-dark mb-6">The Brittlestar Journey</h2>
                <p className="text-night opacity-80 mb-6">
                  Founded in 2020, Brittlestar Wine Bar & Coffee House emerged from a vision to create 
                  a space that celebrates both the art of wine and the craft of coffee. Named after 
                  the starfish that grace our bay's shores, we've established ourselves as a 
                  beloved destination in Morecambe.
                </p>
                <p className="text-night opacity-80 mb-6">
                  Our journey began during challenging times, but our commitment to quality and 
                  community has never wavered. We've grown from a small wine bar into a vibrant 
                  establishment that serves as a morning coffee spot, lunch destination, and 
                  sophisticated evening venue.
                </p>
                <p className="text-night opacity-80">
                  Today, we're proud to be part of Morecambe's cultural renaissance, contributing 
                  to the town's growing reputation as a destination for food, drink, and hospitality.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
              >
                <Image
                  src="/images/hero/hero3.jpg"
                  alt="Brittlestar"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-wine-dark mb-2">{feature.title}</h3>
                  <p className="text-night opacity-80">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-ocean text-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Our Values</h2>
              <div className="w-24 h-1 bg-cream mx-auto mb-6"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-4">Quality</h3>
                <p className="opacity-90">
                  We source the finest ingredients and products, ensuring every visit exceeds expectations.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-4">Community</h3>
                <p className="opacity-90">
                  Supporting local producers and creating a welcoming space for our community to gather.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-4">Experience</h3>
                <p className="opacity-90">
                  Creating memorable moments through exceptional service and attention to detail.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default AboutPage; 