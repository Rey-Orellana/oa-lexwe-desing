"use client";

import { ScrollVelocity } from "@/components/ui/ScrollVelocity";
import { Anton } from "next/font/google";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});

export default function Ticker() {
  return (
    <section className="w-full min-h-[400px] bg-black flex flex-col justify-center overflow-hidden gap-4">
      <ScrollVelocity
        texts={[
          "ESTUDIO JURÍDICO DE ALTO NIVEL - DEFENSA PENAL - DEFENSA PREMIUM -",
        ]}
        velocity={50}
        numCopies={6}
        fontSize={32} // Aquí defines el tamaño real
        className={`${anton.className} text-white uppercase leading-none tracking-tighter whitespace-nowrap`}
      />

      <ScrollVelocity
        texts={[
          "CONSULTORÍA LEGAL PREMIUM - ESTRATEGIA JURÍDICA - ÉXITO JUDICIAL -",
        ]}
        velocity={-50}
        numCopies={6}
        fontSize={32} // Aquí también
        className={`${anton.className} text-white uppercase leading-none tracking-tighter whitespace-nowrap`}
      />
    </section>
  );
}