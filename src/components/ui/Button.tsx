import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import MagneticButton from "./MagneticButton";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  external?: boolean;
  showArrow?: boolean;
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  external = false,
  showArrow = false,
  className,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center gap-2.5 px-7 py-4 text-sm font-semibold tracking-wide rounded-[2px] min-h-[48px] transition-colors duration-300",
    variant === "primary"
      ? "bg-cream text-dark hover:bg-gold-light"
      : "border border-border text-foreground hover:border-gold hover:text-gold-light",
    className
  );

  const content = (
    <>
      {children}
      {showArrow && <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />}
    </>
  );

  return (
    <MagneticButton>
      {external ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className={cn(classes, "group")}>
          {content}
        </a>
      ) : (
        <Link href={href} className={cn(classes, "group")}>
          {content}
        </Link>
      )}
    </MagneticButton>
  );
}
