"use client";

/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
/* eslint-disable no-plusplus */
/* eslint-disable no-shadow */
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

// Define the missing types
interface AccordionItem {
  title: string;
  path?: string;
  content?: AccordionItem[];
}

interface AccordionProps {
  items: AccordionItem[];
}

// Animation variants for the menu
const menuVariants = {
  closed: { x: "-100%" },
  open: { x: 0 },
  exit: { x: "-100%" }
};

export default function Accordion({ items }: AccordionProps) {
  const [activeIndexes, setActiveIndexes] = useState<any>([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const findParentIndexes = (
    items: any[],
    targetPath: string,
    parentPath: string = ""
  ): string[] => {
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const fullPath = parentPath
        ? `${parentPath}/${item.path}`
        : `/${item.path}`;

      if (fullPath === targetPath) {
        return [fullPath];
      }

      if (item.content) {
        const found = findParentIndexes(item.content, targetPath, fullPath);
        if (found.length > 0) return [fullPath, ...found];
      }
    }
    return [];
  };

  useEffect(() => {
    const parentIndexes = findParentIndexes(items, pathname);
    setActiveIndexes(parentIndexes);
  }, [pathname, items]);

  const toggleAccordion = (index: string) => {
    if (activeIndexes.includes(index)) {
      setActiveIndexes(activeIndexes.filter((i) => i !== index));
    } else {
      setActiveIndexes([...activeIndexes, index]);
    }
  };

  const renderContent = (content: AccordionItem[], parentPath: string = "") => {
    return content.map((item, i) => {
      const fullPath = parentPath
        ? `${parentPath}/${item.path}`
        : `/${item.path}`;
      const hasContent = item.content && item.content.length > 0;
      const isOpen = activeIndexes.includes(fullPath);
      const isActive = fullPath === pathname;

      return (
        <div key={i} className="my-4">
          <div className="flex justify-between items-start gap-4">
            {item.path ? (
              <Link
                href={fullPath}
                className={`${
                  isActive ? "text-secondary font-semibold" : "text-gray-800"
                } hover:text-secondary/80`}
              >
                {item.title}
              </Link>
            ) : (
              <span
                className={`${isActive ? "text-secondary" : "text-gray-800"}`}
              >
                {item.title}
              </span>
            )}
            {hasContent && (
              <button
                onClick={() => toggleAccordion(fullPath)}
                className="p-1 focus:outline-none"
              >
                {isOpen ? (
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 15.75 7.5-7.5 7.5 7.5"
                      />
                    </svg>
                  </span>
                ) : (
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                )}
              </button>
            )}
          </div>
          <AnimatePresence>
            {hasContent && isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="pl-4 mt-2 overflow-hidden"
              >
                {item.content && renderContent(item.content, fullPath)}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    });
  };

  const menuVariants = {
    closed: {
      x: "-100%",
      opacity: 0,
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 180,
      },
    },
    exit: {
      x: "-100%",
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const AccordionContent = () => (
    <div className="h-fit w-[280px] text-base p-4 rounded mt-12 bg-white border border-gray-200">
      {items.map((item, index) => {
        const fullPath = `/${item.path}`;
        const hasContent = item.content && item.content.length > 0;
        const isOpen = activeIndexes.includes(fullPath);
        const isActive = fullPath === pathname;

        return (
          <div key={index} className="my-4">
            <div className="flex justify-between items-start gap-8">
              {item.path ? (
                <Link
                  href={fullPath}
                  className={`${
                    isActive ? "text-secondary" : "text-gray-800"
                  } hover:text-secondary/80`}
                >
                  {item.title}
                </Link>
              ) : (
                <span
                  className={`${isActive ? "text-secondary" : "text-gray-800"}`}
                >
                  {item.title}
                </span>
              )}
              {hasContent && (
                <button
                  onClick={() => toggleAccordion(fullPath)}
                  className="p-1 focus:outline-none"
                >
                  {isOpen ? (
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 15.75 7.5-7.5 7.5 7.5"
                        />
                      </svg>
                    </span>
                  ) : (
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  )}
                </button>
              )}
            </div>
            <AnimatePresence>
              {hasContent && isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="pl-4 mt-2 overflow-hidden"
                >
                  {item.content && renderContent(item.content, fullPath)}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );

  return (
    <>
      <div className="lg:hidden fixed sm:top-68 top left-0 z-50">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-lg bg-white shadow-lg focus:outline-none"
        >
          {isMobileMenuOpen ? (
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </span>
          ) : (
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </span>
          )}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="exit"
            className="fixed top-0 left-0 h-full z-50 lg:hidden"
          >
            <AccordionContent />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="hidden lg:block">
        <AccordionContent />
      </div>
    </>
  );
}
