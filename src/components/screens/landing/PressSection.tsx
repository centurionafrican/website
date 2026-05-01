"use client";

import { Icon } from "@/components/atoms";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface IPressCard {
  title: string;
  url: string;
  description: string;
  source: string;
  image?: string;
}

interface ITender {
  title: string;
  ref: string;
  issueDate: string;
  deadline: string;
  description: string;
  file: string;
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
        <div className="items-start justify-start mb-4 h-12 w-40 overflow-hidden">
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

  const tenders: ITender[] = [
    {
      title: "Food and Related Consumables Supply",
    ref: "CAL/05/2026",
    issueDate: "30 April 2026",
    deadline: "2026-05-14T14:30:00",
    description:
      "Centurion Africa Ltd invites sealed bids from eligible and qualified suppliers for the supply and delivery of dry food items, fresh produce, and meat products.",
    file: "/FOOD_AND_RELATED_CONSUMABLES_SUPPLY.pdf",
    },
  ];

  const [timeLeft, setTimeLeft] = useState<Record<number, { days: number; hours: number; minutes: number; seconds: number }>>({});

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const updated: Record<number, { days: number; hours: number; minutes: number; seconds: number }> = {};

      tenders.forEach((tender, index) => {
        const distance = new Date(tender.deadline).getTime() - now;

        if (distance > 0) {
          updated[index] = {
            days: Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((distance / (1000 * 60)) % 60),
            seconds: Math.floor((distance / 1000) % 60),
          };
        }
      });

      setTimeLeft(updated);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const activeTenders = tenders.filter((_, index) => timeLeft[index]);

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
    <section id="news" className="relative w-full bg-[#F6F8FF] py-12 md:py-20">
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

        {activeTenders.length > 0 && (
          <motion.div
            className="mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="mb-6">
              <h3 className="text-secondary text-2xl md:text-3xl font-semibold mb-2">
                Invitation to <span className="text-primary">Tender</span>
              </h3>
              <p className="text-secondary/70 leading-relaxed max-w-3xl">
                Centurion Africa Limited invites eligible and qualified bidders
                to submit proposals in accordance with the tender requirements.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activeTenders.map((tender, index) => {
                const originalIndex = tenders.findIndex((t) => t.ref === tender.ref);
                const countdown = timeLeft[originalIndex];

                return (
                  <motion.div
                    key={tender.ref}
                    variants={itemVariants}
                    className="bg-white border border-gray-200 p-6 rounded-sm shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="mb-3">
                      <span className="text-primary text-xs font-semibold uppercase tracking-wider">
                        Tender Notice
                      </span>
                    </div>

                    <h3 className="text-secondary text-xl font-semibold mb-3 leading-tight">
                      {tender.title}
                    </h3>

                    <p className="text-secondary/70 text-sm leading-relaxed mb-4">
                      {tender.description}
                    </p>

                    <div className="space-y-1 text-sm text-secondary/80 mb-4">
                      <p>
                        <strong>Tender Reference:</strong> {tender.ref}
                      </p>
                      <p>
                        <strong>Issue Date:</strong> {tender.issueDate}
                      </p>
                      <p>
                        <strong>Submission Deadline:</strong>{" "}
                        {new Date(tender.deadline).toLocaleString()}
                      </p>
                    </div>

                    {countdown && (
                      <div className="bg-[#F6F8FF] border border-primary/10 rounded-sm p-4 mb-5">
                        <p className="text-secondary text-sm font-semibold mb-2">
                          Time Remaining
                        </p>
                        <div className="flex flex-wrap gap-3 text-sm">
                          <div className="bg-white px-3 py-2 border rounded-sm min-w-[70px] text-center">
                            <span className="block text-secondary font-bold text-lg">
                              {countdown.days}
                            </span>
                            <span className="text-secondary/60 text-xs">Days</span>
                          </div>
                          <div className="bg-white px-3 py-2 border rounded-sm min-w-[70px] text-center">
                            <span className="block text-secondary font-bold text-lg">
                              {countdown.hours}
                            </span>
                            <span className="text-secondary/60 text-xs">Hours</span>
                          </div>
                          <div className="bg-white px-3 py-2 border rounded-sm min-w-[70px] text-center">
                            <span className="block text-secondary font-bold text-lg">
                              {countdown.minutes}
                            </span>
                            <span className="text-secondary/60 text-xs">Minutes</span>
                          </div>
                          <div className="bg-white px-3 py-2 border rounded-sm min-w-[70px] text-center">
                            <span className="block text-secondary font-bold text-lg">
                              {countdown.seconds}
                            </span>
                            <span className="text-secondary/60 text-xs">Seconds</span>
                          </div>
                        </div>
                      </div>
                    )}

                    <a
                      href={tender.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                    >
                      Download full tender document
                      <Icon name="arrow-up-right" />
                    </a>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}

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
