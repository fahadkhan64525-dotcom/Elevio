"use client";

import { useEffect, useState, type RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Tracks 0-1 scroll progress of a given element through the viewport.
 * Used to drive scrubbed cinematic animations.
 */
export function useScrollProgress(ref: RefObject<HTMLElement>, end = "bottom top") {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    const trigger = ScrollTrigger.create({
      trigger: ref.current,
      start: "top top",
      end,
      scrub: true,
      onUpdate: (self) => setProgress(self.progress),
    });
    return () => trigger.kill();
  }, [ref, end]);

  return progress;
}
