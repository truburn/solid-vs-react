import type { Meta, StoryObj } from "@storybook/react";
import { Info as InfoComponent } from "./Info";

const meta: Meta<typeof InfoComponent> = {
  component: InfoComponent,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Info: Story = {};
