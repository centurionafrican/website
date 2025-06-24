"use client";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { toast, Toaster } from "sonner";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { MainLayout } from "@/layouts";
import {  Instagram, Linkedin } from "lucide-react";

const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_KEY;

const contactInfo = [
  {
    icon: "/contact/location.svg",
    content: "29 KG 672 St, Kimihurura, Kigali, Rwanda",
  },
  {
    icon: "/contact/code.svg",
    content: "6161",
  },
  {
    icon: "/contact/email.svg",
    content: "contact@centurionafrica.rw",
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
    const loadingToast = toast.loading("Sending message...");

    try {
      const currentDate = new Date().toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });

      const templateParams = {
        from_name: data.firstName + " " + data.lastName,
        to_name: "Centurion Security Group",
        message: data.message,
        reply_to: data.email,
        subject: data.subject,
        currentDate: currentDate,
        year: new Date().getFullYear(),
      };

      const result = await emailjs.send(
        SERVICE_ID as string,
        TEMPLATE_ID as string,
        templateParams,
        PUBLIC_KEY
      );

      if (result.status === 200) {
        toast.success("Message sent successfully!", { id: loadingToast });
        reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.", {
        id: loadingToast,
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const socialMedia = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/centuriongrouprw?igsh=MWxhcnE0NHg0NGhvdw==",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/centurion-group-lmtd/",
    },
  ];

  return (
    <MainLayout>
      <section className="flex flex-col w-full">
        <div
          className={`relative w-full max-h-screen h-[374px] flex items-center overflow-hidden `}
        >
          <div className="absolute inset-0 z-0 top-0">
            <Image
              src={"/landing/hero.svg"}
              alt="Security professional background"
              fill
              className="object-cover object-center "
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent z-10" />
          </div>

          <motion.div
            className="relative z-20 max-w-5xl container mx-auto px-4 md:px-4 lg:px-0 h-full flex flex-col justify-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="max-w-5xl pt-40 lg:pt-60">
              <motion.h1 className="text-white  mb-3 flex flex-col gap-2">
                <motion.span
                  custom={0}
                  className="block text-5xl md:text-6xl lg:text-6xl font-normal leading-light"
                >
                  Contact us
                </motion.span>
              </motion.h1>
            </div>
          </motion.div>

          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
        </div>
        <section className="relative min-h-[1050px] md:mb-0 md:min-h-[660px] flex flex-col items-center bg-[#F6F8FF]">
          <div className="w-full h-[112px] bg-primary z-0"></div>
          <section className=" bg-white/80 backdrop-blur-md z-30 rounded max-w-5xl absolute top-4 min-h-[563px]">
            <Toaster position="top-center" richColors />
            <div className="p-4 sm:p-6 lg:p-12">
              <div className="flex gap-4">
                <div className="w-5/12">
                  <div className="mb-3">
                    <h2 className="text-4xl font-bold">
                      We’d love to hear
                      <br />
                      from you.
                    </h2>
                    <p className="text-sm text-secondary/60">
                      Want to get in touch with us? Either fill out the form
                      with your inquiry or reach us directly at our toll free
                      number
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={info.content}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="flex space-x-2"
                      >
                        <div className="h-8 w-8 bg-primary/20 flex items-center justify-center">
                          <Image
                            src={info.icon}
                            alt={info.content}
                            width={18}
                            height={18}
                            className="text-white h-4 w-4"
                          />
                        </div>
                        <div
                          className={` ${index == 2 ? "text-primary underline" : "text-[#171717]"} `}
                        >
                          {info.content}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-3 mt-5">
                    <p className="">Follow us on social Media</p>
                    <div className="flex gap-4 mt-6">
                      {socialMedia.map((Item, index) => (
                        <motion.a
                          key={index}
                          href={Item.href}
                          className="bg-primary p-2 text-white hover:bg-gray-700 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Item.icon size={20} />
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="w-7/12">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
                    <div className="flex gap-2 w-full">
                      <div className="w-1/2">
                        <label className="block font-medium text-[#0F172A] mb-1">
                          First Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          className={`w-full px-3 py-1.5 bg-white border border-gray-200 text-sm ${
                            errors.firstName
                              ? "border-red-500"
                              : "border-gray-200"
                          } `}
                          placeholder="First Name"
                          {...register("firstName", {
                            required: "First name is required",
                            minLength: {
                              value: 2,
                              message:
                                "First name must be at least 2 characters",
                            },
                          })}
                        />
                        {errors.firstName && (
                          <p className="mt-1 text-sm text-red-500">
                            {errors.firstName.message}
                          </p>
                        )}
                      </div>
                      <div className="w-1/2">
                        <label className="block font-medium text-[#0F172A] mb-1">
                          Last Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          className={`w-full px-3 py-1.5 bg-white border border-gray-200 text-sm ${
                            errors.lastName
                              ? "border-red-500"
                              : "border-gray-200"
                          } `}
                          placeholder="Last Name"
                          {...register("lastName", {
                            required: "Last name is required",
                            minLength: {
                              value: 2,
                              message:
                                "Last name must be at least 2 characters",
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
                    <div className="flex gap-2 w-full">
                      <div className="w-1/2">
                        <label className="block font-medium text-[#0F172A] mb-1">
                          Email<span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          className={`w-full px-3 py-1.5 bg-white border border-gray-200 text-sm ${
                            errors.email ? "border-red-500" : "border-gray-200"
                          } `}
                          placeholder="Email address"
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Invalid email address",
                            },
                          })}
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-500">
                            {errors.email.message}
                          </p>
                        )}
                      </div>

                      <div className="w-1/2">
                        <label className="block  font-medium text-[#0F172A] mb-1">
                          Telephone <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          className={`w-full px-3 py-1.5 bg-white border border-gray-200 text-sm ${
                            errors.tel ? "border-red-500" : "border-gray-200"
                          } `}
                          placeholder="Telephone number"
                          {...register("tel", {
                            required: "Telephone is required",
                            pattern: {
                              value: /^[0-9]{10}$/,
                              message: "Telephone must be a 10-digit number",
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
                        Subject of the Message{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className={`w-full px-3 py-1.5 bg-white border border-gray-200 text-sm ${
                          errors.subject ? "border-red-500" : "border-gray-200"
                        } `}
                        placeholder="Subject"
                        {...register("subject", {
                          required: "Subject is required",
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
                          errors.message ? "border-red-500" : "border-gray-200"
                        } `}
                        placeholder="How we can help?"
                        {...register("message", {
                          required: "Message is required",
                          minLength: {
                            value: 10,
                            message: "Message must be at least 10 characters",
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
                      className="inline-flex items-center px-6 py-2 text-sm font-medium bg-primary text-white hover:text-black hover:bg-gray-100 transition-colors duration-200"
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
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>
    </MainLayout>
  );
};

export default ContactForm;
