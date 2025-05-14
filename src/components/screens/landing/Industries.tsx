"use client";

import React from "react";
import { motion } from "framer-motion";
import { IndustryProvider } from "@/context/industrieContext";
import IndustriesSidebar, { IndustryType } from "./industries/Sidebar";
import IndustriesHero from "./industries/Hero";
import IndustriesContent from "./industries/Content";

interface IndustriesPageProps {
  initialIndustry?: IndustryType;
}

const IndustriesPage: React.FC<IndustriesPageProps> = ({
  initialIndustry = "hospitality",
}) => {
  return (
    <IndustryProvider initialIndustry={initialIndustry}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-secondary w-full relative"
      >
        <div className="max-w-5xl mx-auto z-10 relative">
          <IndustriesHero />
          <div className="py-0 lg:py-0">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="w-full lg:w-1/4 lg:sticky lg:top-24 lg:self-start">
                <IndustriesSidebar />
              </div>

              <div className="w-full lg:w-3/4 pb-24">
                <IndustriesContent />
              </div>
            </div>
          </div>
        </div>
        <div className="h-[600px] w-full absolute left-0 right-0 bottom-0 z-0 bg-[url(/logomark_bg.png)] bg-cover bg-center" />
      </motion.div>
    </IndustryProvider>
  );
};

export default IndustriesPage;