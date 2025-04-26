import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BiCoffee, BiWine, BiCheese } from 'react-icons/bi';
import { GiCupcake, GiMeat } from 'react-icons/gi';
import { FaPizzaSlice, FaFileImage, FaBreadSlice, FaUtensils, FaCheese } from 'react-icons/fa';
import { MdOutlineBreakfastDining, MdLunchDining } from 'react-icons/md';
import Image from 'next/image';

const menuCategories = [
  { id: 'platters', name: 'Platters', icon: <FaCheese size={24} /> },
  { id: 'breakfast', name: 'Breakfast', icon: <MdOutlineBreakfastDining size={24} /> },
  { id: 'ciabattas', name: 'Ciabattas & Wraps', icon: <FaBreadSlice size={24} /> },
  { id: 'small', name: 'Small Plates', icon: <FaPizzaSlice size={24} /> },
  { id: 'jacket', name: 'Jacket Potatoes', icon: <FaUtensils size={24} /> },
  { id: 'salads', name: 'Salads', icon: <MdLunchDining size={24} /> },
  { id: 'drinks', name: 'Drinks', icon: <BiWine size={24} /> },
  { id: 'fullmenu', name: 'Full Menu', icon: <FaFileImage size={24} /> },
];

const menuItems = {
  platters: [
    { 
      name: 'Cheese Platter', 
      description: 'Lancashire Creamy, Garstang Blue, Petit Brie, Fiery Jack, Rioja Wine & Caramelised Onion, Tuscany, Goats Cheese, Charcoal Cheddar. Served with a selection of Breads & Crackers, Olives, Sun-Dried tomatoes and Chutneys', 
      price: '£8 Per Person' 
    },
    { 
      name: 'Meat Platter', 
      description: 'Chorizo, Smoked Chicken, Roast Ham, Parma Ham, Salami Milano, Prawns (with Marie Rose dressing). Served with Breads, Olives, Sun Dried Tomatoes and Chutneys', 
      price: '£11 per person' 
    },
    { 
      name: 'Mixed Platters', 
      description: 'Choose from 4 Cheese and 4 meats', 
      price: '£12 per person' 
    },
    { 
      name: 'Add a glass of port', 
      description: 'Enhance your platter with a glass of fine port', 
      price: '£3' 
    },
  ],
  breakfast: [
    { name: 'Croissants & Preserves', description: 'Served Daily from 9am', price: '£2.50' },
    { name: 'Toast & Preserves', description: 'Served Daily from 9am', price: '£2' },
    { name: 'Toasted Tea and Cake', description: 'Served Daily from 9am', price: '£2' },
    { name: 'Smashed Avocado, Halloumi & Bacon', description: 'Served Daily from 9am', price: '£7' },
    { name: 'Smashed Avocado, Halloumi & Tomato', description: 'Served Daily from 9am', price: '£6' },
  ],
  ciabattas: [
    { name: 'Bacon, Brie & Chilli Jam', description: 'Served daily 11am-5pm with a salad garnish and hand cut crisps', price: '£7.50' },
    { name: 'Tomato, Mozzarella & Pesto', description: 'Served daily 11am-5pm with a salad garnish and hand cut crisps', price: '£6.50' },
    { name: 'Chicken & Chorizo', description: 'Served daily 11am-5pm with a salad garnish and hand cut crisps', price: '£7.50' },
    { name: 'Tuna, Red Onion & Cheese', description: 'Served daily 11am-5pm with a salad garnish and hand cut crisps', price: '£7' },
    { name: 'Ham & Cheese', description: 'Served daily 11am-5pm with a salad garnish and hand cut crisps', price: '£7' },
    { name: 'Cheese & Caramelised Onion Chutney', description: 'Served daily 11am-5pm with a salad garnish and hand cut crisps', price: '£6.50' },
  ],
  small: [
    { name: 'Breads, Olives & Oils', description: 'Served 12-8pm Mon-Sat, 12-7pm Sunday', price: '£4.50' },
    { name: 'Hummus & Pitta Bread', description: 'Served 12-8pm Mon-Sat, 12-7pm Sunday', price: '£4.50' },
    { name: 'Tomato & Mozzarella Caprese', description: 'Served 12-8pm Mon-Sat, 12-7pm Sunday', price: '£5' },
    { name: 'Baked Camembert & Caramelised Onion Chutney', description: 'To Share. Served 12-8pm Mon-Sat, 12-7pm Sunday', price: '£9' },
  ],
  jacket: [
    { name: 'Cheese', description: 'Jacket potato with cheese', price: '£6.50' },
    { name: 'Prawn & Marie Rose', description: 'Jacket potato with prawns and Marie Rose dressing', price: '£7.25' },
    { name: 'Tuna', description: 'Jacket potato with tuna (add cheese for 50p)', price: '£7' },
    { name: 'Cheese & Bacon', description: 'Jacket potato with cheese and bacon', price: '£7.50' },
  ],
  salads: [
    { name: 'House Salad', description: 'Fresh seasonal salad with house dressing', price: '£6.50' },
  ],
  drinks: [
    { name: 'Espresso', description: 'Double shot of our signature blend', price: '£2.50' },
    { name: 'Flat White', description: 'Espresso with velvety steamed milk', price: '£3.20' },
    { name: 'Cappuccino', description: 'Espresso topped with steamed and frothed milk', price: '£3.20' },
    { name: 'Latte', description: 'Espresso with lots of steamed milk and a little foam', price: '£3.40' },
    { name: 'Mocha', description: 'Espresso with chocolate and steamed milk', price: '£3.60' },
    { name: 'Chai Latte', description: 'Aromatic spiced tea with steamed milk', price: '£3.40' },
    { name: 'Loose Leaf Tea', description: 'Selection of fine teas served in a pot', price: '£2.80' },
    { name: 'House Red', description: 'Smooth medium-bodied Merlot', price: '£5.50 / £22' },
    { name: 'Cabernet Sauvignon', description: 'Rich with notes of black cherry and cedar', price: '£6.50 / £26' },
    { name: 'Pinot Noir', description: 'Light-bodied with red berry notes', price: '£7.00 / £28' },
    { name: 'House White', description: 'Crisp, refreshing Pinot Grigio', price: '£5.50 / £22' },
    { name: 'Sauvignon Blanc', description: 'Dry with citrus and gooseberry notes', price: '£6.50 / £26' },
    { name: 'Chardonnay', description: 'Buttery with tropical fruit notes', price: '£7.00 / £28' },
    { name: 'Prosecco', description: 'Light, crisp sparkling wine', price: '£7.50 / £30' },
    { name: 'Port', description: 'Fine port, perfect to accompany a cheese platter', price: '£3' },
  ],
  fullmenu: [],
};

