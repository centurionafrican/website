"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IndustryType } from './Sidebar';
import SecurityFeature from './Security';

interface IndustriesContentProps {
  initialIndustry?: IndustryType;
}

const IndustriesContent: React.FC<IndustriesContentProps> = ({ 
  initialIndustry = 'hospitality' 
}) => {
  const [activeIndustry, setActiveIndustry] = useState<IndustryType>(initialIndustry);
  
  const industryContent = {
    hospitality: {
      title: 'Hospitality',
      description: `Keeping guests secure is the number one priority in the Hospitality 
                   industry. Whether they are business travelers or a family on vacation, 
                   your guests deserve to feel safe and protected during their stay.
                   
                   Discover how Centurion is the best choice for keeping your guests 
                   feeling protected.`,
      features: [
        {
          id: 'intruder-detection',
          title: 'Intruder detection',
          description: `The surveillance system incorporates multiple layers of protection 
                      to detect intruders before they enter the secure perimeter. The 
                      system uses advanced motion detection and video analytics 
                      technology to trigger alarms and send alerts to security personnel.
                      
                      The cameras are equipped with night vision and thermal imaging 
                      capabilities to detect intruders in low light and poor weather 
                      conditions.`,
          icon: '/cent.svg',
          buttons: ['Fencing', 'Barrier gates', 'Electronic sensors']
        },
        {
          id: 'access-control',
          title: 'Access control',
          description: `The surveillance system Centurion provides uses advanced 
                      access control technology to restrict unauthorized access to the 
                      restricted areas.
                      
                      The system provides secure access to authorized personnel, while 
                      preventing unauthorized access by potential intruders.`,
          icon: '/cent.svg',
          buttons: []
        },
        {
          id: 'perimeter-protection',
          title: 'Perimeter protection',
          description: `Our comprehensive perimeter security solutions create multiple 
                      protective layers around your property, acting as both deterrent 
                      and detection systems.`,
          icon: '/cent.svg',
          buttons: []
        }
      ]
    },
    airports: {
      title: 'Airports',
      description: `Airport security demands the highest level of vigilance and technology. 
                   Centurion provides comprehensive solutions that protect passengers, 
                   staff, and infrastructure while maintaining operational efficiency.`,
      features: [
        {
          id: 'perimeter-security',
          title: 'Perimeter security',
          description: `Our advanced perimeter security systems combine physical barriers, 
                      surveillance technology, and rapid response protocols to prevent 
                      unauthorized access to airside areas.`,
          icon: '/cent.svg',
          buttons: []
        }
      ]
    }
  };
  
  const currentContent = activeIndustry in industryContent 
    ? industryContent[activeIndustry as keyof typeof industryContent] 
    : industryContent.hospitality;
  
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
          {currentContent.title}
        </motion.h2>
        
        <motion.div 
          className="text-gray-300 mb-10 space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {currentContent.description.split('\n\n').map((paragraph, idx) => (
            <div key={idx} className="text-sm text-white/70 leading-relaxed">
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
          {currentContent.features.map((feature, idx) => (
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