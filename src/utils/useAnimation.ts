

import { Variants } from 'framer-motion';

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom, duration: 0.5 }
  })
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom, duration: 0.5 }
  })
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: (custom = 0) => ({
    opacity: 1,
    x: 0,
    transition: { delay: custom, duration: 0.5 }
  })
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: (custom = 0) => ({
    opacity: 1,
    x: 0,
    transition: { delay: custom, duration: 0.5 }
  })
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (custom = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: custom, duration: 0.5 }
  })
};

export const buttonHover: Variants = {
  idle: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.2 } },
  tap: { scale: 0.95, transition: { duration: 0.1 } }
};

export const pageTransition: Variants = {
  initial: { opacity: 0 },
  enter: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } }
};