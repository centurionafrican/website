"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Partners = () => {
  const logosContainerRef = useRef<HTMLDivElement>(null);

  const logos = [
    "/images/irembo.png",
    "/images/bk.png",
    "/images/rwandair.png",
    "/images/irembo.png",
    "/images/rwandair.png",
    "/images/bk.png",
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.div 
      className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 w-full bg-white overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-secondary text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-3 sm:mb-4 leading-tight"
          variants={itemVariants}
        >
          <span className="block sm:inline">Trusted by a diverse range of</span>{' '}
          <br className="hidden sm:block" />
          <span className="text-secondary font-normal block sm:inline">clients across industries</span>
        </motion.h2>
        
        <motion.p 
          className="text-gray-600 text-sm sm:text-base md:text-lg lg:w-3/4 xl:w-1/2 leading-relaxed"
          variants={itemVariants}
        >
          We are proud to serve a diverse range of clients, providing security service solutions that meet their unique needs.
        </motion.p>

        <motion.div
          className="block lg:hidden mt-6 sm:mt-8 md:mt-10"
          variants={itemVariants}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
            {logos.slice(0, 6).map((src, index) => (
              <div 
                key={index} 
                className="relative w-full h-16 sm:h-20 flex items-center justify-center"
              >
                <Image
                  src={src}
                  alt={`Partner logo ${index + 1}`}
                  width={120}
                  height={60}
                  style={{ objectFit: "contain" }}
                  className="max-w-full max-h-full"
                />
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="hidden lg:block relative w-full mt-12 overflow-hidden"
          variants={itemVariants}
        >
          <motion.div
            className="flex items-center gap-10 xl:gap-12"
            animate={{ x: [0, -1500] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
            ref={logosContainerRef}
          >
            {logos.map((src, index) => (
              <div 
                key={index} 
                className="relative w-28 h-14 xl:w-32 xl:h-16 flex-shrink-0 hover:scale-110 transition-transform duration-300"
              >
                <Image
                  src={src}
                  alt={`Partner logo ${index + 1}`}
                  fill
                  sizes="(max-width: 1280px) 112px, 128px"
                  style={{ objectFit: "contain" }}
                />
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Partners;