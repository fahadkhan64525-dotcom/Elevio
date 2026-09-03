"use client";

type HotspotProps = {
  id: string;
  top: string;
  left: string;
  label: string;
  active: boolean;
  onActivate: (id: string) => void;
};

export default function Hotspot({ id, top, left, label, active, onActivate }: HotspotProps) {
  return (
    <div className="absolute w-4 h-4 -translate-x-1/2 -translate-y-1/2" style={{ top, left }}>
      <button
        className="relative w-4 h-4 rounded-full bg-gold cursor-pointer"
        aria-label={`View details: ${label}`}
        aria-pressed={active}
        onClick={(e) => {
          e.stopPropagation();
          onActivate(id);
        }}
      >
        <span className="absolute -inset-2 border border-gold-light rounded-full animate-[hspulse_2.4s_ease-in-out_infinite]" />
      </button>
      <div className="absolute left-6 top-1/2 -translate-y-1/2 text-[11px] text-cream whitespace-nowrap bg-black/50 px-2 py-1 pointer-events-none">
        {label}
      </div>
      <style>{`
        @keyframes hspulse {
          0% { transform: scale(.7); opacity: 1; }
          100% { transform: scale(1.8); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
