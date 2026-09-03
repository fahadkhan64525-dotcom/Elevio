"use client";

import { useMemo, useState } from "react";
import SectionTitle from "../ui/SectionTitle";
import PortfolioFilter from "./PortfolioFilter";
import PortfolioCard from "./PortfolioCard";
import ProjectModal from "./ProjectModal";
import { projects } from "@/data/projects";

export default function PortfolioGrid() {
  const [filter, setFilter] = useState("All");
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((p) => p.category === filter || p.secondaryCategory === filter);
  }, [filter]);

  const selectedProject = projects.find((p) => p.slug === selectedSlug) ?? null;

  return (
    <section id="portfolio" className="py-24 md:py-40">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
        <SectionTitle
          eyebrow="Portfolio"
          heading="Selected Works."
          subheading="A collection of spaces thoughtfully designed for modern living."
          className="mb-14"
        />
        <PortfolioFilter active={filter} onChange={setFilter} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filtered.map((project, i) => (
            <PortfolioCard
              key={project.slug}
              project={project}
              index={i}
              offset={i % 3 === 1}
              onSelect={setSelectedSlug}
            />
          ))}
        </div>
      </div>
      <ProjectModal project={selectedProject} onClose={() => setSelectedSlug(null)} />
    </section>
  );
}
