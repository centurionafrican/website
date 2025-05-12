// src/components/industries/IndustriesSidebar.tsx
"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export type IndustryType = 
  | 'airports'
  | 'hospitality'
  | 'critical-infrastructure'
  | 'government-buildings'
  | 'construction-sites'
  | 'education'
  | 'public-safety'
  | 'residence-commercial'
  | 'health-care'
  | 'retail'
  | 'manufacturing-plants';

interface IndustrySidebarProps {
  activeIndustry?: IndustryType;
  onSelectIndustry?: (industry: IndustryType) => void;
}

const IndustriesSidebar: React.FC<IndustrySidebarProps> = ({ 
  activeIndustry = 'hospitality', 
  onSelectIndustry 
}) => {
  const [selected, setSelected] = useState<IndustryType>(activeIndustry);
  
  const industries = [
    { id: 'airports' as IndustryType, label: 'Airports' },
    { id: 'hospitality' as IndustryType, label: 'Hospitality' },
    { id: 'critical-infrastructure' as IndustryType, label: 'Critical Infrastructure' },
    { id: 'government-buildings' as IndustryType, label: 'Government Buildings' },
    { id: 'construction-sites' as IndustryType, label: 'Construction Sites' },
    { id: 'education' as IndustryType, label: 'Education' },
    { id: 'public-safety' as IndustryType, label: 'Public Safety' },
    { id: 'residence-commercial' as IndustryType, label: 'Residence & Commercial' },
    { id: 'health-care' as IndustryType, label: 'Health Care' },
    { id: 'retail' as IndustryType, label: 'Retail' },
    { id: 'manufacturing-plants' as IndustryType, label: 'Manufacturing Plants' },
  ];
  
  const handleSelect = (industry: IndustryType) => {
    setSelected(industry);
    if (onSelectIndustry) {
      onSelectIndustry(industry);
    }
  };
  
  return (
    <motion.div
      className="bg-dark-900 rounded-sm overflow-hidden"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav>
        <ul className="divide-y divide-dark-700">
          {industries.map((industry) => (
            <li key={industry.id}>
              <button
                onClick={() => handleSelect(industry.id)}
                className={`w-full text-left py-4 px-6 transition-all duration-300 ${
                  selected === industry.id 
                    ? 'bg-secondary text-white' 
                    : 'bg-dark-900 text-gray-300 hover:bg-dark-800'
                }`}
              >
                <span className="block">{industry.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </motion.div>
  );
};

export default IndustriesSidebar;