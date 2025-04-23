"use client";

import ImageTextSection from "@/components/atoms/imageTextSection";
import { motion } from "framer-motion";
import Image from "next/image";

const MotorSection = () => {
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
        className="absolute opacity-40 w-[67.5rem] h-[49.75rem] -top-[8.8125rem] -left-[10.75rem] backdrop-blur-[160px] z-0"
        initial={{ x: 0 }}
        // animate={{ x: [-200, 200] }}
        transition={{
          repeat: Infinity,
          duration: 15,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #7BDDE2 13.5%, rgba(127, 208, 231, 0) 100%)",
        }}
      />

      <motion.div
        className="absolute -bottom-10 opacity-10 w-[43.375rem] h-[37.0625rem] right-0 backdrop-blur-[160px] z-0"
        initial={{ x: 0 }}
        animate={{ x: [200, -200] }}
        transition={{
          repeat: Infinity,
          duration: 15,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #3541AB 13.5%, rgba(127, 208, 231, 0) 100%)",
        }}
      />

      <div className="w-full max-w-7xl mx-auto px-0 sm:px-0 lg:px-0 relative z-10">
        <ImageTextSection
          title="Motor"
          description={`
            <p>
              Owning a car involves several risks. When a car accident
              occurs, people & passengers may be injured and vehicles
              (or other property) damaged. Damage, or loss, can also
              occur through theft, vandalism, or natural disasters.
            </p>
            <br />
            <p>
              We at Alliance tailor the best insurance package to protect
              everything that needs looking after in your vehicle whether
              you own an individual car or operate a fleet of vehicles.
            </p>`}
          imageSrc="/products/motor.jpg"
          imageAlt="Motor"
          position="left"
        />
      </div>
    </section>
  );
};

export default MotorSection;
