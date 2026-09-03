export default function SceneTwo() {
  return (
    <div className="absolute inset-0" id="scene-2">
      <div
        className="scene-bg absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=2000&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-[rgba(8,8,8,0.5)]" />
      <div className="relative z-[3] h-full flex flex-col justify-center px-6 sm:px-16 max-w-[900px]">
        <h3 className="text-[clamp(2.6rem,7vw,6rem)] text-cream">
          Every Detail
          <br />Matters.
        </h3>
        <p className="mt-5 max-w-[44ch] text-[rgba(245,241,234,0.75)] text-[17px]">
          From the texture beneath your fingertips to the light that fills the room, every detail
          is designed with purpose.
        </p>
      </div>
    </div>
  );
}
