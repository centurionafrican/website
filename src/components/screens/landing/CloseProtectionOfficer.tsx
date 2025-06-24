"use client";

import { motion } from "framer-motion";

const CloseProtectionOfficerSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="close-protection-officers"
      className="relative w-full bg-gradient-to-br from-[#F6F8FF] via-[#F8FAFF] to-[#F4F6FF] py-20 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-25">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 lg:px-4">
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={headerVariants} className="mb-16 md:mb-20">
            <h2 className="text-secondary text-center md:text-left text-5xl md:text-7xl font-normal mb-8 leading-tight">
              Close protection{" "}
              <span className="text-primary font-bold relative">
                officers
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full"></div>
              </span>
            </h2>
          </motion.div>

          <motion.div variants={paragraphVariants} className="mb-12 md:mb-16">
            <p className="text-secondary/80  text-center md:text-left  leading-relaxed max-w-5xl mx-auto">
              Our guards undergo The Highfield Close Protection Officer (CPO) course, an advanced training program 
              designed to equip security professionals with essential skills for high-risk environments. This intensive 
              course includes specialized training in{" "}
              <span className="font-bold text-primary">weapons handling</span>,{" "}
              <span className="font-bold text-primary">tactical movements</span>,{" "}
              <span className="font-bold text-primary">mine awareness</span>, and{" "}
              <span className="font-bold text-primary">anti-ambush techniques</span>, 
              ensuring that our Centurion Africa guards are prepared to protect clients in even the most challenging situations.
            </p>
          </motion.div>

          <motion.div variants={paragraphVariants}>
            <p className="text-secondary/80 text-center md:text-left  leading-relaxed max-w-5xl mx-auto">
              Centurion Africa provides flexible and adaptable solutions. Whether you need a single CPO, a driver, 
              or a combination of both, our services are designed to seamlessly integrate into your travel plans. 
              Our team can be deployed ahead of time to assess and secure the area, ensuring your safety and peace 
              of mind from the moment you arrive.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CloseProtectionOfficerSection;