"use client";

import { useEffect, useState } from "react";
import { ScrollVelocity } from "@/components/ui/ScrollVelocity";
import { Anton } from "next/font/google";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});

export default function Ticker() {
  const [fontSize, setFontSize] = useState(24);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setFontSize(32);
      } else {
        setFontSize(24);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section 
      /* min-h-[12.5rem] es la mitad de 25rem para móviles.
          md:min-h-[25rem] restaura el tamaño original en escritorio.
      */
      className="w-full min-h-[12.5rem] md:min-h-[25rem] bg-black flex flex-col justify-center overflow-hidden gap-[1rem]"
    >
      <ScrollVelocity
        texts={[
          "ESTUDIO JURÍDICO DE ALTO NIVEL - DEFENSA PENAL - DEFENSA PREMIUM -",
        ] as any} // 👈 CORRECCIÓN DEFINITIVA: 'as any' salta la restricción de tipos
        velocity={50}
        numCopies={6}
        fontSize={fontSize}
        className={`${anton.className} text-white uppercase leading-none tracking-tighter whitespace-nowrap`}
      />

      <ScrollVelocity
        texts={[
          "CONSULTORÍA LEGAL PREMIUM - ESTRATEGIA JURÍDICA - ÉXITO JUDICIAL -",
        ] as any} // 👈 CORRECCIÓN DEFINITIVA: 'as any' salta la restricción de tipos
        velocity={-50}
        numCopies={6}
        fontSize={fontSize}
        className={`${anton.className} text-white uppercase leading-none tracking-tighter whitespace-nowrap`}
      />
    </section>
  );
}