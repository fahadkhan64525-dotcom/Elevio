"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
];

function scrollToHash(hash: string) {
  const target = document.querySelector(hash);
  if (!target) return;
  const lenis = (window as any).__lenis;
  if (lenis) {
    lenis.scrollTo(target, { offset: -20 });
  } else {
    target.scrollIntoView({ behavior: "smooth" });
  }
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  function handleNavClick(e: React.MouseEvent, href: string) {
    e.preventDefault();
    setMenuOpen(false);
    scrollToHash(href);
  }

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[500] transition-all duration-500",
          scrolled
            ? "py-4 bg-[rgba(13,13,13,0.72)] backdrop-blur-md border-b border-border"
            : "py-7 border-b border-transparent"
        )}
      >
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <nav className="flex items-center justify-between">
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, "#hero")}
              className="font-serif text-xl tracking-wide"
            >
              Elevio Interiors
            </a>

            <div className="hidden md:flex gap-10 text-sm font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="relative pb-1 group"
                >
                  {link.label}
                  <span className="absolute left-0 bottom-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold"
            >
              Start a Project <ArrowRight size={14} />
            </a>

            <button
              className="md:hidden z-[600] w-8 h-8 flex items-center justify-center"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="fixed inset-0 bg-dark z-[450] flex flex-col justify-center px-10 gap-7 md:hidden"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.16, 0.84, 0.32, 1] }}
            aria-label="Mobile navigation"
          >
            {[...navLinks, { label: "Contact", href: "#contact" }].map((link, i) => (
              <div key={link.href} className="overflow-hidden">
                <motion.a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block font-serif text-4xl"
                  initial={{ y: "120%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 0.84, 0.32, 1], delay: 0.08 * i }}
                >
                  {link.label}
                </motion.a>
              </div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
