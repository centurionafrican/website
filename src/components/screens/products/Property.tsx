"use client";

import ImageTextSection from "@/components/atoms/imageTextSection";
import { motion } from "framer-motion";
import Image from "next/image";

const Bankers = () => {
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
        className="absolute opacity-10 w-[67.5rem] h-[49.75rem] -top-[8.8125rem] -left-[10.75rem] backdrop-blur-[160px] z-0"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #7BDDE2 13.5%, rgba(127, 208, 231, 0) 100%)",
        }}
      />

      <motion.div
        className="absolute -bottom-10 opacity-20 w-[43.375rem] h-[37.0625rem] right-0 backdrop-blur-[160px] z-0"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #3541AB 13.5%, rgba(127, 208, 231, 0) 100%)",
        }}
      />

      <div className="w-full max-w-7xl mx-auto px-0 sm:px-0 lg:px-0 relative z-10">
        <ImageTextSection
          title="Property Insurance"
          description={`
            <p>
              Alliance Insurance Brokers has also thought of securing Property owners or renters. 
              </p>
            <p>
              Property insurance is a type of insurance policy that can provide coverage for property owners or renters. 
              </p>
            <p>
              Examples of property insurance include homeowners, renters, and flood insurance policies. These policies can provide coverage for damages caused by fire, flooding, theft, weather, and other risks.
            </p>
            `}
          imageSrc="/products/property.jpg"
          imageAlt="Financial insitution"
          position="left"
        />
      </div>
    </section>
  );
};

export default Bankers;
