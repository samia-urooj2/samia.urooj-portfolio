// sections/Skills.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/UI/Card';
import Badge from '../components/UI/badge';

const Skills: React.FC = () => {
  const skills = [
    { name: 'HTML5', level: 95, category: 'Frontend' },
    { name: 'CSS3', level: 95, category: 'Frontend' },
     { name: 'Tailwind CSS', level: 95, category: 'Frontend' },
    { name: 'TypeScript', level: 90, category: 'Frontend' },
    { name: 'JavaScript', level: 80, category: 'Frontend' },
    { name: 'React', level: 90, category: 'Frontend' },
    { name: 'Next.js', level: 90, category: 'Frontend' },
   { name: 'Sanity CMS', level: 90, category: 'Backend' },
    { name: 'Node.js', level: 75, category: 'Backend' },
    { name: 'Git', level: 85, category: 'Tools' },
    { name: 'Canva', level: 90, category: 'Tools' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            <span className='dark:text-white'>My </span><span className="text-primary-600">Skills</span>
          </h2>
          <p className="text-xl text-dark-500 dark:text-dark-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name || index}
              variants={itemVariants}
            >
              <Card className="p-6 hover:border-primary-300 dark:hover:border-primary-700 border-2 border-transparent transition-colors">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold text-dark-800 dark:text-white">
                    {skill.name}
                  </h3>
                  <Badge color="primary">{skill.level}%</Badge>
                </div>
                
                <div className="w-full bg-dark-100 dark:bg-dark-700 rounded-full h-3 mb-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-primary-500 to-purple-500 h-3 rounded-full"
                  />
                </div>
                
                <div className="flex justify-between text-sm text-dark-500 dark:text-dark-400">
                  <span>Beginner</span>
                  <span>Expert</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-heading font-semibold mb-8">
            Tech Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
           {[
  'React',
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'Node.js',
  'Sanity CMS',
  'Git',
  'Framer Motion',
].map((tech) => (
  <div key={tech} className="text-lg px-4 py-2">
    <Badge color="secondary">{tech}</Badge>
  </div>
))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;