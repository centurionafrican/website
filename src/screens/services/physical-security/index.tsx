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
            Guarding
          </motion.h2>
          <motion.div className="space-y-2" variants={containerVariants}>
            <motion.p
              className="text-base text-gray-600 leading-relaxed"
              variants={textVariants}
            >
              We provide guards for virtually any kind of Physical Object,
              Building or Space that needs to be protected. Depending on the
              nature of the mission, we provide uniformed Armed or Unarmed
              Guards.
            </motion.p>

            <motion.div className="space-y-8" variants={containerVariants}>
              <motion.div variants={itemVariants}>
                <h3 className="text-xl sm:text-2xl  mb-3">
                  Patrol{" "}
                </h3>

                <motion.p
                  className=" text-gray-600 leading-relaxed"
                  variants={textVariants}
                >
                  Live guard patrols are one of the most effecting ways of
                  securing large areas and perimeters in high and less dense
                  areas. Our guards are trained to spot any abnormalities and
                  respond accordingly.
                </motion.p>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h3 className="text-xl sm:text-2xl  mb-3">
                  Pedestrian & Vehicle Checks{" "}
                </h3>
                <motion.p
                  className="text-base text-gray-600 leading-relaxed"
                  variants={textVariants}
                >
                  <motion.p
                    className="text-base text-gray-600 leading-relaxed"
                    variants={textVariants}
                  >
                    Live guard patrols are one of the most effecting ways of
                    securing large areas and perimeters in high and less dense
                    areas. Our guards are trained to spot any abnormalities and
                    respond accordingly.
                  </motion.p>{" "}
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default PhysicalSecurity;
