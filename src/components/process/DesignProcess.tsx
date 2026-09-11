"use client";

import SectionTitle from "../ui/SectionTitle";
import RevealText from "../ui/RevealText";
import { processSteps } from "@/data/services";

export default function DesignProcess() {
  return (
    <section id="process" className="bg-dark py-24 md:py-40">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
        <SectionTitle heading={<>From Idea<br />To Reality.</>} className="mb-14" />

        <div className="flex flex-col md:flex-row gap-7 md:gap-0 overflow-x-auto no-scrollbar pb-2">
          {processSteps.map((step, i) => (
            <RevealText key={step.num} delay={i * 0.06}>
              <div className="flex-none md:w-[320px] border-l border-border pl-7 md:mr-7">
                <div className="font-serif text-3xl text-gold">{step.num}</div>
                <h4 className="text-2xl mt-4">{step.title}</h4>
                <p className="text-muted text-[14.5px] mt-3 max-w-[26ch]">{step.description}</p>
              </div>
            </RevealText>
          ))}
        </div>
      </div>
    </section>
  );
}
