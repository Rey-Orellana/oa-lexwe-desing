"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      setIsScrolled(currentScroll > 10);

      if (currentScroll > lastScroll && currentScroll > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-60
        transition-all duration-300
        ${visible ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      {/* 🎬 FROSTED GLASS GRADIENT */}
      {isScrolled && (
        <div className="absolute inset-0 pointer-events-none">
          {/* GRADIENT EXACTO */}
          <div
            className="absolute inset-0 backdrop-blur-md"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(102,102,102,0) 100%)",
            }}
          />

          {/* LÍNEA INFERIOR SUTIL */}
          <div className="absolute bottom-0 w-full h-[1px] bg-white/10" />
        </div>
      )}

      <nav className="relative flex items-center justify-center h-[100px]">
        {/* LOGO */}
        <div className="absolute left-[43px] flex items-center h-full group">
          <Image
            src="/images/OALex.webp"
            alt="Logo"
            width={144}
            height={147}
            className="transition-opacity duration-300 group-hover:opacity-0"
          />

          <Image
            src="/images/OALex2.webp"
            alt="Logo Hover"
            width={144}
            height={147}
            className="absolute transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          />
        </div>

        {/* MENU */}
        <ul className="flex gap-10 text-[1rem] font-normal text-white items-center h-full">
          <li>
            <a href="#inicio" className="relative group">
              Inicio
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FFAE00] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>

          <li>
            <a href="#equipo" className="relative group">
              Equipo
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FFAE00] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>

          <li>
            <a href="#presencia" className="relative group">
              Presencia
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FFAE00] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>

          <li>
            <a href="#contacto" className="relative group">
              Contacto
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FFAE00] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
