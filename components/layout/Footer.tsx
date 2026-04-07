"use client";

import Image from "next/image";
import { Manrope } from "next/font/google";
import { useState } from "react";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400"],
});

export default function Footer() {
  const socialIcons = [
    "facebook",
    "twitter",
    "youtube",
    "instagram",
    "internet",
    "email",
  ];

  return (
    <footer
      id="contacto"
      className="w-full bg-black text-white py-20 flex flex-col items-center"
    >
      {/* --- CONTENEDOR PRINCIPAL --- */}
      {/* Móvil: flex-col | Escritorio: grid-cols-2 */}
      <div className="flex flex-col md:grid md:grid-cols-2 w-full max-w-[1200px] px-6 gap-0 items-center">
        
        {/* COLUMNA IZQUIERDA / LOGO */}
        {/* Móvil: border-b-2 (horizontal) | Escritorio: md:border-r-2 (vertical) */}
        <div className="flex justify-center md:justify-end md:pr-10 border-b-2 md:border-b-0 md:border-r-2 border-[#FFAE00] pb-0 md:pb-0 h-full items-center w-fit md:w-full">
          <div className="relative w-[160px] h-[160px] flex items-center justify-center group cursor-pointer">
            <Image
              src="/images/OALex.webp"
              alt="Logo O-A Lex Ayala"
              fill
              className="object-contain transition-opacity duration-300 group-hover:opacity-0"
              priority
            />
            <Image
              src="/images/OALex2.webp"
              alt="Logo O-A Lex Ayala Hover"
              fill
              className="object-contain absolute opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          </div>
        </div>

        {/* COLUMNA DERECHA / TEXTO */}
        {/* Móvil: text-center | Escritorio: md:text-left */}
        <div className="flex justify-center md:justify-start mt-8 md:mt-0 md:pl-10 h-full items-center text-center md:text-left">
          <div className="md:pl-8 py-2">
            <p
              className={`${manrope.className} text-[1.125rem] font-light leading-[1.5] text-white max-w-[500px]`}
            >
              Sabemos lo que está en juego, por eso luchamos por su justicia en
              cada etapa del proceso.
            </p>
          </div>
        </div>
      </div>

      {/* REDES SOCIALES */}
      <div className="flex flex-col items-center mt-20">
        <h3
          className={`${manrope.className} text-[#FFAE00] text-[1.125rem] mb-6 font-normal`}
        >
          Síguenos en nuestras redes sociales
        </h3>

        <div className="flex items-center gap-6">
          {socialIcons.map((icon) => (
            <SocialIcon key={icon} name={icon} />
          ))}
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="mt-20 text-center px-4 border-t border-white/10 pt-10 w-full max-w-[1200px]">
        <p className={`${manrope.className} text-[0.875rem] opacity-70`}>
          © 2026 Estudio Jurídico O-A Lex Ayala & Asociados | Descargo de
          responsabilidad y política de privacidad | Un diseño web de Orell.dev
        </p>
      </div>
    </footer>
  );
}

function SocialIcon({ name }: { name: string }) {
  const [isHovered, setIsHovered] = useState(false);
  const iconSrc = `/images/icons/${name}${isHovered ? "Yellow" : ""}.svg`;

  return (
    <img
      src={iconSrc}
      alt={name}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-[24px] h-[24px] cursor-pointer transition-all duration-300"
    />
  );
}