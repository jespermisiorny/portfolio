import type { Theme } from "./contract";

export const darkTheme: Theme = {
  color: {
    surface: {
      bg: "#0F0F0F",
      card: "#1A1A1A",
      subtle: "#161616",
      accent: "#222222",
      elevated: "#1E1E1E",
    },
    text: {
      primary: "#F0F0F0",
      secondary: "#A0A0A0",
      tertiary: "#6A6A6A",
      inverse: "#0F0F0F",
      link: "#9FE870",
    },
    brand: {
      primary: "#9FE870",
      hover: "#B2F08A",
      active: "#8BD85E",
      muted: "#1A2A14",
      bright: "#9FE870",
    },
    semantic: {
      success: "#9FE870",
      warning: "#FFCB6B",
      error: "#F97583",
      info: "#64A8D8",
    },
    border: {
      subtle: "#222222",
      default: "#333333",
      strong: "#555555",
    },
  },
  shadow: {
    sm: "0 1px 2px rgba(0,0,0,0.3)",
    md: "0 4px 12px rgba(0,0,0,0.4)",
    lg: "0 12px 32px rgba(0,0,0,0.5)",
    focus: "0 0 0 3px rgba(159,232,112,0.3)",
  },
};
