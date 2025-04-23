"use client";

import ImageTextSection from "@/components/atoms/imageTextSection";
import { motion } from "framer-motion";

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
          title="Crop Insurance"
          description={`
            <p>
              Alliance Insurance Brokers also minds the sector of Banking by issuing a comprehensive cover.
            </p>
            <p>
              Banker's blanket bond is an insurance policy that provides coverage against the direct financial loss from forgery, cyber fraud, physical loss of or alteration to property, extortion, and employee dishonesty.
            </p>
            <br />
            <h3>
              <b>
                Products offered by: Alliance Insurance Brokers Ltd
              </b>
            </h3>
            `}
          imageSrc="/products/crop.webp"
          imageAlt="Financial insitution"
          position="right"
        />
      </div>
    </section>
  );
};

export default Bankers;
