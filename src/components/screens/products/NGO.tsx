"use client";

import ImageTextSection from "@/components/atoms/imageTextSection";
import { motion } from "framer-motion";
import Image from "next/image";

const NGOs = () => {
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
          title="NGO's"
          description={`
            <p>
              We are also continuously improving our insurance for
              NGO’s to ensure the safety of our employees and your
              assets
            </p>
            <br />
            <p>
              At Alliance we offer flexible coverage plans
              specifically tailored to suit different budgets and needs. Our
              plans range from Assets protection to end to end medical
              plans for your staff and expatriates.
            </p>`}
          imageSrc="/products/ngos.svg"
          imageAlt="NGO's"
          position="right"
        />
      </div>
    </section>
  );
};

export default NGOs;
