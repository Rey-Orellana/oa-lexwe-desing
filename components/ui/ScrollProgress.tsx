"use client";

import { motion, useScroll } from "motion/react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="
        fixed top-0 left-0 right-0
        h-[4px]
        bg-[#FFAE00]
        origin-left
        z-[60]
      "
    />
  );
}
