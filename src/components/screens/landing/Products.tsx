import React from "react";
import Image from "next/image";

const Products = () => {
  const products = [
    {
      title: "Motor insurance",
      description:
        "Comprehensive coverage for your vehicles, ensuring peace of mind on every journey."
    },
    {
      title: "Liability",
      description:
        "Shield your business from unforeseen legal challenges with comprehensive liability coverage."
    },
    {
      title: "Asset protection",
      description:
        "Comprehensive solutions to safeguard your valuable assets against all potential risks."
    },
    {
      title: "Building & Construction",
      description:
        "Safeguard your projects from groundbreaking to completion with tailored construction coverage."
    },
    {
      title: "Health & Life",
      description:
        "Secure your family’s future and wellbeing with personalized life and health protection plans."
    },
    {
      title: "Risk management",
      description:
        "Strategic consulting and solutions to identify, assess, and mitigate business risks."
    },
    {
      title: "Power & Energy",
      description:
        "Specialized protection for power generation and energy infrastructure, minimizing operational risks."
    },
    {
      title: "Money",
      description:
        "Protect your financial assets with robust coverage against theft, fraud, and transit risks."
    },
    {
      title: "Travel & Cargo",
      description:
        "End-to-end protection for your journeys and shipments, from here to anywhere in the world."
    }
  ];

  return (
    <div className='w-full  relative overflow-hidden'>
      <div
        className='absolute opacity-25 w-[67.5rem] h-[49.75rem] -top-[8.8125rem] -left-[10.75rem] backdrop-blur-[160px] z-0'
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #7BDDE2 13.5%, rgba(127, 208, 231, 0) 100%)"
        }}
      ></div>

      <div
        className='absolute opacity-25 w-[43.375rem] h-[37.0625rem] top-[0.3125rem] right-0 backdrop-blur-[160px] z-0'
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #3541AB 13.5%, rgba(127, 208, 231, 0) 100%)"
        }}
      ></div>

      <div
        className='absolute opacity-25 w-[43.375rem] h-[37.0625rem] bottom-[5.375rem] right-0 z-0'
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #3541AB 13.5%, rgba(127, 208, 231, 0) 100%)"
        }}
      ></div>

      <div
        className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-24 relative z-10'
        id='products'
      >
        <div className='space-y-6 col-span-full'>
          <h2 className='text-3xl sm:text-4xl font-bold text-gray-800 text-left'>
            Our Products
          </h2>
          <p className='text-gray-600 text-left w-full md:w-1/2'>
            Explore a range of tailored insurance solutions designed to protect
            what matters most to you—quickly, securely, and hassle-free.
          </p>
        </div>
        {products.map((product, index) => (
          <div
            key={index}
            className='flex flex-col items-start text-left space-y-4 p-6 rounded-3xl bg-white'
          >
            <div className='w-12'>
              <Image
                src='/landing/compass.svg'
                alt={product.title}
                width={44}
                height={44}
                className='w-12 h-12'
              />
            </div>
            <h3 className='text-base font-semibold text-gray-800'>
              {product.title}
            </h3>
            <p className='text-base text-gray-600'>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
