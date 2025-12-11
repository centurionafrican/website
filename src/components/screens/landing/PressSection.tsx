"use client";

import { Icon } from "@/components/atoms";
import Image from "next/image";
import { motion } from "framer-motion";

interface IPressCard {
  title: string;
  url: string;
  description: string;
  source: string;
  image?: string;
}

const PressCard = ({ title, url, description, source, image }: IPressCard) => {
  const handleClick = () => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      className="bg-secondary hover:bg-primary lg:p-6 p-6 h-full cursor-pointer group transition-all duration-300"
      whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
      onClick={handleClick}
    >
      {image && (
        <div className="items-start justify-start  mb-4 h-12 w-40 overflow-hidden">
          <Image
            src={image}
            alt={source}
            width={64}
            height={64}
            className="w-full h-full object-cover opacity-100 group-hover:opacity-100 transition-opacity"
            priority
          />
        </div>
      )}
      <div className="mb-3">
        <span className="text-primary text-xs font-semibold uppercase tracking-wider">
          {source}
        </span>
      </div>
      <h3 className="text-white text-xl font-semibold mb-3 leading-tight">
        {title}
      </h3>
      <p className="text-white/60 text-sm mb-6 leading-relaxed">
        {description}
      </p>
      <button className="text-white text-sm font-medium hover:underline flex items-center gap-2 group-hover:gap-3 transition-all">
        READ ARTICLE <Icon name="arrow-up-right" />
      </button>
    </motion.div>
  );
};

const PressSection = () => {
  const pressArticles: IPressCard[] = [
    {
      title: "Rwanda Showcases Economic Potential at FACIM 2025",
      url: "https://dossiersefactos.com/2025/09/03/ruanda-aproveita-facim-para-expor-potencialidades-economicas/",
      source: "Dossiers e Factos",
      description:
        "Centurion Security Group's participation at FACIM 2025, highlighting Rwanda's growing economic capabilities and security sector excellence in the international arena.",
      image: "/images/dossier.webp",
    },
    {
      title: "Community Outreach: Supporting Genocide Widows",
      url: "https://avega-agahozo.org/centurion-security-group-and-centurion-africa-ltd-visit-genocide-widows-in-act-of-solidarity/",
      source: "AVEGA Agahozo",
      description:
        "Centurion Security Group and Centurion Africa Ltd demonstrate corporate social responsibility by visiting and supporting genocide widows through AVEGA Agahozo in an inspiring act of solidarity.",
      image: "/images/avega.png",
    },
    {
      title: "Centurion Group Supports Vulnerable Parents in Nyarugenge",
      url: "https://mobile.igihe.com/amakuru/muri-afurika/u-rwanda/article/nyarugenge-abakozi-ba-centurion-group-bafashe-mu-mugongo-ababyeyi-b-intwaza",
      source: "Igihe",
      description:
        "Centurion Group employees extend support to vulnerable parents in Nyarugenge district, reinforcing the company's commitment to community empowerment and social welfare.",
      image: "/images/igihe.png",
    },
    {
      title: "Kwibuka 30: Honoring Genocide Victims",
      url: "https://www.igihe.com/serivisi/article/abakozi-ba-centurion-group-biyemeje-guhangana-n-abagipfobya-jenoside-yakorewe",
      source: "Igihe",
      description:
        "Centurion Group staff participate in Kwibuka 30 memorial activities, standing in solidarity against genocide denial and honoring the memory of victims of the genocide against the Tutsi.",
      image: "/images/igihe.png",
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
  } as any;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  } as any;

  return (
    <section
      id='news'
      className="relative w-full bg-[#F6F8FF] py-12 md:py-20"
    >
      <div className="max-w-6xl w-full mx-auto px-4 lg:px-8">
        <motion.div
          className="w-full mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className="space-y-4 w-full" variants={itemVariants}>
            <h2 className="text-secondary md:text-6xl text-3xl font-normal">
              In The <span className="text-primary font-bold">News</span>
            </h2>
            <p className="text-secondary/70 leading-relaxed max-w-3xl">
              Discover how Centurion Security Group is making headlines across
              Africa and the Middle East. From industry recognition to community
              engagement, stay updated with our latest news and achievements.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {pressArticles.map((article, index) => (
            <motion.div key={index} variants={itemVariants}>
              <PressCard
                title={article.title}
                description={article.description}
                url={article.url}
                source={article.source}
                image={article.image}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PressSection;