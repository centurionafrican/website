"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Location {
  name: string;
  x: number;
  y: number;
}

interface StatCard {
  icon: string;
  value: string;
  description: string;
}

const SecuritySection = () => {
  const locations: Location[] = [
    { name: "ISTANBUL", x: 54.5, y: 27.5 },
    { name: "ANKARA", x: 59.5, y: 27.5 },
    { name: "BEIRUT", x: 56, y: 32.5 },
    { name: "BAGDAD", x: 61.5, y: 32.5 },
    { name: "QATAR", x: 64, y: 36 },
    { name: "UAE", x: 62, y: 40 },
    { name: "OMAN", x: 67, y: 41 },
    { name: "TUNISIA", x: 44, y: 32 },
    { name: "SENEGAL", x: 31, y: 40 },
    { name: "ALGERIA", x: 44, y: 42 },
    { name: "NIGERIA", x: 46, y: 48 },
    { name: "GUINEA-CONAKRY", x: 31, y: 48 },
    { name: "RWANDA", x: 54, y: 54 },
    { name: "MOZAMBIQUE", x: 56, y: 65 },
    { name: "COMOROS", x: 65, y: 60 },
  ];

  const stats: StatCard[] = [
    {
      icon: "/firm.svg",
      value: "2019",
      description: "Our firm is founded",
    },
    {
      icon: "/moon.svg",
      value: "804",
      description: "Active guards",
    },
    {
      icon: "/pending.svg",
      value: "600",
      description: "Pending for deployment",
    },
    {
      icon: "/ellipse.svg",
      value: "012",
      description: "Countries",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const locationVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.5 + i * 0.1,
        duration: 0.4,
        type: "spring",
        stiffness: 200,
      },
    }),
  };

  return (
    <section className="relative w-full py-20 md:py-12">
      <div className="absolute inset-0 z-0">
        <Image
          src="/security.svg"
          alt="Security background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-secondary/10 z-10"></div>
      </div>

      <div className="relative z-20 max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
        >
          <motion.span
            variants={itemVariants}
            className="uppercase text-white text-sm tracking-wide"
          >
            WHAT WE PROTECT
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="text-white md:text-7xl text-5xl font-bold mt-2"
          >
            Security to everyone, <br />
            anywhere.
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="text-white/60 max-w-4xl mx-auto mt-2 font-light"
          >
            Centurion Group delivers comprehensive security solutions, offering
            meticulous security assessments, advanced electronics and
            surveillance services, and highly trained security guards. From
            cutting-edge technology to expertly trained personnel, our
            integrated approach ensures our clients' unmatched safety and peace
            of mind
          </motion.div>
        </motion.div>

        <motion.div
          className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[400px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {locations.map((location, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={locationVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="absolute z-10"
              style={{
                left: `${location.x}%`,
                top: `${location.y}%`,
              }}
            ></motion.div>
          ))}
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-36"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-primary p-8 text-white"
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            >
              <div className="mb-4">
                <Image
                  src={stat.icon}
                  alt={stat.description}
                  width={36}
                  height={36}
                />
              </div>
              <h3 className="text-4xl font-bold mb-1">{stat.value}</h3>
              <p className="text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SecuritySection;
