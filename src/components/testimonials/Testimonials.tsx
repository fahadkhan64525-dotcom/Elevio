"use client";

import { useRef } from "react";
import SectionTitle from "../ui/SectionTitle";
import RevealText from "../ui/RevealText";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const dragState = useRef({ isDown: false, startX: 0, scrollLeft: 0 });

  function handlePointerDown(e: React.PointerEvent) {
    if (!trackRef.current) return;
    dragState.current.isDown = true;
    dragState.current.startX = e.pageX - trackRef.current.offsetLeft;
    dragState.current.scrollLeft = trackRef.current.scrollLeft;
  }
  function handlePointerMove(e: React.PointerEvent) {
    if (!dragState.current.isDown || !trackRef.current) return;
    const x = e.pageX - trackRef.current.offsetLeft;
    trackRef.current.scrollLeft = dragState.current.scrollLeft - (x - dragState.current.startX);
  }
  function endDrag() {
    dragState.current.isDown = false;
  }

  return (
    <section id="testimonials" className="py-24 md:py-40">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
        <SectionTitle heading={<>Loved By<br />Our Clients.</>} className="mb-14" />

        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
        >
          {testimonials.map((t, i) => (
            <RevealText key={t.name} delay={i * 0.06} className="flex-none w-[340px] sm:w-[420px]">
              <div className="bg-background-secondary border border-border p-8 sm:p-10 h-full select-none">
                <div className="text-gold tracking-[3px] mb-6">★★★★★</div>
                <p className="font-serif text-lg leading-relaxed text-[rgba(245,241,234,0.9)]">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 text-sm font-semibold">{t.name}</div>
                <div className="text-[13px] text-muted">{t.location}</div>
              </div>
            </RevealText>
          ))}
        </div>
      </div>
    </section>
  );
}
