import type { Theme } from "./contract";

export const lightTheme: Theme = {
  color: {
    surface: {
      bg: "#FFFFFF",
      card: "#FFFFFF",
      subtle: "#F2F0EB",
      accent: "#E8E5DF",
      elevated: "#FFFFFF",
    },
    text: {
      primary: "#163300",
      secondary: "#454D42",
      tertiary: "#6B7269",
      inverse: "#FFFFFF",
      link: "#2E7D0F",
    },
    brand: {
      primary: "#9FE870",
      hover: "#8BD85E",
      active: "#76C84C",
      muted: "#E6F9D8",
      bright: "#9FE870",
    },
    semantic: {
      success: "#2E7D0F",
      warning: "#A66D1F",
      error: "#B83232",
      info: "#2B5E8C",
    },
    border: {
      subtle: "#E8E5DF",
      default: "#D4D2CD",
      strong: "#6B7269",
    },
  },
  shadow: {
    sm: "0 1px 2px rgba(22,51,0,0.05)",
    md: "0 4px 12px rgba(22,51,0,0.08)",
    lg: "0 12px 32px rgba(22,51,0,0.12)",
    focus: "0 0 0 3px rgba(159,232,112,0.3)",
  },
};
