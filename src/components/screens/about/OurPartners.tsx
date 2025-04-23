"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const OurPartners = () => {
  const logos = [
    {
      src: "/about/psf.png",
      alt: "psf",
      width: 140,
      height: 35
    },
    {
      src: "/about/agaciro.png",
      alt: "Agaciro",
      width: 140,
      height: 35
    },
    {
      src: "/about/unwomen.svg",
      alt: "un women",
      width: 140,
      height: 35
    },
    {
      src: "/about/alliedafrica.png",
      alt: "alliedafrica",
      width: 140,
      height: 35
    },
    {
      src: "/about/amref.png",
      alt: "amref",
      width: 140,
      height: 35
    },
    {
      src: "/about/jwseagon.png",
      alt: "jwseagon",
      width: 140,
      height: 35
    },
    {
      src: "/about/trinity.avif",
      alt: "akagera",
      width: 140,
      height: 35
    },
    {
      src: "/about/swan.jpg",
      alt: "swan",
      width: 140,
      height: 35
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className='w-full bg-white py-10 sm:py-12 md:py-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-100px" }}
          className='space-y-12'
        >
          <motion.div
            className='text-center max-w-3xl mx-auto space-y-4'
            variants={titleVariants}
          >
            <h1 className='text-gray-500 text-4xl  w-full lg:text-5xl xl:text-6xl font-normal tracking-tight funnel-sans-hero leading-tight pb-4'>
              Our partners
            </h1>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
          >
            {logos.map((logo, index) => {
              const isLastColumn = (index + 1) % 4 === 0;
              const isLastRow = index >= logos.length - 4;

              return (
                <motion.div
                  key={`${logo.alt}-${index}`}
                  variants={itemVariants}
                  className={`
                    relative flex items-center justify-center
                    ${!isLastColumn ? "border-r" : ""} 
                    ${!isLastRow ? "border-b" : ""} 
                    border-gray-100 
                    aspect-[4/3] 
                    p-4
                  `}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className='object-contain w-auto h-auto max-w-[70%] max-h-[70%]'
                    priority
                  />
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            className='absolute w-64 h-64 bg-blue-50 rounded-full -z-10 blur-3xl opacity-30'
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.2, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{
              left: "5%",
              top: "20%"
            }}
          />
          <motion.div
            className='absolute w-64 h-64 bg-indigo-50 rounded-full -z-10 blur-3xl opacity-30'
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.2, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1
            }}
            style={{
              right: "5%",
              bottom: "20%"
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default OurPartners;
