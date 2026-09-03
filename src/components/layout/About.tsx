"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import RevealText from "../ui/RevealText";
import { EASE } from "@/lib/utils";

export default function About() {
  return (
    <section id="about" className="bg-cream text-dark py-24 md:py-40">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-20 items-center">
        <div>
          <div className="text-xs tracking-[0.14em] uppercase font-semibold text-gold mb-4">
            Design Philosophy
          </div>
          <RevealText>
            <h2 className="text-[clamp(2.6rem,5.2vw,5rem)] text-dark">
              We Don&apos;t Just
              <br />
              Design Rooms.
              <br />
              We Design Experiences.
            </h2>
          </RevealText>
          <RevealText delay={0.15}>
            <p className="mt-7 max-w-[42ch] text-dark/60">
              At Elevio Interiors, every space begins with a story. We combine functionality,
              aesthetics, and personality to create interiors that feel uniquely yours.
            </p>
          </RevealText>
        </div>
        <motion.div
          className="aspect-[4/5] overflow-hidden rounded-[2px]"
          initial={{ clipPath: "inset(20% 0 0 0)", scale: 1.15 }}
          whileInView={{ clipPath: "inset(0% 0 0 0)", scale: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: EASE }}
        >
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
            alt="Architectural detail of a warm, minimal living space designed by Elevio Interiors"
            width={900}
            height={1125}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}
