"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Phase = "closed" | "waking" | "open" | "idle";

/**
 * Meta share top logo — exact wake sequence from the artifact:
 * closed (0.35) → waking @3s (6.9s ease) → open @9.9s → idle blink @11.9s
 */
export function DragonTopLogo() {
  const [phase, setPhase] = useState<Phase>("closed");
  const [blinking, setBlinking] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setPhase("idle");
      return;
    }
    const wake = window.setTimeout(() => setPhase("waking"), 3000);
    const open = window.setTimeout(() => setPhase("open"), 9900);
    const idle = window.setTimeout(() => setPhase("idle"), 11900);
    return () => {
      window.clearTimeout(wake);
      window.clearTimeout(open);
      window.clearTimeout(idle);
    };
  }, []);

  useEffect(() => {
    if (phase !== "idle") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let timer: number;
    const schedule = () => {
      const wait = 6000 + Math.random() * 1500;
      timer = window.setTimeout(() => {
        setBlinking(true);
        window.setTimeout(() => {
          setBlinking(false);
          schedule();
        }, 140);
      }, wait);
    };
    schedule();
    return () => window.clearTimeout(timer);
  }, [phase]);

  const opacity =
    phase === "closed" ? 0.35 : phase === "waking" ? 0.85 : 1;

  return (
    <div className="relative" style={{ width: 120 }}>
      <div
        className="relative overflow-hidden"
        style={{
          opacity,
          transform: blinking ? "scaleY(0.08)" : "scaleY(1)",
          transformOrigin: "50% 45%",
          transition:
            phase === "waking"
              ? "opacity 6.9s cubic-bezier(0.16, 1, 0.3, 1)"
              : "opacity 0.6s ease, transform 0.14s ease",
          filter: "none",
          boxShadow: "none",
        }}
      >
        <Image
          src="/dragon-eyes.png"
          alt="dragon top logo"
          width={912}
          height={440}
          priority
          className="crisp-img h-auto w-[120px] select-none bg-transparent"
          draggable={false}
          style={{ filter: "none", boxShadow: "none" }}
        />
      </div>
    </div>
  );
}
