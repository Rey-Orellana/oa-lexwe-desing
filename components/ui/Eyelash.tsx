import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Eyelash({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-[1rem]">
      {/* TRIÁNGULO - Mantenemos px para la forma del borde si es necesario, pero gap en rem */}
      <div
        className="w-0 h-0 border-t-[20px] border-b-[20px] border-l-[40px]"
        style={{
          borderTopColor: "transparent",
          borderBottomColor: "transparent",
          borderLeftColor: "#FFAE00",
        }}
      />

      {/* TEXTO: 2rem = 32px */}
      <span
        className={`${manrope.className} text-[2rem] text-[#ffffff] tracking-wide`}
      >
        {text}
      </span>

      {/* LÍNEA */}
      <div className="h-[2px] bg-[#FFAE00] flex-1" />
    </div>
  );
}