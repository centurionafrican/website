"use client";

import React from "react";
import { motion } from "framer-motion";
import FAQ, { FAQItem } from "@/components/organisms/faq";
import { Label } from "@/components/atoms/label";
import Image from "next/image";

const Faq = () => {
  return (
    <div className='w-full py-24 bg-gray-50 relative overflow-hidden'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className='absolute w-[24.4375rem] h-[18.3125rem] -top-[7.5rem] left-[3.375rem] backdrop-blur-[200px] z-0'
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #35A2DE29 13.5%, rgba(127, 208, 231, 0) 100%)"
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className='absolute w-[30.125rem] h-[35.25rem] top-[21.9375rem] -left-[18.5625rem] backdrop-blur-[200px] z-0'
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #1986C329 13.5%, rgba(127, 208, 231, 0) 100%)"
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className='absolute w-[46.0625rem] h-[35.25rem] top-[8.4375rem] -right-[16rem] backdrop-blur-[200px] z-0'
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #1986C329 13.5%, rgba(127, 208, 231, 0) 100%)"
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={{ duration: 1, delay: 0.6 }}
        className='absolute w-[49.875rem] h-[37.375rem] top-[2.88125rem] left-[17.5625rem] z-0'
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(142, 154, 249, 0.5) 0%, rgba(127, 208, 231, 0) 100%)"
        }}
      />

      <div className='max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 relative z-10 px-4 sm:px-6 lg:px-8'>
        <motion.div
          className='space-y-6 lg:w-1/2'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className='text-sm font-medium text-blue-600 mb-2'>
            <div className='flex items-center gap-2'>
              <Image
                src='/landing/line.svg'
                alt='Arrow white man image'
                width={40}
                height={24}
                className='object-contain'
              />
              <Label className='text-sm text-muted  uppercase tracking-wide'>
                FAQS
              </Label>
            </div>
          </div>
          <h1 className='text-muted text-4xl lg:text-5xl xl:text-6xl font-normal tracking-tight funnel-sans-hero leading-tight'>
            Got questions? <br />
            <span className='text-tertiary'>We've got answers</span>
          </h1>
          <p className='text-gray-600 '>
            We're Here to Provide Clear, Comprehensive Answers to Help You Make
            Informed Decisions
          </p>
        </motion.div>

        <motion.div
          className='lg:w-2/3'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <FAQ>
            <FAQItem title='Can I manage my insurance policy online?'>
              Yes, you can manage your insurance policy online through our
              secure platform.
            </FAQItem>
            <FAQItem title='How do I file a claim?'>
              Filing a claim with us is quick and easy. Once you've logged into
              your account, go to the 'Claims' section, where you can submit the
              necessary details and documents. Our claims team will review your
              submission and provide prompt support to guide you through the
              process.
            </FAQItem>
            <FAQItem title='What are the benefits of having insurance?'>
              Insurance provides financial protection and peace of mind against
              unexpected events.
            </FAQItem>
            <FAQItem title='Can I get assistance if I have trouble using the platform?'>
              Yes, our support team is available to assist you with any issues
              you may encounter.
            </FAQItem>
            <FAQItem title='Is my personal information secure on your platform?'>
              Absolutely. We prioritize the security and privacy of your
              personal information.
            </FAQItem>
          </FAQ>
        </motion.div>
      </div>
    </div>
  );
};

export default Faq;
