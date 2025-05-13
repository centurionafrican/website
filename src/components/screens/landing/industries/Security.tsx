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
      className=""
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5 }}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-14 h-14  rounded-md flex items-center justify-center">
          <Image 
            src={icon} 
            alt={title} 
            width={14} 
            height={14} 
            className="text-white w-10 h-10"
          />
        </div>
        <div>
          <h3 className="text-2xl font-medium">{title}</h3>
          <div className="text-gray-300 space-y-2 mb-4">
            {description.split('\n\n').map((paragraph, idx) => (
              <div key={idx} className="text-sm text-white/70 leading-relaxed">
                {paragraph}
              </div>
            ))}
          </div>
          
          {buttons.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {buttons.map((button, idx) => (
                <motion.span
                  key={idx}
                  className="py-2 bg-transparent text-white rounded-sm"
                >
                  #{button}
                </motion.span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default SecurityFeature;