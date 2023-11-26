import type { Meta, StoryObj } from "@storybook/react";
import { Button as ButtonComponent } from "./Button";

const meta: Meta<typeof ButtonComponent> = {
  component: ButtonComponent,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Button: Story = {};
