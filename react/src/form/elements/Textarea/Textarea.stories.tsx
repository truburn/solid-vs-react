import type { Meta, StoryObj } from "@storybook/react";
import { Textarea as TextareaComponent } from "./Textarea";

const meta: Meta<typeof TextareaComponent> = {
  title: "FormElements/Textarea",
  component: TextareaComponent,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Textarea: Story = {};
