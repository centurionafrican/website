"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Bell, Settings, LogOut, Menu, X } from "lucide-react";
import { Button, Icon } from "@/components/atoms";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/atoms/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/atoms/avatar";
import { useRouter } from "next/navigation";
import { CompanyLogo } from "../atoms/logo";
import { useUser } from "@/contexts/userContext";
import { useFetch } from "@/hooks";
import { fetchUserProfile } from "@/services/user";
import { AnimatePresence, motion } from "framer-motion";
import HeaderTop from "./headerTop";

export default function Header({
  theme = "dark",
  topHeader = false,
}: {
  theme?: string;
  topHeader?: boolean;
}) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout, isAuthenticated, setUser } = useUser();
  const { data } = useFetch(["profile"], () => fetchUserProfile());

  useEffect(() => {
    data && setUser(data.response);
  }, [isAuthenticated, router, data]);

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navs = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About us",
      href: "/about",
    },
    {
      name: "Products",
      href: "/products",
    },
    {
      name: "Our Services",
      href: "/services",
    },
  ];

  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: -10 },
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
    visible: (i) => ({
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

  const buttonVariants = {
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
  };

  return (
    <>
      {topHeader && <HeaderTop />}
      <motion.header
        className={`w-full fixed ${topHeader ? "lg:top-12 top-10" : "top-0"} left-0 z-40 py-2 px-4
          ${
            theme === "dark"
              ? "bg-secondary/95 after:content-[''] after:absolute after:bottom-0 after:left-[15%] after:right-[15%] after:h-[1px] after:bg-gradient-to-r after:from-transparent after:via-[#8E9AF9] after:to-transparent"
              : "bg-white/95 after:content-[''] after:absolute after:bottom-0 after:left-[15%] after:right-[15%] after:h-[1px] after:bg-gradient-to-r after:from-transparent after:via-[#8E9AF9] after:to-transparent"
          }`}
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex items-center justify-between h-16 w-full max-w-7xl mx-auto lg:px-0">
          <motion.div variants={logoVariants}>
            <Link
              href="/"
              className="flex items-center gap-2 self-center font-medium"
            >
              <CompanyLogo theme={theme === "dark" ? "white" : "primary"} />
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.div variants={buttonVariants}>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </Button>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="space-x-2 flex flex-row justify-end">
              {navs.map((nav, idx) => (
                <motion.div key={idx} custom={idx} variants={navItemVariants}>
                  <Link
                    href={nav.href}
                    className={`inline-flex items-center px-1 pt-1 text-sm
                    ${theme === "dark" ? "text-white" : ""}
                  `}
                  >
                    {nav.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div custom={navs.length} variants={navItemVariants}>
                <Link
                  href={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/resources/profile.pdf`}
                  className={`inline-flex items-center px-1 pt-1 text-sm
                    ${theme === "dark" ? "text-white" : ""}
                  `}
                >
                  Company profile
                </Link>
              </motion.div>
            </div>
            {!isAuthenticated && (
              <motion.div className="flex gap-1" variants={buttonVariants}>
                <Button
                  variant="outline"
                  onClick={() => router.push("/contact")}
                >
                  Contact us
                </Button>
              </motion.div>
            )}
            {isAuthenticated && (
              <motion.div className="flex gap-1" variants={buttonVariants}>
                {/* <Button
                  variant='ghost'
                  size='icon'
                  className='relative bg-gray-50 h-9 w-9 flex items-center justify-center rounded-full'
                >
                  <Bell className='h-5 w-5' />
                  <span className='absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full'></span>
                </Button> */}

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <div className="flex items-center ml-4 cursor-pointer">
                      <div
                        className={`text-sm px-2 max-w-36 w-full truncate
                        ${theme === "dark" ? "text-white" : "text-base"}
                        `}
                      >
                        Hello, {user?.first_name}
                      </div>
                      <Avatar>
                        <AvatarImage
                          src="/avatars/admin.png"
                          alt={`${user?.first_name ?? ""} ${user?.last_name ?? ""}`}
                        />
                        <AvatarFallback>
                          {`${user?.first_name?.charAt(0) ?? ""}${user?.last_name?.charAt(0) ?? ""}`.toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuLabel
                      className="font-normal cursor-pointer hover:bg-gray-50 rounded-sm"
                      onClick={() => router.push("/account/profile")}
                    >
                      <div className="flex flex-col space-y-1 ">
                        <p className="text-sm font-medium leading-none">
                          {`${user?.first_name ?? ""} ${user?.last_name ?? ""}`}
                        </p>
                        <p className="text-xs leading-none text-gray-400">
                          {user?.email}
                        </p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={() => router.push("/account/quotations/create")}
                    >
                      <Icon name="plus" />
                      <span>New insurance</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => router.push("/account")}>
                      <Icon name="policies" />
                      <span>My Policies</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => router.push("/account/vehicles")}
                    >
                      <Icon name="car" />
                      <span>Vehicles</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleLogout}>
                      <Icon name="logout" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </motion.div>
            )}
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
                className={`absolute top-16 left-0 w-full p-4 shadow-lg
                ${theme === "dark" ? "bg-secondary" : "bg-white"}
                lg:hidden
              `}
              >
                <div className="flex flex-col space-y-4">
                  {navs.map((nav, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * idx, duration: 0.3 }}
                    >
                      <Link
                        href={nav.href}
                        onClick={() => setIsOpen(false)}
                        className={`text-sm font-medium
                        ${theme === "dark" ? "text-white" : "text-gray-900"}
                      `}
                      >
                        {nav.name}
                      </Link>
                    </motion.div>
                  ))}
                  {!isAuthenticated ? (
                    <motion.div
                      className="flex flex-col gap-2 pt-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.3 }}
                    >
                      <Button
                        variant="outline"
                        onClick={() => router.push("/contact")}
                      >
                        Contact us
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.div
                      className="flex flex-col items-start justify-center gap-2 pt-4 bg-gray-50"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.3 }}
                    >
                      <Button
                        variant="ghost"
                        onClick={() => {
                          setIsOpen(false);
                        }}
                      >
                        <Settings className="h-4 w-4" />
                        <span>My policies</span>
                      </Button>
                      <Button
                        variant="ghost"
                        onClick={() => {
                          setIsOpen(false);
                        }}
                      >
                        <Settings className="h-4 w-4" />
                        <span>Vehicles</span>
                      </Button>
                      <Button
                        variant="ghost"
                        onClick={() => {
                          setIsOpen(false);
                        }}
                      >
                        <Settings className="h-4 w-4" />
                        <span>Notifications</span>
                      </Button>
                      <Button
                        variant="ghost"
                        onClick={() => {
                          setIsOpen(false);
                          handleLogout();
                        }}
                      >
                        <LogOut className="h-4 w-4" />
                        <span>Log out</span>
                      </Button>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>
    </>
  );
}
