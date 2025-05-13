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
      className="py-[64px] w-full bg-white overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="max-w-6xl w-full mx-auto px-4 lg:px-8">
        <motion.h2 
          className="text-secondary md:text-[45px] text-6xl font-normal mb-4"
          variants={itemVariants}
        >
          Trusted by a diverse range of <br />
          <span className="text-secondary font-normal">clients across industries</span>
        </motion.h2>
        
        <motion.p 
          className="text-[#687588] lg:w-1/2"
          variants={itemVariants}
        >
          We are proud to serve a diverse range of clients, providing security service solutions that meet their unique needs.
        </motion.p>

        <motion.div
          className="relative w-full mt-12 overflow-hidden"
          variants={itemVariants}
        >
          <motion.div
            className="flex items-center gap-12"
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
                className="relative w-[120px] h-[50px] flex-shrink-0 hover:scale-110 transition-transform duration-300"
              >
                <Image
                  src={src}
                  alt={`Partner logo ${index + 1}`}
                  fill
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