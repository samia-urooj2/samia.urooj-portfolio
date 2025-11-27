// sections/About.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/UI/Card';
import Image from 'next/image';
const About: React.FC = () => {
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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="about" className="py-20 bg-dark-50 dark:bg-dark-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
           <span className='dark:text-white'>  About</span> <span className="text-primary-600">Me</span>
          </h2>
          <p className="text-xl text-dark-500 dark:text-dark-400 max-w-2xl mx-auto">
            Passionate developer crafting digital experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.h3
              variants={itemVariants}
              className="text-3xl font-heading font-semibold"
            >
             <span className='dark:text-white'>  Crafting Digital Experiences</span>
            </motion.h3>
            
            <motion.p
              variants={itemVariants}
              className="text-lg text-dark-600 dark:text-dark-300 leading-relaxed"
            >
              I am a passionate Frontend Developer with 2+ years of experience 
              creating modern, responsive web applications. I specialize in 
              React, Next.js, and TypeScript, and I am always eager to learn 
              new technologies and tackle challenging projects.
            </motion.p>
            
            <motion.p
              variants={itemVariants}
              className="text-lg text-dark-600 dark:text-dark-300 leading-relaxed"
            >
              My approach combines technical expertise with a keen eye for 
              design, ensuring that every project I work on is not only 
              functional but also provides an exceptional user experience.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4 mt-8"
            >
              <Card hover={false} className="p-6 text-center">
                <div className="text-2xl font-bold text-primary-600">2+</div>
                <div className="text-dark-500 dark:text-dark-400">Years Experience</div>
              </Card>
              <Card hover={false} className="p-6 text-center">
                <div className="text-2xl font-bold text-primary-600">30+</div>
                <div className="text-dark-500 dark:text-dark-400">Projects Completed</div>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Card className="p-8">
  <div className="w-full h-80 bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl flex flex-col items-center justify-center">
    <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mb-4">
      <div className="w-32 h-32 mb-2">
    <Image 
  src="/path/to/image" 
  alt="description" 
  width={500} // Add appropriate width
  height={300} // Add appropriate height
  priority // Optional: if it's above the fold
/>
    </div>
    </div>

    {/* Image container */}
   

    {/* <p className="text-xl font-semibold text-white">Your Image Here</p> */}
  </div>
</Card>

            
            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -left-4 w-8 h-8 bg-primary-500 rounded-full"
            />
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-4 -right-4 w-6 h-6 bg-purple-500 rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;