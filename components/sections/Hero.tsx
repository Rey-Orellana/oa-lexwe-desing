import { Anton } from "next/font/google";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});

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

      {/* TEXTO POSICIÓN EXACTA FIGMA */}
      <div className="absolute left-[79px] top-[350px] z-10">
        <div className={`${anton.className} text-white text-left`}>
          <h1 className="text-[96px] leading-[1.1]">IN IUSTITIA VERITAS</h1>

          <h2 className="text-[96px] leading-[1.1]">AUDACIA JURIDICA</h2>
        </div>
      </div>
    </section>
  );
}
