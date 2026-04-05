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
      className="w-full h-screen bg-black flex flex-col justify-center px-[80px]"
    >
      {/* EYELASH */}
      <div className="mb-[60px] mt-[100px]">
        <Eyelash text="Presencia" />
      </div>

      {/* CAROUSEL */}
      <div className="w-full">
        <Carousel orientation="vertical">
          <CarouselContent className="h-[500px]">
            <CarouselItem className="pb-6">
              <LocationData
                city="OR"
                address={`La Plata entre Adolfo Mier y Junín,
Edificio Oruro Oficina #105`}
              />
            </CarouselItem>

            <CarouselItem className="pb-6">
              <LocationData
                city="LP"
                address={`Av. Siempre Viva 742
La Paz, Bolivia`}
              />
            </CarouselItem>

            <CarouselItem className="pb-6">
              <LocationData
                city="SC"
                address={`Av. Empresarial 123
Santa Cruz`}
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
