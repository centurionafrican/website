"use client";

import ImageTextSection from "@/components/atoms/imageTextSection";
import { motion } from "framer-motion";
import Image from "next/image";

const PowerEnergy = () => {
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
          title="Power & energy"
          description={`
            <p>
              The risks inherent in the energy insurance market are
              complex, challenging and potentially catastrophic. We at
              Alliance can be the risk partner that you need to preserve
              your company’s reputation and maximize your profits
            </p>
            <p>
              We can develop insurance solutions or programs that offer;
              General liability, workers compensation, Business
              interruption and Global or umbrella protection for the
              protection of your assets
            </p>`}
          imageSrc="/products/energy.jpeg"
          imageAlt="power and energy"
          position="right"
        />
      </div>
    </section>
  );
};

export default PowerEnergy;
