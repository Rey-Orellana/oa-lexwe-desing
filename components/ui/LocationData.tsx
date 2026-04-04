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
}

export default function LocationData({ city, address }: Props) {
  return (
    <div
      className="
        w-full 
        h-[480px]  /* 🔥 AQUI CAMBIAS ALTURA GENERAL (antes 420px) */
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
          justify-center   /* 🔥 CENTRADO VERTICAL (cambiar a start/end si quieres) */
          items-center     /* 🔥 CENTRADO HORIZONTAL (cambiar a start/end) */
          text-center      /* 🔥 ALINEACIÓN TEXTO (left / right / center) */
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
        {/* ESPACIO CONTROLADO */}
        <div className="h-[10px]" /> {/* 🔥 CAMBIA AQUÍ separación */}
        {/* DIRECCIÓN */}
        <p
          className={`
            ${manrope.className} 
            text-[24px] 
            font-semibold 
            text-white 
            leading-[1.4]
          `}
        >
          {address}
        </p>
        {/* BOTÓN */}
        <button
          className={`
            ${manrope.className}
            mt-6

            w-[241px] 
            h-[74px] 

            rounded-full 

            border border-[#FFAE00]  /* estado normal */
            text-white 

            text-[20px]

            cursor-pointer  /* 🔥 manito */

            transition-all duration-300 ease-in-out  /* 🔥 suavidad */

            hover:bg-[#FFAE00]      /* 🔥 fill */
            hover:border-transparent /* 🔥 quita borde */
            hover:text-black         /* 🔥 texto negro */
          `}
        >
          Maps
        </button>
      </div>

      {/* DERECHA (MAPA / IMAGEN) */}
      <div className="col-span-2 w-full h-full flex items-center justify-center">
        <div
          className="
            w-full 
            h-full 
            bg-[#D9D9D9] 
            rounded-[16px]

            /* 🔥 AQUI PUEDES CONTROLAR TAMAÑO INTERNO */
            /* max-w-[800px] */
            /* max-h-[420px] */
          "
        />
      </div>
    </div>
  );
}
