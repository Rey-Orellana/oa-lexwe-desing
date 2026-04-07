"use client";

import ChromaGrid from "@/components/ui/ChromaGrid";

type Props = {
  image: string;
  name: string;
  role: string;
  handle?: string;
};

export default function CardChromaGrid({
  image,
  name,
  role,
  handle,
}: Props) {
  const items = [
    {
      image,
      title: name, // El componente ChromaGrid recibirá estos strings
      subtitle: role,
      handle,
      borderColor: "#FFAE00",
      gradient: "linear-gradient(165deg, #FFAE00, #000)",
    },
  ];

  return (
    // Se mantienen dimensiones del contenedor fijo según instrucción
    <div className="w-[546px] h-[700px]">
      <ChromaGrid items={items} />
    </div>
  );
}