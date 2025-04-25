import { motion } from "framer-motion";

interface HeroSubtitleProps {
  title: string;
}

const HeroSubtitle = ({ title }: HeroSubtitleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-secondary p-6 sm:p-8 lg:p-10 w-full"
    >
      <div className="max-w-7xl mx-auto xl:pl-[310px] sm:pl-0 lg:pl-[260px]">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-2xl sm:text-2xl lg:text-4xl font-medium text-white"
        >
          {title}
        </motion.h1>
      </div>
    </motion.div>
  );
};

export default HeroSubtitle;
