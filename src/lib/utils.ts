import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const business = {
  name: "Elevio Interiors",
  tagline: "Elevate Every Space. Inspire Every Life.",
  phone: "+91 81268 12096",
  phoneHref: "tel:+918126812096",
  whatsapp: "https://wa.me/918126812096",
  email: "eleviointerior@gmail.com",
  emailHref: "mailto:eleviointerior@gmail.com",
  location: "Noida Sector 93, Uttar Pradesh, India",
  mapsUrl: "https://maps.app.goo.gl/9htLMuAQ7rdqAB1aA?g_st=aw",
};

export function buildWhatsAppMessage(data: {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget?: string;
  message: string;
}) {
  const text = `Hi Elevio Interiors, I'd like to start a project.\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nProject Type: ${data.projectType}\nBudget: ${data.budget || "Not specified"}\nMessage: ${data.message}`;
  return `https://wa.me/918126812096?text=${encodeURIComponent(text)}`;
}

// Animation constants used across GSAP / Framer Motion utilities
export const EASE = [0.16, 0.84, 0.32, 1] as const;
export const EASE_CSS = "cubic-bezier(0.16, 0.84, 0.32, 1)";
export const REVEAL_DURATION = 1;
export const HERO_DURATION = 1.2;
