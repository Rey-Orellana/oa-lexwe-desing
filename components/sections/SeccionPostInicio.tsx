"use client";

import { useEffect, useRef, useState } from "react";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default function SeccionPostInicio() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const videoMobileRef = useRef<HTMLVideoElement | null>(null);
  const [played, setPlayed] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !played) {
          // Reproduce ambos o el que esté activo en el DOM
          videoRef.current?.play();
          videoMobileRef.current?.play();
          setPlayed(true);

          // ⏱️ aparece después de 3 segundos
          setTimeout(() => {
            setShowText(true);
          }, 1000);
        }
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) observer.observe(videoRef.current);
    if (videoMobileRef.current) observer.observe(videoMobileRef.current);

    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
      if (videoMobileRef.current) observer.unobserve(videoMobileRef.current);
    };
  }, [played]);

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-black">
      {/* VIDEO DESKTOP - Aparece desde md (768px) */}
      <video
        ref={videoRef}
        className="hidden md:block absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/SeccionPostInicio.webm"
        muted
        playsInline
        loop
      />

      {/* VIDEO MOBILE - Visible solo debajo de md (768px) */}
      <video
        ref={videoMobileRef}
        className="block md:hidden absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/SeccionPostInicioV.webm"
        muted
        playsInline
        loop
      />

      {/* GRADIENTES SUAVES - Altura: 150px -> 9.375rem */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute top-0 w-full h-[9.375rem] bg-gradient-to-b from-black/60 to-transparent" />
        <div className="absolute bottom-0 w-full h-[9.375rem] bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* TEXTO - Padding: 6 -> 1.5rem */}
      <div className="relative z-20 flex h-full w-full items-center justify-center text-center text-white px-[1.5rem]">
        <div
          className={`transition-opacity duration-[1200ms] ease-in-out ${
            showText ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* mt-60 -> 15rem | text-24px -> 1.5rem | leading-50px -> 3.125rem */}
          <p
            className={`${manrope.className} mt-[15rem] text-[1.25rem] md:text-[1.5rem] font-semibold leading-[2.5rem] md:leading-[3.125rem]`}
          >
            Defensa penal especializada, diseñada <br className="hidden md:block" />
            con estrategia y precisión para cada situación delicada.
          </p>
        </div>
      </div>
    </section>
  );
}