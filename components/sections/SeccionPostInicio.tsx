"use client";

import { useEffect, useRef, useState } from "react";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default function SeccionPostInicio() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [played, setPlayed] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !played) {
          videoRef.current?.play();
          setPlayed(true);

          // ⏱️ aparece después de 3 segundos
          setTimeout(() => {
            setShowText(true);
          }, 3000);
        }
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) observer.observe(videoRef.current);

    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, [played]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* VIDEO */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/SeccionPostInicio.webm"
        muted
        playsInline
        loop
      />

      {/* GRADIENTES SUAVES */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 w-full h-[150px] bg-gradient-to-b from-black/60 to-transparent" />
        <div className="absolute bottom-0 w-full h-[150px] bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* TEXTO */}
      <div className="relative z-10 flex h-full w-full items-center justify-center text-center text-white px-6">
        <div
          className={`transition-opacity duration-[1200ms] ease-in-out ${
            showText ? "opacity-100" : "opacity-0"
          }`}
        >
          <p
            className={`${manrope.className} mt-60 text-[24px] font-semibold leading-[50px]`}
          >
            Defensa penal especializada, diseñada <br />
            con estrategia y precisión para cada situación delicada.
          </p>
        </div>
      </div>
    </section>
  );
}
