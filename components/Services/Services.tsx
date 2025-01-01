"use client"

import React from 'react';
import { FaCode, FaPalette, FaMobile, FaDesktop } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: (
        <div className="relative">
          <svg width="0" height="0">
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop stopColor="#06b6d4" offset="0%" /> {/* cyan-500 */}
              <stop stopColor="#a855f7" offset="50%" /> {/* purple-500 */}
              <stop stopColor="#eab308" offset="100%" /> {/* yellow-500 */}
            </linearGradient>
          </svg>
          <FaCode className="text-5xl" style={{ fill: "url(#gradient)" }} />
        </div>
      ),
      title: "Web Development",
      description: "Custom websites built with modern technologies like React, Next.js, and Node.js"
    },
    {
      icon: (
        <div className="relative">
          <FaPalette className="text-5xl" style={{ fill: "url(#gradient)" }} />
        </div>
      ),
      title: "Web Design",
      description: "Beautiful, user-friendly interfaces with responsive layouts and modern aesthetics"
    },
    {
      icon: (
        <div className="relative">
          <FaMobile className="text-5xl" style={{ fill: "url(#gradient)" }} />
        </div>
      ),
      title: "Responsive Design",
      description: "Websites that work seamlessly across all devices and screen sizes"
    },
    {
      icon: (
        <div className="relative">
          <FaDesktop className="text-5xl" style={{ fill: "url(#gradient)" }} />
        </div>
      ),
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
    <section id="services" className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-extrabold filter drop-shadow-[0_0_10px_rgba(59,130,246,0.5)] animate-shine mb-4 px-4 text-center animate-shine">My Services</h2>          <p className="text-lg text-gray-400">Professional web development and design solutions</p>
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
              className="bg-[#1a1a1a] hover:bg-gradient-to-br hover:from-cyan-950/50 hover:via-purple-950/50 hover:to-yellow-950/50 p-6 rounded-lg shadow-lg hover:shadow-[0_0_15px_rgba(6,182,212,0.5),0_0_15px_rgba(168,85,247,0.5),0_0_15px_rgba(234,179,8,0.5)] transition-all duration-300"
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