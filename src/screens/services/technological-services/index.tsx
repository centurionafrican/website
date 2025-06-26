"use client";

import { motion } from "framer-motion";

const TechnologicalServices = () => {
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
Video Surveillance          </motion.h2>
          <motion.div className="space-y-2" variants={containerVariants}>
            <motion.p
              className="text-base text-gray-600 leading-relaxed"
              variants={textVariants}
            >
              From small offices to large industrial sites, we help deploy high-definition CCTV systems that provide real-time monitoring and forensic video review capabilities. Our guards are trained to work in sync with these systems, ensuring immediate response and continuous oversight.
            </motion.p>

            <motion.div className="space-y-8" variants={containerVariants}>
              <motion.div variants={itemVariants}>
                <h3 className="text-xl sm:text-2xl  mb-3">
                Access Control Systems                </h3>
               
                <motion.p
              className="text-base text-gray-600 leading-relaxed"
              variants={textVariants}
            >
              Managing who enters your premises is a critical layer of security. The surveillance system we provide uses advanced access control technology to restrict unauthorized access to the restricted areas as well as various checkpoints. The system provides secure access to authorized personnel unauthorized access by potential intruders.
                </motion.p>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h3 className="text-xl sm:text-2xl  mb-3">
                Perimeter Intrusion Detection              </h3>
                <motion.p
              className="text-base text-gray-600 leading-relaxed"
              variants={textVariants}
            >
  <motion.p
              className="text-base text-gray-600 leading-relaxed"
              variants={textVariants}
            >
              Protect your boundaries with smart sensor technology, alarms, and motion detection systems designed to detect unauthorized access before it becomes a threat. Our guards are trained to respond quickly to alerts, reinforcing your perimeter with both technology and presence.
                </motion.p>                </motion.p>
              </motion.div>

   
              <motion.div variants={itemVariants}>
                <h3 className="text-xl sm:text-2xl  mb-3">
                Technology-Enabled Guarding             </h3>
                <motion.p
              className="text-base text-gray-600 leading-relaxed"
              variants={textVariants}
            >
  <motion.p
              className="text-base text-gray-600 leading-relaxed"
              variants={textVariants}
            >
              We train all guards assigned to tech-supported sites to use the equipment effectively, conduct system-assisted patrols, and communicate efficiently through mobile and surveillance platforms.
                </motion.p>                </motion.p>
              </motion.div>

   
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default TechnologicalServices;
