import { business } from "@/lib/utils";

export default function WhatsAppFloat() {
  return (
    <a
      href={business.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      data-cursor-label="true"
      className="fixed right-6 bottom-6 z-[400] flex items-center gap-2.5 rounded-full bg-[#25D366] text-[#0b0b0b] px-4 py-3.5 sm:px-[18px] font-bold text-sm shadow-[0_10px_30px_rgba(0,0,0,0.35)] before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-[#25D366] before:-z-10 before:animate-[wapulse_2.6s_ease-out_infinite]"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.38a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.15c-.24.68-1.4 1.32-1.93 1.4-.49.08-1.11.11-1.79-.11-.41-.13-.94-.3-1.62-.6-2.85-1.23-4.71-4.1-4.85-4.29-.14-.19-1.16-1.54-1.16-2.94s.73-2.09.99-2.37c.26-.29.56-.36.75-.36h.54c.17 0 .4-.06.63.48.24.55.8 1.9.87 2.04.07.14.11.3.02.49-.09.19-.14.3-.28.46-.14.16-.29.36-.42.48-.14.13-.28.28-.12.55.16.28.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.21 1.37.28.14.44.12.6-.07.17-.19.71-.82.9-1.11.19-.28.38-.23.63-.14.26.09 1.63.77 1.91.91.28.14.47.21.53.33.07.12.07.68-.17 1.36z" />
      </svg>
      <span className="hidden sm:inline">WhatsApp</span>
      <style>{`@keyframes wapulse{0%{transform:scale(1);opacity:.5;}100%{transform:scale(1.6);opacity:0;}}`}</style>
    </a>
  );
}
