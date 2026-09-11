export default function ScrollIndicator() {
  return (
    <div
      className="
        absolute
        left-1/2
        -translate-x-1/2
        bottom-5
        sm:bottom-7
        md:bottom-9
        flex
        flex-col
        items-center
        gap-2.5
        text-[rgba(245,241,234,0.6)]
        text-[10px]
        sm:text-[11px]
        tracking-[0.16em]
        z-[6]
        whitespace-nowrap
        pointer-events-none
      "
    >
      <span>SCROLL TO EXPLORE</span>

      <div
        className="
          w-px
          h-6
          sm:h-8
          bg-[rgba(245,241,234,0.4)]
          animate-[scrollpulse_2s_ease-in-out_infinite]
        "
      />

      <style>{`
        @keyframes scrollpulse {
          0%, 100% {
            transform: scaleY(1);
            opacity: .4;
          }

          50% {
            transform: scaleY(.5);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}