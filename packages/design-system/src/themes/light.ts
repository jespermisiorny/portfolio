import type { Theme } from "./contract";

export const lightTheme: Theme = {
  color: {
    surface: {
      bg: "#FAFAF9",
      card: "#FFFFFF",
      subtle: "#F5F5F0",
      accent: "#EBEBDE",
      elevated: "#FFFFFF",
    },
    text: {
      primary: "#1A1A18",
      secondary: "#5C5C56",
      tertiary: "#8A8A82",
      inverse: "#FAFAF9",
      link: "#2D5A27",
    },
    brand: {
      primary: "#2D5A27",
      hover: "#3A7132",
      active: "#1F4019",
      muted: "#E8F0E6",
      bright: "#4A9440",
    },
    semantic: {
      success: "#2D5A27",
      warning: "#A66D1F",
      error: "#B83232",
      info: "#2B5E8C",
    },
    border: {
      subtle: "#EBEBDE",
      default: "#D8D8CE",
      strong: "#8A8A82",
    },
  },
  shadow: {
    sm: "0 1px 2px rgba(26,26,24,0.06)",
    md: "0 4px 12px rgba(26,26,24,0.08)",
    lg: "0 12px 32px rgba(26,26,24,0.12)",
    focus: "0 0 0 3px rgba(45,90,39,0.24)",
  },
};
