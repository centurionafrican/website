"use client";

import { CompanyLogo } from "../atoms/logo";
import { motion } from "framer-motion";
import {  Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const socialMedia = [
    { icon: Instagram, href: "https://www.instagram.com/centuriongrouprw?igsh=MWxhcnE0NHg0NGhvdw==" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/centurion-group-lmtd/" },
  ];

  return (
    <footer className="w-full bg-black relative overflow-hidden landing_font ">
      <div className="relative z-10 py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-0">
          <div className="flex items-center flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                href="/"
                className="flex items-center justify-center"
              >
                <CompanyLogo />
              </Link>
              <p className="mt-4 text-gray-500 text-center">
                Trusted by business | powered by expertise
              </p>
              <div className="flex items-center justify-center gap-4 mt-6">
                {socialMedia.map((Item, index) => (
                  <motion.a
                    key={index}
                    href={Item.href}
                    className="bg-primary p-2 text-white hover:bg-gray-700 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Item.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
        </div>
      </div>

      <div className="bg-secondary/40 text-center py-6 relative z-10">
        <p className="text-white text-sm">
          © {new Date().getFullYear()} Centurionafrica security group. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
