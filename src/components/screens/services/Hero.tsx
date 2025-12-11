"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/atoms";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Hero = () => {
  const pathname = usePathname();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  } as any;

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  } as any;

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
  } as any;

  const getDescriptionText = () => {
    if (pathname === "/services/physical-security ") {
      return "Our guards are typically drawn from a highly respected and well-trained forces unit are converted through training as Security Guards. Our locally employed guards are trained to adapt to any changing environment whilst maintaining the integrity of the protected people and/or object and are licensed to carry firearms.";
    } else if (pathname === "/services/close-protection") {
      return "At Centurion Africa, we understand the importance of personalized and comprehensive security solutions. That is why we offer Close Protection Officer (CPO) services tailored to meet our client’s unique needs.";
    }else if (pathname === "/services/audits-and-assessments") {
      return "Centurion Africa's risk assessments identify and evaluate security risks, providing clients with expert insights to mitigate risks effectively. Conducted by experienced professionals, these assessments help safeguard assets, reduce operational disruptions, and optimize security strategies. Our tailored approach ensures proactive risk management.";
    } else if (pathname === "/services/technological-services") {
      return "We work with trusted technology partners to deliver modern, effective security infrastructure tailored to your needs. Our role is to ensure every solution is seamlessly integrated into your security strategy, with trained personnel ready to operate and respond.";
    }
    return "Our guards are typically drawn from a highly respected and well-trained forces unit are converted through training as Security Guards. Our locally employed guards are trained to adapt to any changing environment whilst maintaining the integrity of the protected people and/or object and are licensed to carry firearms.";
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
              className="block text-5xl md:text-6xl lg:text-6xl font-normal leading-light"
            >
              Our services
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-gray-50/60 font-thin md:text-base  max-w-7xl mb-8"
            variants={itemVariants}
          >
            {getDescriptionText()}
          </motion.p>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
    </div>
  );
};

export default Hero;