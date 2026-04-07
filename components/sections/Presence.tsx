"use client";

import Eyelash from "@/components/ui/Eyelash";
import LocationData from "@/components/ui/LocationData";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function Presence() {
  return (
    <section
      id="presencia"
      // px-6 en móvil, px-[80px] en desktop. Altura flexible para que quepa el video abajo.
      className="w-full min-h-screen bg-black flex flex-col justify-center px-6 md:px-[80px] py-20"
    >
      {/* EYELASH */}
      <div className="mb-[40px] md:mb-[60px] mt-[60px] md:mt-[100px]">
        <Eyelash text="Presencia" />
      </div>

      {/* CAROUSEL */}
      <div className="w-full">
        {/* En móvil la orientación suele ser mejor horizontal, 
            pero mantengo vertical si así lo deseas, solo ajustando la altura del contenedor */}
        <Carousel orientation="vertical" className="w-full">
          <CarouselContent className="h-[750px] md:h-[500px]">
            {/* ORURO */}
            <CarouselItem className="pb-6">
              <LocationData
                city="OR"
                address={`La Plata entre Adolfo Mier y Junín,\nEdificio Oruro Oficina #105`}
                video="/videos/OruroBackground.webm"
              />
            </CarouselItem>

            {/* LA PAZ */}
            <CarouselItem className="pb-6">
              <LocationData
                city="LP"
                address={`Av. Siempre Viva 742\nLa Paz, Bolivia`}
                video="/videos/LaPazBackground.webm"
              />
            </CarouselItem>

            {/* COCHABAMBA */}
            <CarouselItem className="pb-6">
              <LocationData
                city="CB"
                address={`Av. Empresarial 123\nCochabamba`}
                video="/videos/CochabambaBackground.webm"
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}