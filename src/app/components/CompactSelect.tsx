"use client";

import { useEffect, useId, useRef, useState } from "react";

export type CompactOption<T extends string> = {
  value: T;
  label: string;
  hint?: string;
};

type Props<T extends string> = {
  value: T;
  options: CompactOption<T>[];
  onChange: (value: T) => void;
  ariaLabel: string;
  /** Short prefix shown on the trigger (e.g. “Ülke”). */
  prefix?: string;
};

/** Language-switcher-style compact dropdown. */
export function CompactSelect<T extends string>({
  value,
  options,
  onChange,
  ariaLabel,
  prefix,
}: Props<T>) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const holdCloseTimer = useRef<number | null>(null);
  const listId = useId();
  const current =
    options.find((o) => o.value === value) ?? options[0] ?? null;

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onCloseMenus = () => setOpen(false);
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    window.addEventListener("dragon:close-menus", onCloseMenus);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("dragon:close-menus", onCloseMenus);
      if (holdCloseTimer.current != null) {
        window.clearTimeout(holdCloseTimer.current);
        holdCloseTimer.current = null;
      }
    };
  }, [open]);

  const clearHoldClose = () => {
    if (holdCloseTimer.current != null) {
      window.clearTimeout(holdCloseTimer.current);
      holdCloseTimer.current = null;
    }
  };

  const startHoldClose = () => {
    clearHoldClose();
    // Basılı tutunca açık menüyü kapat (kayıt/context menüsü + header menüleri)
    holdCloseTimer.current = window.setTimeout(() => {
      holdCloseTimer.current = null;
      setOpen(false);
    }, 380);
  };

  if (!current) return null;

  return (
    <div ref={rootRef} className={`relative ${open ? "z-[110]" : "z-20"}`}>
      <button
        type="button"
        aria-label={ariaLabel}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onPointerDown={startHoldClose}
        onPointerUp={clearHoldClose}
        onPointerCancel={clearHoldClose}
        onPointerLeave={clearHoldClose}
        onClick={() => setOpen((v) => !v)}
        className="flex max-w-[220px] items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-[11px] text-white/70 transition hover:bg-white/[0.06] hover:text-white"
      >
        {prefix ? (
          <span className="mono shrink-0 tracking-wider text-white/35 uppercase">
            {prefix}
          </span>
        ) : null}
        <span className="truncate">{current.label}</span>
        <span className="shrink-0 text-white/35" aria-hidden>
          ▾
        </span>
      </button>

      {open ? (
        <ul
          id={listId}
          role="listbox"
          aria-label={ariaLabel}
          className="absolute left-0 z-[120] mt-2 min-w-[168px] overflow-hidden rounded-xl border border-white/10 bg-[#0E0E10] py-1 shadow-[0_12px_40px_rgba(0,0,0,0.55)]"
        >
          {options.map((item) => {
            const selected = item.value === value;
            return (
              <li key={item.value} role="option" aria-selected={selected}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(item.value);
                    setOpen(false);
                  }}
                  className={`flex w-full flex-col items-start gap-0.5 px-3 py-2 text-left transition ${
                    selected
                      ? "bg-white/[0.08] text-white"
                      : "text-white/65 hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  <span className="text-[12px]">{item.label}</span>
                  {item.hint ? (
                    <span className="text-[10px] leading-snug text-white/35">
                      {item.hint}
                    </span>
                  ) : null}
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
