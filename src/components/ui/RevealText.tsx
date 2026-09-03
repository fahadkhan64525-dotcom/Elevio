"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/utils";

type RevealTextProps = {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

/**
 * Generic fade + rise scroll reveal. Mirrors the GSAP ScrollTrigger
 * "opacity 0->1, y 60->0" utility described in the design system,
 * implemented via Framer Motion's whileInView for React ergonomics.
 */
export default function RevealText({ children, delay = 0, y = 50, className }: RevealTextProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 1, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}
