import { cn } from "@/lib/utils";
import RevealText from "./RevealText";

type SectionTitleProps = {
  eyebrow?: string;
  heading: React.ReactNode;
  subheading?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
};

export default function SectionTitle({
  eyebrow,
  heading,
  subheading,
  align = "left",
  dark = false,
  className,
}: SectionTitleProps) {
  return (
    <div className={cn(align === "center" && "text-center mx-auto", className)}>
      {eyebrow && (
        <div className="text-xs tracking-[0.14em] uppercase font-semibold text-gold mb-4">
          {eyebrow}
        </div>
      )}
      <RevealText>
        <h2
          className={cn(
            "text-[clamp(2.6rem,5.2vw,5rem)]",
            dark ? "text-dark" : "text-foreground"
          )}
        >
          {heading}
        </h2>
      </RevealText>
      {subheading && (
        <p
          className={cn(
            "mt-5 max-w-[34ch]",
            align === "center" && "mx-auto",
            dark ? "text-dark/60" : "text-muted"
          )}
        >
          {subheading}
        </p>
      )}
    </div>
  );
}
