"use client"; // Behövs för Next.js — säger att detta är en klient-komponent

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  type ReactNode,
} from "react";
import type { Theme } from "../themes/contract";
import { lightTheme } from "../themes/light";
import { darkTheme } from "../themes/dark";

// Typen för vad context innehåller
interface ThemeContextValue {
  theme: Theme;
  mode: "light" | "dark";
  toggle: () => void;
  setMode: (mode: "light" | "dark") => void;
}

// Skapa context (en "global variabel" i React)
const ThemeContext = createContext<ThemeContextValue | null>(null);

// Providern — wrappa din app med denna
export function ThemeProvider({
  children,
  defaultMode = "dark",
}: {
  children: ReactNode;
  defaultMode?: "light" | "dark";
}) {
  const [mode, setMode] = useState<"light" | "dark">(defaultMode);
  const theme = mode === "light" ? lightTheme : darkTheme;
  const toggle = useCallback(
    () => setMode((m) => (m === "light" ? "dark" : "light")),
    [],
  );

  const value = useMemo(() => ({ theme, mode, toggle, setMode }), [theme, mode, toggle]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

// Hooken — använd i vilken komponent som helst
export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme måste användas inom en <ThemeProvider>");
  }
  return context;
}
