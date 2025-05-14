"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIndustry } from "@/context/industrieContext";
import { industryData, tempIndustryContent } from "@/data/industries";
import SecurityFeature from "./Security";

const IndustriesContent: React.FC = () => {
  const { activeIndustry } = useIndustry();
  
  const data = industryData && industryData[activeIndustry] 
    ? industryData[activeIndustry] 
    : tempIndustryContent[activeIndustry];
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeIndustry}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="text-white"
      >
        <motion.h2 
          className="text-4xl lg:text-5xl font-light mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          {data.title}
        </motion.h2>
        
        <motion.div 
          className="text-white mb-10 space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {data.description.split('\n\n').map((paragraph, idx) => (
            <div key={idx} className="text-sm text-white leading-relaxed">
              {paragraph}
            </div>
          ))}
        </motion.div>
        
        <motion.div 
          className="space-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {data.features.map((feature, idx) => (
            <SecurityFeature
              key={feature.id}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              buttons={feature.buttons}
              delay={idx * 0.1}
            />
          ))}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default IndustriesContent;