"use client";

import ImageTextSection from "@/components/atoms/imageTextSection";
import { motion } from "framer-motion";

const ICT = () => {
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
          title="ICT & Communication"
          description={`
            <p>
              we have been helping telecommunication and
              ICT companies. Not only do we care about your business
              today but also of its future survival.
            </p>
            <p>
              Our approach has been
              two pronged: By responding to risks and perils that your
              business faces today and also to assist you prepare for the
              unknowns tomorrow
            </p>
            <br />
            <p>
              Telecommunications and ICT is an ever evolving field and
              new challenges keep on emerging that may put your
              company and profits at risk. To help your company keep
              pace in a constantly changing and evolving environment,
              you need an insurance broker who is as innovative and
              committed to protecting your business and that is where
              we come in.
            </p>`}
          imageSrc="/products/ict.jpg"
          imageAlt="IctCommunication"
          position="right"
        />
      </div>
    </section>
  );
};

export default ICT;
