"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = reducedMotion ? 200 : 1100;
    const start = performance.now();

    function tick(now: number) {
      const elapsed = now - start;
      const pct = Math.min(100, (elapsed / duration) * 100);
      setProgress(pct);
      if (pct < 100) {
        requestAnimationFrame(tick);
      } else {
        setTimeout(() => setLoading(false), reducedMotion ? 100 : 400);
      }
    }
    requestAnimationFrame(tick);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 bg-background z-[10000] flex flex-col items-center justify-center gap-6"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.6, ease: [0.16, 0.84, 0.32, 1] }}
          role="status"
          aria-label="Loading Elevio Interiors"
        >
          <h1 className="text-[clamp(2.2rem,6vw,3.4rem)] text-center tracking-wide text-cream">
            ELEVIO
            <span className="block text-[0.4em] font-sans font-semibold tracking-[0.5em] text-gold mt-2">
              INTERIORS
            </span>
          </h1>
          <div className="w-[220px] h-px bg-[rgba(245,239,230,0.15)] relative overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 bg-gold"
              style={{ width: `${progress}%` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
