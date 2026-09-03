"use client";

import { ArrowUpRight } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import RevealText from "../ui/RevealText";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-40">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
        <SectionTitle heading="What We Create." className="mb-14" />

        <div>
          {services.map((service, i) => (
            <RevealText key={service.num} delay={i * 0.05}>
              <div
                className="group relative overflow-hidden flex items-center gap-6 sm:gap-8 py-8 border-t border-border last:border-b hover:bg-[rgba(245,241,234,0.03)] transition-colors duration-400 cursor-pointer"
                style={{
                  backgroundImage: `url('${service.previewImage}')`,
                }}
              >
                {/* preview image layer */}
                <div
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-[220px] h-[150px] opacity-0 group-hover:opacity-55 translate-x-5 group-hover:translate-x-0 transition-all duration-400 bg-cover bg-center z-0"
                  style={{ backgroundImage: `url('${service.previewImage}')`, filter: "brightness(.6)" }}
                />
                <div className="relative z-[1] font-serif text-lg text-muted w-11 flex-shrink-0">
                  {service.num}
                </div>
                <div className="relative z-[1] font-serif text-[clamp(1.6rem,3vw,2.6rem)] flex-1 transition-transform duration-400 group-hover:translate-x-3.5 group-hover:text-gold-light">
                  {service.name}
                </div>
                <div className="relative z-[1] hidden md:block text-muted text-[15px] max-w-[280px]">
                  {service.description}
                </div>
                <div className="relative z-[1] w-9 h-9 sm:w-10 sm:h-10 border border-border rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-400 group-hover:rotate-45 group-hover:border-gold">
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </RevealText>
          ))}
        </div>
      </div>
    </section>
  );
}
