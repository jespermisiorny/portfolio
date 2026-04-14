# Portfolio Monorepo

## Struktur

- `apps/web` — Next.js 15 sajt med App Router
- `packages/design-system` — React komponentbibliotek med TypeScript

## Kommandon

- `pnpm turbo dev` — starta allt i utvecklingsläge
- `pnpm turbo build` — bygg allt
- `pnpm turbo storybook` — starta Storybook på port 6006

## Design System

- Alla komponenter i `packages/design-system/src/components/`
- Varje komponent har sin egen mapp med: Component.tsx, index.ts, Component.stories.tsx
- Alla komponenter använder `useTheme()` för att läsa tokens
- Tokens i `packages/design-system/src/tokens/`
- Teman i `packages/design-system/src/themes/` — följer Theme-interfacet i contract.ts
- Public API exporteras via `packages/design-system/src/index.ts`

## Regler

- Inga externa UI-bibliotek (vi bygger allt själva)
- Alla färger via theme tokens, aldrig hardkodade hex-värden
- Alla komponenter måste stödja dark mode via ThemeProvider
- TypeScript strict mode
- Varje ny komponent behöver en .stories.tsx-fil
