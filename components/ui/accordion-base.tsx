"use client";

import * as React from "react";
import { Accordion } from "@base-ui/react/accordion";
import styles from "./accordion-base.module.css";

function PlusIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 12 12" fill="currentColor" {...props}>
      <path d="M6.75 0H5.25V5.25H0V6.75H5.25V12H6.75V6.75H12V5.25H6.75V0Z" />
    </svg>
  );
}

export default function AccordionBase() {
  return (
    <Accordion.Root className={styles.Accordion}>
      {/* ITEM 1 */}
      <Accordion.Item className={styles.Item}>
        <Accordion.Header>
          <Accordion.Trigger className={styles.Trigger}>
            CEO
            <PlusIcon className={styles.TriggerIcon} />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Panel className={styles.Panel}>
          <div className={styles.Content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </Accordion.Panel>
      </Accordion.Item>

      {/* ITEM 2 */}
      <Accordion.Item className={styles.Item}>
        <Accordion.Header>
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

      {/* ITEM 3 */}
      <Accordion.Item className={styles.Item}>
        <Accordion.Header>
          <Accordion.Trigger className={styles.Trigger}>
            Asociado
            <PlusIcon className={styles.TriggerIcon} />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Panel className={styles.Panel}>
          <div className={styles.Content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion.Root>
  );
}
