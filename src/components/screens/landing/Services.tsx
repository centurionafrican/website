"use client";
import { Label } from "@/components/atoms/label";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/atoms";

const Services = () => {
  const router = useRouter();
  const services = [
    {
      title: "Insurance brokerage",
      image: "/landing/broker.webp"
    },
    {
      title: "Risk management",
      image: "/landing/risk.jpg"
    },
    {
      title: "Claims & administration",
      image: "/landing/claims.jpg"
    },
    {
      title: "Insurance program management",
      image: "/landing/insurance.png"
    },
    {
      title: "Health care management",
      image: "/landing/health-services.jpg"
    },
    {
      title: "Contract review services",
      image: "/landing/contract.jpg"
    }
  ];

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
    <section className='w-full relative bg-[#F8FAFC] py-16 lg:py-0  overflow-hidden lg:h-screen flex items-center'>
      <motion.div
        className='absolute opacity-30 w-[67.5rem] h-[49.75rem] -top-[8.8125rem] -left-[10.75rem] backdrop-blur-[160px] z-0'
        initial={{ x: 0 }}
        animate={{
          x: [-200, 200]
        }}
        transition={{
          repeat: Infinity,
          duration: 15,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #7BDDE2 13.5%, rgba(127, 208, 231, 0) 100%)"
        }}
      />

      <motion.div
        className='absolute -bottom-10 opacity-40 w-[43.375rem] h-[37.0625rem] right-0 backdrop-blur-[160px] z-0'
        initial={{ x: 0 }}
        animate={{
          x: [200, -200]
        }}
        transition={{
          repeat: Infinity,
          duration: 15,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #3541AB 13.5%, rgba(127, 208, 231, 0) 100%)"
        }}
      />

      <motion.div
        className='max-w-7xl mx-auto px-4 lg:px-0 relative landing_font'
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12'>
          <div className='flex flex-col gap-y-4'>
            <div className='flex items-center gap-2'>
              <Image
                src='/landing/line.svg'
                alt='Arrow white man image'
                width={40}
                height={24}
                className='object-contain'
              />
              <Label className='text-sm text-subtle  uppercase tracking-wide'>
                OUR SERVICES
              </Label>
            </div>
            <div>
              <h1 className='text-subtle text-4xl lg:text-5xl xl:text-6xl  font-normal tracking-tight funnel-sans-hero leading-tight'>
                We are here to meet your{" "}
                <span className='text-tertiary'>insurance needs</span>
              </h1>
              <p className='text-gray-600 landing_font my-2'>
                Explore a range of tailored insurance solutions designed to
                protect what matters most to you—quickly, securely, and
                hassle-free.
              </p>
            </div>
            <div>
              {/* <Link
                href="/about"
                className="flex items-center gap-2 self-center font-medium"
              >
                <Button variant="outline" size="lg">
                  Learn more
                </Button>
              </Link> */}
              <Button
                variant='outline'
                onClick={() => router.push("/services")}
              >
                Learn more
              </Button>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {services.slice(0, 2).map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className='group relative rounded-2xl overflow-hidden aspect-[4/3]'
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className='object-cover object-center transition-transform duration-300 group-hover:scale-105'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-[#03192E] via-[#03192E]/60 to-transparent opacity-90' />

                <div className='absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between'>
                  <h4 className='text-white text-lg'>{service.title}</h4>
                  <motion.div whileHover={{ x: 5 }}>
                    <Image
                      src='/landing/arrow_man.svg'
                      alt='Arrow white man image'
                      width={40}
                      height={24}
                      className='object-contain'
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {services.slice(2).map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className='group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer'
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className='object-cover object-center transition-transform duration-300 group-hover:scale-105'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-[#03192E] via-[#03192E]/60 to-transparent opacity-90' />

              <div className='absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between'>
                <h4 className='text-white text-lg'>{service.title}</h4>
                <motion.div whileHover={{ x: 5 }}>
                  <Image
                    src='/landing/arrow_man.svg'
                    alt='Arrow white man image'
                    width={40}
                    height={24}
                    className='object-contain'
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
