import Hero from "@/components/sections/Hero";
import SeccionPostInicio from "@/components/sections/SeccionPostInicio";
import Ticker from "@/components/sections/Ticker"; // 👈 ESTE FALTABA

export default function Home() {
  return (
    <>
      <Hero />
      <SeccionPostInicio />
      <Ticker /> {/* 👈 AQUÍ VA */}
    </>
  );
}
