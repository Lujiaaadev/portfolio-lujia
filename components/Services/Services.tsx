"use client"

import React from 'react';
import { FaCode, FaPalette, FaMobile, FaDesktop } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: <FaCode className="text-5xl text-cyan-400" />,
      title: "Web Development",
      description: "Custom websites built with modern technologies like React, Next.js, and Node.js"
    },
    {
      icon: <FaPalette className="text-5xl text-cyan-400" />,
      title: "Web Design",
      description: "Beautiful, user-friendly interfaces with responsive layouts and modern aesthetics"
    },
    {
      icon: <FaMobile className="text-5xl text-cyan-400" />,
      title: "Responsive Design",
      description: "Websites that work seamlessly across all devices and screen sizes"
    },
    {
      icon: <FaDesktop className="text-5xl text-cyan-400" />,
      title: "UI/UX Design",
      description: "Intuitive user experiences with modern design principles"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
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
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text mb-4">My Services</h2>
          <p className="text-lg text-gray-400">Professional web development and design solutions</p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;