"use client";

import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIndustry } from "@/context/industrieContext";
import { industryData, tempIndustryContent } from "@/data/industries";
import SecurityFeature from "./Security";
import { IndustryType } from "./Sidebar";

const IndustriesContent: React.FC = () => {
  const { activeIndustry, sectionRefs, setActiveIndustry, isScrolling, setIsScrolling } = useIndustry();
  const contentRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  const industries = [
    "airports",
    "hospitality",
    "critical-infrastructure",
    "government-buildings",
    "construction-sites",
    "education",
    "public-safety",
    "residence-commercial",
    "health-care",
    "retail",
    "manufacturing-plants",
  ] as IndustryType[];

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const options = {
      root: null,
      rootMargin: "-30% 0px -60% 0px",
      threshold: 0,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      if (isScrolling) return;

      const intersectingEntries = entries.filter(entry => entry.isIntersecting);
      
      if (intersectingEntries.length > 0) {
        const targetEntry = intersectingEntries.reduce((prev, current) => 
          current.intersectionRatio > prev.intersectionRatio ? current : prev
        );
        
        const industryId = targetEntry.target.getAttribute('data-industry') as IndustryType;
        if (industryId && industryId !== activeIndustry) {
          setActiveIndustry(industryId);
        }
      }
    }, options);

    industries.forEach((industry) => {
      const sectionElement = sectionRefs.current[industry];
      if (sectionElement && observerRef.current) {
        observerRef.current.observe(sectionElement);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [industries, isScrolling, activeIndustry, setActiveIndustry]);

  useEffect(() => {
    if (isScrolling && sectionRefs.current[activeIndustry]) {
      const targetElement = sectionRefs.current[activeIndustry];
      if (targetElement) {
        targetElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
        
        setTimeout(() => {
          setIsScrolling(false);
        }, 1000);
      }
    }
  }, [activeIndustry, isScrolling, setIsScrolling]);

  return (
    <div ref={contentRef} className="space-y-32">
      {industries.map((industry) => {
        const data = industryData && industryData[industry]
          ? industryData[industry]
          : tempIndustryContent[industry];

        return (
          <div
            key={`section-${industry}`}
            ref={(el) => {
              sectionRefs.current[industry] = el;
            }}
            data-industry={industry}
            className="scroll-section-header"
          >
            <h2 className="text-4xl lg:text-5xl font-light mb-16 text-white">
              {data.title}
            </h2>

            <div className="text-white">
              <motion.div 
                className="text-white mb-16 space-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {data.description.split('\n\n').map((paragraph, idx) => (
                  <div key={idx} className="text-sm text-white leading-relaxed">
                    {paragraph}
                  </div>
                ))}
              </motion.div>
              
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {data.features.map((feature, idx) => (
                  <SecurityFeature
                    key={feature.id}
                    title={feature.title}
                    description={feature.description}
                    icon={feature.icon}
                    buttons={feature.buttons}
                    delay={idx * 0.1}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default IndustriesContent;