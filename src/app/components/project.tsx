// sections/Projects.tsx
'use client';
import Image from "next/image";

import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/UI/Card';
import Badge from '../components/UI/badge';
import {  FiExternalLink } from 'react-icons/fi';


const Projects: React.FC = () => {
  const projects = [
  {
    title: "Travel Agency Website",
    description: "Developed a full-stack, responsive web application allowing users to browse and book travel packages.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity CMS"],
    live: "https://www.ubbrothers.com",
    image: "/image/image1.png"
  },
  {
    title: "Weather Forecast App",
    description: "A weather application that provides real-time weather updates and forecasts with an intuitive user interface.",
    tech: ["React", "Next.js", "API", "Framer Motion", "TypeScript"],
    live: "https://weather-forecast-app-eta-green.vercel.app/",
    image: "/image/weather.png"
  },
  {
    title: "Skincare Blog Website",
    description: "A modern and visually appealing skincare blog website featuring products for all skin types with smooth UI/UX and fast performance.",
    tech: ["TypeScript", "JavaScript", "CSS", "Next.js"],
    live: "https://dynamic-blog-web-nzzn.vercel.app/",
    image: "/image/skin.png"
  },
  {
    title: "Cryptocurrency Market Tracker",
    description: "A fast and responsive cryptocurrency tracking website where users can view real-time coin prices with dynamic data fetching.",
    tech: ["API", "TypeScript", "React", "Next.js", "CSS"],
    live: "https://coin-market-website.vercel.app/",
    image: "/image/coin.png"
  },
  {
    title: "Resume Builder",
    description: "A user-friendly Resume Builder web application that helps create professional resumes.",
    tech: ["HTML", "CSS", "TypeScript"],
    live: "https://resume-builder-woad-seven.vercel.app/",
    image: "/image/resume.png"
  },
  {
    title: "Quote Generator",
    description: "An inspirational quote generator application that displays random motivational quotes.",
    tech: ["Python", "Streamlit", "Pandas"],
    live: "https://samia-urooj-mindset-project-script-nmyvbm.streamlit.app/",
    image: "/image/quote.png"
  }
  ];

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
    <section id="projects" className="py-20 bg-dark-50 dark:bg-dark-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
           <span className='dark:text-white'> My</span>  <span className="text-primary-600">Projects</span>
          </h2>
          <p className="text-xl text-dark-500 dark:text-dark-400 max-w-2xl mx-auto">
            A collection of projects that showcase my skills and experience
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
            >
              <Card className="overflow-hidden h-full flex flex-col">
                <div className="h-48 bg-gradient-to-br from-primary-500 to-purple-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                   <Image 
  src={project.image}
  alt={project.title}
  width={400}
  height={250}
  className="w-full h-full object-cover"
/>                 </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-heading font-semibold mb-3 text-dark-800 dark:text-white">
                    {project.title}
                  </h3>
                  
                  <p className="text-dark-600 dark:text-dark-300 mb-4 flex-1">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} color="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-dark-100 dark:border-dark-700">
                    
                    <motion.a
                      href={project.live}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-dark-500 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      <FiExternalLink size={20} />
                    </motion.a>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;