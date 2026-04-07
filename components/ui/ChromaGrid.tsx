"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./ChromaGrid.css";

type Item = {
  image: string;
  title: string;
  subtitle: string;
  handle?: string;
  borderColor?: string;
  gradient: string;
  url?: string;
};

type Props = {
  items: Item[];
  className?: string;
  radius?: number;
  damping?: number;
  fadeOut?: number;
  ease?: string;
};

export default function ChromaGrid({
  items,
  className = "",
  radius = 300,
  damping = 0.45,
  fadeOut = 0.6,
  ease = "power3.out",
}: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const fadeRef = useRef<HTMLDivElement>(null);
  const setX = useRef<any>(null);
  const setY = useRef<any>(null);
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    setX.current = gsap.quickSetter(el, "--x", "px");
    setY.current = gsap.quickSetter(el, "--y", "px");

    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };

    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, []);

  const moveTo = (x: number, y: number) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true,
    });
  };

  const handleMove = (e: any) => {
    const r = rootRef.current!.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);

    gsap.to(fadeRef.current, {
      opacity: 0,
      duration: 0.25,
      overwrite: true,
    });
  };

  const handleLeave = () => {
    gsap.to(fadeRef.current, {
      opacity: 1,
      duration: fadeOut,
      overwrite: true,
    });
  };

  const handleCardMove = (e: any) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  const item = items[0]; // 👈 SOLO UNA CARD

  return (
    <div
      ref={rootRef}
      className={`chroma-grid ${className}`}
      style={{ "--r": `${radius}px` } as any}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      <article
        className="chroma-card"
        onMouseMove={handleCardMove}
        style={
          {
            "--card-border": item.borderColor || "transparent",
            "--card-gradient": item.gradient,
          } as any
        }
      >
        <div className="chroma-img-wrapper">
          <img src={item.image} alt={item.title} />
        </div>
        <footer className="chroma-info">
          <div className="chroma-header">
            <h3 className="name">{item.title}</h3>
            {item.handle && <span className="handle">{item.handle}</span>}
          </div>
          <p className="role">{item.subtitle}</p>
        </footer>
      </article>

      <div className="chroma-overlay" />
      <div ref={fadeRef} className="chroma-fade" />
    </div>
  );
}
