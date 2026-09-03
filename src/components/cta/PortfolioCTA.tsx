import Image from "next/image";
import Button from "../ui/Button";
import RevealText from "../ui/RevealText";

export default function PortfolioCTA() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=80"
        alt="Luxury interior living room representing an Elevio Interiors project"
        fill
        className="object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-[rgba(8,8,8,0.72)]" />
      <div className="relative z-[2] max-w-[1360px] mx-auto px-5 sm:px-8 text-center w-full">
        <RevealText>
          <h2 className="text-[clamp(2.6rem,6vw,5.5rem)] text-cream">
            Ready To Transform
            <br />
            Your Space?
          </h2>
        </RevealText>
        <RevealText delay={0.15}>
          <p className="mt-6 mb-11 text-[rgba(245,241,234,0.75)] max-w-[40ch] mx-auto">
            Let&apos;s create a space that feels uniquely yours.
          </p>
        </RevealText>
        <div className="flex gap-4 flex-wrap justify-center">
          <Button href="#contact" variant="primary">
            Start Your Project
          </Button>
          <Button href="https://wa.me/918126812096" variant="outline" external>
            Chat on WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
