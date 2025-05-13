"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, delay }) => {
  return (
    <motion.div 
      className="bg-primary/70 border border-[#F6F8FF14] backdrop-blur-md p-5 text-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};

const WhyChooseSection: React.FC = () => {
  const features = [
    {
      title: "Expertly trained personnel",
      description: "All our guards undergo intensive training at specialized facilities under certified Centurion instructors.",
    },
    {
      title: "Local Empowerment",
      description: "We hire and fairly compensate Rwandans, elevating standards in the national security industry.",
    },
    {
      title: "Proven Industry Expertise",
      description: "Our team includes continentally recognized specialists in complex security infrastructure.",
    },
    {
      title: "Advanced Technologies",
      description: "From vehicle scanning to remote monitoring, we implement high-grade, modern security systems.",
    },
    {
      title: "Large-Scale Project Execution",
      description: "Successfully managing over 800 cameras across 200+ CCTV sites, we deliver reliable, scalable solutions.",
    },
    {
      title: "Custom Protection Solutions",
      description: "Whether VIP protection or secured premises, our services are tailored to meet high-stakes requirements.",
    },
  ];

  return (
    <div className="w-full h-fit mx-auto">
      <div
        className="relative bg-cover bg-center"
        style={{ backgroundImage: "url('/images/kl_18.jpg')" }}
      >
        <div className="bg-black/40 backdrop-blur-md flex justify-center py-16 md:py-24">
          <div className="max-w-6xl w-full mx-auto px-4 lg:px-8">
            <motion.h2 
              className="text-white text-4xl md:text-6xl font-normal mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Why choose <br />
              <span className="text-secondary font-bold">Centurion</span>
            </motion.h2>
            
            <motion.p 
              className="text-white leading-relaxed max-w-xl mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Centurion combines elite training, local empowerment, and cutting-edge expertise to deliver unmatched security solutions across Africa.
            </motion.p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  delay={0.2 + index * 0.1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSection;