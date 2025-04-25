"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "sonner";
import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_KEY;

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    const loadingToast = toast.loading("Sending message...");

    try {
      const result = await emailjs.send(
        SERVICE_ID as string,
        TEMPLATE_ID as string,
        {
          from_name: `${data.firstName} ${data.lastName}`,
          reply_to: data.email,
          phone: data.phone,
          subject: data.subject,
          message: data.message,
          to_name: "Centurionafrica security group"
        },
        PUBLIC_KEY
      );

      if (result.status === 200) {
        toast.success("Message sent successfully!", {
          id: loadingToast
        });
        reset();
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.", {
        id: loadingToast
      });
      console.error("Error sending email:", error);
    }
  };

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
    <div className='w-full'>
      <Toaster
        position='bottom-right'
        richColors
        className='z-[9999]'
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px"
        }}
      />
      <motion.div variants={itemVariants} className='w-full lg:w-[100%]'>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
            <div className='space-y-2'>
              <label
                htmlFor='firstName'
                className='block text-sm font-medium text-gray-700'
              >
                First name
              </label>
              <input
                type='text'
                id='firstName'
                placeholder='Type first name...'
                className={`w-full px-4 py-2 border ${
                  errors.firstName ? "border-red-500" : "border-gray-200"
                } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`}
                {...register("firstName", {
                  required: "First name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters"
                  }
                })}
              />
              {errors.firstName && (
                <p className='text-red-500 text-sm mt-1'>
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div className='space-y-2'>
              <label
                htmlFor='lastName'
                className='block text-sm font-medium text-gray-700'
              >
                Last name
              </label>
              <input
                type='text'
                id='lastName'
                placeholder='Type last name...'
                className={`w-full px-4 py-2 border ${
                  errors.lastName ? "border-red-500" : "border-gray-200"
                } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`}
                {...register("lastName", {
                  required: "Last name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters"
                  }
                })}
              />
              {errors.lastName && (
                <p className='text-red-500 text-sm mt-1'>
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
            <div className='space-y-2'>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700'
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                placeholder='Type email...'
                className={`w-full px-4 py-2 border ${
                  errors.email ? "border-red-500" : "border-gray-200"
                } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
              />
              {errors.email && (
                <p className='text-red-500 text-sm mt-1'>
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className='space-y-2'>
              <label
                htmlFor='phone'
                className='block text-sm font-medium text-gray-700'
              >
                Tel
              </label>
              <input
                type='tel'
                id='phone'
                placeholder='Type your phone number...'
                className={`w-full px-4 py-2 border ${
                  errors.phone ? "border-red-500" : "border-gray-200"
                } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`}
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value:
                      /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
                    message: "Invalid phone number"
                  }
                })}
              />
              {errors.phone && (
                <p className='text-red-500 text-sm mt-1'>
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>

          <div className='space-y-2'>
            <label
              htmlFor='subject'
              className='block text-sm font-medium text-gray-700'
            >
              Subject of the message
            </label>
            <input
              type='text'
              id='subject'
              placeholder='Type subject...'
              className={`w-full px-4 py-2 border ${
                errors.subject ? "border-red-500" : "border-gray-200"
              } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`}
              {...register("subject", {
                required: "Subject is required",
                minLength: {
                  value: 5,
                  message: "Subject must be at least 5 characters"
                }
              })}
            />
            {errors.subject && (
              <p className='text-red-500 text-sm mt-1'>
                {errors.subject.message}
              </p>
            )}
          </div>

          <div className='space-y-2'>
            <label
              htmlFor='message'
              className='block text-sm font-medium text-gray-700'
            >
              Message
            </label>
            <textarea
              id='message'
              rows={6}
              placeholder='How can we help you?'
              className={`w-full px-4 py-2 border ${
                errors.message ? "border-red-500" : "border-gray-200"
              } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none`}
              {...register("message", {
                required: "Message is required",
                minLength: {
                  value: 10,
                  message: "Message must be at least 10 characters"
                }
              })}
            />
            {errors.message && (
              <p className='text-red-500 text-sm mt-1'>
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            type='submit'
            disabled={isSubmitting}
            className='w-full sm:w-auto px-8 py-3 bg-[#262A4E] text-white rounded-lg hover:bg-[#262A4E]/90 transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed'
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactForm;
