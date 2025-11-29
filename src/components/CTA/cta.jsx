import React from 'react';
import { motion } from 'framer-motion';
import ctaImage from '../../assets/reservatiobg.jpg';
import menuPdf from '../../assets/menu.pdf';

const CTA = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          <div className="absolute inset-0">
            <img
              src={ctaImage}
              alt="Delicious Food"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          
          <div className="relative z-10 px-6 py-20 md:py-32 text-center text-white">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-heading font-bold mb-6 tracking-wide text-white"
            >
              A TASTE YOU'LL REMEMBER
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light tracking-wider"
            >
              Indulge in a symphony of flavors crafted with passion. From refreshing beverages to exquisite dishes, we promise an unforgettable dining experience.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center gap-6"
            >
               <a href={menuPdf} target="_blank" rel="noopener noreferrer">
                <button className="px-10 py-4 bg-[#F85C2C] text-white rounded-full hover:bg-[#d44b20] transition-all duration-300 font-semibold tracking-wider transform hover:scale-105 shadow-lg">
                  VIEW MENU
                </button>
              </a>
              <a href="/reservation">
                <button className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-[#000000] transition-all duration-300 font-semibold tracking-wider transform hover:scale-105 backdrop-blur-sm">
                  RESERVE A TABLE
                </button>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

