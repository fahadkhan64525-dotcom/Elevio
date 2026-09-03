"use client";

import { useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import type { Project } from "@/data/projects";
import Button from "../ui/Button";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (project) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 bg-[rgba(8,8,8,0.9)] z-[2000] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => e.target === e.currentTarget && onClose()}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} project details`}
        >
          <motion.div
            className="relative max-w-[920px] w-full max-h-[88vh] overflow-y-auto bg-background-secondary border border-border"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 0.84, 0.32, 1] }}
          >
            <button
              onClick={onClose}
              aria-label="Close project details"
              className="absolute top-6 right-6 w-10 h-10 border border-border rounded-full flex items-center justify-center bg-background-secondary/80 z-10"
            >
              <X size={16} />
            </button>
            <Image
              src={project.coverImage}
              alt={`${project.title} project hero image`}
              width={1400}
              height={788}
              className="w-full aspect-video object-cover"
            />
            <div className="p-7 sm:p-11">
              <div className="text-xs tracking-[0.14em] uppercase font-semibold text-gold">
                {project.category}
              </div>
              <h3 className="mt-3 text-[clamp(2rem,4vw,2.8rem)]">{project.title}</h3>
              <p className="mt-4 text-[rgba(245,241,234,0.75)]">{project.description}</p>

              <div className="flex flex-wrap gap-7 my-6 py-5 border-t border-b border-border">
                <MetaItem label="Location" value={project.location} />
                <MetaItem label="Type" value={project.category} />
                <MetaItem label="Area" value={project.area} />
                <MetaItem label="Style" value={project.style} />
                <MetaItem label="Year" value={project.year} />
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-serif text-xl mb-2">The Challenge</h4>
                  <p className="text-[rgba(245,241,234,0.7)] text-[15px]">{project.challenge}</p>
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-2">Our Solution</h4>
                  <p className="text-[rgba(245,241,234,0.7)] text-[15px]">{project.solution}</p>
                </div>
              </div>

              {project.gallery.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                  {project.gallery.map((img, i) => (
                    <div key={i} className="aspect-square overflow-hidden rounded-[2px]">
                      <Image
                        src={img}
                        alt={`${project.title} gallery image ${i + 1}`}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-2 mb-8">
                {project.materials.map((m) => (
                  <span
                    key={m}
                    className="text-[13px] border border-border rounded-full px-4 py-1.5 text-muted"
                  >
                    {m}
                  </span>
                ))}
              </div>

              <div onClick={onClose}>
                <Button href="#contact" variant="primary">
                  Start a Similar Project
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span className="block text-[11px] tracking-[0.1em] uppercase text-muted mb-1">{label}</span>
      <span className="font-serif text-lg">{value}</span>
    </div>
  );
}
