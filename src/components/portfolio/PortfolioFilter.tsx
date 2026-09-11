"use client";

import { cn } from "@/lib/utils";
import { portfolioFilters } from "@/data/projects";

type PortfolioFilterProps = {
  active: string;
  onChange: (filter: string) => void;
};

export default function PortfolioFilter({ active, onChange }: PortfolioFilterProps) {
  return (
    <div className="flex gap-2.5 flex-wrap mb-12" role="tablist" aria-label="Filter portfolio by category">
      {portfolioFilters.map((filter) => (
        <button
          key={filter}
          role="tab"
          aria-selected={active === filter}
          onClick={() => onChange(filter)}
          className={cn(
            "px-5 py-2.5 border rounded-full text-[13px] font-medium transition-all duration-300",
            active === filter
              ? "border-gold text-gold-light"
              : "border-border text-muted hover:border-gold hover:text-gold-light"
          )}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
