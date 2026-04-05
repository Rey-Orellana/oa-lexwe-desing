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
      title: name,
      subtitle: role,
      handle,
      borderColor: "#FFAE00",
      gradient: "linear-gradient(165deg, #FFAE00, #000)",
    },
  ];

  return (
    <div className="w-[546px] h-[700px]">
      <ChromaGrid items={items} />
    </div>
  );
}