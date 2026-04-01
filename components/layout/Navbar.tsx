import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <nav className="relative flex items-center justify-center h-[100px]">
        {/* LOGO IZQUIERDA */}
        <div className="absolute left-[43px] flex items-center h-full group">
          {/* LOGO NORMAL */}
          <Image
            src="/images/OALex.webp"
            alt="Logo"
            width={144}
            height={147}
            className="transition-opacity duration-300 group-hover:opacity-0"
          />

          {/* LOGO HOVER */}
          <Image
            src="/images/OALex2.webp"
            alt="Logo Hover"
            width={144}
            height={147}
            className="absolute transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          />
        </div>

        {/* MENU CENTRADO */}
        <ul className="flex gap-10 text-[1rem] font-normal text-white items-center h-full">
          <li>
            <Link href="/" className="relative group">
              Inicio
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FFAE00] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>

          <li>
            <Link href="/equipo" className="relative group">
              Equipo
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FFAE00] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>

          <li>
            <Link href="/presencia" className="relative group">
              Presencia
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FFAE00] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>

          <li>
            <Link href="/contacto" className="relative group">
              Contacto
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FFAE00] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
