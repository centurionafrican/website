"use client";

import { MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

const HeaderTop = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      className='bg-secondary py-3  w-full fixed top-0 z-50'
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className='max-w-7xl mx-auto px-2 lg:px-0 h-full'>
        <motion.div
          className='flex justify-center lg:justify-end items-center h-full'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          <div className='hidden lg:flex items-center gap-8 text-white text-xs'>
            <motion.div
              className='flex items-center gap-2'
              variants={itemVariants}
            >
              <MapPin className='w-6 h-6 text-secondary bg-white rounded p-1' />
              <span>Location: KG 5 Ave, Kigali, Rwanda(Near KABC)</span>
            </motion.div>
            <motion.div
              className='flex items-center gap-2'
              variants={itemVariants}
            >
              <Phone className='w-6 h-6 text-secondary bg-white rounded p-1' />
              <span className='flex gap-2'>
                <span>Call us:</span>
                <a href='tel:+250795577324' className='hover:underline'>
                  +250 (0)795 577 324
                </a>
                <a href='tel:+250725158851' className='hover:underline'>
                  +250 (0)725 158 851
                </a>
                <a href='tel:+250252507777' className='hover:underline'>
                  +250 (0)252 507 777
                </a>
              </span>
            </motion.div>
            <motion.div
              className='flex items-center gap-2'
              variants={itemVariants}
            >
              <Mail className='w-6 h-6 text-secondary bg-white rounded p-1' />
              <span>Email: info@alliancegrp.co</span>
            </motion.div>
          </div>

          <div className='flex lg:hidden items-center gap-4 text-white text-xs'>
            <motion.div
              className='flex items-center gap-2'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <Phone className='w-4 h-4' />
              <span>+250 788 351 444</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeaderTop;
