"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard = ({ title, description }: FeatureCardProps) => (
  <motion.div 
    className="bg-[#13191D] lg:p-12 p-6 h-full"
    whileHover={{ y: -5, transition: { duration: 0.3 } }}
  >
    <h2 className="text-white text-2xl font-normal mb-2">{title}</h2>
    <p className="text-white text-sm">{description}</p>
  </motion.div>
);

interface ImageCardProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageCard = ({ src, alt, className = "" }: ImageCardProps) => (
  <motion.div 
    className={`relative overflow-hidden ${className}`}
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
  >
    <Image 
      src={src} 
      alt={alt} 
      fill 
      className="object-cover"
    />
  </motion.div>
);

const AboutSection = () => {
  const features = [
    {
      title: "Our Mission",
      description: "To raise the standard of the security industry in Rwanda and keep up to date with the latest technology."
    },
    {
      title: "Our Vision",
      description: "Be Africa's and the Middle East's leading high-end security solution."
    },
    {
      title: "Our Values",
      description: "Our guards are trained in accordance with human rights standards, and are compensated fairly."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const imageContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section 
      id="about" 
      className="relative w-full bg-[#F6F8FF] py-20 md:py-32"
    >
      <div className="max-w-6xl mx-auto px-0 sm:px-4 md:px-8">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className="space-y-8" variants={itemVariants}>
            <motion.div variants={itemVariants}>
              <h2 className="text-secondary md:text-7xl text-6xl font-normal mb-4">
                About <br />
                <span className="text-primary font-bold">Centurion</span>
              </h2>
              <p className="text-secondary/70 leading-relaxed max-w-xl">
                Centurion provides bespoke security solutions from highly trained security guards to modern state-of-the-art technology and the latest surveillance equipment to give you a flexible and adjustable approach to securing your business.
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 gap-4 h-[400px]"
            variants={imageContainerVariants}
          >
            <motion.div className="col-span-2 md:col-span-1 space-y-4">
              <ImageCard 
                src="/about/man.svg" 
                alt="Security guard with radio" 
                className="h-full"
              />
            </motion.div>
            <motion.div className="col-span-2 md:col-span-1 space-y-4">
              <ImageCard 
                src="/about/street.svg" 
                alt="City street view" 
                className="h-[48%] mb-4"
              />
              <ImageCard 
                src="/about/girls.svg" 
                alt="Security training" 
                className="h-[48%]"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <FeatureCard 
                title={feature.title} 
                description={feature.description} 
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;