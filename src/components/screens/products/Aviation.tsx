"use client";

import ImageTextSection from "@/components/atoms/imageTextSection";
import { motion } from "framer-motion";
import Image from "next/image";

const Aviation = () => {
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
    <section className="w-full relative bg-[#F8FAFC] py-4 sm:py-6 md:py-8 lg:pt-12 lg:pb-24 overflow-hidden  flex items-center">
      <motion.div
        className="absolute opacity-10 w-[67.5rem] h-[49.75rem] -top-[8.8125rem] -left-[10.75rem] backdrop-blur-[160px] z-0"
        initial={{ x: 0 }}
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #7BDDE2 13.5%, rgba(127, 208, 231, 0) 100%)",
        }}
      />

      <motion.div
        className="absolute -bottom-20 opacity-10 w-[43.375rem] h-[37.0625rem] right-0 backdrop-blur-[160px] z-0"
        initial={{ x: 0 }}
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #3541AB 13.5%, rgba(127, 208, 231, 0) 100%)",
        }}
      />

      <div className="w-full max-w-7xl mx-auto px-0 sm:px-0 lg:px-0 relative z-10">
        <ImageTextSection
          title="Aviation"
          description={`
            <p>
              We understand the complexities of aviation
              insurance and our dedicated team will guide you through
              every step of the process to find solutions that meet all of
              your business needs. 
            </p>
            <br />
            <p>
              With an experience that is unmatched in the Rwandan
              market and access to aviation underwriters, our dedicated
              professionals have the knowledge and resources to offer
              you optimum policy coverage and exceptional customer
              service.
            </p>`}
          imageSrc="/products/aviation.svg"
          imageAlt="Aviation"
          position="right"
        />
      </div>
    </section>
  );
};

export default Aviation;
