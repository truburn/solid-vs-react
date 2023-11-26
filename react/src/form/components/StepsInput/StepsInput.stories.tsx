import type { Meta, StoryObj } from "@storybook/react";
import { StepsInput as StepsInputComponent } from "./StepsInput";

const meta: Meta<typeof StepsInputComponent> = {
  component: StepsInputComponent,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const StepsInput: Story = {};
