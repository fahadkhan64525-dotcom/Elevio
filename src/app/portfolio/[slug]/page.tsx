import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import Button from "@/components/ui/Button";

type ProjectPageProps = { params: { slug: string } };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.title} | Elevio Interiors`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Elevio Interiors`,
      description: project.description,
      images: [project.coverImage],
    },
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <article>
      {/* Project Hero */}
      <section className="relative h-[70vh] min-h-[480px] overflow-hidden">
        <Image
          src={project.coverImage}
          alt={`${project.title} project hero image`}
          fill
          priority
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,10,10,.2) 0%, rgba(10,10,10,.85) 100%)",
          }}
        />
        <div className="relative z-[2] h-full flex flex-col justify-end max-w-[1360px] mx-auto px-5 sm:px-8 pb-16">
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-2 text-sm text-cream/80 mb-6 w-fit"
          >
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>
          <div className="text-xs tracking-[0.14em] uppercase font-semibold text-gold-light mb-4">
            {project.category}
          </div>
          <h1 className="text-[clamp(2.6rem,7vw,6rem)] text-cream">{project.title}</h1>
        </div>
      </section>

      {/* Project Details + Description */}
      <section className="max-w-[1360px] mx-auto px-5 sm:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-16">
          <div>
            <h2 className="text-[clamp(1.8rem,3vw,2.6rem)] mb-6">Project Description</h2>
            <p className="text-muted text-lg leading-relaxed">{project.description}</p>

            <h3 className="text-2xl font-serif mt-12 mb-3">Design Challenge</h3>
            <p className="text-muted leading-relaxed">{project.challenge}</p>

            <h3 className="text-2xl font-serif mt-10 mb-3">Our Solution</h3>
            <p className="text-muted leading-relaxed">{project.solution}</p>

            <h3 className="text-2xl font-serif mt-10 mb-4">Materials Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.materials.map((m) => (
                <span
                  key={m}
                  className="text-[13px] border border-border rounded-full px-4 py-1.5 text-muted"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-6 h-fit md:sticky md:top-32 border-t border-border pt-8 md:border-t-0 md:pt-0">
            <DetailRow label="Location" value={project.location} />
            <DetailRow label="Type" value={project.category} />
            <DetailRow label="Area" value={project.area} />
            <DetailRow label="Style" value={project.style} />
            <DetailRow label="Year" value={project.year} />
            <Button href="#contact" variant="primary" className="w-full justify-center mt-4">
              Start a Similar Project
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {project.gallery.length > 0 && (
        <section className="max-w-[1360px] mx-auto px-5 sm:px-8 pb-20 md:pb-28">
          <h2 className="text-[clamp(1.8rem,3vw,2.6rem)] mb-8">Image Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {project.gallery.map((img, i) => (
              <div key={i} className="aspect-[4/3] overflow-hidden rounded-[2px]">
                <Image
                  src={img}
                  alt={`${project.title} gallery image ${i + 1}`}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Related Projects */}
      <section className="max-w-[1360px] mx-auto px-5 sm:px-8 pb-24 md:pb-32">
        <h2 className="text-[clamp(1.8rem,3vw,2.6rem)] mb-10">Related Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {related.map((p) => (
            <Link
              key={p.slug}
              href={`/portfolio/${p.slug}`}
              className="group relative aspect-[4/5] overflow-hidden rounded-[2px] block"
            >
              <Image
                src={p.coverImage}
                alt={p.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(180deg, rgba(0,0,0,0) 45%, rgba(0,0,0,.75) 100%)" }}
              />
              <div className="absolute left-5 right-5 bottom-5 text-cream">
                <div className="text-[11px] uppercase tracking-[0.12em] text-gold-light mb-1">
                  {p.category}
                </div>
                <div className="font-serif text-xl flex items-center justify-between">
                  {p.title}
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream text-dark py-20 md:py-28 text-center">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] text-dark mb-6">
            Ready To Start Your Own Project?
          </h2>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2.5 px-7 py-4 text-sm font-semibold bg-dark text-cream rounded-[2px]"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </article>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between border-b border-border pb-3">
      <span className="text-xs tracking-[0.1em] uppercase text-muted">{label}</span>
      <span className="font-serif text-lg">{value}</span>
    </div>
  );
}
