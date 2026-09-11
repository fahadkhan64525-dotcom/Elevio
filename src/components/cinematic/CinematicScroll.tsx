"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SceneOne from "./SceneOne";
import SceneTwo from "./SceneTwo";
import SceneThree from "./SceneThree";
import SceneFour from "./SceneFour";

gsap.registerPlugin(ScrollTrigger);

/**
 * height: 400vh wrapper with an inner position:sticky pin.
 * Scenes cross-fade and scale on GPU-friendly properties only
 * (transform + opacity), scrubbed to scroll position via GSAP.
 */
export default function CinematicScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const scenes = ["#scene-1", "#scene-2", "#scene-3", "#scene-4"];
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reducedMotion) {
        // Keep the section usable but static: show scene one only,
        // since the same projects are browsable in the Featured Portfolio grid.
        gsap.set(scenes.slice(1), { opacity: 0 });
        gsap.set(scenes[0], { opacity: 1 });
        return;
      }

      gsap.set(scenes.slice(1), { opacity: 0 });
      gsap.set(scenes[0], { opacity: 1 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=300%",
          scrub: 1,
        },
      });

      scenes.forEach((sel, i) => {
        if (i > 0) {
          tl.to(sel, { opacity: 1, duration: 0.6 }, i - 0.4);
          tl.to(`${sel} .scene-bg`, { scale: 1.12, duration: 1 }, "<");
        }
        if (i < scenes.length - 1) {
          tl.to(sel, { opacity: 0, duration: 0.6 }, i + 0.6);
        }
      });

      const hcards = document.getElementById("hcards");
      if (hcards) {
        gsap.to(hcards, {
          x: () => -(hcards.scrollWidth - window.innerWidth + 60),
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "75% top",
            end: "+=120%",
            scrub: 1,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[400vh] bg-background">
      <div className="sticky top-0 h-screen overflow-hidden">
        <SceneOne />
        <SceneTwo />
        <SceneThree />
        <SceneFour />
      </div>
    </section>
  );
}
