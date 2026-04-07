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
      /* h-[75vh]: 75% del alto de pantalla en móviles.
         md:h-screen: 100% del alto en escritorio.
      */
      className="w-full h-[75vh] md:h-screen bg-black flex flex-col justify-center px-6 md:px-[80px]"
    >
      {/* EYELASH - Reduje un poco los márgenes en móvil para que quepa bien en el 75% */}
      <div className="mb-[20px] md:mb-[60px] mt-[20px] md:mt-[100px]">
        <Eyelash text="Presencia" />
      </div>

      {/* CAROUSEL */}
      <div className="w-full">
        <Carousel orientation="vertical" className="w-full">
          {/* h-[450px]: Ajustado para el 75vh del móvil.
             md:h-[500px]: Altura original para desktop.
          */}
          <CarouselContent className="h-[450px] md:h-[500px]">
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