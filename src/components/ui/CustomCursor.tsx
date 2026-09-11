"use client";

import { useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/useMediaQuery";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile || !cursorRef.current) return;
    const cursor = cursorRef.current;
    let tx = 0,
      ty = 0,
      cx = 0,
      cy = 0;
    let raf: number;

    function handleMove(e: MouseEvent) {
      tx = e.clientX;
      ty = e.clientY;
    }

    function tick() {
      cx += (tx - cx) * 0.18;
      cy += (ty - cy) * 0.18;
      cursor.style.left = `${cx}px`;
      cursor.style.top = `${cy}px`;
      raf = requestAnimationFrame(tick);
    }

    function handleEnter(e: Event) {
      cursor.classList.add("hover");
      const target = e.currentTarget as HTMLElement;
      if (target.dataset.cursorLabel) cursor.classList.add("view");
    }
    function handleLeave() {
      cursor.classList.remove("hover");
      cursor.classList.remove("view");
    }

    window.addEventListener("mousemove", handleMove, { passive: true });
    raf = requestAnimationFrame(tick);

    const interactive = document.querySelectorAll(
      "a, button, [data-cursor], .cursor-interactive"
    );
    interactive.forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(raf);
      interactive.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <div id="cursor" ref={cursorRef} aria-hidden="true">
      <span className="cursor-label">VIEW</span>
    </div>
  );
}
