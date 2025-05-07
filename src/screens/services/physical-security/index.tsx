"use client";

import { motion } from "framer-motion";

const PhysicalSecurity = () => {
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
            Vulnerability Assessments And Cybersecurity Assessments
          </motion.h2>
          <motion.div className="space-y-2" variants={containerVariants}>
            <motion.p
              className="text-base sm:text-lg xl:text-xl text-gray-600 leading-relaxed"
              variants={textVariants}
            >
              Centurion offers a wide range of types of audits and assessments
              to help secure your organization.
            </motion.p>

            <motion.div className="space-y-8" variants={containerVariants}>
              <motion.div variants={itemVariants}>
                <h3 className="text-xl sm:text-2xl font-medium mb-3">
                  Risk Assessments
                </h3>
                <p className="text-base text-gray-600">
                  A risk assessment helps organizations identify potential
                  security risks and prioritize resources accordingly.
                </p>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h3 className="text-xl sm:text-2xl font-medium mb-3">
                  Vulnerability Assessments And Cybersecurity Assessments
                </h3>
                <p className="text-base text-gray-600">
                  These help identify potential weaknesses in software,
                  hardware, and network infrastructure.
                </p>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h3 className="text-xl sm:text-2xl font-medium mb-3">
                  Technology Services
                </h3>
                <p className="text-base text-gray-600">
                  Centurion CatSystems is the technological arm of the Centurion
                  Group. We supply all sorts of security technology, ranging
                  from surveillance systems to analytics tools to screening
                  devices.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default PhysicalSecurity;
