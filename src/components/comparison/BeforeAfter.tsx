import SectionTitle from "../ui/SectionTitle";
import RevealText from "../ui/RevealText";
import BeforeAfterSlider from "./BeforeAfterSlider";
import { beforeAfterData } from "@/data/services";

export default function BeforeAfter() {
  return (
    <section id="beforeafter" className="py-24 md:py-40">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
        <SectionTitle heading={<>Transformation<br />Stories.</>} className="mb-14" />
        <div className="flex flex-col gap-16">
          {beforeAfterData.map((item, i) => (
            <RevealText key={item.title} delay={i * 0.08}>
              <BeforeAfterSlider title={item.title} before={item.before} after={item.after} />
            </RevealText>
          ))}
        </div>
      </div>
    </section>
  );
}
