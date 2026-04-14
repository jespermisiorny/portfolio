import type { Theme } from "./contract";

export const darkTheme: Theme = {
  color: {
    surface: {
      bg: "#163300",
      card: "#1E4400",
      subtle: "#1A3B00",
      accent: "#265500",
      elevated: "#1E4400",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#C1E6A8",
      tertiary: "#8BAF76",
      inverse: "#163300",
      link: "#9FE870",
    },
    brand: {
      primary: "#9FE870",
      hover: "#B2F08A",
      active: "#8BD85E",
      muted: "#1A3B00",
      bright: "#9FE870",
    },
    semantic: {
      success: "#9FE870",
      warning: "#FFCB6B",
      error: "#F97583",
      info: "#64A8D8",
    },
    border: {
      subtle: "#1E4400",
      default: "#2D6600",
      strong: "#4A8C2A",
    },
  },
  shadow: {
    sm: "0 1px 2px rgba(0,0,0,0.2)",
    md: "0 4px 12px rgba(0,0,0,0.3)",
    lg: "0 12px 32px rgba(0,0,0,0.4)",
    focus: "0 0 0 3px rgba(159,232,112,0.3)",
  },
};
