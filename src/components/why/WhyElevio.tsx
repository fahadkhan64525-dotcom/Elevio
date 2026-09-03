"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import RevealText from "../ui/RevealText";
import { stats, benefits } from "@/data/services";

function StatCounter({ value, suffix, display }: { value: number; suffix: string; display?: string }) {
  const ref = useRef<HTMLHeadingElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView || display) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.16, 0.84, 0.32, 1],
      onUpdate: (v) => setCount(Math.floor(v)),
    });
    return () => controls.stop();
  }, [inView, value, display]);

  return (
    <h3 ref={ref} className="text-[clamp(2.6rem,5vw,4.2rem)] text-dark">
      {display ? display : `${count}${suffix}`}
    </h3>
  );
}

export default function WhyElevio() {
  return (
    <section id="why" className="bg-cream text-dark py-24 md:py-40">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
        <SectionTitle heading="Why Elevio?" dark className="mb-16" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-9 sm:gap-10 mb-16">
          {stats.map((s) => (
            <RevealText key={s.label}>
              <div>
                <StatCounter value={s.value} suffix={s.suffix} display={(s as any).display} />
                <span className="block text-sm text-dark/60 mt-2">{s.label}</span>
              </div>
            </RevealText>
          ))}
        </div>

        <div className="flex flex-wrap gap-3.5">
          {benefits.map((b, i) => (
            <RevealText key={b} delay={i * 0.05}>
              <div className="border border-dark/[0.18] rounded-full px-6 py-3 text-sm font-medium">
                {b}
              </div>
            </RevealText>
          ))}
        </div>
      </div>
    </section>
  );
}
