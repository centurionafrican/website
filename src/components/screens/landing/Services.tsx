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
      className="bg-[#13191D] lg:p-4 p-6 h-full"
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
    >
      <div className="bg-white p-3 w-fit mb-8">
        <Icon name={icon} />
      </div>
      <h2 className="text-white text-2xl font-normal mb-4">{title}</h2>
      <p className="text-white text-base mb-8">{description}</p>
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
        "Centurion Africa provides global security with highly trained, employed guards for any scenario, leveraging Rwandan government support, and former Defense Force soldiers.",
    },
    {
      title: "Audits and Assessments",
      path: "/services/audits-and-assessments",
      icon: "wheel",
      description:
        "We conduct security risk audits to assess and recommend controls, plug vulnerabilities, and inform resource allocation and tooling decisions from an attacker's perspective.",
    },
    {
      title: "Technological Services",
      path: "/services/technological-services",
      icon: "wheel",
      description:
        "We conduct security risk audits to assess and recommend controls, plug vulnerabilities, and inform resource allocation and tooling decisions from an attacker's perspective.",
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
              <h2 className="text-[#252932] md:text-7xl text-6xl font-normal mb-4">
                Our <br />
                <span className="text-secondary font-bold">Services</span>
              </h2>
              <p className="text-[#252932] leading-relaxed max-w-3xl">
                Centurion Group delivers comprehensive security solutions,
                offering meticulous security assessments, advanced electronics
                and surveillance services, and highly trained security guards.
                From cutting-edge technology to expertly trained personnel, our
                integrated approach ensures our clients' unmatched safety and
                peace of mind.
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
