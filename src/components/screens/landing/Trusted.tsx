"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const TrustedBy = () => {
  const logos = [
    {
      src: "/landing/rw_logo.svg",
      alt: "I&M",
      width: 105,
      height: 58
    },
    {
      src: "/landing/toyota_logo.svg",
      alt: "toyota",
      width: 125,
      height: 42
    },
    {
      src: "/landing/bnr.png",
      alt: "BNR",
      width: 105,
      height: 58
    },
    {
      src: "/landing/access_logo.svg",
      alt: "access",
      width: 140,
      height: 35
    }
  ];

  return (
    <section className='w-full bg-white py-8 sm:py-12 md:py-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-0'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-6 sm:gap-8 lg:gap-12'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='w-full lg:w-auto mb-6 sm:mb-8 lg:mb-0'
          >
            <h2 className='text-muted text-lg sm:text-xl lg:text-2xl font-normal max-w-sm mx-auto lg:mx-0 text-center lg:text-left'>
              Trusted by leading enterprises, startups, and organizations
            </h2>
          </motion.div>

          <div className='relative w-full lg:w-[840px] overflow-hidden'>
            <div className='grid grid-cols-2 gap-8 sm:gap-12 lg:hidden place-items-center'>
              {logos.map((logo, index) => (
                <motion.div
                  key={`mobile-${logo.alt}-${index}`}
                  className='flex items-center justify-center w-32 sm:w-40'
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className='h-auto w-auto max-w-full object-contain'
                  />
                </motion.div>
              ))}
            </div>

            <div className='hidden lg:block'>
              <div className='flex gap-12 sm:gap-16 whitespace-nowrap'>
                <div className='animate-scroll inline-flex gap-4 sm:gap-12 items-center'>
                  {logos.map((logo, index) => (
                    <motion.div
                      key={`${logo.alt}-${index}`}
                      className='flex items-center justify-center min-w-[120px] sm:min-w-[140px]'
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={logo.width}
                        height={logo.height}
                        className='h-auto w-auto object-contain'
                      />
                    </motion.div>
                  ))}
                </div>
                <div className='animate-scroll inline-flex gap-12 sm:gap-16 items-center'>
                  {logos.map((logo, index) => (
                    <motion.div
                      key={`${logo.alt}-clone-${index}`}
                      className='flex items-center justify-center min-w-[120px] sm:min-w-[140px]'
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={logo.width}
                        height={logo.height}
                        className='h-auto w-auto object-contain'
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
