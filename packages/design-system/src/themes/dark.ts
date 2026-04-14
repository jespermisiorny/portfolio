import type { Theme } from "./contract";

export const darkTheme: Theme = {
  color: {
    surface: {
      bg: "#111110",
      card: "#1A1A18",
      subtle: "#222220",
      accent: "#2C2C28",
      elevated: "#2A2A27",
    },
    text: {
      primary: "#EDEDEB",
      secondary: "#A0A09A",
      tertiary: "#6E6E68",
      inverse: "#111110",
      link: "#7BC474",
    },
    brand: {
      primary: "#7BC474",
      hover: "#93D48D",
      active: "#5FA858",
      muted: "#1A2E18",
      bright: "#7BC474",
    },
    semantic: {
      success: "#7BC474",
      warning: "#E0A84C",
      error: "#E86464",
      info: "#64A8D8",
    },
    border: {
      subtle: "#2C2C28",
      default: "#333330",
      strong: "#555550",
    },
  },
  shadow: {
    sm: "0 1px 2px rgba(0,0,0,0.2)",
    md: "0 4px 12px rgba(0,0,0,0.3)",
    lg: "0 12px 32px rgba(0,0,0,0.4)",
    focus: "0 0 0 3px rgba(123,196,116,0.3)",
  },
};
