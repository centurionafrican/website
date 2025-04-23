"use client";

import ImageTextSection from "@/components/atoms/imageTextSection";
import { motion } from "framer-motion";
import Image from "next/image";

const Liability = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="w-full relative bg-[#F8FAFC] py-4 sm:py-6 md:py-8 lg:py-12 overflow-hidden  flex items-center">
      <motion.div
        className="absolute opacity-20 w-[67.5rem] h-[49.75rem] -top-[8.8125rem] -left-[10.75rem] backdrop-blur-[160px] z-0"
        initial={{ x: 0 }}
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #7BDDE2 13.5%, rgba(127, 208, 231, 0) 100%)",
        }}
      />

      <motion.div
        className="absolute -bottom-10 opacity-10 w-[43.375rem] h-[37.0625rem] right-0 backdrop-blur-[160px] z-0"
        initial={{ x: 0 }}
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #3541AB 13.5%, rgba(127, 208, 231, 0) 100%)",
        }}
      />

      <div className="w-full max-w-7xl mx-auto px-0 sm:px-0 lg:px-0 relative z-10">
        <ImageTextSection
          title="Liability"
          description={`
            <p>
              We help provide bespoke solutions to help meet
              your liability needs. Liability insurance is designed to offer
              specific protection against third-party insurance claims. 
            </p>
            <p>
              General Liability Insurance is the kind of coverage that
              provides an individual with protection against variety of
              claims which may include bodily injuries, physical damage
              to car, property damage etc arising from business
              operations.
            </p>
            <br />
            <p>
              We focus on Directors and Officers liability, Employment
              practices, professional indemnity, public and products
              liability and workers compensation
            </p>`}
          imageSrc="/products/liability.svg"
          imageAlt="Liability"
          position="left"
        />
      </div>
    </section>
  );
};

export default Liability;
