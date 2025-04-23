"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/atoms";
import { useRouter } from "next/navigation";

const Contact = () => {
  const router = useRouter();
  return (
    <div
      className='py-24   w-full relative landing_font overflow-hidden bg-secondary'
      id='contact'
    >
      <Image
        src='/landing/left_contact.svg'
        alt='left arrow'
        width={500}
        height={500}
        className='absolute -left-20 -top-32 z-0'
      />
      <Image
        src='/landing/right_contact.svg'
        alt='right arrow'
        width={500}
        height={500}
        className='absolute -right-20 -top-32 z-0'
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-0 relative z-10'
      >
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className='w-full bg-accent/40 backdrop-blur-md overflow-hidden'
        >
          <div className='flex flex-col items-center justify-center py-16 sm:py-20 px-6 text-white text-center'>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className=' font-normal mb-4 text-xl sm:text-4xl'
            >
              Ready to secure your future today?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className='text-base sm:text-lg max-w-2xl mb-8'
            >
              Get personalized insurance plans that fit your needs and budget.
              <br />
              It's fast, secure, and hassle-free!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className='flex flex-col sm:flex-row gap-4'
            >
              <Button
                variant='outline'
                size='lg'
                onClick={() => router.push("/contact")}
              >
                Contact us
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
