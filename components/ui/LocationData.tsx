"use client";

import { Manrope, Anton } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "600", "800"],
});

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});

interface Props {
  city: string;
  address: string;
  video: string;
}

export default function LocationData({ city, address, video }: Props) {
  return (
    <div
      className="
        w-full 
        h-auto md:h-[480px]
        bg-black 
        rounded-[20px] 
        grid grid-cols-1 md:grid-cols-3 
        gap-6 
        p-6 md:p-8
      "
    >
      {/* SECCIÓN TEXTOS */}
      <div
        className="
          col-span-1 
          flex flex-col md:justify-center md:items-center
          text-center
        "
      >
        {/* Contenedor para alinear en móvil: Título Izq / Dirección Der */}
        <div className="flex flex-row md:flex-col items-center justify-between md:justify-center w-full gap-4">
          
          {/* TÍTULO (City): 200px -> 12.5rem */}
          <h3
            className={`
              ${anton.className} 
              text-[8rem] md:text-[12.5rem] 
              leading-none 
              text-[#FFAE00]
              text-left
            `}
          >
            {city}
          </h3>

          {/* DIRECCIÓN: 24px -> 1.5rem */}
          <p
            className={`
              ${manrope.className} 
              text-[1.1rem] md:text-[1.5rem] 
              font-semibold 
              text-white 
              leading-[1.4]
              whitespace-pre-line
              text-right md:text-center
            `}
          >
            {address}
          </p>
        </div>
      </div>

      {/* SECCIÓN VIDEO: Abajo en móvil (col-span-1), Al lado en desktop (col-span-2) */}
      <div className="col-span-1 md:col-span-2 w-full h-[250px] md:h-full overflow-hidden rounded-[16px]">
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}