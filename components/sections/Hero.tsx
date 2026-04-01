export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* VIDEO */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/Background O-ALex.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* OVERLAY DEGRADADO */}
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(102,102,102,0) 100%)",
        }}
      />

      {/* CONTENIDO */}
      <div className="relative z-10 flex h-full items-center justify-center text-white text-center">
        <div>
          <h1 className="text-5xl font-bold mb-4">Bienvenido</h1>
          <p className="text-lg">Tu sitio profesional comienza aquí</p>
        </div>
      </div>
    </section>
  );
}
