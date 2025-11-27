// sections/Hero.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/UI/button';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
const scrollToSection = (href: string) => {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-bg opacity-10"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-heading font-bold mb-6 "
          >
            <span className='dark:text-white'>Hi, I am{' '}</span> 
            <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text dark:text-white">
             Samia Urooj
            </span>
          </motion.h1>
          
          <motion.div
            variants={itemVariants}
            className="text-2xl md:text-4xl font-heading font-semibold mb-6 text-dark-600 dark:text-dark-300"
          >
            Frontend Developer
          </motion.div>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-dark-500 dark:text-dark-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            I create beautiful, responsive, and user-friendly web experiences 
            using modern technologies like React, Next.js, and TypeScript.
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* <Link href="/components/project"> */}
            <Button variant="primary" className="text-lg px-8 py-4"  onClick={() => scrollToSection('#projects')}>
              View My Work
            </Button>
            <Button variant="outline" className="text-lg px-8 py-4" onClick={() => scrollToSection('#contact')} >
              Contact Me
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-dark-300 dark:border-dark-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-dark-300 dark:bg-dark-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;