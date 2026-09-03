import { business } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-black pt-24 pb-8">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-10 md:gap-16 mb-16">
          <div>
            <h3 className="text-2xl font-serif">Elevio Interiors</h3>
            <p className="text-muted mt-4 max-w-[26ch]">
              Elevate Every Space.
              <br />
              Inspire Every Life.
            </p>
          </div>
          <div>
            <h5 className="text-xs tracking-[0.1em] uppercase text-muted mb-5">Navigation</h5>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-[15px] text-foreground/85">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h5 className="text-xs tracking-[0.1em] uppercase text-muted mb-5">Contact</h5>
            <div className="flex flex-col gap-3">
              <a href={business.phoneHref} className="text-[15px] text-foreground/85">
                {business.phone}
              </a>
              <a href={business.emailHref} className="text-[15px] text-foreground/85">
                {business.email}
              </a>
              <p className="text-[15px] text-foreground/85">Noida Sector 93</p>
              <div className="flex gap-4 mt-1">
                <a href="#" aria-label="Instagram" className="text-[15px] text-foreground/85">
                  Instagram
                </a>
                <a href="#" aria-label="Facebook" className="text-[15px] text-foreground/85">
                  Facebook
                </a>
                <a href="#" aria-label="Pinterest" className="text-[15px] text-foreground/85">
                  Pinterest
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-6 flex flex-wrap justify-between gap-3 text-[13px] text-muted">
          <span>© 2026 Elevio Interiors.</span>
          <span>All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
}
