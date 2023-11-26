import type { Meta, StoryObj } from "@storybook/react";
import { SectionHeader as SectionHeaderComponent } from "./SectionHeader";

const meta: Meta<typeof SectionHeaderComponent> = {
  component: SectionHeaderComponent,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const SectionHeader: Story = {};
