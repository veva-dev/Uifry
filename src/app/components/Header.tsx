"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { navLinks } from "../lib/constants";
import { smoothScrollTo } from "../utils/scroll";
import { useEffect, useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [activeLink, setActiveLink] = useState("home");

  const [scrolled, setScrolled] = useState(false);

  const handleNavClick = (href: string): void => {
    const id = href.replace("#", "");

    const element = document.getElementById(id);

    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth" as ScrollBehavior,
      });

      window.history.pushState(null, "", href);
      setActiveLink(id);
      setIsMenuOpen(false);
    } else {
      console.warn(`Element with id "${id}" not found`);
    }
  };

  const smoothScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      window.history.pushState(null, "", `#${id}`);
      setActiveLink(id);
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      const sections = navLinks.map((link) => link.href.replace("#", ""));
      let current = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
          }
        }
      });

      if (current !== activeLink) {
        setActiveLink(current);
      }
    };

    window.addEventListener("scroll", handleScroll);

    const hash = window.location.hash.replace("#", "");
    if (hash && navLinks.some((link) => link.href === `#${hash}`)) {
      setActiveLink(hash);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled, activeLink]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const menuButtonVariants = {
    top: {
      closed: { rotate: 0, y: -8 },
      open: { rotate: 45, y: 0 },
    },
    middle: {
      closed: { opacity: 1, scale: 1 },
      open: { opacity: 0, scale: 0 },
    },
    bottom: {
      closed: { rotate: 0, y: 8 },
      open: { rotate: -45, y: 0 },
    },
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeInOut",
        staggerChildren: 0.1,
      },
    },
  };

  const menuItemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 },
  };

  const handleDownload = () => {
    console.log("Download clicked");
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -80 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 px-4 sm:px-8 md:px-12 lg:px-20 backdrop-blur-2xl`}
    >
      <nav className="max-w-7xl mx-auto w-full sm:px-14 py-4 md:px-6 lg:px-20">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/images/uifry.svg"
              width={100}
              height={20}
              alt="uifry financial bank"
              priority
              className="transition-all duration-500"
            />

            <ul className="hidden md:flex items-center gap-8 ml-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavClick(link.href.replace("#", ""))}
                    className="hover:text-[#FF5555] transition-colors font-medium cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <button className="hidden md:flex px-8 py-2 bg-black text-white rounded-lg transition-colors font-medium cursor-pointer hover:text-[#FF5555] duration-150">
            Download
          </button>

          <motion.button
            className="md:hidden relative w-10 h-10 flex items-center justify-center cursor-pointer focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
            whileTap={{ scale: 0.9 }}
          >
            <motion.span
              className="absolute w-6 h-0.5 bg-black rounded-full"
              variants={menuButtonVariants.top}
              initial="closed"
              animate={isMenuOpen ? "open" : "closed"}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />

            <motion.span
              className="absolute w-6 h-0.5 bg-black rounded-full"
              variants={menuButtonVariants.middle}
              initial="closed"
              animate={isMenuOpen ? "open" : "closed"}
              transition={{ duration: 0.2 }}
            />

            <motion.span
              className="absolute w-6 h-0.5 bg-black rounded-full"
              variants={menuButtonVariants.bottom}
              initial="closed"
              animate={isMenuOpen ? "open" : "closed"}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          </motion.button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden overflow-hidden"
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="pt-4 pb-6 border-t border-gray-200 mt-2">
                <motion.ul className="flex flex-col">
                  {navLinks.map((link, index) => {
                    const linkId = link.href.replace("#", "");
                    const isActive = activeLink === linkId;

                    return (
                      <motion.li
                        key={link.name}
                        variants={menuItemVariants}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <button
                          onClick={() => handleNavClick(linkId)}
                          className={`w-full text-left py-3.5 text-lg font-medium transition-all duration-200 flex items-center ${
                            isActive
                              ? "text-[#FF5555] font-semibold pl-2 border-l-4 border-[#FF5555]"
                              : "text-gray-800 hover:text-[#FF5555] hover:pl-3"
                          }`}
                        >
                          {isActive && (
                            <motion.span
                              className="mr-2 text-[#FF5555]"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                            >
                              •
                            </motion.span>
                          )}
                          {link.name}
                        </button>
                      </motion.li>
                    );
                  })}

                  <motion.li
                    variants={menuItemVariants}
                    transition={{ delay: navLinks.length * 0.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4"
                  >
                    <button
                      onClick={() => {
                        handleDownload();
                        setIsMenuOpen(false);
                      }}
                      className="w-full px-6 py-3.5 bg-black text-white rounded-lg font-medium cursor-pointer hover:text-[#FF5555] transition-colors duration-200 text-center"
                    >
                      Download
                    </button>
                  </motion.li>
                </motion.ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
