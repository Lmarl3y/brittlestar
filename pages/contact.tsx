import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact Us | Brittlestar Wine Bar & Coffee House</title>
        <meta name="description" content="Get in touch with Brittlestar Wine Bar & Coffee House in Morecambe. Find our location, opening hours, and contact details." />
      </Head>
      
      <Navbar />
      <Contact />
      <Footer />
    </>
  );
};

export default ContactPage; 