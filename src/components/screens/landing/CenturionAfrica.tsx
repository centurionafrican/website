"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Primary from "@/assets/images/logo.svg";

const CenturionAfricaSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  } as any;

  const headerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  } as any;

  const paragraphVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  } as any;

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 2, ease: "easeOut" },
    },
  };

  return (
    <section
      id="centurion-africa"
      className="relative w-full  bg-gradient-to-br from-[#F6F8FF] via-[#F8FAFF] to-[#F4F6FF] py-10 md:py-12 lg:py-20 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-0 w-80 h-80 bg-gradient-to-br from-primary/80 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-gradient-to-tl from-secondary/80 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-primary/90 to-secondary/10 rounded-full blur-2xl"></div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-primary/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-1/3 w-1 h-1 bg-secondary/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-primary/15 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-20">
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={headerVariants} className="mb-6 md:mb-8 lg:mb-10">
            <div className="relative">
              <h1 className="text-secondary text-4xl sm:text-5xl md:text-left text-center md:text-6xl font-normal mb-8 leading-tight tracking-tight">
                Centurion{" "}
                <span className="text-primary font-bold relative inline-block">
                  Africa
                  {/* <div className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-gradient-to-r from-primary via-primary to-primary/50 rounded-full"></div>
                  <div className="absolute -bottom-2 md:-bottom-4 left-1/4 w-1/2 h-0.5 bg-gradient-to-r from-primary/50 to-transparent rounded-full"></div> */}
                </span>
              </h1>
            </div>
          </motion.div>

          <div className="max-w-6xl mx-auto space-y-6 md:space-y-12">
            <motion.div 
              variants={paragraphVariants} 
              className="relative"
            >
              <div className="absolute -left-2 top-0 w-1 h-full bg-gradient-to-b from-primary/50 to-transparent rounded-full hidden lg:block"></div>
              <p className="text-secondary/85 text-center md:text-left leading-relaxed md:leading-relaxed lg:leading-relaxed font-light">
                Centurion Africa provides bespoke security solutions from highly trained security guards. Our locally employed guards are trained to adapt to any changing environment whilst maintaining the integrity of the protected people and/or object. They are typically drawn from a highly respected and well-trained forces unit and converted to private security guards through our{" "}
                <span className="font-semibold text-primary bg-gradient-to-r from-primary/10 to-transparent px-2 py-1 rounded-md">3-month basic training</span>.
              </p>
            </motion.div>

            <motion.div 
              variants={paragraphVariants}
              className="relative"
            >
              <div className="absolute -right-2 top-0 w-1 h-full bg-gradient-to-b from-secondary/50 to-transparent rounded-full hidden lg:block"></div>
              <p className="text-secondary/85 text-center md:text-left leading-relaxed md:leading-relaxed lg:leading-relaxed font-light">
                Centurion Security Group combines the expertise of{" "}
                <span className="font-semibold text-primary bg-gradient-to-r from-primary/10 to-transparent px-2 py-1 rounded-md">Centurion Africa</span>{" "}
                and our dedicated partners to deliver a full spectrum of security services tailored to meet the highest standards of safety and protection.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CenturionAfricaSection;