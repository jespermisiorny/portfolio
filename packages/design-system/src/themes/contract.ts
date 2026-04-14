// Detta är "kontraktet". Alla teman måste ha exakt dessa nycklar.
// Värdena här är bara platshållare — de faktiska färgerna
// definieras i light.ts och dark.ts.

export interface ThemeColors {
  surface: {
    bg: string;
    card: string;
    subtle: string;
    accent: string;
    elevated: string;
  };
  text: {
    primary: string;
    secondary: string;
    tertiary: string;
    inverse: string;
    link: string;
  };
  brand: {
    primary: string;
    hover: string;
    active: string;
    muted: string;
    bright: string;
  };
  semantic: {
    success: string;
    warning: string;
    error: string;
    info: string;
  };
  border: {
    subtle: string;
    default: string;
    strong: string;
  };
}

export interface ThemeShadows {
  sm: string;
  md: string;
  lg: string;
  focus: string;
}

export interface Theme {
  color: ThemeColors;
  shadow: ThemeShadows;
}
