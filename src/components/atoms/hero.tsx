"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/atoms";
import { Label } from "./label";
import Image from "next/image";

interface HeroProps {
  subtitle?: string;
  title: string;
  description: string;
  titleSpans?: Array<{
    text: string;
    highlight?: boolean;
  }>;
  showCTA?: boolean;
  CTAText?: string;
}

const ReusableHero = ({
  subtitle,
  title,
  description,
  titleSpans = [],
  showCTA = true,
  CTAText = "Explore our services"
}: HeroProps) => {
  const renderTitle = () => {
    if (titleSpans.length > 0) {
      return titleSpans.map((span, index) => (
        <span key={index} className={span.highlight ? "text-tertiary" : ""}>
          {span.text}{" "}
        </span>
      ));
    }
    return title;
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className='w-full lg:w-3/4  space-y-4 sm:space-y-6 md:space-y-8'
    >
      <div className='text-center lg:text-left space-y-2 sm:space-y-6'>
        {subtitle && (
          <div className='flex items-center gap-2'>
            <Image
              src='/landing/line.svg'
              alt='Arrow white man image'
              width={40}
              height={24}
              className='object-contain'
            />
            <Label className='text-xs sm:text-sm text-subtle uppercase tracking-wide block'>
              {subtitle}
            </Label>
          </div>
        )}

        <h1 className='text-subtle text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-normal tracking-tight funnel-sans-hero leading-tight max-w-3xl mb-0'>
          {renderTitle()}
        </h1>

        <p className='text-subtle/80 landing_font text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed'>
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default ReusableHero;
