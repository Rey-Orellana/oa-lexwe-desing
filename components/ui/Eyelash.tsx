import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Eyelash({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-4">
      {/* TRIÁNGULO */}
      <div
        className="w-0 h-0 border-t-[20px] border-b-[20px] border-l-[40px]"
        style={{
          borderTopColor: "transparent",
          borderBottomColor: "transparent",
          borderLeftColor: "#FFAE00",
        }}
      />

      {/* TEXTO */}
      <span
        className={`${manrope.className} text-[32px] text-[#ffffff] tracking-wide`}
      >
        {text}
      </span>

      {/* LÍNEA */}
      <div className="h-[2px] bg-[#FFAE00] flex-1" />
    </div>
  );
}
