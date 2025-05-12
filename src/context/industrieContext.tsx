"use client";

import { IndustryType } from '@/components/screens/landing/industries/Sidebar';
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface IndustryContextType {
  activeIndustry: IndustryType;
  setActiveIndustry: (industry: IndustryType) => void;
}

const defaultContext: IndustryContextType = {
  activeIndustry: 'hospitality',
  setActiveIndustry: () => {},
};

const IndustryContext = createContext<IndustryContextType>(defaultContext);

export const useIndustry = () => useContext(IndustryContext);

interface IndustryProviderProps {
  children: ReactNode;
  initialIndustry?: IndustryType;
}

export const IndustryProvider: React.FC<IndustryProviderProps> = ({ 
  children, 
  initialIndustry = 'hospitality' 
}) => {
  const [activeIndustry, setActiveIndustry] = useState<IndustryType>(initialIndustry);

  return (
    <IndustryContext.Provider value={{ activeIndustry, setActiveIndustry }}>
      {children}
    </IndustryContext.Provider>
  );
};