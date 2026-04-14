"use client";

import { useState, type ButtonHTMLAttributes, type ReactNode } from "react";
import { useTheme } from "../../provider/ThemeProvider";
import { spacing } from "../../tokens/spacing";
import { typography } from "../../tokens/typography";
import { radii } from "../../tokens/radii";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
}

const sizeStyles = {
  sm: {
    padding: `6px ${spacing.md}`,
    fontSize: typography.fontSize.sm,
    height: "32px",
  },
  md: {
    padding: `${spacing.sm} ${spacing.lg}`,
    fontSize: typography.fontSize.md,
    height: "40px",
  },
  lg: {
    padding: `${spacing.md} ${spacing.xl}`,
    fontSize: typography.fontSize.lg,
    height: "48px",
  },
};

export function Button({
  variant = "solid",
  size = "md",
  disabled,
  children,
  style,
  ...rest
}: ButtonProps) {
  const { theme } = useTheme();
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

  const getVariantStyles = () => {
    if (disabled) {
      return {
        background: theme.color.surface.accent,
        color: theme.color.text.tertiary,
        border: "2px solid transparent",
      };
    }

    switch (variant) {
      case "solid":
        return {
          background: pressed
            ? theme.color.brand.active
            : hovered
              ? theme.color.brand.hover
              : theme.color.brand.primary,
          color: "#FFFFFF",
          border: "2px solid transparent",
        };
      case "outline":
        return {
          background: hovered ? theme.color.brand.muted : "transparent",
          color: theme.color.brand.primary,
          border: `2px solid ${theme.color.brand.primary}`,
        };
      case "ghost":
        return {
          background: hovered ? theme.color.surface.subtle : "transparent",
          color: theme.color.brand.primary,
          border: "2px solid transparent",
        };
    }
  };

  return (
    <button
      {...rest}
      disabled={disabled}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setPressed(false);
      }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      style={{
        ...sizeStyles[size],
        ...getVariantStyles(),
        fontFamily: typography.fontFamily.body,
        fontWeight: typography.fontWeight.semibold,
        borderRadius: radii.md,
        cursor: disabled ? "not-allowed" : "pointer",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: spacing.sm,
        transition: "all 0.15s ease",
        outline: "none",
        opacity: disabled ? 0.5 : 1,
        letterSpacing: "0.01em",
        whiteSpace: "nowrap",
        ...style,
      }}
    >
      {children}
    </button>
  );
}
