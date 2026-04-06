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
  video: string; // 🔥 NUEVO
}

export default function LocationData({ city, address, video }: Props) {
  return (
    <div
      className="
        w-full 
        h-[480px]
        bg-black 
        rounded-[20px] 
        grid grid-cols-3 
        gap-6 
        p-8
      "
    >
      {/* IZQUIERDA */}
      <div
        className="
          col-span-1 
          flex flex-col 
          justify-center
          items-center
          text-center
        "
      >
        {/* TÍTULO */}
        <h3
          className={`
            ${anton.className} 
            text-[200px] 
            leading-none 
            text-[#FFAE00]
          `}
        >
          {city}
        </h3>

        <div className="h-[10px]" />

        {/* DIRECCIÓN */}
        <p
          className={`
            ${manrope.className} 
            text-[24px] 
            font-semibold 
            text-white 
            leading-[1.4]
            whitespace-pre-line
          `}
        >
          {address}
        </p>

      </div>

      {/* DERECHA (VIDEO) */}
      <div className="col-span-2 w-full h-full overflow-hidden rounded-[16px]">
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
