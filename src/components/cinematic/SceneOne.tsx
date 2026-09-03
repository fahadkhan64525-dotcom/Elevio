export default function SceneOne() {
  return (
    <div className="absolute inset-0" id="scene-1">
      <div
        className="scene-bg absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-[rgba(8,8,8,0.5)]" />
      <div className="relative z-[3] h-full flex flex-col justify-center px-6 sm:px-16 max-w-[900px]">
        <h3 className="text-[clamp(2.6rem,7vw,6rem)] text-cream">
          Design Is
          <br />A Feeling.
        </h3>
      </div>
    </div>
  );
}
