"use client";
import { useState } from "react";
import { Button } from "@/components/atoms";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const textHighlightVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: delay,
      },
    }),
  };

  return (
    <div className="relative w-full h-sceen flex items-center overflow-hidden ">
      <div className="absolute inset-0 z-0">
        <Image
          src="/landing/hero.svg"
          alt="Security professional background"
          fill
          className="object-cover object-center "
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent z-10"></div>
      </div>

      <motion.div
        className="relative z-20 max-w-5xl container mx-auto px-4 md:px-4 lg:px-0 h-full flex flex-col justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-6xl pt-40 lg:pt-60">
          <motion.h1
            className="text-white  mb-3 flex flex-col gap-2"
            variants={itemVariants}
          >
            <motion.span
              custom={0}
              variants={textHighlightVariants}
              className="block text-5xl md:text-6xl lg:text-7xl font-normal leading-light"
            >
              Our services
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-gray-50/60 font-thin md:text-base  max-w-7xl mb-8"
            variants={itemVariants}
          >
            Centurion Group delivers comprehensive security solutions, offering
            meticulous security assessments, advanced electronics and
            surveillance services, and highly trained security guards. From
            cutting-edge technology to expertly trained personnel, our
            integrated approach ensures our clients' unmatched safety and peace
            of mind
          </motion.p>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
    </div>
  );
};

export default Hero;
