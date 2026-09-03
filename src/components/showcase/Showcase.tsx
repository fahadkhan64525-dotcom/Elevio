"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import Hotspot from "./Hotspot";
import { hotspotData } from "@/data/services";
import { useIsMobile, useReducedMotion } from "@/hooks/useMediaQuery";

export default function Showcase() {
  const frameRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const isMobile = useIsMobile();
  const reducedMotion = useReducedMotion();

  function handleMouseMove(e: React.MouseEvent) {
    if (isMobile || reducedMotion || !frameRef.current) return;
    const rect = frameRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ rx: -py * 4, ry: px * 4 });
  }

  function handleMouseLeave() {
    setTilt({ rx: 0, ry: 0 });
  }

  const active = activeId ? hotspotData[activeId] : null;

  return (
    <section id="showcase" className="bg-background-secondary py-24 md:py-40">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
        <div className="flex flex-wrap justify-between items-end gap-8 mb-14">
          <SectionTitle eyebrow="Immersive View" heading={<>Step Inside<br />The Design.</>} />
          <p className="text-muted max-w-[34ch]">
            Click a marker to explore the elements behind the space.
          </p>
        </div>

        <div style={{ perspective: "1200px" }}>
          <div
            ref={frameRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={() => setActiveId(null)}
            className="relative aspect-video rounded-[2px] overflow-hidden"
            style={{
              transformStyle: "preserve-3d",
              transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
              transition: "transform 0.4s cubic-bezier(.16,.84,.32,1)",
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1800&q=80"
              alt="Full interior view of a designed living room with numbered hotspots for lighting, furniture, flooring, wall finish and decor"
              fill
              className="object-cover"
              loading="lazy"
            />
            {Object.entries(hotspotData).map(([id, hs], i) => (
              <Hotspot
                key={id}
                id={id}
                top={hs.top}
                left={hs.left}
                label={`${id.padStart(2, "0")} ${hs.title.split(" ")[0]}`}
                active={activeId === id}
                onActivate={(clicked) => setActiveId(clicked === activeId ? null : clicked)}
              />
            ))}

            <AnimatePresence>
              {active && (
                <motion.div
                  className="absolute w-[260px] bg-cream text-dark p-6 z-20"
                  style={{
                    left: hotspotData[activeId!].left,
                    top: `calc(${hotspotData[activeId!].top} + 26px)`,
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="text-xs tracking-[0.1em] font-bold text-gold uppercase mb-2">
                    {active.title}
                  </div>
                  <p className="text-sm text-dark/70">{active.description}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
