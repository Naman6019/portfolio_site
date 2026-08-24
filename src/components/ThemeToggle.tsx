"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

const themeChangeEvent = "portfolio-theme-change";

function subscribe(onStoreChange: () => void) {
  window.addEventListener(themeChangeEvent, onStoreChange);
  return () => window.removeEventListener(themeChangeEvent, onStoreChange);
}

function getSnapshot() {
  return document.documentElement.classList.contains("light");
}

function getServerSnapshot() {
  return false;
}

export default function ThemeToggle() {
  const isLight = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function toggle() {
    const nextLight = !document.documentElement.classList.contains("light");
    if (nextLight) {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    window.dispatchEvent(new Event(themeChangeEvent));
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle terminal theme"
      title={isLight ? "Switch to Dark Reaper Mode" : "Switch to Light Mode"}
      className="group relative flex h-11 items-center gap-2 rounded border border-border bg-surface px-2.5 font-mono text-xs text-foreground-muted transition-all hover:border-cyan-primary/50 hover:bg-surface-hover hover:text-foreground active:scale-95"
    >
      {isLight ? (
        <>
          <Sun className="h-3.5 w-3.5 text-amber-primary transition-transform group-hover:rotate-45" />
          <span className="hidden sm:inline text-[11px] uppercase tracking-wider text-amber-primary font-semibold">
            LIGHT
          </span>
        </>
      ) : (
        <>
          <Moon className="h-3.5 w-3.5 text-cyan-primary transition-transform group-hover:-rotate-12" />
          <span className="hidden sm:inline text-[11px] uppercase tracking-wider text-cyan-primary font-semibold">
            DARK
          </span>
        </>
      )}
    </button>
  );
}
