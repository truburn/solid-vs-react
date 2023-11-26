import type { Meta, StoryObj } from "@storybook/react";
import { Scrollbar as ScrollbarComponent } from "./Scrollbar";

const meta: Meta<typeof ScrollbarComponent> = {
  component: ScrollbarComponent,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Scrollbar: Story = {};
