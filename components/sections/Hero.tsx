"use client";

import { Anton } from "next/font/google";
import { motion, useScroll, useTransform } from "motion/react";
import { RollingText } from "@/components/animate-ui/primitives/texts/rolling";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});

export default function Hero() {
  const { scrollYProgress } = useScroll();

  const blur = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["blur(0px)", "blur(6px)"]
  );

  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* VIDEO */}
      <motion.video
        style={{ filter: blur }}
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/Background O-ALex.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* OVERLAY */}
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(102,102,102,0) 100%)",
        }}
      />

      {/* TEXTO */}
      <motion.div
        style={{ opacity }}
        className="absolute left-[79px] top-[350px] z-10"
      >
        <div className={`${anton.className} text-white text-left`}>
          <h1 className="text-[200px] leading-[1.1]">OA-LEX</h1>

          {/* 👇 SOLO AQUÍ EL EFECTO */}
          <h2 className="text-[70px] leading-[1.1]">
            <RollingText text="AYALA & ASOCIADOS" className="inline-block" />
          </h2>
        </div>
      </motion.div>
    </section>
  );
}
