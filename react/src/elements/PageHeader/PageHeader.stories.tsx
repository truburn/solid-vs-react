import type { Meta, StoryObj } from "@storybook/react";
import { PageHeader as PageHeaderComponent } from "./PageHeader";

const meta: Meta<typeof PageHeaderComponent> = {
  component: PageHeaderComponent,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const PageHeader: Story = {};
