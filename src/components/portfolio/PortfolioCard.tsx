"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { EASE } from "@/lib/utils";

type PortfolioCardProps = {
  project: Project;
  onSelect: (slug: string) => void;
  index: number;
  offset?: boolean;
};

export default function PortfolioCard({ project, onSelect, index, offset }: PortfolioCardProps) {
  return (
    <motion.article
      className={`group relative overflow-hidden rounded-[2px] cursor-pointer ${
        offset ? "md:mt-16" : ""
      }`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.9, ease: EASE, delay: (index % 3) * 0.08 }}
      tabIndex={0}
      role="button"
      data-cursor-label="true"
      aria-label={`View ${project.title} project`}
      onClick={() => onSelect(project.slug)}
      onKeyDown={(e) => e.key === "Enter" && onSelect(project.slug)}
    >
      <div className="aspect-[4/5] overflow-hidden">
        <Image
          src={project.coverImage}
          alt={`${project.title} — ${project.style} interior in ${project.location}`}
          width={800}
          height={1000}
          className="w-full h-full object-cover transition-transform duration-[800ms] ease-elevio group-hover:scale-[1.08]"
          style={{ transitionTimingFunction: "cubic-bezier(.16,.84,.32,1)" }}
          loading="lazy"
        />
      </div>
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: "linear-gradient(180deg, rgba(0,0,0,0) 45%, rgba(0,0,0,.75) 100%)" }}
      />
      <div className="absolute left-5 right-5 bottom-5 text-cream translate-y-3.5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
        <div className="text-[11px] tracking-[0.12em] uppercase text-gold-light mb-1.5">
          {project.category}
        </div>
        <div className="font-serif text-2xl">{project.title}</div>
        <div className="text-[13px] text-[rgba(245,241,234,0.7)] mt-1 flex justify-between items-center">
          <span>{project.location}</span>
          <ArrowUpRight
            size={18}
            className="transition-transform duration-400 group-hover:rotate-45"
          />
        </div>
      </div>
    </motion.article>
  );
}
