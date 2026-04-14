import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "select",
      options: ["solid", "outline", "ghost"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Solid: Story = {
  args: { variant: "solid", children: "Solid Button" },
};

export const Outline: Story = {
  args: { variant: "outline", children: "Outline Button" },
};

export const Ghost: Story = {
  args: { variant: "ghost", children: "Ghost Button" },
};

export const Small: Story = {
  args: { variant: "solid", size: "sm", children: "Small" },
};

export const Large: Story = {
  args: { variant: "solid", size: "lg", children: "Large" },
};

export const Disabled: Story = {
  args: { variant: "solid", disabled: true, children: "Disabled" },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
      <Button variant="solid">Solid</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="solid" disabled>
        Disabled
      </Button>
    </div>
  ),
};
