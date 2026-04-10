"use client";

import { useSyncExternalStore } from "react";

type Theme = "light" | "dark";

const THEME_STORAGE_KEY = "tuskq-theme";
const themeChangedEvent = "tuskq-theme-change";

function readThemeFromDom(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function readThemeSnapshot(): Theme {
  if (typeof document === "undefined") {
    return "light";
  }

  return readThemeFromDom();
}

function subscribeThemeChange(onStoreChange: () => void) {
  if (typeof window === "undefined") {
    return () => undefined;
  }

  const handler = () => {
    onStoreChange();
  };

  window.addEventListener(themeChangedEvent, handler);
  window.addEventListener("storage", handler);

  return () => {
    window.removeEventListener(themeChangedEvent, handler);
    window.removeEventListener("storage", handler);
  };
}

function writeTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  window.dispatchEvent(new Event(themeChangedEvent));
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribeThemeChange, readThemeSnapshot, () => "light");
  const nextTheme: Theme = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={() => {
        writeTheme(nextTheme);
      }}
      className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-current/30 bg-transparent text-current transition-colors hover:bg-current/10"
      aria-label={`Switch to ${nextTheme} mode`}
      aria-pressed={theme === "dark"}
      title={`Switch to ${nextTheme} mode`}
    >
      {theme === "dark" ? (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-none stroke-current stroke-2">
          <path d="M12 3v2" />
          <path d="M12 19v2" />
          <path d="M4.93 4.93l1.41 1.41" />
          <path d="M17.66 17.66l1.41 1.41" />
          <path d="M3 12h2" />
          <path d="M19 12h2" />
          <path d="M4.93 19.07l1.41-1.41" />
          <path d="M17.66 6.34l1.41-1.41" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-none stroke-current stroke-2">
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
        </svg>
      )}
    </button>
  );
}
