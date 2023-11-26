import type { Meta, StoryObj } from "@storybook/react";
import { Summary as SummaryComponent } from "./Summary";

const meta: Meta<typeof SummaryComponent> = {
  component: SummaryComponent,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Summary: Story = {};
