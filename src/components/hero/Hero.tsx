"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HeroScene from "./HeroScene";
import ScrollIndicator from "./ScrollIndicator";
import Button from "../ui/Button";
import { EASE } from "@/lib/utils";

const lineVariants = {
  hidden: { y: "110%" },
  visible: (i: number) => ({
    y: "0%",
    transition: { duration: 1.2, ease: EASE, delay: 0.15 * i },
  }),
};

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden flex items-end">
      <HeroScene />
      <div className="relative z-[5] w-full px-5 sm:px-8 pb-16 sm:pb-24">
        <motion.div
          className="text-xs tracking-[0.18em] text-gold-light uppercase font-semibold mb-5"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.5 }}
        >
          Interior Design Studio &middot; Noida
        </motion.div>

        <h1 className="text-[clamp(3rem,9vw,9rem)] text-cream">
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              custom={0}
              initial="hidden"
              animate="visible"
              variants={lineVariants}
            >
              Spaces That
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              custom={1}
              initial="hidden"
              animate="visible"
              variants={lineVariants}
            >
              Feel Like You.
            </motion.span>
          </span>
        </h1>

        <motion.p
          className="max-w-[520px] mt-6 text-[rgba(245,241,234,0.78)] text-[17px]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.7 }}
        >
          We create timeless interiors where thoughtful design, comfort, and personality come
          together.
        </motion.p>

        <motion.div
          className="flex gap-4 flex-wrap mt-11"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.85 }}
        >
          <Button href="#portfolio" variant="primary">
            Explore Our Work
          </Button>
          <Button href="#contact" variant="outline" showArrow>
            Start Your Project
          </Button>
        </motion.div>
      </div>
      <ScrollIndicator />
    </section>
  );
}
