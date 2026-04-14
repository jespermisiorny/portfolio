import type { Meta, StoryObj } from "@storybook/react";
import { ThemeToggle } from "./ThemeToggle";
import { ThemeProvider } from "../../provider/ThemeProvider";

const meta: Meta<typeof ThemeToggle> = {
  title: "Components/ThemeToggle",
  component: ThemeToggle,
  decorators: [
    (Story, context) => (
      <ThemeProvider defaultMode={context.globals?.["backgrounds"]?.value === "#111110" ? "dark" : "light"}>
        <div style={{ padding: "24px" }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  argTypes: {
    showLabel: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof ThemeToggle>;

export const Default: Story = {
  args: { showLabel: false },
};

export const WithLabel: Story = {
  args: { showLabel: true },
};

export const InLightMode: Story = {
  decorators: [
    (Story) => (
      <ThemeProvider defaultMode="light">
        <div style={{ padding: "24px" }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  args: { showLabel: true },
};

export const InDarkMode: Story = {
  decorators: [
    (Story) => (
      <ThemeProvider defaultMode="dark">
        <div style={{ padding: "24px", background: "#111110" }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  args: { showLabel: true },
};

export const BothModes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "32px", flexWrap: "wrap" }}>
      <ThemeProvider defaultMode="light">
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <span style={{ fontSize: "12px", opacity: 0.6 }}>Startar i ljust läge</span>
          <ThemeToggle showLabel />
        </div>
      </ThemeProvider>
      <ThemeProvider defaultMode="dark">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            background: "#111110",
            padding: "12px",
            borderRadius: "8px",
          }}
        >
          <span style={{ fontSize: "12px", opacity: 0.6, color: "#fff" }}>
            Startar i mörkt läge
          </span>
          <ThemeToggle showLabel />
        </div>
      </ThemeProvider>
    </div>
  ),
};
