"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import ContactForm from "./form";

const ContactSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className='relative w-full min-h-screen pt-24 overflow-hidden flex items-center bg-gradient-to-br from-[#7BDDE2]/5 to-[#3541AB]/5'>
      <Image
        src='/contact/contact_bg.svg'
        alt='background pattern'
        fill
        className='object-cover object-bottom'
        priority
      />

      <motion.div
        initial='hidden'
        animate='visible'
        variants={containerVariants}
        className='w-full max-w-7xl mx-auto  flex flex-col lg:flex-row lg:justify-between items-start gap-12 lg:gap-20 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-28 relative z-10'
      >
        <motion.div
          variants={itemVariants}
          className='w-full flex flex-col lg:flex-row lg:justify-between items-start gap-12 bg-white lg:p-12 p-6  space-y-8'
        >
          <motion.div
            variants={itemVariants}
            className='w-full lg:w-[60%] space-y-8'
          >
            <div className='space-y-4'>
              <h1 className='text-subtle text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-normal tracking-tight funnel-sans-hero leading-tight max-w-3xl mb-0'>
                We'd love to hear from you.
              </h1>
              <p className='text-muted'>
                If you have any questions about the Services or you are not sure
                which plan is right for you, please contact our team.
              </p>
            </div>

            <div className='space-y-2'>
              <div className='space-y-0'>
                <h3 className='text-gray-900 font-medium'>Email</h3>
                <a
                  href='mailto:info@alliancegrp.co'
                  className='text-blue-600 hover:text-blue-700 transition-colors'
                >
                  info@alliancegrp.co
                </a>
              </div>
              <div className='space-y-0'>
                <h3 className='text-gray-900 font-medium'>Tel</h3>
                <div className='flex flex-col gap-1'>
                  <a
                    href='tel:+250795577324'
                    className='text-blue-600 hover:text-blue-700 hover:underline duration-300 transition-colors'
                  >
                    +250 (0)795 577 324
                  </a>
                  <a
                    href='tel:+250725158851'
                    className='text-blue-600 hover:text-blue-700 hover:underline duration-300 transition-colors'
                  >
                    +250 (0)725 158 851
                  </a>
                  <a
                    href='tel:+250725158851'
                    className='text-blue-600 hover:text-blue-700 hover:underline duration-300 transition-colors'
                  >
                    +250 (0)252 507 777
                  </a>
                </div>
              </div>
              <div className='space-y-0'>
                <h3 className='text-gray-900 font-medium'>Address</h3>
                <div className='text-muted'>
                  KG 5 Ave, Kigali, Rwanda(Near KABC)
                </div>
              </div>
            </div>

            <div className='space-y-4'>
              <h3 className='text-gray-900 font-medium'>Social Media</h3>
              <div className='flex gap-4'>
                <a
                  href='#'
                  className='w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors'
                >
                  <FaFacebookF className='text-gray-600' />
                </a>
                <a
                  href='#'
                  className='w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors'
                >
                  <FaLinkedinIn className='text-gray-600' />
                </a>
                <a
                  href='#'
                  className='w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors'
                >
                  <FaTwitter className='text-gray-600' />
                </a>
              </div>
            </div>
          </motion.div>

          <ContactForm />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactSection;
