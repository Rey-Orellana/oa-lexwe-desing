"use client";

import Eyelash from "@/components/ui/Eyelash";
import { Accordion } from "@base-ui/react/accordion";
import styles from "@/components/ui/accordion-base.module.css";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "800"],
});

export default function EquipoSection() {
  return (
    <section id="equipo" className="w-full h-screen bg-black flex items-center px-[80px]">
      {/* IZQUIERDA */}
      <div className="w-1/2 flex justify-center">
        <div className="w-[546px] h-[771px] bg-gray-300 rounded-[16px]" />
      </div>

      {/* DERECHA */}
      <div className="w-1/2 flex flex-col justify-center pl-[80px]">
        {/* EYELASH */}
        <div className="mb-[40px]">
          <Eyelash text="O-A Lex Team" />
        </div>

        {/* TITULO */}
        <h2
          className={`${manrope.className} text-[38px] leading-[1.35] text-[#FFAE00] font-extrabold max-w-[650px] mb-[10px]`}
        >
          Profesionales que marcan <br />
          la diferencia en el servicio Jurídico
        </h2>

        {/* ACCORDION */}
        <div className="max-w-[650px]">
          <Accordion.Root defaultValue="item-1" className={styles.Accordion}>
            <Accordion.Item value="item-1" className={styles.Item}>
              <Accordion.Header className={styles.Header}>
                <Accordion.Trigger className={styles.Trigger}>
                  CEO
                  <PlusIcon className={styles.TriggerIcon} />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Panel className={styles.Panel}>
                <div className={styles.Content}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
                  Lorem ipsum dolor sit amet.
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
                  Lorem ipsum dolor sit amet.
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
