import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  argTypes: {
    padding: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    padding: "md",
    children: "Ett enkelt kort med standardpadding.",
  },
};

export const SmallPadding: Story = {
  args: {
    padding: "sm",
    children: "Kort med liten padding (sm).",
  },
};

export const LargePadding: Story = {
  args: {
    padding: "lg",
    children: "Kort med stor padding (lg).",
  },
};

export const WithContent: Story = {
  args: {
    padding: "md",
    children: (
      <div>
        <h3 style={{ margin: "0 0 8px" }}>Korttitel</h3>
        <p style={{ margin: 0, opacity: 0.7 }}>
          Det här är lite beskrivande text inuti ett kort. Hovra för att se
          shadow-effekten.
        </p>
      </div>
    ),
  },
};

export const AllPaddingVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "flex-start" }}>
      <Card padding="sm">
        <strong>sm</strong>
        <p style={{ margin: "4px 0 0" }}>Liten padding</p>
      </Card>
      <Card padding="md">
        <strong>md</strong>
        <p style={{ margin: "4px 0 0" }}>Mellanstor padding</p>
      </Card>
      <Card padding="lg">
        <strong>lg</strong>
        <p style={{ margin: "4px 0 0" }}>Stor padding</p>
      </Card>
    </div>
  ),
};
