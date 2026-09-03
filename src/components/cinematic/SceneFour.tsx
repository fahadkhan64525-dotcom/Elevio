import { projects } from "@/data/projects";

export default function SceneFour() {
  return (
    <div className="absolute inset-0" id="scene-4">
      <div
        className="scene-bg absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=2000&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-[rgba(8,8,8,0.55)]" />
      <div className="hcards-wrap absolute inset-0 flex items-center overflow-hidden">
        <div id="hcards" className="flex gap-6 pl-6 sm:pl-16">
          {projects.map((p) => (
            <div
              key={p.id}
              className="flex-none w-[280px] sm:w-[320px] h-[380px] sm:h-[420px] relative rounded-[2px] overflow-hidden bg-cover bg-center"
              style={{ backgroundImage: `url('${p.coverImage}')` }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,.8) 100%)",
                }}
              />
              <div className="absolute left-5 right-5 bottom-5 text-cream z-[2]">
                <div className="text-[11px] tracking-[0.14em] uppercase text-gold-light mb-1.5">
                  {p.category}
                </div>
                <h4 className="font-serif text-2xl">{p.title}</h4>
                <div className="text-[13px] text-[rgba(245,241,234,0.7)] mt-1">
                  {p.location}, India &middot; View Project →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
