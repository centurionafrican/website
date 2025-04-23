"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export function FAQItem({ title, children }: any) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='px-4 py-3 bg-white rounded-xl'
    >
      <motion.div
        className='flex justify-between items-center cursor-pointer'
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.005 }}
        whileTap={{ scale: 0.995 }}
      >
        <p className='text-secondary text-sm sm:text-lg'>{title}</p>
        <motion.button
          className='focus:outline-none text-xl text-muted w-8 h-8 flex items-center justify-center'
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? "−" : "+"}
        </motion.button>
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className='overflow-hidden'
          >
            <p className='text-muted mt-2 pb-2 text-sm sm:text-base'>
              {children}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ({ children }: any) {
  return (
    <div className='w-full'>
      <div className='flex flex-col gap-2'>{children}</div>
    </div>
  );
}
