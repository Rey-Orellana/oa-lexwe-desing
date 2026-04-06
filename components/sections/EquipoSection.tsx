"use client";

import { useState } from "react";
import Eyelash from "@/components/ui/Eyelash";
import { Accordion } from "@base-ui/react/accordion";
import styles from "@/components/ui/accordion-base.module.css";
import { Manrope } from "next/font/google";
import CardChromaGrid from "@/components/ui/CardChromaGrid";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "800"],
});

/* 🔥 DATA DEL EQUIPO */
const team = {
  "item-1": {
    image: "/images/team/OscarAyala.jpg",
    name: "Oscar Ferrer Ayala Rocabado",
    role: "CEO",
    handle: "@OscarFererAyalaRocabado",
  },
  "item-2": {
    image: "/images/team/default.jpg",
    name: "Asociado Senior",
    role: "Asociado Senior",
    handle: "@asociado",
  },
  "item-3": {
    image: "/images/team/default.jpg",
    name: "Especialista Penal I",
    role: "Asesor Especialista Penal",
    handle: "@penal1",
  },
  "item-4": {
    image: "/images/team/default.jpg",
    name: "Especialista Penal II",
    role: "Asesor Especialista Penal II",
    handle: "@penal2",
  },
  "item-5": {
    image: "/images/team/default.jpg",
    name: "Especialista Penal III",
    role: "Asesor Especialista Penal III",
    handle: "@penal3",
  },
};

export default function EquipoSection() {
  const [activeItem, setActiveItem] = useState<string>("");

  /* ✅ FIX + DEFAULT CON DATOS CORRECTOS */
  const current =
    activeItem && team[activeItem as keyof typeof team]
      ? team[activeItem as keyof typeof team]
      : {
          image: "/images/team/DefaultBackground2.jpg",
          name: "O-A Lex",
          role: "Estudio Jurídico",
          handle: "@oa-lex",
        };

  return (
    <section
      id="equipo"
      className="w-full h-screen bg-black flex items-center px-[80px]"
    >
      {/* IZQUIERDA */}
      <CardChromaGrid
        image={current.image}
        name={current.name}
        role={current.role}
        handle={current.handle}
      />

      {/* DERECHA */}
      <div className="w-1/2 flex flex-col justify-center pl-[80px]">
        <div className="mb-[40px]">
          <Eyelash text="O-A Lex Team" />
        </div>

        <h2
          className={`${manrope.className} text-[38px] leading-[1.35] text-[#FFAE00] font-extrabold max-w-[650px] mb-[10px]`}
        >
          Profesionales que marcan <br />
          la diferencia en el servicio Jurídico
        </h2>

        <div className="max-w-[650px]">
          <Accordion.Root
            value={activeItem}
            onValueChange={(val) => setActiveItem(val)}
            className={styles.Accordion}
          >
            <Accordion.Item value="item-1" className={styles.Item}>
              <Accordion.Header className={styles.Header}>
                <Accordion.Trigger className={styles.Trigger}>
                  CEO
                  <PlusIcon className={styles.TriggerIcon} />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Panel className={styles.Panel}>
                <div className={styles.Content}>
                  Dirección estratégica y liderazgo de la firma.
                </div>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="item-2" className={styles.Item}>
              <Accordion.Header className={styles.Header}>
                <Accordion.Trigger className={styles.Trigger}>
                  Asociado Senior
                  <PlusIcon className={styles.TriggerIcon} />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Panel className={styles.Panel}>
                <div className={styles.Content}>
                  Gestión de casos complejos y coordinación legal.
                </div>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="item-3" className={styles.Item}>
              <Accordion.Header className={styles.Header}>
                <Accordion.Trigger className={styles.Trigger}>
                  Asesor Especialista Penal
                  <PlusIcon className={styles.TriggerIcon} />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Panel className={styles.Panel}>
                <div className={styles.Content}>
                  Especialización en derecho penal.
                </div>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="item-4" className={styles.Item}>
              <Accordion.Header className={styles.Header}>
                <Accordion.Trigger className={styles.Trigger}>
                  Asesor Especialista Penal II
                  <PlusIcon className={styles.TriggerIcon} />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Panel className={styles.Panel}>
                <div className={styles.Content}>
                  Soporte avanzado en litigios penales.
                </div>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="item-5" className={styles.Item}>
              <Accordion.Header className={styles.Header}>
                <Accordion.Trigger className={styles.Trigger}>
                  Asesor Especialista Penal III
                  <PlusIcon className={styles.TriggerIcon} />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Panel className={styles.Panel}>
                <div className={styles.Content}>
                  Apoyo especializado en procesos judiciales.
                </div>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion.Root>
        </div>
      </div>
    </section>
  );
}

function PlusIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 12 12" fill="currentColor" {...props}>
      <path d="M6.75 0H5.25V5.25H0V6.75H5.25V12H6.75V6.75H12V5.25H6.75V0Z" />
    </svg>
  );
}