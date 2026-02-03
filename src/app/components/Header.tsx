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

  const topLineVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 6 },
  };

  const middleLineVariants = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  };

  const bottomLineVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -6 },
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
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 w-full backdrop-blur-md"
    >
      <nav className="max-w-7xl mx-auto lg:px-20 md:px-18 sm:px-14 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/images/uifry.svg"
              width={100}
              height={20}
              alt="uifry financial bank"
              priority
            />

            <ul className="hidden md:flex items-center gap-8 ml-8">
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
        </div>
      </nav>
    </motion.header>
  );
}
