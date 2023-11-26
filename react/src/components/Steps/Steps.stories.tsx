import type { Meta, StoryObj } from "@storybook/react";
import { Steps as StepsComponent } from "./Steps";

const meta: Meta<typeof StepsComponent> = {
  component: StepsComponent,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Steps: Story = {};
