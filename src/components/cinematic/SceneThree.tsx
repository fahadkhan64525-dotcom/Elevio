export default function SceneThree() {
  return (
    <div className="absolute inset-0" id="scene-3">
      <div
        className="scene-bg absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-[rgba(8,8,8,0.5)]" />
      <div className="relative z-[3] h-full flex flex-col justify-center px-6 sm:px-16 max-w-[900px]">
        <h3 className="text-[clamp(2.6rem,7vw,6rem)] text-cream">
          From Vision
          <br />To Reality.
        </h3>
        <p className="mt-5 max-w-[44ch] text-[rgba(245,241,234,0.75)] text-[17px]">
          We transform ideas into immersive spaces designed for the way you live.
        </p>
      </div>
    </div>
  );
}
