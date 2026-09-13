"use client";

import { Home, ChefHat, Building2, Hammer, Boxes, type LucideIcon } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import RevealText from "../ui/RevealText";
import { services, type Service } from "@/data/services";

const icons: Record<Service["icon"], LucideIcon> = {
  residential: Home,
  kitchen: ChefHat,
  commercial: Building2,
  renovation: Hammer,
  visualization: Boxes,
};

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-40">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
        <SectionTitle heading="What We Create." className="mb-14" />

        <div>
          {services.map((service, i) => {
            const Icon = icons[service.icon];
            return (
              <RevealText key={service.num} delay={i * 0.05}>
                <div className="group flex items-center gap-6 sm:gap-8 py-8 border-t border-border last:border-b transition-colors duration-400 hover:bg-[rgba(245,241,234,0.03)]">
                  <div className="font-serif text-lg text-muted w-11 flex-shrink-0">
                    {service.num}
                  </div>
                  <div className="flex-1">
                    <div className="font-serif text-[clamp(1.6rem,3vw,2.6rem)] transition-transform duration-400 group-hover:translate-x-3.5 group-hover:text-gold-light">
                      {service.name}
                    </div>
                    <p className="text-muted text-[15px] mt-1.5 max-w-[440px]">
                      {service.description}
                    </p>
                  </div>
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-border flex items-center justify-center flex-shrink-0 text-gold transition-all duration-400 group-hover:border-gold group-hover:bg-[rgba(198,165,106,0.08)]">
                    <Icon size={26} strokeWidth={1.5} />
                  </div>
                </div>
              </RevealText>
            );
          })}
        </div>
      </div>
    </section>
  );
}
