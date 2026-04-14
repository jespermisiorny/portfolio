"use client";

import { useState, type HTMLAttributes } from "react";
import { useTheme } from "../../provider/ThemeProvider";
import { radii } from "../../tokens/radii";
import { spacing } from "../../tokens/spacing";

export interface ThemeToggleProps
  extends Omit<HTMLAttributes<HTMLButtonElement>, "children"> {
  /** Visa en textlabel bredvid switchen */
  showLabel?: boolean;
}

function SunIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <line x1="12" y1="2" x2="12" y2="6" />
      <line x1="12" y1="18" x2="12" y2="22" />
      <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
      <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
      <line x1="2" y1="12" x2="6" y2="12" />
      <line x1="18" y1="12" x2="22" y2="12" />
      <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
      <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

const TRACK_WIDTH = 52;
const TRACK_HEIGHT = 28;
const THUMB_SIZE = 20;
const THUMB_OFFSET = 4;

export function ThemeToggle({ showLabel = false, style, ...rest }: ThemeToggleProps) {
  const { mode, toggle, theme } = useTheme();
  const [focused, setFocused] = useState(false);
  const isDark = mode === "dark";

  const thumbX = isDark
    ? TRACK_WIDTH - THUMB_SIZE - THUMB_OFFSET
    : THUMB_OFFSET;

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: spacing.sm,
      }}
    >
      <button
        {...rest}
        role="switch"
        aria-checked={isDark}
        aria-label={isDark ? "Byt till ljust läge" : "Byt till mörkt läge"}
        onClick={toggle}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
          width: `${TRACK_WIDTH}px`,
          height: `${TRACK_HEIGHT}px`,
          borderRadius: radii.full,
          border: `1px solid ${theme.color.border.default}`,
          background: isDark
            ? theme.color.brand.primary
            : theme.color.surface.accent,
          cursor: "pointer",
          padding: 0,
          outline: "none",
          boxShadow: focused ? theme.shadow.focus : "none",
          transition: "background 0.25s ease, box-shadow 0.15s ease",
          flexShrink: 0,
          ...style,
        }}
      >
        {/* Ikoner i spåret */}
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            left: `${THUMB_OFFSET + 3}px`,
            display: "flex",
            alignItems: "center",
            color: isDark ? theme.color.brand.active : theme.color.text.tertiary,
            opacity: isDark ? 1 : 0,
            transition: "opacity 0.2s ease",
          }}
        >
          <MoonIcon />
        </span>
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            right: `${THUMB_OFFSET + 3}px`,
            display: "flex",
            alignItems: "center",
            color: theme.color.text.tertiary,
            opacity: isDark ? 0 : 1,
            transition: "opacity 0.2s ease",
          }}
        >
          <SunIcon />
        </span>

        {/* Tumme */}
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            top: `${THUMB_OFFSET - 1}px`,
            left: `${thumbX}px`,
            width: `${THUMB_SIZE}px`,
            height: `${THUMB_SIZE}px`,
            borderRadius: radii.full,
            background: theme.color.surface.elevated,
            boxShadow: theme.shadow.md,
            transition: "left 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
      </button>

      {showLabel && (
        <span
          style={{
            fontSize: "14px",
            color: theme.color.text.secondary,
            userSelect: "none",
          }}
        >
          {isDark ? "Mörkt" : "Ljust"}
        </span>
      )}
    </div>
  );
}
