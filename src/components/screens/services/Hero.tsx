"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ReusableHero from "@/components/atoms/hero";

const ServicesHero = () => {
  const heroContent = {
    title: "",
    subtitle: "SERVICES",
    titleSpans: [
      { text: "Secure your future with tailored " },
      { text: "insurance", highlight: true },
      { text: "solutions ", highlight: true }
    ],
    description:
      "From risk management to healthcare and pensions, we deliver reliable services to protect what matters most to you"
  };

  return (
    <div className='relative w-full pt-24 overflow-hidden min-h-screen/2 flex items-center bg-gradient-to-br from-accent/10 to-tertiary/10'>
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
        className='w-full max-w-7xl mx-auto flex flex-col lg:flex-row lg:justify-start items-center px-4 sm:px-6 lg:px-0 py-12 sm:pt-16 md:pt-20 lg:pt-28 relative z-10'
      >
        <ReusableHero {...heroContent} />
      </motion.div>
    </div>
  );
};

export default ServicesHero;
