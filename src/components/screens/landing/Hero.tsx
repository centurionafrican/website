"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface HeroProps {
  path: string,
  classname?: string,
  title?: string,
  spanTitle?: string,
  description?: string
}

const Hero = ({ path, classname, title, spanTitle, description }: HeroProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const textHighlightVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: delay
      }
    })
  };

  return (
    <div className={`${classname} relative w-full h-screen flex items-center overflow-hidden `}>
      <div className="absolute inset-0 z-0">
        <Image
          src={path}
          alt="Security professional background"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent z-10"></div>
      </div>

      <motion.div
        className="relative z-20 max-w-5xl container mx-auto md:px-4 lg:px-0 h-full flex flex-col"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-6xl absolute bottom-12">
          <motion.h1
            className="text-white b-3 flex flex-col"
            variants={itemVariants}
          >
            <motion.span
              custom={0}
              variants={textHighlightVariants}
              className="block text-5xl md:text-6xl lg:text-7xl font-normal leading-light"
            >
              {title}
            </motion.span>
            <motion.span
              custom={0.3}
              variants={textHighlightVariants}
              className="block text-primary text-5xl md:text-6xl lg:text-7xl font-bold leading-light"
            >
              {spanTitle}

            </motion.span>
          </motion.h1>

          <motion.p
            className="text-white font-thin md:text-lg  max-w-2xl mb-8"
            variants={itemVariants}
          >
            {description}
          </motion.p>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
    </div>
  );
};

export default Hero;