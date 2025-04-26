import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';

const PrivacyPolicy = () => {
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
              <h1 className="text-4xl font-bold text-wine-dark mb-4">Privacy Policy</h1>
              <div className="w-24 h-1 bg-wine-red mx-auto mb-4"></div>
              <p className="text-night opacity-60">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>

            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-bold text-wine-dark mb-4 flex items-center">
                  <span className="w-8 h-8 bg-wine-red/10 rounded-full flex items-center justify-center text-wine-red mr-3">1</span>
                  Introduction
                </h2>
                <p className="text-night opacity-80 leading-relaxed">
                  Brittlestar Wine Bar & Coffee House ("we", "our", or "us") is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
                  visit our website or use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-wine-dark mb-6 flex items-center">
                  <span className="w-8 h-8 bg-wine-red/10 rounded-full flex items-center justify-center text-wine-red mr-3">2</span>
                  Information We Collect
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-wine-dark mb-3">Personal Information</h3>
                    <p className="text-night opacity-80 mb-4">
                      We may collect personal information that you voluntarily provide to us when you:
                    </p>
                    <ul className="space-y-2 text-night opacity-80">
                      <li className="flex items-start">
                        <span className="text-wine-red mr-2">•</span>
                        Make a reservation
                      </li>
                      <li className="flex items-start">
                        <span className="text-wine-red mr-2">•</span>
                        Sign up for our newsletter
                      </li>
                      <li className="flex items-start">
                        <span className="text-wine-red mr-2">•</span>
                        Contact us through our website
                      </li>
                      <li className="flex items-start">
                        <span className="text-wine-red mr-2">•</span>
                        Participate in our events or promotions
                      </li>
                    </ul>
                    <p className="text-night opacity-80 mt-4">
                      This information may include:
                    </p>
                    <ul className="space-y-2 text-night opacity-80 mt-2">
                      <li className="flex items-start">
                        <span className="text-wine-red mr-2">•</span>
                        Name and contact information
                      </li>
                      <li className="flex items-start">
                        <span className="text-wine-red mr-2">•</span>
                        Email address
                      </li>
                      <li className="flex items-start">
                        <span className="text-wine-red mr-2">•</span>
                        Phone number
                      </li>
                      <li className="flex items-start">
                        <span className="text-wine-red mr-2">•</span>
                        Reservation details
                      </li>
                      <li className="flex items-start">
                        <span className="text-wine-red mr-2">•</span>
                        Payment information
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-wine-dark mb-3">Automatically Collected Information</h3>
                    <p className="text-night opacity-80 mb-4">
                      When you visit our website, we automatically collect certain information about your device, including:
                    </p>
                    <ul className="space-y-2 text-night opacity-80">
                      <li className="flex items-start">
                        <span className="text-wine-red mr-2">•</span>
                        IP address
                      </li>
                      <li className="flex items-start">
                        <span className="text-wine-red mr-2">•</span>
                        Browser type
                      </li>
                      <li className="flex items-start">
                        <span className="text-wine-red mr-2">•</span>
                        Device type
                      </li>
                      <li className="flex items-start">
                        <span className="text-wine-red mr-2">•</span>
                        Pages visited
                      </li>
                      <li className="flex items-start">
                        <span className="text-wine-red mr-2">•</span>
                        Time spent on website
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-wine-dark mb-4 flex items-center">
                  <span className="w-8 h-8 bg-wine-red/10 rounded-full flex items-center justify-center text-wine-red mr-3">3</span>
                  How We Use Your Information
                </h2>
                <p className="text-night opacity-80 mb-4">
                  We use the information we collect to:
                </p>
                <ul className="space-y-2 text-night opacity-80">
                  <li className="flex items-start">
                    <span className="text-wine-red mr-2">•</span>
                    Process your reservations
                  </li>
                  <li className="flex items-start">
                    <span className="text-wine-red mr-2">•</span>
                    Send you marketing communications (with your consent)
                  </li>
                  <li className="flex items-start">
                    <span className="text-wine-red mr-2">•</span>
                    Respond to your inquiries
                  </li>
                  <li className="flex items-start">
                    <span className="text-wine-red mr-2">•</span>
                    Improve our website and services
                  </li>
                  <li className="flex items-start">
                    <span className="text-wine-red mr-2">•</span>
                    Comply with legal obligations
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-wine-dark mb-4 flex items-center">
                  <span className="w-8 h-8 bg-wine-red/10 rounded-full flex items-center justify-center text-wine-red mr-3">4</span>
                  Information Sharing
                </h2>
                <p className="text-night opacity-80 mb-4">
                  We do not sell or rent your personal information to third parties. We may share your information with:
                </p>
                <ul className="space-y-2 text-night opacity-80">
                  <li className="flex items-start">
                    <span className="text-wine-red mr-2">•</span>
                    Service providers who assist in our operations
                  </li>
                  <li className="flex items-start">
                    <span className="text-wine-red mr-2">•</span>
                    Legal authorities when required by law
                  </li>
                  <li className="flex items-start">
                    <span className="text-wine-red mr-2">•</span>
                    Business partners with your consent
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-wine-dark mb-4 flex items-center">
                  <span className="w-8 h-8 bg-wine-red/10 rounded-full flex items-center justify-center text-wine-red mr-3">5</span>
                  Your Rights
                </h2>
                <p className="text-night opacity-80 mb-4">
                  You have the right to:
                </p>
                <ul className="space-y-2 text-night opacity-80">
                  <li className="flex items-start">
                    <span className="text-wine-red mr-2">•</span>
                    Access your personal information
                  </li>
                  <li className="flex items-start">
                    <span className="text-wine-red mr-2">•</span>
                    Correct inaccurate information
                  </li>
                  <li className="flex items-start">
                    <span className="text-wine-red mr-2">•</span>
                    Request deletion of your information
                  </li>
                  <li className="flex items-start">
                    <span className="text-wine-red mr-2">•</span>
                    Opt-out of marketing communications
                  </li>
                  <li className="flex items-start">
                    <span className="text-wine-red mr-2">•</span>
                    Object to data processing
                  </li>
                </ul>
              </section>

              <section className="bg-wine-red/5 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-wine-dark mb-4 flex items-center">
                  <span className="w-8 h-8 bg-wine-red/10 rounded-full flex items-center justify-center text-wine-red mr-3">6</span>
                  Contact Us
                </h2>
                <p className="text-night opacity-80 mb-4">
                  If you have any questions about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy; 