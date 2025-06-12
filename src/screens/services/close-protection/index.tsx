"use client";

import { motion } from "framer-motion";

const CloseProtection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.3,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="w-full bg-white">
      <motion.div
        className="mx-auto "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-2xl sm:text-3xl lg:text-2xl font-normal mb-3 sm:mb-5"
            variants={titleVariants}
          >
            Close Protection Officer
          </motion.h2>
          <motion.div className="space-y-2" variants={containerVariants}>
            <motion.p
              className="text-base sm:text-lg xl:text-xl text-gray-600 leading-relaxed"
              variants={textVariants}
            >
              At Centurion Africa, we understand the importance of personalized
              and comprehensive security solutions. That is why we offer Close
              Protection Officer (CPO) services tailored to meet our client’s
              unique needs.
              <br />
              <br />
              Centurion Africa provides flexible and adaptable solutions.
              Whether you need a single CPO, a driver, or a combination of both,
              our services are designed to seamlessly integrate into your travel
              plans. Our team can be deployed ahead of time to assess and secure
              the area, ensuring your safety and peace of mind from the moment
              you arrive.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default CloseProtection;
