"use client";

import { useEffect } from "react";

/**
 * Mobile Safari/Chrome often restore scroll or anchor past the header so the
 * first paint shows the hero. Force document top on every load/pageshow.
 */
export function ForceScrollTop() {
  useEffect(() => {
    const toTop = () => {
      try {
        history.scrollRestoration = "manual";
      } catch {
        /* ignore */
      }
      if (window.location.hash) {
        history.replaceState(
          null,
          "",
          window.location.pathname + window.location.search,
        );
      }
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      // iOS Safari visual viewport can offset layout while chrome is still at y=0
      if (window.visualViewport && window.visualViewport.offsetTop > 0) {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
      }
    };

    toTop();
    const raf = requestAnimationFrame(() => {
      toTop();
      requestAnimationFrame(toTop);
    });
    const t1 = window.setTimeout(toTop, 0);
    const t2 = window.setTimeout(toTop, 50);
    const t3 = window.setTimeout(toTop, 250);
    const t4 = window.setTimeout(toTop, 600);

    const onShow = () => {
      toTop();
    };

    window.addEventListener("pageshow", onShow);
    window.addEventListener("load", toTop);
    window.addEventListener("orientationchange", toTop);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
      window.clearTimeout(t4);
      window.removeEventListener("pageshow", onShow);
      window.removeEventListener("load", toTop);
      window.removeEventListener("orientationchange", toTop);
    };
  }, []);

  return null;
}
