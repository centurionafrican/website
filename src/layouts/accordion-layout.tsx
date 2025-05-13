"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import Accordion from "@/components/molecules/accordion";
import ACCORDION_ITEMS from "@/constants/accordion-items";
import HeroSubtitle from "@/components/molecules/hero-subtitle";

const AccordionLayout = ({ children }: any) => {
  const [activeIndexes, setActiveIndexes] = useState<string[]>([]);
  const [heroTitle, setHeroTitle] = useState<string>(
    "Centurion services"
  );
  const pathname = usePathname();

  const toggleAccordion = (index: string) => {
    if (activeIndexes.includes(index)) {
      setActiveIndexes(activeIndexes.filter((i) => i !== index));
    } else {
      setActiveIndexes([...activeIndexes, index]);
    }
  };

  const findTitleByPath = (
    items: AccordionItem[],
    targetPath: string,
    parentPath: string = ""
  ): string | null => {
    for (const item of items) {
      const fullPath = parentPath
        ? `${parentPath}/${item.path}`
        : `/${item.path}`;
      if (fullPath === targetPath) {
        return item.title;
      }
      if (item.content) {
        const found = findTitleByPath(item.content, targetPath, fullPath);
        if (found) return found;
      }
    }
    return null;
  };

  useEffect(() => {
    const title = findTitleByPath(ACCORDION_ITEMS, pathname);
    if (title) {
      setHeroTitle(title);
    }
  }, [pathname]);

  return (
    <div className="w-full relative pb-16 bg-white">
      <HeroSubtitle title={heroTitle} />
      <div className="flex flex-col md:flex-row gap-9 mx-auto max-w-5xl z-50">
        <div className="static -translate-y-32">
          <Accordion
            items={ACCORDION_ITEMS}
            activeIndexes={activeIndexes}
            toggleAccordion={toggleAccordion}
          />
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </div>
  );
};

export default AccordionLayout;
