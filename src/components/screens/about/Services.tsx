"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const AboutAib = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const values = [
    "Provide prompt and effective service",
    "Build lasting relationship with clients",
    "Have technical and professional competence",
    "Uphold integrity",
  ];

  return (
    <section className="w-full relative bg-[#F8FAFC] py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden lg:min-h-screen flex items-center">
      <motion.div
        className="absolute opacity-10 w-[67.5rem] h-[49.75rem] -top-[8.8125rem] -left-[10.75rem] backdrop-blur-[160px] z-0"
        initial={{ x: 0 }}
        animate={{ x: [-200, 200] }}
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
        className="absolute -bottom-10 opacity-20 w-[43.375rem] h-[37.0625rem] right-0 backdrop-blur-[160px] z-0"
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

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 relative landing_font"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div
          variants={itemVariants}
          className="mb-12 md:mb-16 flex  gap-12 justify-between lg:flex-row flex-col"
        >
          <h1 className="text-gray-500 text-4xl lg:w-[50%] w-full lg:text-5xl xl:text-6xl font-normal tracking-tight funnel-sans-hero leading-tight pb-4">
            About <br />
            <span className="text-tertiary">Alliance Insurance brokers</span>
          </h1>

          <div className="space-y-4 text-subtle text-base sm:text-lg lg:w-1/2 w-full">
            <p>
              Established on February 28, 2006, Alliance Insurance Brokers (centurion)
              has grown to become a pioneering and leading insurance brokerage
              firm in Rwanda. With our headquarters based in Kigali
            </p>
            <p>
              We have solidified our reputation through organic growth and
              customer-centric marketing strategy, earning the trust of
              thousands of clients. Registered under Brokerage Registration No.
              001/2016, we operate with professional indemnity insurance of Rwf.
              1,500,000,000, demonstrating our commitment to reliability and
              security.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={itemVariants}
        >
          <div className="bg-white p-6 sm:p-8  rounded-2xl border border-gray-100/60">
            <Image
              src="/landing/our_mission.svg"
              alt="mission card"
              width={24}
              height={24}
              className="object-cover object-center w-14 h-auto"
              priority
            />

            <h3 className="text-xl my-4">Our Mission</h3>
            <p className="text-subtle">
              To ensure that our clients are being adequately insured, by
              providing professional advice and the best personalizes service at
              all times.
            </p>
            <p className="text-subtle">
              Remain innovative, reliable and competitive.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8  rounded-2xl border border-gray-100/60">
            <Image
              src="/landing/core_value.svg"
              alt="mission card"
              width={24}
              height={24}
              className="object-cover object-center w-14 h-auto"
              priority
            />
            <h3 className="text-xl my-4">Our Core Values</h3>
            <ul className="space-y-0">
              {values.map((value, index) => (
                <li key={index} className="text-subtle">
                  {value}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 sm:p-8  rounded-2xl border border-gray-100/60">
            <Image
              src="/landing/our_vision.svg"
              alt="mission card"
              width={24}
              height={24}
              className="object-cover object-center w-14 h-auto"
              priority
            />
            <h3 className="text-xl my-4">Our Vision</h3>
            <p className="text-subtle">
              To become the best and the leading insurance broker not only in
              Rwanda, but also in the region at large,
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutAib;
