// sections/Footer.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiHeart } from 'react-icons/fi';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <h3 className="text-2xl font-heading font-bold mb-4">
              Samia Urooj
            </h3>
            <p className="text-dark-300 max-w-md mx-auto">
              Frontend Developer passionate about creating amazing web experiences
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-6 mb-6"
          >
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ y: -2 }}
                className="text-dark-300 hover:text-white transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="border-t border-dark-700 pt-6"
          >
            <p className="text-dark-300 flex items-center justify-center">
              Made with <span  className ="mx-2 text-red-500" ><FiHeart/></span> by Samia Urooj • {currentYear}
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;