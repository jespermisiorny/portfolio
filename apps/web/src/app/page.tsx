"use client";

import { ThemeProvider, Button, useTheme } from "@portfolio/design-system";

function Home() {
  const { theme, toggle, mode } = useTheme();

  return (
    <div
      style={{
        background: theme.color.surface.bg,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "16px",
        transition: "background 0.3s ease",
      }}
    >
      <h1
        style={{
          fontFamily: "'Instrument Serif', serif",
          color: theme.color.text.primary,
          fontSize: "3rem",
        }}
      >
        Det fungerar!
      </h1>
      <p
        style={{
          color: theme.color.text.secondary,
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        Designsystemet är anslutet. Tema: {mode}
      </p>
      <div style={{ display: "flex", gap: "12px" }}>
        <Button variant="solid" onClick={toggle}>
          Byt till {mode === "dark" ? "light" : "dark"}
        </Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <ThemeProvider defaultMode="dark">
      <Home />
    </ThemeProvider>
  );
}
