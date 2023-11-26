import type { Meta, StoryObj } from "@storybook/react";
import { DateTime as DateTimeComponent } from "./DateTime";

const meta: Meta<typeof DateTimeComponent> = {
  component: DateTimeComponent,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DateTime: Story = {};
