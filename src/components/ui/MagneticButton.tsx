"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useReducedMotion, useIsMobile } from "@/hooks/useMediaQuery";

/**
 * Wraps a single child (button/link) and applies a subtle magnetic
 * pull toward the cursor on hover, capped at 8px per the design spec.
 */
export default function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const MAX_OFFSET = 8;

  function handleMouseMove(e: React.MouseEvent) {
    if (reducedMotion || isMobile || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const offsetX = Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, x * 0.3));
    const offsetY = Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, y * 0.3));
    ref.current.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  }

  function handleMouseLeave() {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0px, 0px)";
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: "transform 0.4s cubic-bezier(.16,.84,.32,1)", display: "inline-flex" }}
    >
      {children}
    </motion.div>
  );
}
