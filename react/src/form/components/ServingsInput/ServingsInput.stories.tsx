import type { Meta, StoryObj } from "@storybook/react";
import { ServingsInput as ServingsInputComponent } from "./ServingsInput";

const meta: Meta<typeof ServingsInputComponent> = {
  component: ServingsInputComponent,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ServingsInput: Story = {};
