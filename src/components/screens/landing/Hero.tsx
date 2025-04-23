"use client";
import { useState } from "react";
import { Button } from "@/components/atoms";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Shield from "@/assets/images/shield.svg";
import Link from "next/link";

const CustomArrow = ({
  direction,
  onClick
}: {
  direction: "prev" | "next";
  onClick?: () => void;
}) => (
  <button
    onClick={onClick}
    className={`absolute bottom-4 ${
      direction === "prev" ? "right-10" : "right-2"
    } bg-white/70 hover:bg-white/30 rounded-full p-1 transition duration-300 z-20 hidden md:block`}
  >
    {direction === "prev" ? (
      <IoIosArrowBack className='text-xl text-gray-800' />
    ) : (
      <IoIosArrowForward className='text-xl text-gray-800' />
    )}
  </button>
);

const Hero = () => {
  const [slider, setSlider] = useState<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderImages = [
    "/landing/fire_guy.svg",
    "/landing/fire2.svg",
    "/landing/fire1.svg"
  ];

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
    prevArrow: (
      <CustomArrow direction='prev' onClick={() => slider?.slickPrev()} />
    ),
    nextArrow: (
      <CustomArrow direction='next' onClick={() => slider?.slickNext()} />
    ),
    beforeChange: (_: number, next: number) => setCurrentSlide(next)
  };

  return (
    <div className='relative  w-full overflow-hidden pt-60 pb-16 flex items-center bg-gradient-to-br from-accent/20 to-secondary/4'>
      <Image
        src='/landing/bgh.svg'
        alt='background pattern'
        fill
        className='object-cover object-center'
        priority
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className='max-w-7xl mx-auto flex flex-col lg:flex-row items-center pt-6 pb-10 lg:pt-0 px-4 lg:px-0 relative z-10'
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className='w-full lg:w-1/2 text-center lg:text-left lg:pr-8'
        >
          <h1 className='text-subtle text-4xl lg:text-5xl xl:text-6xl font-normal tracking-tight funnel-sans-hero leading-tight'>
            Your dedicated insurance partner,{" "}
            <span className='text-tertiary'>today</span> &{" "}
            <span className='text-tertiary'>tomorrow</span>
          </h1>

          <div className='text-gray-400 mt-4 text-lg max-w-xl mx-auto lg:mx-0'>
            Leading the way in innovative insurance solutions, offering tailored
            services to meet the unique needs of every client
          </div>

          <div className='flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start'>
            <Link href='/services'>
              <Button variant='secondary' size='lg'>
                Explore our services
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div className='w-1/2  px-4 lg:px-0 mt-12 lg:mt-0 lg:flex justify-end hidden '>
          <div className='w-full max-w-lg relative'>
            <div className='relative'>
              <Slider
                ref={(s) => setSlider(s)}
                {...(settings as any)}
                className='relative w-full h-full'
              >
                {sliderImages.map((image, index) => (
                  <div key={index} className='relative aspect-[4/3]'>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className='relative w-full h-full'
                    >
                      <Image
                        src={image}
                        alt={`hero-img-${index + 1}`}
                        fill
                        className='lg:object-cover object-contain object-center  px-4 sm:px-0'
                        priority
                      />
                    </motion.div>
                  </div>
                ))}
              </Slider>
            </div>
            <div className='absolute bottom-[6px] -left-28  bg-secondary/85 backdrop-blur-sm z-30 flex items-center gap-4 py-3 px-4'>
              <Image
                src={Shield}
                alt='secured-banner'
                className='w-[52px]'
                priority
              />
              <div className='text-lg text-white leading-[20px] font-light mr-2'>
                We ensure
                <br />
                You are insured.
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
