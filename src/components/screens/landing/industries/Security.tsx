"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface SecurityFeatureProps {
  title: string;
  description: string;
  icon: string;
  buttons: string[];
  delay?: number;
}

const SecurityFeature: React.FC<SecurityFeatureProps> = ({
  title,
  description,
  icon,
  buttons,
  delay = 0
}) => {
  return (
    <motion.div
      className="bg-dark-800/40 p-2 backdrop-blur-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
          <Image src={icon} alt={title} width={32} height={32} />
        </div>
        
        <div className="flex-1">
          <h3 className="text-xl font-normal mb-2">{title}</h3>
          
          <div className="text-sm text-white/70 space-y-2 mb-4 ">
            {description.split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
          
          {buttons.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {buttons.map((button, idx) => (
                <motion.div
                  key={idx}
                  className="bg-secondary border border-white/20 text-white px-2 py-1 text-sm transition-colors"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: delay + 0.2 + (idx * 0.1), duration: 0.3 }}
                >
                  {button}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default SecurityFeature;