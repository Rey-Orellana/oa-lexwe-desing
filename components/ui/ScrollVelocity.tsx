"use client";

import { useRef, useLayoutEffect, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "motion/react";
import "./ScrollVelocity.css";

function useElementWidth(ref: any) {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    function updateWidth() {
      if (ref.current) setWidth(ref.current.offsetWidth);
    }

    // Pequeño retraso para asegurar que la fuente se cargue
    const timeout = setTimeout(updateWidth, 50);
    window.addEventListener("resize", updateWidth);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", updateWidth);
    };
  }, [ref]);

  return width;
}

export const ScrollVelocity = ({
  texts = [],
  velocity = 100,
  className = "",
  fontSize = 96,
  numCopies = 6,
}) => {
  function VelocityText({ children, baseVelocity, className }: any) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
      damping: 50,
      stiffness: 400,
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
      clamp: false,
    });

    const copyRef = useRef<any>(null);
    const copyWidth = useElementWidth(copyRef);

    function wrap(min: number, max: number, v: number) {
      const range = max - min;
      const mod = (((v - min) % range) + range) % range;
      return mod + min;
    }

    const x = useTransform(baseX, (v) => {
      if (copyWidth === 0) return "0px";
      return `${wrap(-copyWidth, 0, v)}px`;
    });

    const directionFactor = useRef(1);

    useAnimationFrame((t, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
      if (velocityFactor.get() < 0) directionFactor.current = -1;
      else if (velocityFactor.get() > 0) directionFactor.current = 1;
      moveBy += directionFactor.current * moveBy * velocityFactor.get();
      baseX.set(baseX.get() + moveBy);
    });

    const spans = [];
    for (let i = 0; i < numCopies; i++) {
      spans.push(
        <span
          key={i}
          ref={i === 0 ? copyRef : null}
          className={className}
          style={{ fontSize: `${fontSize}px` }}
        >
          {children}
        </span>
      );
    }

    return (
      <div className="parallax">
        <motion.div className="scroller" style={{ x }}>
          {spans}
        </motion.div>
      </div>
    );
  }

  return (
    <div className="py-4">
      {texts.map((text, index) => (
        <VelocityText
          key={index}
          className={className}
          baseVelocity={index % 2 === 0 ? velocity : -velocity}
        >
          {text}
        </VelocityText>
      ))}
    </div>
  );
};
