"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IndustryOption } from '../../../../../types';
import { buttonHover, fadeInUp } from '@/utils/useAnimation';
import { useIndustry } from '@/context/industrieContext';

const IndustriesNav: React.FC = () => {
  const { activeIndustry, setActiveIndustry } = useIndustry();
  const [isOpen, setIsOpen] = useState(false);
  
  const industries: IndustryOption[] = [
    { id: 'airports', label: 'Airports' },
    { id: 'hospitality', label: 'Hospitality' },
    { id: 'critical-infrastructure', label: 'Critical Infrastructure' },
    { id: 'government-buildings', label: 'Government Buildings' },
    { id: 'construction-sites', label: 'Construction Sites' },
    { id: 'education', label: 'Education' },
    { id: 'public-safety', label: 'Public Safety' },
    { id: 'residence-commercial', label: 'Residence & Commercial' },
    { id: 'health-care', label: 'Health Care' },
    { id: 'retail', label: 'Retail' },
    { id: 'manufacturing-plants', label: 'Manufacturing Plants' },
  ];
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  const handleSelectIndustry = (id: string) => {
    setActiveIndustry(id as any);
    setIsOpen(false);
  };

  const activeLabel = industries.find(i => i.id === activeIndustry)?.label || 'Select Industry';
  
  return (
    <div className="lg:hidden mb-6">
      <button
        onClick={toggleMenu}
        className="flex items-center justify-between w-full bg-dark-900 text-white px-6 py-4 shadow-md rounded-sm"
      >
        <span>{activeLabel}</span>
        <svg 
          className={`w-5 h-5 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="mt-2 bg-dark-900 rounded-sm shadow-lg overflow-hidden"
        >
          <ul className="divide-y divide-dark-700">
            {industries.map((industry, index) => (
              <motion.li 
                key={industry.id}
                custom={index * 0.05}
                variants={fadeInUp}
              >
                <motion.button
                  onClick={() => handleSelectIndustry(industry.id)}
                  className={`w-full text-left py-3 px-6 transition-colors duration-200 ${
                    activeIndustry === industry.id 
                      ? 'bg-secondary text-white' 
                      : 'bg-dark-900 text-gray-300 hover:bg-dark-800'
                  }`}
                  variants={buttonHover}
                  initial="idle"
                  whileHover="hover"
                  whileTap="tap"
                >
                  {industry.label}
                </motion.button>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default IndustriesNav;