import type { Preview } from "@storybook/react";
import React from "react";
import { ThemeProvider } from "../src/provider/ThemeProvider";

const preview: Preview = {
  decorators: [
    (Story, context) => {
      const mode = context.globals.theme || "light";

      return React.createElement(
        ThemeProvider,
        // @ts-ignore Storybook decorator typing
        { defaultMode: mode },
        React.createElement(Story),
      );
    },
  ],
  globalTypes: {
    theme: {
      description: "Tema",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: [
          { value: "light", title: "Light" },
          { value: "dark", title: "Dark" },
        ],
        dynamicTitle: true,
      },
    },
  },
};

export default preview;
