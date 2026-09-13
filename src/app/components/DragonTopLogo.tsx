"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Stage = "waiting" | "entering" | "visible" | "blinking";

/**
 * Top logo (Meta eyes mark).
 * Sequence: short beat → animated entrance → then idle blinks.
 */
export function DragonTopLogo() {
  const [stage, setStage] = useState<Stage>("waiting");
  const [lidClosed, setLidClosed] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setStage("visible");
      return;
    }

    // Beat, then entrance
    const enterTimer = window.setTimeout(() => setStage("entering"), 700);
    const visibleTimer = window.setTimeout(() => setStage("visible"), 700 + 900);
    const blinkReady = window.setTimeout(() => setStage("blinking"), 700 + 900 + 400);

    return () => {
      window.clearTimeout(enterTimer);
      window.clearTimeout(visibleTimer);
      window.clearTimeout(blinkReady);
    };
  }, []);

  useEffect(() => {
    if (stage !== "blinking") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let timer: number;
    const schedule = () => {
      const wait = 5200 + Math.random() * 1800;
      timer = window.setTimeout(() => {
        setLidClosed(true);
        window.setTimeout(() => {
          setLidClosed(false);
          schedule();
        }, 140);
      }, wait);
    };
    schedule();
    return () => window.clearTimeout(timer);
  }, [stage]);

  const entered = stage !== "waiting";

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: 120 }}
      aria-label="Dragon logo"
    >
      <div
        className="relative overflow-hidden will-change-transform"
        style={{
          opacity: entered ? 1 : 0,
          transform: lidClosed
            ? "scaleY(0.08) translateY(0)"
            : entered
              ? "scaleY(1) translateY(0) scale(1)"
              : "scaleY(1) translateY(10px) scale(0.92)",
          transformOrigin: "50% 45%",
          transition: lidClosed
            ? "transform 0.14s ease"
            : stage === "entering"
              ? "opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)"
              : "opacity 0.4s ease, transform 0.14s ease",
          filter: entered
            ? "drop-shadow(0 0 14px rgba(140, 255, 77, 0.35))"
            : "none",
        }}
      >
        <Image
          src="/dragon-eyes.png"
          alt="Dragon"
          width={912}
          height={440}
          priority
          className="h-auto w-[96px] select-none sm:w-[120px]"
          draggable={false}
        />
      </div>
    </div>
  );
}
