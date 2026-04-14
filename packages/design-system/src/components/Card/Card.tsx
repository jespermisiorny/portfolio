"use client";

import { useState, type HTMLAttributes, type ReactNode } from "react";
import { useTheme } from "../../provider/ThemeProvider";
import { spacing } from "../../tokens/spacing";
import { radii } from "../../tokens/radii";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  padding?: "sm" | "md" | "lg";
  children: ReactNode;
}

const paddingStyles = {
  sm: spacing.md,
  md: spacing.lg,
  lg: spacing["2xl"],
};

export function Card({
  padding = "md",
  children,
  style,
  ...rest
}: CardProps) {
  const { theme } = useTheme();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      {...rest}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: paddingStyles[padding],
        backgroundColor: theme.color.surface.card,
        border: `1px solid ${theme.color.border.subtle}`,
        borderRadius: radii.lg,
        boxShadow: hovered ? theme.shadow.md : theme.shadow.sm,
        transition: "box-shadow 0.2s ease, transform 0.2s ease",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
