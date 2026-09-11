"use client";

import { useEffect, useRef } from "react";
import { useIsMobile, useReducedMotion } from "@/hooks/useMediaQuery";

export default function HeroScene() {
  const bgRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (isMobile || reducedMotion || !bgRef.current) return;

    let mx = 0;
    let my = 0;
    let cx = 0;
    let cy = 0;
    let raf: number;

    function handleMove(e: MouseEvent) {
      mx = e.clientX / window.innerWidth - 0.5;
      my = e.clientY / window.innerHeight - 0.5;
    }

    function tick() {
      cx += (mx - cx) * 0.08;
      cy += (my - cy) * 0.08;

      if (bgRef.current) {
        bgRef.current.style.transform = `scale(1.08) translate(${cx * 20}px, ${cy * 20}px)`;
      }

      raf = requestAnimationFrame(tick);
    }

    window.addEventListener("mousemove", handleMove, {
      passive: true,
    });

    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(raf);
    };
  }, [isMobile, reducedMotion]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Background */}
      <div
        ref={bgRef}
        id="hero-bg-layer"
        className="absolute inset-0 bg-cover bg-no-repeat will-change-transform"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=80')",
          backgroundPosition: isMobile
            ? "center 48%"
            : "center center",
          transform: isMobile ? "scale(1.05)" : "scale(1.08)",
        }}
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,10,10,0.20) 0%, rgba(10,10,10,0.18) 38%, rgba(10,10,10,0.88) 100%)",
        }}
      />
    </div>
  );
}