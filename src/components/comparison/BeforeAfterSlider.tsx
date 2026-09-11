"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type BeforeAfterSliderProps = {
  title: string;
  before: string;
  after: string;
};

export default function BeforeAfterSlider({ title, before, after }: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pct, setPct] = useState(50);
  const draggingRef = useRef(false);

  function setFromClientX(clientX: number) {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const value = ((clientX - rect.left) / rect.width) * 100;
    setPct(Math.max(0, Math.min(100, value)));
  }

  function handlePointerDown(e: React.PointerEvent) {
    draggingRef.current = true;
    setFromClientX(e.clientX);
  }
  function handlePointerMove(e: React.PointerEvent) {
    if (draggingRef.current) setFromClientX(e.clientX);
  }
  function endDrag() {
    draggingRef.current = false;
  }

  return (
    <div>
      <h4 className="font-serif text-2xl mb-5">{title}</h4>
      <div
        ref={containerRef}
        className="relative aspect-video overflow-hidden rounded-[2px] cursor-ew-resize select-none"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
      >
        <Image src={before} alt={`${title} — before`} fill className="object-cover" loading="lazy" />
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${pct}%` }}>
          <div className="relative h-full" style={{ width: pct > 0 ? `${(100 / pct) * 100}%` : "100%" }}>
            <Image src={after} alt={`${title} — after`} fill className="object-cover" loading="lazy" />
          </div>
        </div>
        <span className="absolute top-4 left-4 text-[11px] tracking-[0.1em] uppercase bg-black/55 text-cream px-2.5 py-1 z-[5]">
          Before
        </span>
        <span className="absolute top-4 right-4 text-[11px] tracking-[0.1em] uppercase bg-black/55 text-cream px-2.5 py-1 z-[5]">
          After
        </span>
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-cream z-[6]"
          style={{ left: `${pct}%`, transform: "translateX(-50%)" }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-cream flex items-center justify-center gap-0.5">
            <ChevronLeft size={12} className="text-dark" />
            <ChevronRight size={12} className="text-dark" />
          </div>
        </div>
      </div>
    </div>
  );
}
