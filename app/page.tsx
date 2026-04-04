import Hero from "@/components/sections/Hero";
import SeccionPostInicio from "@/components/sections/SeccionPostInicio";
import Ticker from "@/components/sections/Ticker";
import EquipoSection from "@/components/sections/EquipoSection";
import Presence from "@/components/sections/Presence";

export default function Home() {
  return (
    <>
      <Hero />
      <SeccionPostInicio />
      <Ticker />
      <EquipoSection/>
      <Presence/>
    </>
  );
}
