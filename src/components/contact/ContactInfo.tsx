import { business } from "@/lib/utils";

const items = [
  { label: "Phone", value: business.phone, href: business.phoneHref },
  { label: "Email", value: business.email, href: business.emailHref },
  { label: "Studio", value: business.location, href: null },
  { label: "WhatsApp", value: "Message Us →", href: business.whatsapp, external: true },
];

export default function ContactInfo() {
  return (
    <div className="mt-11">
      {items.map((item) => (
        <div key={item.label} className="py-6 border-t border-border last:border-b">
          <span className="block text-[11px] tracking-[0.12em] uppercase text-muted mb-2">
            {item.label}
          </span>
          {item.href ? (
            <a
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="font-serif text-lg sm:text-xl"
            >
              {item.value}
            </a>
          ) : (
            <p className="font-serif text-lg sm:text-xl">{item.value}</p>
          )}
        </div>
      ))}
    </div>
  );
}
