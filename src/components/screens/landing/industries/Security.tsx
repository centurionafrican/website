"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface SecurityFeatureProps {
  title: string;
  description: string;
  icon: string;
  buttons?: string[];
  delay?: number;
}

const SecurityFeature: React.FC<SecurityFeatureProps> = ({
  title,
  description,
  icon,
  buttons = [],
  delay = 0
}) => {
  return (
    <motion.div
      className="border-l-4 border-secondary pl-6"
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5 }}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-16 h-16  rounded-md flex items-center justify-center">
          <Image 
            src={icon} 
            alt={title} 
            width={24} 
            height={24} 
            className="text-white w-full h-full"
          />
        </div>
        <div>
          <h3 className="text-2xl font-medium mb-4">{title}</h3>
          <div className="text-gray-300 space-y-4 mb-4">
            {description.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          
          {buttons.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {buttons.map((button, idx) => (
                <motion.button
                  key={idx}
                  className="px-4 py-2 bg-transparent border border-gray-600 text-white rounded-sm hover:bg-gray-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {button}
                </motion.button>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default SecurityFeature;