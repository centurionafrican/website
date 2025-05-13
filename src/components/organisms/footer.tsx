"use client";

import { CompanyLogo } from "../atoms/logo";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const socialIcons = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
  ];

  return (
    <footer className="w-full bg-black relative overflow-hidden landing_font ">
      <div className="relative z-10 py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                href="/"
                className="flex items-center gap-2 self-center font-medium"
              >
                <CompanyLogo />
              </Link>
              <p className="mt-4 text-gray-500 text-sm">
                Trusted by business | powered by expertise
              </p>
              <div className="flex gap-4 mt-6">
                {socialIcons.map((Item, index) => (
                  <motion.a
                    key={index}
                    href={Item.href}
                    className="bg-gray-900 p-2 rounded-full text-white hover:bg-gray-700 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Item.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-gray-100 font-medium mb-4">Company</h3>
            <ul className="space-y-3">
              <motion.li
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a href="/" className="text-white hover:text-gray-100">
                  Home
                </a>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a href="/about" className="text-white hover:text-gray-100">
                  About us
                </a>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a
                  href="/products"
                  className="text-white hover:text-gray-100"
                >
                  Products
                </a>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a
                  href="/services"
                  className="text-white hover:text-gray-100"
                >
                  Our services
                </a>
              </motion.li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-gray-100 font-medium mb-4">Help</h3>
            <ul className="space-y-3">
              {/* {["Contact us", "Privacy policy", "Terms & conditions"].map( */}
              <motion.li
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a
                  href="/contact"
                  className="text-white hover:text-gray-100"
                >
                  Contact us
                </a>
              </motion.li>
            </ul>
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
