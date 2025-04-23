import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface ImageTextSectionProps {
  title: string;
  description: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  position?: "left" | "right";
}

const ImageTextSection = ({
  title,
  description,
  imageSrc,
  imageAlt,
  position = "left",
}: ImageTextSectionProps) => {
  const textContent = (
    <motion.div
      initial={{ opacity: 0, x: position === "left" ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full lg:w-1/2 flex flex-col justify-center"
    >
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-subtle mb-4">
        {title}
      </h1>
      <div
        className="text-subtle text-base sm:text-lg leading-relaxed"
        dangerouslySetInnerHTML={{ __html: description as string }}
      />
    </motion.div>
  );

  const imageContent = (
    <motion.div
      initial={{ opacity: 0, x: position === "left" ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full lg:w-1/2 mt-0 lg:mt-0"
    >
      <div className="relative w-full aspect-[4/2.2]  overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover rounded-2xl"
          priority
        />
      </div>
    </motion.div>
  );

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
      {position === "left" ? (
        <>
          {textContent}
          {imageContent}
        </>
      ) : (
        <>
          {imageContent}
          {textContent}
        </>
      )}
    </div>
  );
};

export default ImageTextSection;
