"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/atoms";
import { CompanyLogo } from "../atoms/logo";
import { AnimatePresence, motion } from "framer-motion";

interface HeaderProps {
  theme?: "dark" | "light";
  topHeader?: boolean;
}

export default function Header({
  theme = "dark",
  topHeader = false,
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("HOME");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = document.querySelectorAll('section[id]');
      
      let currentSection = "HOME";
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionId = section.id.toUpperCase();
        
        if (sectionTop <= 150) {
          currentSection = sectionId;
        }
      });
      
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    
    handleScroll();
    
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  const navs = [
    {
      name: "HOME",
      href: "/",
    },
    {
      name: "ABOUT",
      href: "/about",
    },
    {
      name: "SERVICES",
      href: "/services",
    },
    {
      name: "INDUSTRIES",
      href: "/industries",
    },
    {
      name: "CAREER",
      href: "/career",
    },
  ];

  const menuVariants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const menuItemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 20,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        when: "beforeChildren",
        delayChildren: 0.2,
      },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        delay: 0.3 + i * 0.1,
      },
    }),
  };

  const logoVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  const contactBtnVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        delay: 0.6,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.header
      className={`w-full fixed z-0 ${topHeader ? "lg:top-0 top-0" : "top-0"} left-0 z-40 py-4 px-4
        ${scrolled 
          ? "bg-black/75 backdrop-blur-md" 
          : "bg-transparent"
        } transition-all duration-300`}
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="absolute h-64 bg-gradient-to-b from-black/100 to-transparent w-full top-0 -z-0 left-0" />
      <div className="flex items-center justify-between md:h-16 h-10 w-full max-w-7xl mx-auto lg:px-0 z-10">
        <motion.div variants={logoVariants}>
          <Link
            href="/"
            className="flex items-center gap-2 self-center"
          >
            <CompanyLogo theme="white" />
          </Link>
        </motion.div>

        <div className="hidden lg:flex items-center space-x-8">
          <div className="space-x-8 flex flex-row justify-end">
            {navs.map((nav, idx) => (
              <motion.div key={idx} custom={idx} variants={navItemVariants}>
                <Link
                  href={`/#${nav.name.toLowerCase()}`}
                  className={`inline-flex items-center text-sm font-medium tracking-wider transition-all duration-300 relative
                    ${nav.name === activeSection 
                      ? "text-white/50" 
                      : "text-white hover:text-white/80"}`}
                >
                  {nav.name}
                  {nav.name === activeSection && (
                    <motion.span
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                      layoutId="activeNavIndicator"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>
          <div 
            className="hidden lg:block"
          >
            <Link 
              href="/contact"
              className="relative z-30 inline-flex items-center px-6 py-2 text-sm font-medium bg-primary text-white hover:text-black hover:bg-gray-100 transition-colors duration-200"
            >
              CONTACT US
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden text-white w-auto z-20"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="h-10 w-10" />
          ) : (
            <Menu className="h-10 w-10" />
          )}
        </Button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="absolute top-16 left-0 w-full overflow-hidden bg-black/90 backdrop-blur-md lg:hidden"
            >
              <div className="flex flex-col space-y-4 p-6">
                {navs.map((nav, idx) => (
                  <motion.div
                    key={idx}
                    variants={menuItemVariants}
                  >
                    <Link
                      href={`/#${nav.name.toLowerCase()}`}
                      onClick={() => setIsOpen(false)}
                      className={`text-base font-medium block py-2 transition-colors duration-200
                        ${nav.name === activeSection 
                          ? "text-secondary" 
                          : "text-white hover:text-secondary/80"}`}
                    >
                      {nav.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div variants={menuItemVariants}>
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center px-6 py-2 text-sm font-medium bg-white text-gray-900 hover:bg-gray-100 transition-colors duration-200 mt-4"
                  >
                    CONTACT US
                    <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}