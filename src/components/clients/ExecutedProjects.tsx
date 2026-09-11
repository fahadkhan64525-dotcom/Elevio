import SectionTitle from "../ui/SectionTitle";
import RevealText from "../ui/RevealText";
import { executedClients, executedClientsLocations } from "@/data/clients";

export default function ExecutedProjects() {
  return (
    <section id="clients" className="bg-cream text-dark py-24 md:py-40">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
        <SectionTitle
          heading="Executed Projects In:"
          align="center"
          dark
          className="mb-16"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 sm:gap-6">
          {executedClients.map((client, i) => (
            <RevealText key={client.name} delay={i * 0.04}>
              <div className="aspect-[4/3] border-2 border-dark flex flex-col items-center justify-center text-center px-4 py-3">
                <span className="font-serif text-[clamp(1rem,2vw,1.4rem)] leading-tight">
                  {client.name}
                </span>
                {client.sub && (
                  <span className="mt-1.5 text-[10px] sm:text-xs uppercase tracking-[0.08em] text-dark/55">
                    {client.sub}
                  </span>
                )}
              </div>
            </RevealText>
          ))}
        </div>

        <RevealText delay={0.3}>
          <p className="mt-14 text-center text-gold-light font-serif text-[clamp(1.1rem,2vw,1.5rem)]">
            {executedClientsLocations}
          </p>
        </RevealText>
      </div>
    </section>
  );
}
