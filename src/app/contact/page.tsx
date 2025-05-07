'use client'
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { toast, Toaster } from 'sonner';
import Image from 'next/image';
import emailjs from '@emailjs/browser';
import { MainLayout } from '@/layouts';
import Hero from '@/components/screens/landing/Hero';

const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_KEY;

const contactInfo = [
  {
    icon: '/contact/location.svg',
    content: '29 KG 672 St, Kimihurura, Kigali, Rwanda',
  },
  {
    icon: '/contact/code.svg',
    content: '6161',
  },
  {
    icon: '/contact/email.svg',
    content: 'contact@centurionafrica.rw',
  },
];


interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  tel: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    const loadingToast = toast.loading('Sending message...');

    try {
      const templateParams = {
        from_name: data.firstName + ' ' + data.lastName,
        to_name: 'REIP Global',
        message: data.message,
        reply_to: data.email,
        subject: data.subject,
      };

      const result = await emailjs.send(
        SERVICE_ID as string,
        TEMPLATE_ID as string,
        templateParams,
        PUBLIC_KEY
      );

      if (result.status === 200) {
        toast.success('Message sent successfully!', { id: loadingToast });
        reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.', {
        id: loadingToast,
      });
    }
  };

  return (
    <MainLayout>
      <section className='flex flex-col w-full'>

      <Hero path={'/images/centurion_gako_37.jpg'} title='Contact us' classname='max-h-screen h-[374px]'/>
      <section className='relative min-h-[1050px] mb-20 md:mb-0 md:min-h-[651px] flex flex-col items-center bg-[#F6F8FF]'>
      <div className='w-full h-[112px] bg-[#EE5B2C] z-0'></div>
    <section className=" bg-white/80 backdrop-blur-md py-[48px] z-30 rounded lg:w-[1276px] absolute top-4 min-h-[563px]">
      <Toaster position="top-center" richColors />

      <div className=" px-4  sm:px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 lg:w-[414px]" 
          >
            <div className='mb-3'>
                <h1 className='text-[#09090B] text-[45px]'>We’d love to hear from you.</h1>
                <p className='text-[#626F81]'>Want to get in touch with us? Either fill out the form with your inquiry or reach us directly at our toll free number</p>
            </div>
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.content}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center space-x-2"
              >
                  <Image
                    src={info.icon}
                    alt={info.content}
                    width={18}
                    height={18}
                    className="text-white"
                  />
                  <p className={` ${index == 2 ? "text-[#EE5B2C] underline" : "text-[#171717]"} `}>{info.content}</p>
              </motion.div>
            ))}

            <div className='flex flex-col gap-3 mt-5'>
                <p className='text-[#171717]'>Social Media</p>
                <div className='w-10 h-10 rounded-full grid place-content-center border border-[#E5E5E5]'>
                <Image
                    src='/contact/linkedin.svg'
                    alt='linkedin icon'
                    width={14}
                    height={14}
                    className="text-white"
                  />
                </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className=''
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
              <div className='flex gap-5 w-full'>
              <div className='w-1/2'>
                <label className="block font-medium text-[#0F172A] mb-1">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className={`w-full p-3 bg-[#FAFAFA] border border-[#e4e4e4] ${
                    errors.firstName ? 'border-red-500' : 'border-gray-200'
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-secondary`}
                  placeholder="First Name"
                  {...register('firstName', {
                    required: 'First name is required',
                    minLength: {
                      value: 2,
                      message: 'First name must be at least 2 characters',
                    },
                  })}
                />
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              

              <div className='w-1/2'>
                <label className="block font-medium text-[#0F172A] mb-1">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className={`w-full p-3 bg-[#FAFAFA] border border-[#e4e4e4] ${
                    errors.lastName ? 'border-red-500' : 'border-gray-200'
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-secondary`}
                  placeholder="Last Name"
                  {...register('lastName', {
                    required: 'Last name is required',
                    minLength: {
                      value: 2,
                      message: 'Last name must be at least 2 characters',
                    },
                  })}
                />
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
             </div>
             <div className='flex gap-5 w-full'>

              <div className='w-1/2'>
                <label className="block font-medium text-[#0F172A] mb-1">
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  className={`w-full p-3 bg-[#FAFAFA] border border-[#e4e4e4] ${
                    errors.email ? 'border-red-500' : 'border-gray-200'
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-secondary`}
                  placeholder="Email address"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className='w-1/2'>
                <label className="block  font-medium text-[#0F172A] mb-1">
                  Telephone <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className={`w-full p-3 bg-[#FAFAFA] border border-[#e4e4e4] ${
                    errors.tel ? 'border-red-500' : 'border-gray-200'
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-secondary`}
                  placeholder="Telephone number"
                  {...register('tel', {
                    required: 'Telephone is required',
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: 'Telephone must be a 10-digit number',
                    },
                  })}
                />
                {errors.tel && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.tel.message}
                  </p>
                )}
              </div>
              </div>

              <div>
                <label className="block font-medium text-[#0F172A] mb-1">
                  Subject of the Message <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className={`w-full p-3 bg-[#FAFAFA] border border-[#e4e4e4] ${
                    errors.subject ? 'border-red-500' : 'border-gray-200'
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-secondary`}
                  placeholder="Subject"
                  {...register('subject', {
                    required: 'Subject is required',
                  })}
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block font-medium text-[#0F172A] mb-1">
                   Message<span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={6}
                  className={`w-full h-[121px] p-3 bg-[#FAFAFA] border border-[#e4e4e4] ${
                    errors.message ? 'border-red-500' : 'border-gray-200'
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-secondary`}
                  placeholder="How we can help?"
                  {...register('message', {
                    required: 'Message is required',
                    minLength: {
                      value: 10,
                      message: 'Message must be at least 10 characters',
                    },
                  })}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center px-6 py-3 bg-secondary text-white rounded-lg hover:bg-white hover:text-black hover:border border-secondary transition-colors disabled:bg-gray-400"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6 ml-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>

    </section>
    </section>

    </MainLayout>
  );
};

export default ContactForm;
