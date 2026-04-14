import type { Theme } from "./contract";

export const lightTheme: Theme = {
  color: {
    surface: {
      bg: "#FFFFFF",
      card: "#FFFFFF",
      subtle: "#F7F7F5",
      accent: "#F0F0EC",
      elevated: "#FFFFFF",
    },
    text: {
      primary: "#1A1A1A",
      secondary: "#555555",
      tertiary: "#888888",
      inverse: "#FFFFFF",
      link: "#1D6B0A",
    },
    brand: {
      primary: "#9FE870",
      hover: "#8BD85E",
      active: "#76C84C",
      muted: "#EBF7E3",
      bright: "#9FE870",
    },
    semantic: {
      success: "#1D6B0A",
      warning: "#A66D1F",
      error: "#B83232",
      info: "#2B5E8C",
    },
    border: {
      subtle: "#F0F0EC",
      default: "#E0E0DB",
      strong: "#888888",
    },
  },
  shadow: {
    sm: "0 1px 2px rgba(0,0,0,0.05)",
    md: "0 4px 12px rgba(0,0,0,0.08)",
    lg: "0 12px 32px rgba(0,0,0,0.12)",
    focus: "0 0 0 3px rgba(159,232,112,0.3)",
  },
};