const menuImages = [
  '/images/menu/menu.png',
  '/images/menu/menu2.png',
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('platters');

  return (
    <section id="menu" className="py-20 bg-sand">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-wine-red">Our Menu</h2>
          <div className="w-24 h-1 bg-wine-red mx-auto mb-6"></div>
          <p className="text-night max-w-3xl mx-auto text-lg opacity-80">
            From specialty platters to light bites and beverages
          </p>
        </motion.div>

        {/* Menu Categories */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-wine-red text-white shadow-md'
                  : 'bg-cream hover:bg-white text-night'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Full Menu Images */}
        {activeCategory === 'fullmenu' ? (
          <div className="space-y-8">
            {menuImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="overflow-hidden"
              >
                <div className="relative h-[600px] md:h-[800px] w-full">
                  <Image
                    src={image}
                    alt={`Brittlestar Menu Page ${index + 1}`}
                    fill
                    style={{ objectFit: 'contain' }}
                    priority={true}
                  />
                </div>
              </motion.div>
            ))}
            <div className="text-center mt-8">
              <p className="text-night italic mb-4">
                Please ask our staff about allergens and dietary requirements.
              </p>
            </div>
          </div>
        ) : (
          <>
            {/* Menu Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-cream rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-wine-dark mb-1">{item.name}</h3>
                      <p className="text-night opacity-70">{item.description}</p>
                    </div>
                    <span className="text-lg font-medium text-wine-red whitespace-nowrap ml-4">{item.price}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-night italic mb-6">
                Please ask our staff about allergens and dietary requirements.
              </p>
              <button 
                onClick={() => setActiveCategory('fullmenu')}
                className="btn bg-wine-dark text-white hover:bg-wine-red mb-4"
              >
                View Full Menu
              </button>
            </div>
          </>
        )}

        <div className="text-center mt-8">
          <a href="tel:01524956041" className="btn btn-primary">
            Book a Table
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu; 