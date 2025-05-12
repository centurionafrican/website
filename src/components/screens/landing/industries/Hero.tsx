"use client";

import React from 'react';
import { motion } from 'framer-motion';

const IndustriesHero: React.FC = () => {
  return (
    <motion.div
      className="bg-dark-900 text-white py-16 lg:py-24"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.p 
          className="text-sm md:text-base uppercase tracking-wider mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          WHAT WE PROTECT
        </motion.p>
        
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Industries
        </motion.h1>
        
        <motion.p 
          className="text-gray-300 text-lg md:text-xl max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Centurion Group delivers comprehensive security solutions, offering meticulous security assessments, 
          advanced electronics and surveillance services, and highly trained security guards. From cutting-edge 
          technology to expertly trained personnel, our integrated approach ensures our clients' unmatched 
          safety and peace of mind.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default IndustriesHero;