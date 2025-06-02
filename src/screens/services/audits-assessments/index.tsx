"use client";

import { motion } from "framer-motion";

const AuditsAssessments = () => {
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
Risk Assessment & Strategic Evaluation          </motion.h2>
          <motion.div className="space-y-2" variants={containerVariants}>
            <motion.p
              className="text-base sm:text-lg xl:text-xl text-gray-600 leading-relaxed"
              variants={textVariants}
            >
At Centurion Africa, we believe that strong security starts with understanding your vulnerabilities. Our risk assessments are conducted by seasoned professionals who identify and evaluate threats unique to your operations and environment.            </motion.p>

            <motion.div className="space-y-8" variants={containerVariants}>
              <motion.div variants={itemVariants}>
                <h3 className="text-xl sm:text-2xl font-medium mb-3">
                Insight-Driven Recommendations                </h3>
               
                <motion.p
              className="text-base sm:text-lg xl:text-xl text-gray-600 leading-relaxed"
              variants={textVariants}
            >
Each assessment results in clear, actionable insights tailored to your context, whether you’re managing a construction site or a corporate office. We provide expert guidance on how to reduce exposure, safeguard assets, and enhance your overall security posture.                </motion.p>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h3 className="text-xl sm:text-2xl font-medium mb-3">
                Proactive, Not Reactive             </h3>
                <motion.p
              className="text-base sm:text-lg xl:text-xl text-gray-600 leading-relaxed"
              variants={textVariants}
            >
  <motion.p
              className="text-base sm:text-lg xl:text-xl text-gray-600 leading-relaxed"
              variants={textVariants}
            >
We don’t wait for problems to arise. Our approach is rooted in proactive risk management, helping you anticipate and prevent security disruptions before they occur. This foresight allows you to operate with confidence and clarity.                </motion.p>                </motion.p>
              </motion.div>

              {/* <motion.div variants={itemVariants}>
                <h3 className="text-xl sm:text-2xl font-medium mb-3">
                Close Protection Officer               </h3>
                <p className="text-base text-gray-600">
                  Centurion CatSystems is the technological arm of the Centurion
                  Group. We supply all sorts of security technology, ranging
                  from surveillance systems to analytics tools to screening
                  devices.
                </p>
              </motion.div> */}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AuditsAssessments;
