"use client";

import React from "react";
import { motion } from "framer-motion";

const IndustriesHero: React.FC = () => {
  return (
    <div className="mx-auto max-w-6xl w-full pt-6 pb-2">
      <motion.div
        className="text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mt-16">
          <motion.p
            className="text-sm md:text-base uppercase tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            WHAT WE PROTECT
          </motion.p>

          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Industries
          </motion.h1>

          <motion.p
            className="text-white/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
           From construction to critical infrastructure, finance, and government institutions, Centurion Security Group provides specialized security solutions across a range of industries.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default IndustriesHero;
