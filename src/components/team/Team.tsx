import SectionTitle from "../ui/SectionTitle";
import RevealText from "../ui/RevealText";
import { team } from "@/data/team";

export default function Team() {
  return (
    <section id="team" className="bg-dark py-24 md:py-40">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
        <SectionTitle heading="Who You'll Work With." className="mb-14" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-[820px]">
          {team.map((member, i) => (
            <RevealText key={member.name} delay={i * 0.08}>
              <div className="border border-border p-8 sm:p-10 h-full">
                <div className="w-16 h-16 rounded-full border border-gold text-gold flex items-center justify-center font-serif text-2xl mb-6">
                  {member.name.charAt(0)}
                </div>
                <h4 className="font-serif text-2xl">{member.name}</h4>
                <div className="text-xs tracking-[0.12em] uppercase text-gold-light mt-1.5 mb-4">
                  {member.role}
                </div>
                <p className="text-muted text-[15px] leading-relaxed">{member.bio}</p>
              </div>
            </RevealText>
          ))}
        </div>
      </div>
    </section>
  );
}
