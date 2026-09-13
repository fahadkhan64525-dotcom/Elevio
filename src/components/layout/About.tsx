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
            Who We Are
          </div>
          <RevealText>
            <h2 className="text-[clamp(2.6rem,5.2vw,5rem)] text-dark">
              An Interior Design
              <br />
              Studio Based In Noida.
            </h2>
          </RevealText>
          <RevealText delay={0.15}>
            <p className="mt-7 max-w-[42ch] text-dark/60">
              Established in 2010, Elevio Interiors has built its foundation on more than 15 years of interior execution experience. Over the years, we have developed a strong understanding of materials, workmanship, site execution and the practical challenges involved in creating quality interiors.

For the past 3 years, we have also been working in interior design and 3D visualization, bringing together creative design with our hands-on execution experience.

We work across residential and commercial interiors, taking projects from concept and 3D visualization to execution and final detailing. Our focus is to create spaces that are not only visually appealing, but also functional, practical and properly executed on site.

At Elevio Interiors, we combine experience, design and execution to turn ideas into spaces that feel personal and built to last.

Your Style, Our Expertise.We are a team of passionate designers and craftsmen dedicated to creating beautiful, functional spaces that reflect our clients&apos; unique styles and needs.
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
            src="/images/projects/faisallogo.jpeg"
            alt="Floating shelf styling detail from a bedroom designed by Elevio Interiors"
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
