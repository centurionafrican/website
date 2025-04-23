"use client";

import { Button } from "@/components/atoms";
import Image from "next/image";
import { motion } from "framer-motion";

const ChooseUs = () => {
  const features = [
    { text: "Security and Privacy" },
    { text: "Expert Support" },
    { text: "Scalability and Flexibility" },
    { text: "Cost-Effective Solutions" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section
      className='relative w-full overflow-hidden bg-secondary min-h-screen flex items-center py-16 lg:py-0'
      id='about'
    >
      <Image
        src='/landing/about_section_pg.svg'
        alt='background pattern'
        fill
        className='object-cover object-center '
        priority
      />


      <div className='max-w-7xl mx-auto px-4 lg:px-0 w-full relative z-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
          <motion.div
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: "-100px" }}
            className='space-y-8'
          >
            <motion.div variants={itemVariants} className='space-y-4'>
              <h2 className='text-white/70 text-4xl lg:text-5xl xl:text-6xl font-normal tracking-tight funnel-sans-hero leading-[1.2]'>
                Why choose <br />
                <span className='text-white'>Alliance Insurance</span> <br />
                <span className='text-white'>Brokers?</span>
              </h2>
              <p className='text-white/70  leading-relaxed max-w-xl'>
                At Alliance Insurance Brokers, we are dedicated to providing
                personalized, reliable, and efficient insurance solutions to
                meet your unique needs. With years of experience and a
                commitment to excellence, we've built a reputation for trust and
                reliability.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className='grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8'
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className='flex items-center gap-3'
                  variants={itemVariants}
                >
                  <div className='flex items-center justify-center '>
                    <Image
                      src='/landing/check.svg'
                      alt='check icon'
                      width={16}
                      height={16}
                      className='object-contain w-6 h-auto'
                    />
                  </div>
                  <span className='text-white '>{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* <motion.div
              variants={itemVariants}
              className='flex flex-col sm:flex-row gap-4'
            >
              <Button
                variant='outline'
                size='lg'
                className='text-primary hover:bg-white/10 hover:text-white w-full sm:w-auto'
              >
                Get a quote
              </Button>
            </motion.div> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className='relative aspect-square lg:aspect-auto lg:h-[600px] w-full'
          >
            <motion.div
              className='absolute inset-0 z-50'
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.1, 0.15, 0.1],
                rotate: 360
              }}
              transition={{
                opacity: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                rotate: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
            >
              <Image
                src='/landing/twoarrows.svg'
                alt='Rotating arrows'
                fill
                className='object-contain'
              />
            </motion.div>

            <div className='relative z-10 w-full h-full'>
              <Image
                src='/landing/save-house.svg'
                alt='happy couple with keys'
                fill
                className='object-contain'
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
