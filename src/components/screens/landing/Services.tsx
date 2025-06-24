"use client";

import { Icon } from "@/components/atoms";
import IconInterface from "@/types/icons";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface IServiceCard {
  title: string;
  path: string;
  description: string;
  learnMore?: boolean;
  icon: "wheel" | "certified";
}

const ServiceCard = ({
  title,
  path,
  description,
  learnMore = true,
  icon,
}: IServiceCard) => {
  const router = useRouter();

  const handleClick = () => {
    path && router.push(path);
  };

  return (
    <motion.div
      className="bg-secondary lg:p-4 p-6 h-full"
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
    >
      <div className="bg-white p-3 w-fit mb-8">
        <Icon name={icon} />
      </div>
      <h2 className="text-white text-2xl font-normal mb-2">{title}</h2>
      <p className="text-white/60 text-sm mb-8">{description}</p>
      {learnMore && (
        <button
          className="text-white text-base font-medium hover:underline flex items-center gap-3"
          onClick={handleClick}
        >
          LEARN MORE <Icon name="arrow-up-right" />
        </button>
      )}
    </motion.div>
  );
};

const ServicesSection = () => {
  const services: IServiceCard[] = [
    {
      title: "Physical Security",
      path: "/services/physical-security",
      icon: "certified",
      description:
        "Centurion Africa provides highly trained and professional security guards. Our locally employed guards are trained to adapt to any changing environment whilst maintaining the integrity of the protected people and/or object and are licensed to carry firearms.",
    },
    {
      title: "Close Protection Officers",
      path: "/services/audits-and-assessments",
      icon: "wheel",
      description:
        "At Centurion Africa, we understand the importance of personalized and comprehensive security solutions. That is why we offer Close Protection Officer (CPO) services tailored to meet our client’s unique needs.",
    },
    {
      title: "Technological Services",
      path: "/services/technological-services",
      icon: "wheel",
      description:
        "We work with trusted technology partners to deliver modern, effective security infrastructure tailored to your needs. Our role is to ensure every solution is seamlessly integrated into your security strategy, with trained personnel ready to operate and respond.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="services"
      className="relative w-full bg-[#F6F8FF] py-20 md:py-32"
    >
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-1 lg:gap-2 items-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className="space-y-8 col-span-2" variants={itemVariants}>
            <motion.div variants={itemVariants}>
              <h2 className="text-secondary md:text-7xl text-6xl font-normal mb-4">
                Our <br />
                <span className="text-primary font-bold">Services</span>
              </h2>
              <p className="text-secondary/70 leading-relaxed max-w-3xl">
              Centurion Security Group offers a full spectrum of security services, including security assessments, surveillance systems, and expertly trained guards. Our integrated solutions are designed to adapt to each client’s needs.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ServiceCard
                title={service.title}
                description={service.description}
                path={service.path}
                icon={service.icon}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
