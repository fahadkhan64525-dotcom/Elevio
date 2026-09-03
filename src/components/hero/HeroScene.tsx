"use client";

import { useEffect, useRef } from "react";
import { useIsMobile, useReducedMotion } from "@/hooks/useMediaQuery";

/**
 * Layered hero background. Each layer moves at a different speed on
 * mouse move, smoothed with linear interpolation (current += (target-current)*0.08)
 * per the design spec, driven by requestAnimationFrame rather than
 * writing to the DOM on every mousemove event.
 */
export default function HeroScene() {
  const bgRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (isMobile || reducedMotion || !bgRef.current) return;
    let mx = 0,
      my = 0,
      cx = 0,
      cy = 0;
    let raf: number;

    function handleMove(e: MouseEvent) {
      mx = e.clientX / window.innerWidth - 0.5;
      my = e.clientY / window.innerHeight - 0.5;
    }

    function tick() {
      cx += (mx - cx) * 0.08;
      cy += (my - cy) * 0.08;
      if (bgRef.current) {
        bgRef.current.style.transform = `scale(1.02) translate(${cx * 20}px, ${cy * 20}px)`;
      }
      raf = requestAnimationFrame(tick);
    }

    window.addEventListener("mousemove", handleMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(raf);
    };
  }, [isMobile, reducedMotion]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        ref={bgRef}
        id="hero-bg-layer"
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=80')",
          transform: "scale(1.15)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,10,10,.15) 0%, rgba(10,10,10,.15) 40%, rgba(10,10,10,.85) 100%)",
        }}
      />
    </div>
  );
}
