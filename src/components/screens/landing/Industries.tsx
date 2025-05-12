"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { IndustryProvider } from '@/context/industrieContext';
import IndustriesSidebar, { IndustryType } from './industries/Sidebar';
import IndustriesHero from './industries/Hero';
import IndustriesContent from './industries/Content';


interface IndustriesPageProps {
  initialIndustry?: IndustryType;
}

const IndustriesPage: React.FC<IndustriesPageProps> = ({ 
  initialIndustry = 'hospitality' 
}) => {
  return (
    <IndustryProvider initialIndustry={initialIndustry}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-dark-800"
      >
        <IndustriesHero />
        
        <div className="max-w-7xl mx-auto px-4 py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/4">
              <IndustriesSidebar />
            </div>
            
            <div className="w-full lg:w-3/4">
              <IndustriesContent />
            </div>
          </div>
        </div>
        
      </motion.div>
    </IndustryProvider>
  );
};

export default IndustriesPage;