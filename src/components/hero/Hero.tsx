"use client";

import { motion } from "framer-motion";
import HeroScene from "./HeroScene";
import ScrollIndicator from "./ScrollIndicator";
import Button from "../ui/Button";
import { EASE } from "@/lib/utils";

const lineVariants = {
  hidden: { y: "110%" },
  visible: (i: number) => ({
    y: "0%",
    transition: {
      duration: 1.2,
      ease: EASE,
      delay: 0.15 * i,
    },
  }),
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        relative
        min-h-[100svh]
        overflow-hidden
        flex
        items-end
      "
    >
      <HeroScene />

      <div
        className="
          relative
          z-[5]
          w-full
          px-5
          sm:px-8
          pb-16
          sm:pb-24
          pt-32
        "
      >
        {/* Location */}
        <motion.div
          className="
            text-xs
            tracking-[0.18em]
            text-gold-light
            uppercase
            font-semibold
            mb-5
          "
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: EASE,
            delay: 0.5,
          }}
        >
          Senoir Designer MR Faisal And Founder MR Yusuf
        </motion.div>

        {/* Designer */}
        <motion.div
          className="
            text-[11px]
            tracking-[0.12em]
            uppercase
            text-[rgba(245,241,234,0.7)]
            mb-4
          "
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: EASE,
            delay: 0.6,
          }}
        >
          Interior Design Studio &middot; Noida
        </motion.div>

        {/* Main Heading */}
        <h1
          className="
            text-[clamp(2.8rem,9vw,9rem)]
            leading-[0.95]
            text-cream
          "
        >
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
              You feel like.
            </motion.span>
          </span>
        </h1>

        {/* Description */}
        <motion.p
          className="
            max-w-[520px]
            mt-6
            text-[rgba(245,241,234,0.78)]
            text-[17px]
            leading-relaxed
          "
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: EASE,
            delay: 0.7,
          }}
        >
          We create timeless interiors where thoughtful design, comfort, and
          personality come together.
        </motion.p>

        {/* Phone */}
        <motion.div
          className="mt-7"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: EASE,
            delay: 0.82,
          }}
        >
          <a
            href="tel:+919810757148"
            className="
              inline-flex
              items-center
              gap-2
              text-sm
              font-medium
              tracking-[0.18em]
              text-[rgba(245,241,234,0.82)]
              uppercase
            "
          >
            <span className="h-2 w-2 rounded-full bg-gold-light" />
            +91 98107 57148
          </a>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="
            flex
            gap-4
            flex-wrap
            mt-9
          "
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: EASE,
            delay: 0.85,
          }}
        >
          <Button href="#portfolio" variant="primary">
            Explore Our Work
          </Button>

          <Button
            href="#contact"
            variant="outline"
            showArrow
          >
            Start Your Project
          </Button>

          <Button
            href="tel:+919810757148"
            variant="primary"
            external
            className="bg-gold-light text-dark hover:bg-cream"
          >
            Call Now
          </Button>
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  );
}