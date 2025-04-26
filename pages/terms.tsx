import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';

const TermsOfService = () => {
  return (
    <Layout>
      <main className="py-20 bg-cream">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12"
          >
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-wine-dark mb-4">Terms of Service</h1>
              <div className="w-24 h-1 bg-wine-red mx-auto mb-4"></div>
              <p className="text-night opacity-60">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>

            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-bold text-wine-dark mb-4 flex items-center">
                  <span className="w-8 h-8 bg-wine-red/10 rounded-full flex items-center justify-center text-wine-red mr-3">1</span>
                  Agreement to Terms
                </h2>
                <p className="text-night opacity-80 leading-relaxed">
                  By accessing or using the Brittlestar Wine Bar & Coffee House website and services, 
                  you agree to be bound by these Terms of Service. If you disagree with any part of 
                  these terms, you may not access our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-wine-dark mb-6 flex items-center">
                  <span className="w-8 h-8 bg-wine-red/10 rounded-full flex items-center justify-center text-wine-red mr-3">2</span>
                  Reservations and Bookings
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-wine-dark mb-3">Making Reservations</h3>
                    <p className="text-night opacity-80 mb-4">
                      When making a reservation through our website or over the phone:
                    </p>
                    <ul className="space-y-2 text-night opacity-80">
                      <li className="flex items-start">
                        <span className="text-wine-red mr-2">•</span>
                        You must provide accurate and complete information
                      </li>
                      <li className="flex items-start">
                        <span className="text-wine-red mr-2">•</span>
                        Reservations are subject to availability
                      </li>
                      <li className="flex items-start">
                        <span className="text-wine-red mr-2">•</span>
                        We reserve the right to refuse service to anyone
                      </li>
                      <li className="flex items-start">
                        <span className="text-wine-red mr-2">•</span>
                        Special requests are subject to availability
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-wine-dark mb-3">Cancellation Policy</h3>
                    <p className="text-night opacity-80 mb-4">
                      For reservations:
                    </p>
                    <ul className="space-y-2 text-night opacity-80">
                      <li className="flex items-start">
                        <span className="text-wine-red mr-2">•</span>
                        Please cancel at least 24 hours in advance
                      </li>
                      <li className="flex items-start">
                        <span className="text-wine-red mr-2">•</span>
                        Late cancellations may incur a fee
                      </li>
                      <li className="flex items-start">
                        <span className="text-wine-red mr-2">•</span>
                        No-shows may affect future booking privileges
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-wine-dark mb-4 flex items-center">
                  <span className="w-8 h-8 bg-wine-red/10 rounded-full flex items-center justify-center text-wine-red mr-3">3</span>
                  Age Restrictions
                </h2>
                <p className="text-night opacity-80 mb-4">
                  We strictly enforce age restrictions for alcohol consumption:
                </p>
                <ul className="space-y-2 text-night opacity-80">
                  <li className="flex items-start">
                    <span className="text-wine-red mr-2">•</span>
                    Valid ID may be required for alcohol purchases
                  </li>
                  <li className="flex items-start">
                    <span className="text-wine-red mr-2">•</span>
                    We reserve the right to refuse service to anyone under 18
                  </li>
                  <li className="flex items-start">
                    <span className="text-wine-red mr-2">•</span>
                    We comply with all UK alcohol licensing laws
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-wine-dark mb-4 flex items-center">
                  <span className="w-8 h-8 bg-wine-red/10 rounded-full flex items-center justify-center text-wine-red mr-3">4</span>
                  Menu and Pricing
                </h2>
                <p className="text-night opacity-80 mb-4">
                  Regarding our menu and pricing:
                </p>
                <ul className="space-y-2 text-night opacity-80">
                  <li className="flex items-start">
                    <span className="text-wine-red mr-2">•</span>
                    Prices are subject to change without notice
                  </li>
                  <li className="flex items-start">
                    <span className="text-wine-red mr-2">•</span>
                    Menu items may vary based on availability
                  </li>
                  <li className="flex items-start">
                    <span className="text-wine-red mr-2">•</span>
                    All prices include VAT unless otherwise stated
                  </li>
                  <li className="flex items-start">
                    <span className="text-wine-red mr-2">•</span>
                    Special offers and promotions have their own terms
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-wine-dark mb-4 flex items-center">
                  <span className="w-8 h-8 bg-wine-red/10 rounded-full flex items-center justify-center text-wine-red mr-3">5</span>
                  Intellectual Property
                </h2>
                <p className="text-night opacity-80 mb-4">
                  All content on our website, including:
                </p>
                <ul className="space-y-2 text-night opacity-80 mb-4">
                  <li className="flex items-start">
                    <span className="text-wine-red mr-2">•</span>
                    Text, graphics, and logos
                  </li>
                  <li className="flex items-start">
                    <span className="text-wine-red mr-2">•</span>
                    Menu items and descriptions
                  </li>
                  <li className="flex items-start">
                    <span className="text-wine-red mr-2">•</span>
                    Photographs and images
                  </li>
                  <li className="flex items-start">
                    <span className="text-wine-red mr-2">•</span>
                    Website design and layout
                  </li>
                </ul>
                <p className="text-night opacity-80">
                  Is the property of Brittlestar Wine Bar & Coffee House and is protected by 
                  copyright and other intellectual property laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-wine-dark mb-4 flex items-center">
                  <span className="w-8 h-8 bg-wine-red/10 rounded-full flex items-center justify-center text-wine-red mr-3">6</span>
                  Limitation of Liability
                </h2>
                <p className="text-night opacity-80 mb-4">
                  We are not liable for:
                </p>
                <ul className="space-y-2 text-night opacity-80">
                  <li className="flex items-start">
                    <span className="text-wine-red mr-2">•</span>
                    Any indirect or consequential loss
                  </li>
                  <li className="flex items-start">
                    <span className="text-wine-red mr-2">•</span>
                    Loss of profits or data
                  </li>
                  <li className="flex items-start">
                    <span className="text-wine-red mr-2">•</span>
                    Service interruptions
                  </li>
                  <li className="flex items-start">
                    <span className="text-wine-red mr-2">•</span>
                    Third-party actions
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-wine-dark mb-4 flex items-center">
                  <span className="w-8 h-8 bg-wine-red/10 rounded-full flex items-center justify-center text-wine-red mr-3">7</span>
                  Changes to Terms
                </h2>
                <p className="text-night opacity-80">
                  We reserve the right to modify these terms at any time. Changes will be effective 
                  immediately upon posting to our website. Your continued use of our services 
                  constitutes acceptance of any changes.
                </p>
              </section>

              <section className="bg-wine-red/5 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-wine-dark mb-4 flex items-center">
                  <span className="w-8 h-8 bg-wine-red/10 rounded-full flex items-center justify-center text-wine-red mr-3">8</span>
                  Contact Information
                </h2>
                <p className="text-night opacity-80 mb-4">
                  For questions about these Terms of Service, please contact us at:
                </p>
                <div className="space-y-2 text-night opacity-80">
                  <p className="flex items-center">
                    <span className="text-wine-red mr-2">•</span>
                    Email: info@brittlestar.co.uk
                  </p>
                  <p className="flex items-center">
                    <span className="text-wine-red mr-2">•</span>
                    Phone: 01524 956041
                  </p>
                  <p className="flex items-center">
                    <span className="text-wine-red mr-2">•</span>
                    Address: 123 Morecambe Promenade, Morecambe, LA4 4BU
                  </p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
    </Layout>
  );
};

export default TermsOfService; 