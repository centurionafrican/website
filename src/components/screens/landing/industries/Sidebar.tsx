"use client";

import React from "react";
import { motion } from "framer-motion";
import { useIndustry } from "@/context/industrieContext";

export type IndustryType =
  | "airports"
  | "hospitality"
  | "critical-infrastructure"
  | "government-buildings"
  | "construction-sites"
  | "education"
  | "public-safety"
  | "residence-commercial"
  | "health-care"
  | "retail"
  | "manufacturing-plants";

interface SidebarItemProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ 
  active, 
  onClick, 
  children
}) => {
  return (
    <motion.button
      onClick={onClick}
      className={`w-full text-left py-2 px-4 transition-all duration-300 border border-white/10 cursor-pointer backdrop-blur-md ${
        active 
          ? "bg-primary text-white"
          : "bg-black/20 text-gray-300 hover:bg-dark-800"
      }`}
      animate={{ 
        backgroundColor: active ? 'rgba(238, 91, 34, 1)' : 'rgba(0, 0, 0, 0.2)'
      }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.button>
  );
};

interface IndustrySidebarProps {
  className?: string;
}

const IndustriesSidebar: React.FC<IndustrySidebarProps> = ({
  className = "",
}) => {
  const { activeIndustry, scrollToIndustry, isScrolling } = useIndustry();

  const industries = [
    { id: "airports" as IndustryType, label: "Airports" },
    { id: "hospitality" as IndustryType, label: "Hospitality" },
    {
      id: "critical-infrastructure" as IndustryType,
      label: "Critical Infrastructure",
    },
    {
      id: "government-buildings" as IndustryType,
      label: "Government Buildings",
    },
    { id: "construction-sites" as IndustryType, label: "Construction Sites" },
    { id: "education" as IndustryType, label: "Education" },
    { id: "public-safety" as IndustryType, label: "Public Safety" },
    {
      id: "residence-commercial" as IndustryType,
      label: "Residence & Commercial",
    },
    { id: "health-care" as IndustryType, label: "Health Care" },
    { id: "retail" as IndustryType, label: "Retail" },
    {
      id: "manufacturing-plants" as IndustryType,
      label: "Manufacturing Plants",
    },
  ];

  const handleIndustryClick = (industry: IndustryType) => {
    if (!isScrolling) {
      scrollToIndustry(industry);
    }
  };

  return (
    <motion.div
      className={`bg-dark-900 overflow-hidden sticky top-32 ${className}`}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav>
        <ul className="flex flex-col gap-2">
          {industries.map((industry) => (
            <li key={industry.id}>
              <SidebarItem
                active={activeIndustry === industry.id}
                onClick={() => handleIndustryClick(industry.id)}
              >
                {industry.label}
              </SidebarItem>
            </li>
          ))}
        </ul>
      </nav>
    </motion.div>
  );
};

export default IndustriesSidebar;