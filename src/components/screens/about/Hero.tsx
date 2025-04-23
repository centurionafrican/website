"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ReusableHero from "@/components/atoms/hero";

const HeroAbout = () => {
  const heroContent = {
    title: "",
    subtitle: "ABOUT US",
    titleSpans: [
      { text: "We help you navigate insurance with " },
      { text: "ease", highlight: true },
      { text: "& ", highlight: false },
      { text: "confidence", highlight: true }
    ],
    description: "Building Trust, Delivering Excellence in Insurance Solutions"
  };

  return (
    <div className='relative w-full pt-24 overflow-hidden flex items-center bg-gradient-to-br from-accent/10 to-tertiary/10'>
      <Image
        src='/landing/bg_abt.svg'
        alt='background pattern'
        fill
        className='object-cover object-bottom'
        priority
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className='w-full max-w-7xl mx-auto flex flex-col lg:flex-row lg:justify-start items-center px-4 sm:px-6 lg:px-0 py-12 sm:py-16 md:py-20 lg:py-28 relative z-10'
      >
        <ReusableHero {...heroContent} />
      </motion.div>
    </div>
  );
};

export default HeroAbout;
