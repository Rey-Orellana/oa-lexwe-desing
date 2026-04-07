"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // 🔥 mobile

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

  // 🔥 bloquear scroll cuando menú abierto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 w-full z-50
          transition-all duration-300
          ${visible ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        {/* FROSTED */}
        {isScrolled && (
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute inset-0 backdrop-blur-md"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(102,102,102,0) 100%)",
              }}
            />
            {/* Altura de línea convertida: 1px -> 0.0625rem */}
            <div className="absolute bottom-0 w-full h-[0.0625rem] bg-white/10" />
          </div>
        )}

        {/* NAV - Altura convertida: 100px -> 6.25rem */}
        <nav className="relative flex items-center justify-center h-[6.25rem]">
          {/* LOGO IZQUIERDA - Posición convertida: 43px -> 2.6875rem */}
          <div className="absolute left-[2.6875rem] flex items-center h-full group">
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

          {/* MENU DESKTOP - Gap convertido: 10 -> 2.5rem */}
          <ul className="hidden md:flex gap-[2.5rem] text-[1rem] text-white items-center h-full">
            {["inicio", "equipo", "presencia", "contacto"].map((item) => (
              <li key={item}>
                <a href={`#${item}`} className="relative group capitalize">
                  {item}
                  {/* Línea hover: 2px -> 0.125rem */}
                  <span className="absolute left-0 -bottom-[0.25rem] w-0 h-[0.125rem] bg-[#FFAE00] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* HAMBURGUESA - Gap y posición: 20px -> 1.25rem | 2px -> 0.125rem */}
          <button
            onClick={() => setMenuOpen(true)}
            className="absolute right-[1.25rem] md:hidden flex flex-col gap-[0.25rem] z-50"
          >
            <span className="w-[1.5rem] h-[0.125rem] bg-white"></span>
            <span className="w-[1.5rem] h-[0.125rem] bg-white"></span>
            <span className="w-[1.5rem] h-[0.125rem] bg-white"></span>
          </button>
        </nav>
      </header>

      {/* 🔥 MENU MOBILE FULLSCREEN */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black z-[999] flex items-center justify-center">
          {/* BOTÓN CERRAR - Tamaño: 3xl (~30px) -> 2rem (32px) */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-[2rem] right-[2rem] text-white text-[2rem]"
          >
            ✕
          </button>

          {/* Lista Mobile - Texto: 32px -> 2rem | Gap: 10 -> 2.5rem */}
          <ul className="flex flex-col gap-[2.5rem] text-white text-[2rem] font-semibold text-center">
            {["inicio", "equipo", "presencia", "contacto"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-[#FFAE00] transition"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
