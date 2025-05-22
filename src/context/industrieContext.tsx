"use client";

import React, { createContext, useContext, useState, useRef } from "react";

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

interface IndustryContextType {
  activeIndustry: IndustryType;
  setActiveIndustry: (industry: IndustryType) => void;
  sectionRefs: React.MutableRefObject<Record<IndustryType, HTMLDivElement | null>>;
  isScrolling: boolean;
  setIsScrolling: (value: boolean) => void;
  scrollToIndustry: (industry: IndustryType) => void;
}

const IndustryContext = createContext<IndustryContextType | undefined>(undefined);

export const IndustryProvider: React.FC<{
  children: React.ReactNode;
  initialIndustry: IndustryType;
}> = ({ children, initialIndustry }) => {
  const [activeIndustry, setActiveIndustry] = useState<IndustryType>(initialIndustry);
  const [isScrolling, setIsScrolling] = useState(false);
  const sectionRefs = useRef<Record<IndustryType, HTMLDivElement | null>>({} as Record<IndustryType, HTMLDivElement | null>);

  const scrollToIndustry = (industry: IndustryType) => {
    if (sectionRefs.current[industry] && !isScrolling) {
      setIsScrolling(true);
      setActiveIndustry(industry);
      
      sectionRefs.current[industry]?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      
      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    }
  };

  return (
    <IndustryContext.Provider
      value={{
        activeIndustry,
        setActiveIndustry,
        sectionRefs,
        isScrolling,
        setIsScrolling,
        scrollToIndustry
      }}
    >
      {children}
    </IndustryContext.Provider>
  );
};

export const useIndustry = () => {
  const context = useContext(IndustryContext);
  if (context === undefined) {
    throw new Error("useIndustry must be used within a IndustryProvider");
  }
  return context;
};