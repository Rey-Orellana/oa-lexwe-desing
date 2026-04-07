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
            <div className="absolute bottom-0 w-full h-[1px] bg-white/10" />
          </div>
        )}

        {/* NAV */}
        <nav className="relative flex items-center justify-center h-[100px]">
          {/* LOGO IZQUIERDA */}
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

          {/* MENU DESKTOP (CENTRADO 🔥) */}
          <ul className="hidden md:flex gap-10 text-[1rem] text-white items-center h-full">
            {["inicio", "equipo", "presencia", "contacto"].map((item) => (
              <li key={item}>
                <a href={`#${item}`} className="relative group capitalize">
                  {item}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FFAE00] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* HAMBURGUESA */}
          <button
            onClick={() => setMenuOpen(true)}
            className="absolute right-[20px] md:hidden flex flex-col gap-1 z-50"
          >
            <span className="w-6 h-[2px] bg-white"></span>
            <span className="w-6 h-[2px] bg-white"></span>
            <span className="w-6 h-[2px] bg-white"></span>
          </button>
        </nav>
      </header>

      {/* 🔥 MENU MOBILE FULLSCREEN CORREGIDO */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black z-[999] flex items-center justify-center">
          {/* BOTÓN CERRAR */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-8 right-8 text-white text-3xl"
          >
            ✕
          </button>

          <ul className="flex flex-col gap-10 text-white text-[32px] font-semibold text-center">
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
